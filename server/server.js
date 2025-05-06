const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Conexion a la base de datos
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// Verificacion de la conexion con la base de datos
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Error al conectarse con la base de datos:', err);
    } else {
      console.log('Conexion exitosa a la base de datos');
    }
});

// Rutas a utilizar de la API
// Obtencion de sintomas
app.get('/api/sintomas', async (req, res) => {
    try {
      const { rows } = await pool.query('SELECT * FROM sintomas ORDER BY categoria, nombre');
      res.json(rows);
    } catch (error) {
      console.error('Error al obtener los sintomas:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Registro de una nueva consulta y conesguir el diagnostico
app.post('/api/consulta', async (req, res) => {
    const client = await pool.connect();

    try {
        await client.query('BEGIN');
        const { paciente, sintomas } = req.body;

        // Insertar o actualziar al paciente
        let pacienteId;
        if (paciente.id) {
            // Actualizar un paciente existente
            const pacienteQuery = await client.query(
                `UPDATE pacientes SET
                nombre = $1, apellidos = $2, sexo = $3, fecha_nacimiento = $4,
                edad = $5, peso = $6, estatura = $7, telefono = $8,
                email = $9, direccion = $10 
                WHERE id = $11 RETURNING id`,
                [
                    paciente.nombre, paciente.apellidos, paciente.sexo,
                    paciente.fechaNacimiento, paciente.edad, paciente.peso,
                    paciente.estatura, paciente.telefono, paciente.email,
                    paciente.direccion, paciente.id
                ]
            );
            pacienteId = pacienteQuery.rows[0].id;
        } else {
            // Insertar un nuevo paciente
            const pacienteQuery = await client.query(
                `INSERT INTO pacientes 
                (nombre, apellidos, sexo, fecha_nacimiento, edad, peso, estatura, telefono, email, direccion)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id`,
                [
                    paciente.nombre, paciente.apellidos, paciente.sexo,
                    paciente.fechaNacimiento, paciente.edad, paciente.peso,
                    paciente.estatura, paciente.telefono, paciente.email,
                    paciente.direccion
                ]
            );
            pacienteId = pacienteQuery.rows[0].id;
        }

        // Registrar antecedente
        if (paciente.antecedentesPatologicos) {
            await client.query(
                `INSERT INTO antecedentes (paciente_id, tipo, descripcion)
                VALUES ($1, 'patologico', $2)`,
                [pacienteId, paciente.antecedentesPatologicos]
            );
        }

        if (paciente.antecedentesFamiliares) {
            await client.query(
                `INSERT INTO antecedentes (paciente_id, tipo, descripcion)
                VALUES ($1, 'familiar', $2)`,
                [pacienteId, paciente.antecedentesFamiliares]
            );
        }

        if (paciente.antecedentesPersonales) {
            await client.query(
                `INSERT INTO antecedentes (paciente_id, tipo, descripcion)
                VALUES ($1, 'personal', $2)`,
                [pacienteId, paciente.antecedentesPersonales]
            );
        }

        // Crear una nueva consulta
        const consultaQuery = await client.query(
            `INSERT INTO consultas (paciente_id)
            VALUES ($1) RETURNING id`,
            [pacienteId]
        );
        const consultaId = consultaQuery.rows[0].id;

        // Registrar sintomas reportados
        for (const sintomaId of sintomas) {
            await client.query(
                `INSERT INTO consulta_sintoma (consulta_id, sintoma_id)
                VALUES ($1, $2)`,
                [consultaId, sintomaId]
            );
        }

        // Analizar sintoams y generar el diagnostico
        const diagnosticoQuery = await client.query(
            `WITH sintomas_consulta AS (
                SELECT sintoma_id FROM consulta_sintoma WHERE consulta_id = $1
            ),
            enfermedad_matches AS (
                SELECT 
                    e.id as enfermedad_id,
                    e.nombre as enfermedad,
                    e.descripcion,
                    SUM(es.peso) as peso_total,
                    COUNT(sc.sintoma_id) as sintomas_coincidentes,
                    (SELECT COUNT(*) FROM enfermedad_sintoma WHERE enfermedad_id = e.id) as total_sintomas_enfermedad,
                    (SELECT COUNT(*) FROM sintomas_consulta) as total_sintomas_consulta
                FROM enfermedades e
                JOIN enfermedad_sintoma es ON e.id = es.enfermedad_id
                JOIN sintomas_consulta sc ON es.sintoma_id = sc.sintoma_id
                GROUP BY e.id, e.nombre, e.descripcion
            )
            SELECT 
                enfermedad_id,
                enfermedad,
                descripcion,
                (peso_total * sintomas_coincidentes / NULLIF(total_sintomas_enfermedad, 0) * 100) as porcentaje_coincidencia
            FROM enfermedad_matches
            ORDER BY porcentaje_coincidencia DESC
            LIMIT 3`,
            [consultaId]
        );
        // Guardar el diagnostico sugerido en la base de datos
        let posicion = 1;
        for (const diagnostico of diagnosticoQuery.rows) {
            await client.query(
                `INSERT INTO diagnosticos_sugeridos
                (consulta_id, enfermedad_id, porcentaje_coincidencia, posicion)
                VALUES ($1, $2, $3, $4)`,
                [consultaId, diagnostico.enfermedad_id, diagnostico.porcentaje_coincidencia, posicion]
            );
            posicion++;
        }

        await client.query('COMMIT');

        // Devolver los resultados
        res.json({
            consultaId,
            pacienteId,
            diagnosticos: diagnosticoQuery.rows.map(d => ({
                enfermedad: d.enfermedad,
                porcentaje: d.porcentaje_coincidencia,
                posicion: d.posicion,
                descripcion: d.descripcion
            }))
        });
    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Error al procesar la consulta:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } finally {
        client.release();
    }
});

app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto http://localhost:${port}`);
});