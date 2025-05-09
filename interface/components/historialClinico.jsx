import { useState } from 'react';

function HistorialClinico({ 
  pacienteData, 
  handleInputChange, 
  listaSintomas, 
  sintomasSeleccionados, 
  handleSintomaChange, 
  handleSubmit,
  consultaEnviada
}) {
  // Estado para mostrar diferentes secciones del formulario
  const [seccionActiva, setSeccionActiva] = useState('datosPersonales');

  // Agrupar sintomas por categoría
  const sintomasPorCategoria = listaSintomas.reduce((acc, sintoma) => {
    if (!acc[sintoma.categoria]) {
      acc[sintoma.categoria] = [];
    }
    acc[sintoma.categoria].push(sintoma);
    return acc;
  }, {});

    // Funcion para cambiar la seccion activa
    const cambiarSeccion = (nuevaSeccion) => {
      setSeccionActiva(nuevaSeccion);
    };

    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Historial Clinico</h2>
        
        <form onSubmit={(e) => {
          // Solo permitir envío cuando estamos en la sección de síntomas
          if (seccionActiva !== 'sintomas') {
            e.preventDefault();
            return;
          }
          handleSubmit(e);
        }}>
          {/* Pestañas de navegación */}
          <div className="flex mb-4 border-b">
            <button 
              type="button"
              className={`py-2 px-4 font-medium ${seccionActiva === 'datosPersonales' ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-500'}`}
              onClick={() => cambiarSeccion('datosPersonales')}
            >
              Datos Personales
            </button>
            <button 
              type="button"
              className={`py-2 px-4 font-medium ${seccionActiva === 'antecedentes' ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-500'}`}
              onClick={() => cambiarSeccion('antecedentes')}
            >
              Antecedentes
            </button>
            <button 
              type="button"
              className={`py-2 px-4 font-medium ${seccionActiva === 'sintomas' ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-500'}`}
              onClick={() => cambiarSeccion('sintomas')}
            >
              Sintomas
            </button>
          </div>
          
          {/* Seccion de datos Personales */}
          {seccionActiva === 'datosPersonales' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    value={pacienteData.nombre}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                    disabled={consultaEnviada}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Apellidos</label>
                  <input
                    type="text"
                    name="apellidos"
                    value={pacienteData.apellidos}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                    disabled={consultaEnviada}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Sexo</label>
                  <select
                    name="sexo"
                    value={pacienteData.sexo}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                    disabled={consultaEnviada}
                  >
                    <option value="">Seleccionar</option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                    <option value="O">Otro</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
                  <input
                    type="date"
                    name="fechaNacimiento"
                    value={pacienteData.fechaNacimiento}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                    disabled={consultaEnviada}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Edad</label>
                  <input
                    type="number"
                    name="edad"
                    value={pacienteData.edad}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    readOnly
                    disabled
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Peso (kg)</label>
                  <input
                    type="number"
                    step="0.01"
                    name="peso"
                    value={pacienteData.peso}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    disabled={consultaEnviada}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Estatura (m)</label>
                  <input
                    type="number"
                    step="0.01"
                    name="estatura"
                    value={pacienteData.estatura}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    disabled={consultaEnviada}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Telefono</label>
                <input
                  type="tel"
                  name="telefono"
                  value={pacienteData.telefono}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  disabled={consultaEnviada}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={pacienteData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  disabled={consultaEnviada}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Direccion</label>
                <textarea
                  name="direccion"
                  value={pacienteData.direccion}
                  onChange={handleInputChange}
                  rows="2"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  disabled={consultaEnviada}
                ></textarea>
              </div>
            </div>
          )}
          
          {/* Seccion de antecedentes */}
          {seccionActiva === 'antecedentes' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Antecedentes Patologicos</label>
                <textarea
                  name="antecedentesPatologicos"
                  value={pacienteData.antecedentesPatologicos}
                  onChange={handleInputChange}
                  rows="3"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enfermedades crónicas, cirugías previas, etc."
                  disabled={consultaEnviada}
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Antecedentes Familiares</label>
                <textarea
                  name="antecedentesFamiliares"
                  value={pacienteData.antecedentesFamiliares}
                  onChange={handleInputChange}
                  rows="3"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enfermedades hereditarias, enfermedades en la familia, etc."
                  disabled={consultaEnviada}
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Antecedentes Personales</label>
                <textarea
                  name="antecedentesPersonales"
                  value={pacienteData.antecedentesPersonales}
                  onChange={handleInputChange}
                  rows="3"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Hábitos, alergias, medicamentos actuales, etc."
                  disabled={consultaEnviada}
                ></textarea>
              </div>
            </div>
          )}
          
          {/* Seccion de sintomas */}
          {seccionActiva === 'sintomas' && (
            <div className="space-y-4">
              <p className="text-sm text-gray-600">Seleccione los sintomas que presenta actualmente:</p>
              
              {Object.entries(sintomasPorCategoria).map(([categoria, sintomas]) => (
                <div key={categoria} className="mb-4">
                  <h3 className="font-medium text-gray-700 mb-2">{categoria}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {sintomas.map(sintoma => (
                      <div key={sintoma.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`sintoma-${sintoma.id}`}
                          checked={sintomasSeleccionados.includes(sintoma.id)}
                          onChange={() => handleSintomaChange(sintoma.id)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          disabled={consultaEnviada}
                        />
                        <label htmlFor={`sintoma-${sintoma.id}`} className="ml-2 block text-sm text-gray-700">
                          {sintoma.nombre}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Botones de navegacion y envio */}
          <div className="flex justify-between mt-6">
            {seccionActiva === 'datosPersonales' ? (
              <div></div>
            ) : (
              <button
                type="button"
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                onClick={() => {
                  if (seccionActiva === 'antecedentes') cambiarSeccion('datosPersonales');
                  if (seccionActiva === 'sintomas') cambiarSeccion('antecedentes');
                }}
                disabled={consultaEnviada}
              >
                Anterior
              </button>
            )}
            
            {seccionActiva === 'sintomas' ? (
              <button
                type="submit"
                className={`px-4 py-2 rounded-md ${consultaEnviada 
                  ? 'bg-green-500 text-white cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                disabled={consultaEnviada}
              >
                {consultaEnviada ? 'Consulta Enviada' : 'Enviar Consulta'}
              </button>
            ) : (
              <button
                type="button" 
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={(e) => {
                  e.preventDefault(); // Prevenir cualquier comportamiento de formulario por defecto
                  if (seccionActiva === 'datosPersonales') cambiarSeccion('antecedentes');
                  if (seccionActiva === 'antecedentes') cambiarSeccion('sintomas');
                }}
                disabled={consultaEnviada}
              >
                Siguiente
              </button>
            )}
          </div>
        </form>
      </div>
    );
}

export default HistorialClinico;