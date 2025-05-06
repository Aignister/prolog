-- Tabla de registro de pacients
CREATE TABLE pacientes (
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	apellidos VARCHAR(100) NOT NULL,
	sexo CHAR(1) NOT NULL,
	fecha_nacimiento DATE NOT NULL,
	edad INTEGER NOT NULL,
	peso DECIMAL(5, 2),
	estatura DECIMAL(5, 2),
	telefono VARCHAR(20),
	email VARCHAR(100),
	direccion TEXT,
	fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de antecedentes medicos
CREATE TABLE antecedentes (
	id SERIAL PRIMARY KEY,
	paciente_id INTEGER REFERENCES pacientes(id),
	tipo VARCHAR(50) NOT NULL,
	descripcion TEXT NOT NULL,
	fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de sintomas
CREATE TABLE sintomas (
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL UNIQUE,
	descripcion TEXT,
	categoria VARCHAR(50)
);

-- Tabla de enfermedades 
CREATE TABLE enfermedades (
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL UNIQUE,
	descripcion TEXT, 
	categoria VARCHAR(50),
	gravedad INTEGER
);

-- Tabla de relacion de enfermedades con los sintomas
CREATE TABLE enfermedad_sintoma (
	id SERIAL PRIMARY KEY,
	enfermedad_id INTEGER REFERENCES enfermedades(id),
	sintoma_id INTEGER REFERENCES sintomas(id),
	peso DECIMAL(3, 2) NOT NULL,
	UNIQUE (enfermedad_id, sintoma_id)
);

-- Tabla para la consulta
CREATE TABLE consultas (
	id SERIAL PRIMARY KEY,
	paciente_id INTEGER REFERENCES pacientes(id),
	fecha_consulta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	notas TEXT,
	diagnostico TEXT
);

-- Tabla para la consulta de sintomas
CREATE TABLE consulta_sintoma (
	id SERIAL PRIMARY KEY,
	consulta_id INTEGER REFERENCES consultas(id),
	sintoma_id INTEGER REFERENCES sintomas(id),
	intensidad INTEGER,
	UNIQUE(consulta_id, sintoma_id)
);

-- Tabla para realizar un diagnostico sugerido por parte del sistema
CREATE TABLE diagnosticos_sugeridos (
	id SERIAL PRIMARY KEY,
	consulta_id INTEGER REFERENCES consultas(id),
	enfermedad_id INTEGER REFERENCES enfermedades(id),
	porcentaje_coincidencia DECIMAL(5, 2) NOT NULL,
	posicion INTEGER NOT NULL,
	UNIQUE (consulta_id, enfermedad_id)
);