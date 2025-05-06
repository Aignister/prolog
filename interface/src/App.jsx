import { useState, useEffect } from 'react';
import HistorialClinico from '../components/historialClinico';
import ReporteClinico from '../components/reporteClinico';

function App() {
  // Estado para almacenar datos del paciente
  const [pacienteData, setPacienteData] = useState({
    nombre: '',
    apellidos: '',
    sexo: '',
    fechaNacimiento: '',
    edad: '',
    peso: '',
    estatura: '',
    telefono: '',
    email: '',
    direccion: '',
    antecedentesPatologicos: '',
    antecedentesPersonales: '',
    antecedentesFamiliares: ''
  });

  // Estado para almacenar los sintomas seleccionados
  const [sintomasSeleccionados, setSintomasSeleccionados] = useState([]);
  
  // Estado para las enfermedades diagnosticadas
  const [diagnosticos, setDiagnosticos] = useState([]);

  // Estado para controlar si se ha enviado una consulta
  const [consultaEnviada, setConsultaEnviada] = useState(false);

  // Lista de sintomas disponibles 
  const [listaSintomas, setListaSintomas] = useState([]);
  
  // Estado para manejar errores de carga
  const [error, setError] = useState(null);
  
  // Estado para indicar carga en curso
  const [cargando, setCargando] = useState(true);

  // Cargar sintomas desde el backend
  useEffect(() => {
    const cargarSintomas = async () => {
      try {
        setCargando(true);
        const response = await fetch('http://localhost:3000/api/sintomas');
        
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        setListaSintomas(data);
        setError(null);
      } catch (error) {
        console.error('Error al cargar síntomas:', error);
        setError('No se pudieron cargar los síntomas del servidor');
        // Cargar datos de respaldo en caso de error
        setListaSintomas([
          { id: 1, nombre: 'Fiebre', categoria: 'General' },
          { id: 2, nombre: 'Dolor de cabeza', categoria: 'Neurologico' },
          { id: 3, nombre: 'Tos', categoria: 'Respiratorio' },
          { id: 4, nombre: 'Dolor de garganta', categoria: 'Respiratorio' },
          { id: 5, nombre: 'Fatiga', categoria: 'General' }
        ]);
      } finally {
        setCargando(false);
      }
    };

    cargarSintomas();
  }, []);

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPacienteData({
      ...pacienteData,
      [name]: value
    });
  };

  // Manejar seleccion de sintomas
  const handleSintomaChange = (sintomaId) => {
    setSintomasSeleccionados(prev => {
      if (prev.includes(sintomaId)) {
        return prev.filter(id => id !== sintomaId);
      } else {
        return [...prev, sintomaId];
      }
    });
  };

  // Calcular la edad a partir de la fecha de nacimiento
  useEffect(() => {
    if (pacienteData.fechaNacimiento) {
      const fechaNac = new Date(pacienteData.fechaNacimiento);
      const hoy = new Date();
      let edad = hoy.getFullYear() - fechaNac.getFullYear();
      const m = hoy.getMonth() - fechaNac.getMonth();
      
      if (m < 0 || (m === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
      }
      
      setPacienteData(prev => ({
        ...prev,
        edad: edad.toString()
      }));
    }
  }, [pacienteData.fechaNacimiento]);

  // Enviar consulta
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setCargando(true);
      
      // Formateo de la fecha a postgres porque si no, no ja;a
      let fechaFormateada = pacienteData.fechaNacimiento;
      if (fechaFormateada) {
        // Formato de la fecha a postgres
        const fecha = new Date(fechaFormateada);
        fechaFormateada = fecha.toISOString().split('T')[0];
      }
      
      const datosAEnviar = {
        paciente: {
          ...pacienteData,
          fechaNacimiento: fechaFormateada,
          antecedentesPatologicos: pacienteData.antecedentesPatologicos 
        },
        sintomas: sintomasSeleccionados
      };

      const response = await fetch('http://localhost:3000/api/consulta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosAEnviar),
      });
      
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      setDiagnosticos(data.diagnosticos);
      setConsultaEnviada(true);
      setError(null);
    } catch (error) {
      console.error('Error al enviar consulta:', error);
      setError('Error al procesar la consulta medica');
      // En caso de error, mostrar diagnosticos de respaldo
      setDiagnosticos([
        { 
          enfermedad: 'Error de conexion', 
          porcentaje: 0, 
          posicion: 1, 
          descripcion: 'No se pudo conectar con el servidor de diagnostico.' 
        }
      ]);
      setConsultaEnviada(true);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">Sistema de Diagnostico Medico</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
          <p>{error}</p>
        </div>
      )}
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Panel izquierdo - Formulario de historial clinico */}
        <div className="w-full md:w-1/2">
          <HistorialClinico 
            pacienteData={pacienteData}
            handleInputChange={handleInputChange}
            listaSintomas={listaSintomas}
            sintomasSeleccionados={sintomasSeleccionados}
            handleSintomaChange={handleSintomaChange}
            handleSubmit={handleSubmit}
            consultaEnviada={consultaEnviada}
            cargando={cargando}
          />
        </div>
        
        {/* Panel derecho - Reporte clinico */}
        <div className="w-full md:w-1/2">
          <ReporteClinico 
            pacienteData={pacienteData}
            diagnosticos={diagnosticos}
            sintomasSeleccionados={sintomasSeleccionados}
            listaSintomas={listaSintomas}
            consultaEnviada={consultaEnviada}
            cargando={cargando}
          />
        </div>
      </div>
    </div>
  );
}

export default App;