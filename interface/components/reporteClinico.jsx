import { useState } from 'react';

function ReporteClinico({ 
  pacienteData, 
  diagnosticos, 
  sintomasSeleccionados, 
  listaSintomas,
  consultaEnviada 
}) {
  const [mostrarDetalles, setMostrarDetalles] = useState({});
  
  // Obtener la fecha actual para el reporte
  const fechaActual = new Date().toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  // Funcion para obtener el nombre del sintoma por su ID
  const getNombreSintoma = (id) => {
    const sintoma = listaSintomas.find(s => s.id === id);
    return sintoma ? sintoma.nombre : 'Síntoma desconocido';
  };
  
  // Funcion para alternar la visualizacion de detalles de una enfermedad
  const toggleDetalles = (index) => {
    setMostrarDetalles(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Funcion para asegurar que porcentaje sea un numero, no exceda el 100%, y formatearlo a 1 decimal
  const formatearPorcentaje = (porcentaje) => {
    // Convertir a numero si es un string
    const valorNumerico = typeof porcentaje === 'string' ? parseFloat(porcentaje) : porcentaje;
    
    // Verificar si es un numero válido
    if (isNaN(valorNumerico)) {
      return '0.0';
    }
    
    // Asegurar que no exceda el 100%
    const valorLimitado = Math.min(valorNumerico, 100);
    
    // Usar toFixed para formatear a 1 decimal
    return valorLimitado.toFixed(1);
  };

  // Función para limitar el porcentaje para la barra de progreso
  const limitarPorcentajeParaBarra = (porcentaje) => {
    // Convertir a numero si es un string
    const valorNumerico = typeof porcentaje === 'string' ? parseFloat(porcentaje) : porcentaje;
    
    // Verificar si es un numero válido
    if (isNaN(valorNumerico)) {
      return 0;
    }
    
    // Limitar entre 0 y 100
    return Math.min(Math.max(valorNumerico, 0), 100);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Reporte Clinico</h2>
      
      {!consultaEnviada ? (
        <div className="flex flex-col items-center justify-center h-96 text-gray-500">
          <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          <p className="text-xl font-medium">Reporte Pendiente</p>
          <p className="text-gray-400 mt-2">Complete el formulario y envie la consulta para generar un reporte.</p>
        </div>
      ) : (
        <div>
          {/* Encabezado del reporte */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">{pacienteData.nombre} {pacienteData.apellidos}</h3>
                <p className="text-sm text-gray-600">
                  {pacienteData.sexo === 'M' ? 'Masculino' : pacienteData.sexo === 'F' ? 'Femenino' : 'Otro'} - {pacienteData.edad} años
                </p>
                {pacienteData.peso && pacienteData.estatura && (
                  <p className="text-sm text-gray-600">
                    Peso: {pacienteData.peso} kg - Estatura: {pacienteData.estatura} m
                  </p>
                )}
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Fecha del reporte:</p>
                <p className="text-sm text-gray-600">{fechaActual}</p>
              </div>
            </div>
          </div>
          
          {/* Sintomas reportados */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Sintomas Reportados</h3>
            {sintomasSeleccionados.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {sintomasSeleccionados.map(id => (
                  <span key={id} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {getNombreSintoma(id)}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">No se han reportado síntomas.</p>
            )}
          </div>
          
          {/* Diagnosticos sugeridos */}
          <div>
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Posibles Diagnosticos</h3>
            <p className="text-sm text-gray-600 mb-4">
              Basado en los sintomas reportados, estos son los diagnosticos mas probables:
            </p>
            
            {diagnosticos && diagnosticos.length > 0 ? (
              <div className="space-y-4">
                {diagnosticos.map((diagnostico, index) => {
                  // Calcular el porcentaje limitado para la barra de progreso
                  const porcentajeParaBarra = limitarPorcentajeParaBarra(diagnostico.porcentaje);
                  
                  return (
                    <div key={index} className="border rounded-lg overflow-hidden">
                      <div 
                        className="flex justify-between items-center p-4 cursor-pointer" 
                        onClick={() => toggleDetalles(index)}
                      >
                        <div className="flex items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                            index === 0 ? 'bg-red-100 text-red-800' :
                            index === 1 ? 'bg-orange-100 text-orange-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-medium">{diagnostico.enfermedad}</h4>
                            <div className="flex items-center">
                              <div className="w-24 bg-gray-200 rounded-full h-2.5 mr-2">
                                <div 
                                  className={`h-2.5 rounded-full ${
                                    index === 0 ? 'bg-red-600' :
                                    index === 1 ? 'bg-orange-500' :
                                    'bg-yellow-500'
                                  }`}
                                  style={{ width: `${porcentajeParaBarra}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-600">{formatearPorcentaje(diagnostico.porcentaje)}%</span>
                            </div>
                          </div>
                        </div>
                        <svg 
                          className={`w-5 h-5 text-gray-500 transition-transform ${mostrarDetalles[index] ? 'transform rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                      
                      {mostrarDetalles[index] && (
                        <div className="p-4 bg-gray-50 border-t">
                          <p className="text-sm text-gray-700 mb-2">{diagnostico.descripcion}</p>
                          <div className="mt-2">
                            <p className="text-xs text-gray-500">
                              * Este es un diagnostico preliminar basado en los sintomas reportados. Consulte a un medico para una evaluacion completa.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-gray-500 italic">No hay diagnosticos disponibles.</p>
            )}
            
            {/* Disclaimer */}
            <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Importante:</strong> Este diagnostico es generado automaticamente y tiene unicamente fines demostrativos para pasar la materia de prolog. 
                No sustituye la consulta con un profesional medico cualificado. Busque atencion medica adecuada para cualquier problema de salud.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReporteClinico;