-- ========== INSERCIÓN DE SÍNTOMAS ==========
INSERT INTO sintomas (nombre, descripcion, categoria) VALUES
-- Síntomas respiratorios
('Tos', 'Expulsión repentina de aire de los pulmones para liberar las vías respiratorias', 'Respiratorio'),
('Congestión nasal', 'Bloqueo o inflamación del tejido que recubre la nariz', 'Respiratorio'),
('Dificultad para respirar', 'Sensación de falta de aire o respiración limitada', 'Respiratorio'),
('Dolor de garganta', 'Irritación o molestia en la garganta que puede empeorar al tragar', 'Respiratorio'),
('Sibilancias', 'Sonido silbante al respirar debido a estrechamiento de las vías respiratorias', 'Respiratorio'),
('Estornudos', 'Expulsión violenta e involuntaria de aire por la nariz y la boca', 'Respiratorio'),
('Secreción nasal', 'Producción excesiva de moco nasal', 'Respiratorio'),

-- Síntomas digestivos
('Náuseas', 'Sensación desagradable en el estómago con deseos de vomitar', 'Digestivo'),
('Vómitos', 'Expulsión forzada del contenido del estómago a través de la boca', 'Digestivo'),
('Diarrea', 'Evacuaciones líquidas o semilíquidas frecuentes', 'Digestivo'),
('Dolor abdominal', 'Molestia o dolor en la región entre el pecho y la ingle', 'Digestivo'),
('Estreñimiento', 'Dificultad para evacuar o evacuaciones poco frecuentes', 'Digestivo'),
('Pérdida de apetito', 'Disminución del deseo de comer', 'Digestivo'),
('Acidez estomacal', 'Sensación de ardor en el pecho o garganta debido al reflujo ácido', 'Digestivo'),
('Distensión abdominal', 'Hinchazón o sensación de llenura en el abdomen', 'Digestivo'),

-- Síntomas neurológicos
('Dolor de cabeza', 'Dolor o molestia en cualquier parte de la cabeza', 'Neurológico'),
('Mareos', 'Sensación de desequilibrio o inestabilidad', 'Neurológico'),
('Confusión', 'Estado mental caracterizado por desorientación o pensamiento poco claro', 'Neurológico'),
('Pérdida de consciencia', 'Incapacidad temporal de responder a estímulos externos', 'Neurológico'),
('Convulsiones', 'Contracciones musculares incontrolables debido a actividad eléctrica anormal en el cerebro', 'Neurológico'),
('Entumecimiento', 'Pérdida parcial o total de sensibilidad en una parte del cuerpo', 'Neurológico'),
('Temblores', 'Movimientos rítmicos e involuntarios de una parte del cuerpo', 'Neurológico'),
('Alteraciones visuales', 'Cambios en la percepción visual como visión borrosa o doble', 'Neurológico'),

-- Síntomas generales
('Fiebre', 'Elevación de la temperatura corporal por encima de lo normal', 'General'),
('Fatiga', 'Sensación de cansancio extremo o agotamiento', 'General'),
('Dolor muscular', 'Molestia o dolor en los músculos', 'General'),
('Sudoración excesiva', 'Producción anormal de sudor', 'General'),
('Escalofríos', 'Sensación de frío con temblores involuntarios', 'General'),
('Pérdida de peso inexplicada', 'Disminución de peso sin causa aparente', 'General'),
('Malestar general', 'Sensación de no encontrarse bien', 'General'),
('Inflamación de ganglios', 'Aumento de tamaño de los ganglios linfáticos', 'General'),

-- Síntomas dermatológicos
('Erupción cutánea', 'Cambio en el color o textura de la piel', 'Dermatológico'),
('Picazón', 'Sensación que provoca el deseo de rascarse', 'Dermatológico'),
('Ampollas', 'Elevaciones de la piel llenas de líquido', 'Dermatológico'),
('Cambios en lunares', 'Alteraciones en el tamaño, forma o color de los lunares', 'Dermatológico'),
('Piel seca', 'Piel con escasa humedad o descamación', 'Dermatológico'),
('Úlceras cutáneas', 'Lesiones abiertas en la piel que no cicatrizan', 'Dermatológico'),
('Coloración amarillenta (ictericia)', 'Coloración amarilla de la piel y las mucosas', 'Dermatológico'),

-- Síntomas cardiovasculares
('Dolor en el pecho', 'Molestia o dolor en la zona torácica', 'Cardiovascular'),
('Palpitaciones', 'Percepción de los latidos del corazón', 'Cardiovascular'),
('Presión arterial alta', 'Elevación de la presión que ejerce la sangre sobre las paredes arteriales', 'Cardiovascular'),
('Presión arterial baja', 'Disminución de la presión que ejerce la sangre sobre las paredes arteriales', 'Cardiovascular'),
('Edema', 'Acumulación de líquido en los tejidos, generalmente en extremidades', 'Cardiovascular'),
('Cianosis', 'Coloración azulada de la piel debido a falta de oxígeno', 'Cardiovascular');

-- ========== INSERCIÓN DE ENFERMEDADES ==========
INSERT INTO enfermedades (nombre, descripcion, categoria, gravedad) VALUES
-- Enfermedades respiratorias
('Resfriado común', 'Infección viral leve del tracto respiratorio superior', 'Respiratoria', 2),
('Gripe', 'Infección viral que afecta el sistema respiratorio', 'Respiratoria', 3),
('Neumonía', 'Infección que inflama los sacos aéreos en uno o ambos pulmones', 'Respiratoria', 4),
('Bronquitis', 'Inflamación de los bronquios en los pulmones', 'Respiratoria', 3),
('Asma', 'Enfermedad crónica que inflama y estrecha las vías respiratorias', 'Respiratoria', 3),
('EPOC', 'Enfermedad pulmonar obstructiva crónica que dificulta la respiración', 'Respiratoria', 4),
('Sinusitis', 'Inflamación de los senos paranasales', 'Respiratoria', 2),

-- Enfermedades digestivas
('Gastroenteritis', 'Inflamación del estómago e intestinos, generalmente por infección', 'Digestiva', 3),
('Úlcera péptica', 'Lesión en el revestimiento del estómago o intestino delgado', 'Digestiva', 3),
('Síndrome de colon irritable', 'Trastorno intestinal crónico que afecta el intestino grueso', 'Digestiva', 2),
('Enfermedad de Crohn', 'Enfermedad inflamatoria crónica del tubo digestivo', 'Digestiva', 4),
('Hepatitis', 'Inflamación del hígado', 'Digestiva', 4),
('Pancreatitis', 'Inflamación del páncreas', 'Digestiva', 4),
('Cálculos biliares', 'Depósitos duros en la vesícula biliar', 'Digestiva', 3),

-- Enfermedades cardiovasculares
('Hipertensión arterial', 'Presión arterial anormalmente alta en las arterias', 'Cardiovascular', 3),
('Infarto de miocardio', 'Muerte del tejido cardíaco por falta de flujo sanguíneo', 'Cardiovascular', 5),
('Insuficiencia cardíaca', 'Incapacidad del corazón para bombear sangre adecuadamente', 'Cardiovascular', 4),
('Arritmia cardíaca', 'Alteración del ritmo normal de los latidos del corazón', 'Cardiovascular', 3),
('Trombosis venosa profunda', 'Formación de coágulos en venas profundas', 'Cardiovascular', 4),
('Embolia pulmonar', 'Bloqueo de una arteria en los pulmones', 'Cardiovascular', 5),

-- Enfermedades neurológicas
('Migraña', 'Dolor de cabeza recurrente e intenso', 'Neurológica', 2),
('Epilepsia', 'Trastorno cerebral que causa convulsiones recurrentes', 'Neurológica', 3),
('Accidente cerebrovascular', 'Interrupción del flujo sanguíneo al cerebro', 'Neurológica', 5),
('Enfermedad de Parkinson', 'Trastorno degenerativo del sistema nervioso central', 'Neurológica', 4),
('Esclerosis múltiple', 'Enfermedad autoinmune que afecta el sistema nervioso central', 'Neurológica', 4),
('Meningitis', 'Inflamación de las membranas que rodean el cerebro y la médula espinal', 'Neurológica', 5),

-- Enfermedades infecciosas
('COVID-19', 'Enfermedad infecciosa causada por el coronavirus SARS-CoV-2', 'Infecciosa', 4),
('Tuberculosis', 'Infección bacteriana que afecta principalmente los pulmones', 'Infecciosa', 4),
('Malaria', 'Enfermedad parasitaria transmitida por mosquitos', 'Infecciosa', 4),
('VIH/SIDA', 'Infección viral que afecta el sistema inmunológico', 'Infecciosa', 5),
('Dengue', 'Enfermedad viral transmitida por mosquitos', 'Infecciosa', 3),
('Leptospirosis', 'Infección bacteriana transmitida por animales', 'Infecciosa', 3),

-- Enfermedades endocrinas
('Diabetes mellitus', 'Trastorno metabólico caracterizado por niveles elevados de glucosa en sangre', 'Endocrina', 3),
('Hipotiroidismo', 'Actividad insuficiente de la glándula tiroides', 'Endocrina', 2),
('Hipertiroidismo', 'Actividad excesiva de la glándula tiroides', 'Endocrina', 3),
('Enfermedad de Addison', 'Insuficiencia de las glándulas suprarrenales', 'Endocrina', 4),
('Síndrome de Cushing', 'Exposición prolongada a niveles elevados de cortisol', 'Endocrina', 3),

-- Enfermedades dermatológicas
('Psoriasis', 'Enfermedad autoinmune que causa parches rojos y escamosos en la piel', 'Dermatológica', 2),
('Dermatitis atópica', 'Inflamación crónica de la piel que causa picazón y enrojecimiento', 'Dermatológica', 2),
('Melanoma', 'Tipo de cáncer de piel que se origina en los melanocitos', 'Dermatológica', 5),
('Herpes zóster', 'Infección viral que causa erupción dolorosa', 'Dermatológica', 3),
('Acné', 'Trastorno inflamatorio de la piel que afecta las unidades pilosebáceas', 'Dermatológica', 1);

-- ========== INSERCIÓN DE RELACIONES ENFERMEDAD-SÍNTOMA ==========
INSERT INTO enfermedad_sintoma (enfermedad_id, sintoma_id, peso) VALUES
-- Resfriado común
(1, 1, 0.90), -- Tos
(1, 2, 0.95), -- Congestión nasal
(1, 4, 0.80), -- Dolor de garganta
(1, 6, 0.70), -- Estornudos
(1, 7, 0.85), -- Secreción nasal
(1, 25, 0.50), -- Fiebre (leve)
(1, 26, 0.65), -- Fatiga

-- Gripe
(2, 1, 0.85), -- Tos
(2, 2, 0.75), -- Congestión nasal
(2, 4, 0.70), -- Dolor de garganta
(2, 7, 0.65), -- Secreción nasal
(2, 25, 0.95), -- Fiebre (alta)
(2, 26, 0.90), -- Fatiga
(2, 27, 0.80), -- Dolor muscular
(2, 29, 0.75), -- Escalofríos
(2, 31, 0.70), -- Malestar general

-- Neumonía
(3, 1, 0.85), -- Tos
(3, 3, 0.90), -- Dificultad para respirar
(3, 25, 0.95), -- Fiebre
(3, 26, 0.80), -- Fatiga
(3, 29, 0.70), -- Escalofríos
(3, 31, 0.75), -- Malestar general
(3, 40, 0.65), -- Dolor en el pecho

-- Bronquitis
(4, 1, 0.95), -- Tos (principal síntoma)
(4, 3, 0.70), -- Dificultad para respirar
(4, 5, 0.65), -- Sibilancias
(4, 25, 0.60), -- Fiebre (leve)
(4, 26, 0.75), -- Fatiga
(4, 31, 0.60), -- Malestar general

-- Asma
(5, 1, 0.80), -- Tos
(5, 3, 0.95), -- Dificultad para respirar
(5, 5, 0.90), -- Sibilancias
(5, 40, 0.65), -- Dolor en el pecho

-- EPOC
(6, 1, 0.90), -- Tos crónica
(6, 3, 0.95), -- Dificultad para respirar
(6, 5, 0.80), -- Sibilancias
(6, 26, 0.85), -- Fatiga
(6, 40, 0.70), -- Dolor en el pecho

-- Sinusitis
(7, 2, 0.95), -- Congestión nasal
(7, 7, 0.85), -- Secreción nasal
(7, 16, 0.75), -- Dolor de cabeza
(7, 31, 0.60), -- Malestar general

-- Gastroenteritis
(8, 8, 0.85), -- Náuseas
(8, 9, 0.80), -- Vómitos
(8, 10, 0.90), -- Diarrea
(8, 11, 0.75), -- Dolor abdominal
(8, 25, 0.60), -- Fiebre
(8, 26, 0.65), -- Fatiga

-- Úlcera péptica
(9, 8, 0.70), -- Náuseas
(9, 11, 0.95), -- Dolor abdominal
(9, 13, 0.80), -- Pérdida de apetito
(9, 14, 0.75), -- Acidez estomacal

-- Síndrome de colon irritable
(10, 10, 0.75), -- Diarrea
(10, 11, 0.90), -- Dolor abdominal
(10, 12, 0.80), -- Estreñimiento
(10, 15, 0.85), -- Distensión abdominal

-- Enfermedad de Crohn
(11, 10, 0.85), -- Diarrea
(11, 11, 0.90), -- Dolor abdominal
(11, 13, 0.80), -- Pérdida de apetito
(11, 25, 0.65), -- Fiebre
(11, 26, 0.75), -- Fatiga
(11, 30, 0.70), -- Pérdida de peso inexplicada

-- Hepatitis
(12, 8, 0.70), -- Náuseas
(12, 11, 0.65), -- Dolor abdominal
(12, 13, 0.75), -- Pérdida de apetito
(12, 25, 0.60), -- Fiebre
(12, 26, 0.85), -- Fatiga
(12, 39, 0.95), -- Coloración amarillenta (ictericia)

-- Pancreatitis
(13, 8, 0.80), -- Náuseas
(13, 9, 0.75), -- Vómitos
(13, 11, 0.95), -- Dolor abdominal (intenso)
(13, 25, 0.65), -- Fiebre
(13, 26, 0.70), -- Fatiga

-- Cálculos biliares
(14, 8, 0.65), -- Náuseas
(14, 9, 0.60), -- Vómitos
(14, 11, 0.95), -- Dolor abdominal (intenso, especialmente después de comer)
(14, 14, 0.70), -- Acidez estomacal

-- Hipertensión arterial
(15, 16, 0.60), -- Dolor de cabeza
(15, 17, 0.50), -- Mareos
(15, 41, 0.95), -- Presión arterial alta
(15, 26, 0.40), -- Fatiga

-- Infarto de miocardio
(16, 40, 0.95), -- Dolor en el pecho (intenso)
(16, 3, 0.80), -- Dificultad para respirar
(16, 8, 0.70), -- Náuseas
(16, 28, 0.75), -- Sudoración excesiva
(16, 17, 0.65), -- Mareos

-- Insuficiencia cardíaca
(17, 3, 0.90), -- Dificultad para respirar
(17, 26, 0.85), -- Fatiga
(17, 43, 0.80), -- Edema
(17, 40, 0.70), -- Dolor en el pecho

-- Arritmia cardíaca
(18, 41, 0.90), -- Palpitaciones
(18, 17, 0.75), -- Mareos
(18, 26, 0.65), -- Fatiga
(18, 19, 0.50), -- Pérdida de consciencia (en casos graves)

-- Trombosis venosa profunda
(19, 43, 0.90), -- Edema (en extremidades)
(19, 27, 0.80), -- Dolor (en la pierna afectada)
(19, 44, 0.60), -- Cianosis

-- Embolia pulmonar
(20, 3, 0.95), -- Dificultad para respirar
(20, 40, 0.85), -- Dolor en el pecho
(20, 1, 0.60), -- Tos
(20, 25, 0.65), -- Fiebre

-- Migraña
(21, 16, 0.95), -- Dolor de cabeza (intenso)
(21, 8, 0.70), -- Náuseas
(21, 9, 0.65), -- Vómitos
(21, 23, 0.80), -- Alteraciones visuales

-- Epilepsia
(22, 20, 0.95), -- Convulsiones
(22, 18, 0.75), -- Confusión
(22, 19, 0.80), -- Pérdida de consciencia

-- Accidente cerebrovascular
(23, 16, 0.75), -- Dolor de cabeza
(23, 17, 0.80), -- Mareos
(23, 18, 0.85), -- Confusión
(23, 21, 0.90), -- Entumecimiento
(23, 23, 0.85), -- Alteraciones visuales
(23, 3, 0.60), -- Dificultad para respirar

-- Enfermedad de Parkinson
(24, 22, 0.95), -- Temblores
(24, 3, 0.70), -- Rigidez muscular
(24, 26, 0.85), -- Fatiga
(24, 17, 0.65), -- Mareos

-- Esclerosis múltiple
(25, 21, 0.85), -- Entumecimiento
(25, 23, 0.75), -- Alteraciones visuales
(25, 26, 0.90), -- Fatiga
(25, 17, 0.70), -- Mareos
(25, 27, 0.80), -- Dolor muscular

-- Meningitis
(26, 16, 0.95), -- Dolor de cabeza (intenso)
(26, 25, 0.90), -- Fiebre (alta)
(26, 4, 0.65), -- Dolor de garganta
(26, 18, 0.80), -- Confusión
(26, 9, 0.75), -- Vómitos
(26, 31, 0.85), -- Malestar general

-- COVID-19
(27, 1, 0.85), -- Tos
(27, 3, 0.75), -- Dificultad para respirar
(27, 25, 0.90), -- Fiebre
(27, 26, 0.80), -- Fatiga
(27, 4, 0.65), -- Dolor de garganta
(27, 27, 0.70), -- Dolor muscular
(27, 31, 0.85), -- Malestar general

-- Tuberculosis
(28, 1, 0.95), -- Tos (persistente)
(28, 25, 0.85), -- Fiebre
(28, 26, 0.90), -- Fatiga
(28, 30, 0.80), -- Pérdida de peso inexplicada
(28, 28, 0.75), -- Sudoración excesiva (especialmente nocturna)

-- Malaria
(29, 25, 0.95), -- Fiebre (alta)
(29, 29, 0.90), -- Escalofríos
(29, 26, 0.85), -- Fatiga
(29, 16, 0.70), -- Dolor de cabeza
(29, 8, 0.65), -- Náuseas
(29, 9, 0.60), -- Vómitos

-- VIH/SIDA
(30, 25, 0.75), -- Fiebre
(30, 26, 0.90), -- Fatiga
(30, 28, 0.80), -- Sudoración excesiva (especialmente nocturna)
(30, 30, 0.85), -- Pérdida de peso inexplicada
(30, 32, 0.70), -- Inflamación de ganglios
(30, 10, 0.65), -- Diarrea

-- Dengue
(31, 25, 0.95), -- Fiebre (alta)
(31, 16, 0.90), -- Dolor de cabeza
(31, 27, 0.85), -- Dolor muscular
(31, 33, 0.75), -- Erupción cutánea
(31, 8, 0.70), -- Náuseas
(31, 9, 0.65), -- Vómitos

-- Leptospirosis
(32, 25, 0.90), -- Fiebre
(32, 16, 0.85), -- Dolor de cabeza
(32, 27, 0.80), -- Dolor muscular
(32, 8, 0.70), -- Náuseas
(32, 9, 0.65), -- Vómitos
(32, 39, 0.60), -- Ictericia (en casos graves)

-- Diabetes mellitus
(33, 26, 0.80), -- Fatiga
(33, 28, 0.75), -- Sudoración excesiva
(33, 30, 0.70), -- Pérdida de peso inexplicada
(33, 13, 0.65), -- Aumento del apetito
(33, 36, 0.60), -- Piel seca
(33, 37, 0.55), -- Úlceras cutáneas

-- Hipotiroidismo
(34, 26, 0.95), -- Fatiga
(34, 30, 0.70), -- Aumento de peso
(34, 36, 0.85), -- Piel seca
(34, 43, 0.75), -- Edema

-- Hipertiroidismo
(35, 26, 0.80), -- Fatiga
(35, 30, 0.85), -- Pérdida de peso
(35, 28, 0.90), -- Sudoración excesiva
(35, 41, 0.75), -- Palpitaciones
(35, 22, 0.70), -- Temblores

-- Enfermedad de Addison
(36, 26, 0.95), -- Fatiga
(36, 30, 0.90), -- Pérdida de peso inexplicada
(36, 8, 0.75), -- Náuseas
(36, 9, 0.70), -- Vómitos
(36, 11, 0.65), -- Dolor abdominal
(36, 17, 0.80), -- Mareos

-- Síndrome de Cushing
(37, 30, 0.90), -- Aumento de peso
(37, 43, 0.85), -- Edema
(37, 42, 0.75), -- Presión arterial alta
(37, 26, 0.70), -- Fatiga
(37, 36, 0.65), -- Cambios en la piel

-- Psoriasis
(38, 33, 0.95), -- Erupción cutánea
(38, 34, 0.85), -- Picazón
(38, 36, 0.80), -- Piel seca
(38, 27, 0.60), -- Dolor (en articulaciones en algunos casos)

-- Dermatitis atópica
(39, 33, 0.90), -- Erupción cutánea
(39, 34, 0.95), -- Picazón
(39, 36, 0.85), -- Piel seca

-- Melanoma
(40, 33, 0.70), -- Erupción cutánea
(40, 35, 0.95), -- Cambios en lunares
(40, 37, 0.65), -- Úlceras cutáneas

-- Herpes zóster
(41, 33, 0.95), -- Erupción cutánea
(41, 34, 0.90), -- Picazón
(41, 27, 0.85), -- Dolor
(41, 25, 0.65), -- Fiebre

-- Acné
(42, 33, 0.95), -- Erupción cutánea
(42, 34, 0.70), -- Picazón
(42, 27, 0.50); -- Dolor (leve)