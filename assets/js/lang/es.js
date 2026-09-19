/* ==========================================================================
   lang/es.js — Español (Spanish)
   ========================================================================== */
(function () {
  'use strict';
  var JY = window.JY;

  JY.i18n.register('es', {
    tag: 'es', dir: 'ltr', region: 'eur', native: 'Español', english: 'Spanish'
  }, {

  meta: {
    title: 'Plataforma internacional de derivación médica Jiuying — Tratarse en los hospitales de grado A de China',
    description: 'Jiuying conecta a pacientes internacionales con hospitales terciarios de grado A de China: prelectura gratuita de la historia clínica, videoconsulta con el médico responsable, carta de invitación para visado médico, recogida en el aeropuerto, interpretación hospitalaria y seguimiento tras el regreso.',
    ogDescription: 'Su puente de confianza hacia los hospitales terciarios de grado A de China.'
  },

  brand: { name: 'Plataforma internacional de derivación médica Jiuying', short: 'Jiuying Salud', sub: 'JIUYING GLOBAL HEALTH' },

  topbar: {
    promo: 'Prelectura gratuita de la historia clínica — escuche la opinión de un especialista antes de viajar',
    hours: 'Respuesta en 4 horas · 7 días por semana'
  },

  nav: {
    help: 'Cómo ayudamos', hospitals: 'Red hospitalaria', specialties: 'Especialidades',
    process: 'Proceso', cost: 'Costes', faq: 'Preguntas', partners: 'Socios',
    contact: 'Contacto', cta: 'Estudio gratuito'
  },

  hero: {
    badgeTag: 'Desde 2026',
    badgeText: 'Servicio de derivación de pacientes internacionales · Con sede en Guangzhou, China',
    titleBefore: 'Tratarse en China',
    titleEm: 'no tiene por qué ser complicado.',
    sub: 'Envíenos su historia clínica. Le conectamos con un hospital terciario de grado A en China, organizamos una videoconsulta con el médico responsable y le acompañamos desde el visado médico hasta la recogida en el aeropuerto, la interpretación en el hospital y el seguimiento tras su regreso.',
    ctaPrimary: 'Solicitar estudio gratuito',
    ctaSecondary: 'Ver cómo funciona',
    proof: ['Estudio de la historia clínica sin coste', 'Gastos médicos pagados directamente al hospital', 'Coordinador que habla su idioma', 'Presupuesto por escrito antes de viajar'],
    plan: {
      tag: 'Caso #JY-2609',
      title: 'Su plan de tratamiento',
      s1t: 'Historia recibida y traducida', s1d: 'Imagen, anatomía patológica y analítica ya recopiladas',
      s2t: 'Prelectura hospitalaria completada', s2d: 'El equipo de oncología ha emitido una opinión preliminar',
      s3t: 'Videoconsulta programada', s3d: 'Cara a cara con su médico responsable',
      s4t: 'Carta de invitación médica emitida', s4d: 'Expedida por el hospital, lista para su visado',
      k1v: '2–4 semanas', k1l: 'Estancia estimada',
      k2v: 'Por escrito', k2l: 'Estimación de costes'
    },
    chipA: 'Licencias hospitalarias verificables en la Comisión Nacional de Salud',
    chipB: '9 idiomas, coordinación 24/7'
  },

  trust: {
    hospitals: 'Hospitales de grado A en la red',
    cities: 'Grandes centros médicos cubiertos',
    countries: 'Países y regiones atendidos',
    response: 'Tiempo medio de primera respuesta'
  },

  help: {
    eyebrow: 'Con qué tropiezan los pacientes',
    title: 'El problema que le bloquea — y qué hacemos al respecto',
    sub: 'Casi todos los pacientes internacionales que nos escriben están bloqueados por una de estas seis situaciones. Así se resuelve cada una.',
    items: [
      { t: 'Le han dicho que ya no hay más opciones', d: 'El tumor se consideró inoperable o su especialista indicó que no quedaba ningún tratamiento.', s: 'Organizamos una sesión multidisciplinar (MDT) y una segunda opinión formal en un hospital de grado A: un equipo de especialistas veteranos vuelve a leer exactamente las mismas imágenes y a menudo reabre puertas que le dijeron que estaban cerradas.' },
      { t: 'El tratamiento es inalcanzable económicamente en su país', d: 'El mismo protocolo puede costar de tres a cinco veces más en la sanidad privada de su país y el seguro no lo cubre.', s: 'Equipamiento y especialistas comparables, normalmente a un tercio o la mitad de los precios privados de Estados Unidos o Europa occidental — y recibe un rango de costes por escrito antes de comprometerse a nada.' },
      { t: 'La lista de espera dura meses', d: 'Las listas públicas retrasan la cirugía o la radioterapia meses mientras la enfermedad sigue avanzando.', s: 'Una vez confirmado el plan, la mayoría de los pacientes empiezan el tratamiento en las 1–2 semanas siguientes a su llegada, con la fecha de ingreso confirmada antes de que reserve el vuelo.' },
      { t: 'No sabe distinguir qué hospitales chinos son realmente de primer nivel', d: 'Los resultados de búsqueda están llenos de publicidad y no hay forma de comprobar la categoría real de un centro.', s: 'Solo trabajamos con hospitales terciarios de grado A (三甲) y centros especializados nacionales. Todas las licencias son verificables públicamente y le comunicamos por escrito el hospital y el médico responsable antes de que viaje.' },
      { t: 'Nadie habla su idioma', d: 'Formularios, pases de visita, consentimientos e informe de alta: todo en chino.', s: 'Un coordinador que habla su idioma gestiona su caso de principio a fin, y un intérprete médico acompaña presencialmente en las consultas, el ingreso y el alta.' },
      { t: 'Visado, dinero y seguimiento son una caja negra', d: 'Ha oído hablar de intermediarios que cobran y desaparecen, y teme quedarse solo al volver.', s: 'El hospital expide su carta de invitación médica; usted paga los gastos médicos directamente al hospital contra factura oficial, nunca a nosotros; y seguimos coordinando el seguimiento a distancia tras su regreso.' }
    ],
    bandTitle: '¿No está seguro de que China sea adecuada para su caso?',
    bandText: 'Envíe su historia clínica para una prelectura gratuita. Si no podemos ayudarle de verdad, se lo diremos: sin coste y sin presión.',
    bandBtn: 'Enviar mi historia clínica'
  },

  why: {
    eyebrow: 'Por qué China',
    title: 'Por qué cada vez más pacientes internacionales vuelan a China',
    sub: 'Los mejores hospitales chinos combinan densidad de equipamiento, volumen de casos y rapidez como muy pocos sistemas sanitarios consiguen hacerlo.',
    items: [
      { t: 'Equipamiento de primer nivel y disponible de verdad', d: 'CyberKnife, TOMO, Ethos, PET-RM y robots quirúrgicos da Vinci están instalados en gran número en los hospitales punteros: por eso los plazos se miden en días, no en meses.' },
      { t: 'Especialistas con un volumen de casos enorme', d: 'Un cirujano o radioterapeuta veterano de un centro nacional atiende al año varias veces el volumen de un especialista comparable en otros países. La repetición construye criterio clínico.' },
      { t: 'Diagnóstico en cuestión de días', d: 'RM, PET-TC, anatomía patológica y perfil genómico se resuelven en pocos días, de modo que la decisión terapéutica no queda atascada en una cola de pruebas.' },
      { t: 'Costes que se pueden planificar', d: 'Facturas oficiales detalladas emitidas por el propio hospital. Los protocolos comparables suelen costar un tercio o la mitad de los precios privados de EE. UU. o Europa occidental.' },
      { t: 'Medicina china y occidental bajo el mismo techo', d: 'La rehabilitación oncológica con medicina tradicional china, la acupuntura y la fisioterapia forman parte de la atención hospitalaria habitual: útiles para el apetito, el sueño, el dolor y la recuperación durante el tratamiento.' },
      { t: 'Servicios internacionales ya consolidados', d: 'Los grandes hospitales de grado A cuentan con departamentos de medicina internacional específicos, personal anglófono, facturación internacional estandarizada y un procedimiento de visado médico bien rodado.' }
    ]
  },

  hospitals: {
    eyebrow: 'Red hospitalaria',
    title: 'Una red nacional de hospitales terciarios de grado A',
    sub: 'Coordinamos los principales centros médicos de China. El hospital al que se le derive depende de su patología, no de quién nos pague una comisión mayor.',
    tabAll: 'Todas las ciudades',
    more: 'Ver más hospitales',
    less: 'Mostrar menos',
    perCount: 'hospitales',
    level: 'Terciario de grado A (三甲)',
    firstTag: 'Socio inicial',
    note: 'La lista siguiente es la red de hospitales con la que coordina la plataforma. Cuáles de ellos pueden atender su caso depende del diagnóstico y del acuerdo vigente; su coordinador le confirmará por escrito el hospital y el médico responsable antes de viajar. La red sigue ampliándose.',
    empty: 'Ningún hospital de esta ciudad coincide con el filtro actual.'
  },

  tag: {
    onc: 'Oncología', radio: 'Radioterapia de precisión', cardio: 'Cardiovascular', neuro: 'Neurocirugía',
    ortho: 'Traumatología', gi: 'Digestivo y mínimamente invasivo', tcm: 'Rehabilitación MTC',
    transplant: 'Trasplantes', fertility: 'Reproducción asistida', checkup: 'Chequeo médico',
    complex: 'Enfermedades complejas y raras', endo: 'Endocrinología'
  },

  city: {
    guangzhou: 'Guangzhou', shenzhen: 'Shenzhen', foshan: 'Foshan',
    dongguan: 'Dongguan', zhuhai: 'Zhuhai', shantou: 'Shantou'
  },

  spec: {
    eyebrow: 'Áreas clínicas',
    title: 'Qué podemos gestionar para usted',
    sub: 'Estas son las áreas con más casos internacionales. Si su situación no aparece, envíela igualmente: le diremos con honestidad si podemos ayudar.',
    badge1: '3–5 sesiones', badge2: 'Informe en 48 h', badge3: 'Intervencionista', badge4: 'Vascular cerebral',
    badge5: 'Prótesis articular', badge6: 'Endoscópico', badge7: 'Cuidados integrativos', badge8: 'Resultados en la semana',
    radio: { t: 'Radioterapia de precisión oncológica', d: 'Plataformas CyberKnife, TOMO y Ethos con precisión submilimétrica. Varios protocolos se completan en 3–5 sesiones, así que una estancia de 2–4 semanas suele bastar.', l1: 'CyberKnife · TOMO · Ethos', l2: 'Protocolos cortos', l3: 'Sobre todo ambulatorio' },
    mdt: { t: 'Comité multidisciplinar oncológico', d: 'Cirujanos, oncólogos médicos, radioterapeutas, radiólogos y patólogos revisan su caso juntos y emiten una segunda opinión por escrito.', l1: 'Segunda opinión por escrito', l2: '5–8 especialistas por caso', l3: 'Informe en 48 horas' },
    cardio: { t: 'Cardiología y cirugía cardíaca', d: 'Intervención coronaria, reparación y sustitución valvular, ablación de arritmias y bypass en centros cardiovasculares nacionales.', l1: 'ICP · TAVR · ablación', l2: 'Centros cardíacos nacionales', l3: 'Cuidados posoperatorios de nivel UCI' },
    neuro: { t: 'Neurocirugía y enfermedad cerebrovascular', d: 'Tumores cerebrales y medulares, embolización de aneurismas, estimulación cerebral profunda (DBS) y rehabilitación neurológica por equipos veteranos.', l1: 'Tumor · aneurisma · DBS', l2: 'Monitorización neurológica intraoperatoria', l3: 'Itinerario de rehabilitación' },
    ortho: { t: 'Traumatología, columna y prótesis articulares', d: 'Prótesis de cadera y rodilla, descompresión raquídea y reconstrucción de traumatismos complejos, con rehabilitación hospitalaria estructurada.', l1: 'Cadera · rodilla · columna', l2: 'Protocolos de recuperación rápida', l3: 'Rehabilitación incluida' },
    gi: { t: 'Enfermedades digestivas y cirugía mínimamente invasiva', d: 'Resección endoscópica, cirugía hepatobiliar y pancreática, y manejo de enfermedad inflamatoria intestinal en centros de alto volumen.', l1: 'Endoscopia · cirugía HPB', l2: 'Vía laparoscópica', l3: 'Estancia hospitalaria corta' },
    tcm: { t: 'Rehabilitación oncológica con medicina tradicional china', d: 'Acupuntura, fitoterapia y fisioterapia junto al tratamiento convencional, para dolor, apetito, fatiga y sueño.', l1: 'Oncología integrativa', l2: 'Acupuntura · fitoterapia', l3: 'Apoyo en la convalecencia' },
    checkup: { t: 'Chequeo ejecutivo y detección precoz', d: 'Revisión completa con PET-RM, perfil de riesgo genómico e informe médico: resultados y consulta en la misma semana.', l1: 'PET-RM · genómica', l2: 'Consulta presencial con el médico', l3: 'Informe en inglés' }
  },

  process: {
    eyebrow: 'El recorrido',
    title: 'Seis pasos, desde su primer mensaje hasta el seguimiento en casa',
    sub: 'Nada ocurre sin su confirmación. Usted aprueba el hospital, el médico, el plan y el presupuesto antes de reservar ningún vuelo.',
    steps: [
      { t: 'Consulta gratuita y apertura del caso', dur: 'El mismo día', who: 'Su coordinador', d: 'Indíquenos el diagnóstico y envíe los documentos que tenga. Un coordinador que habla su idioma responde en 4 horas y abre su expediente.' },
      { t: 'Recopilación de historias y prelectura hospitalaria', dur: '2–3 días', who: 'Plataforma + hospital', d: 'Ordenamos, traducimos y estructuramos su imagen, anatomía patológica y analítica; después los especialistas del hospital revisan el expediente y emiten una opinión preliminar.' },
      { t: 'Videoconsulta con el médico', dur: 'Programada en 3–5 días', who: 'Especialistas del hospital', d: 'Videoconsulta cara a cara con el médico que le tratará. Recibe por escrito el plan, el rango de costes y la duración prevista de la estancia.' },
      { t: 'Visado médico y viaje', dur: '1–2 semanas', who: 'Plataforma', d: 'El hospital expide la carta de invitación médica. Preparamos los documentos del visado, reservamos vuelos y alojamiento cerca del hospital.' },
      { t: 'Tratamiento en China', dur: '2–6 semanas', who: 'Hospital + plataforma', d: 'Recogida en el aeropuerto, ingreso, interpretación médica, coordinación diaria y apoyo práctico para usted y sus acompañantes.' },
      { t: 'Alta y seguimiento en casa', dur: 'A largo plazo', who: 'Plataforma', d: 'Informe de alta traducido, pauta de medicación, citas de seguimiento a distancia y derivaciones de rehabilitación: la relación no termina en el aeropuerto.' }
    ],
    note: 'Tiempo medio desde el primer mensaje hasta la llegada a China: 2–4 semanas, según lo completa que esté la historia clínica y lo que tarde el visado.'
  },

  care: {
    eyebrow: 'Quién hace qué',
    title: 'Somos el puente, no el hospital — y lo ponemos por escrito',
    sub: 'Unos límites claros le protegen. Esto es exactamente lo que gestionamos nosotros y lo que solo el hospital puede hacer.',
    usT: 'De lo que se ocupa Jiuying',
    us: ['Primera consulta y valoración gratuitas', 'Recopilación, traducción y estructuración de su historia clínica', 'Elección del hospital y el especialista adecuados', 'Programación e interpretación de la videoconsulta', 'Apoyo con la carta de invitación médica y los documentos del visado', 'Vuelos, recogida en el aeropuerto, alojamiento y transporte local', 'Interpretación médica en el hospital y coordinación diaria', 'Apoyo práctico a los familiares que le acompañan', 'Traducción del informe de alta y coordinación del seguimiento a distancia'],
    hospT: 'De lo que se ocupa el hospital',
    hosp: ['Revisión de la historia clínica y emisión de la opinión médica', 'Diagnóstico y plan de tratamiento', 'Ingreso, cirugía, radioterapia y medicación', 'Cuidados de enfermería y gestión de la hospitalización', 'Facturas oficiales y documentación médica', 'Informe de alta y seguimiento clínico', 'Responsabilidad médica total por toda decisión clínica'],
    note: 'Todas las decisiones clínicas y toda la responsabilidad médica corresponden al hospital que le atiende. Jiuying no ejerce la medicina, no emite juicios médicos, no garantiza resultados terapéuticos y nunca cobra ni custodia los gastos médicos.'
  },

  cost: {
    eyebrow: 'Costes y pagos',
    title: 'Conoce la cifra antes de subir al avión',
    sub: 'Sin depósitos ni compromisos a ciegas. El presupuesto se emite después de que el especialista haya visto realmente su historia clínica.',
    items: [
      { t: 'Los gastos médicos van directamente al hospital', d: 'Usted paga al hospital directamente contra factura oficial detallada. Jiuying nunca cobra, custodia ni canaliza sus gastos médicos: es una regla estricta, no una preferencia.' },
      { t: 'Presupuesto por escrito antes de volar', d: 'Tras la videoconsulta recibe por escrito un rango de costes que cubre tratamiento, estancia y medicación prevista. Usted decide con toda la información.' },
      { t: 'Honorarios de coordinación acordados de antemano', d: 'Nuestros honorarios se presupuestan y confirman por escrito antes de que viaje. Sin cargos ocultos ni recargos inventados tras aterrizar.' },
      { t: 'Documentación lista para el seguro', d: 'Entregamos facturas detalladas, certificados de diagnóstico e historias clínicas en inglés para el reembolso; algunas aseguradoras internacionales pueden facturarse directamente.' }
    ],
    noteTitle: 'Lo que nunca haremos',
    noteText: 'No prometemos resultados, no usamos imágenes de antes y después como prueba de eficacia y no aceptamos efectivo ni transferencias fuera de contabilidad. Todo pasa por canales oficiales y facturados.',
    flowTitle: 'Cómo funciona el pago, paso a paso',
    flow: ['Videoconsulta y emisión del presupuesto por escrito', 'Usted confirma el plan y el presupuesto por escrito', 'Depósito solo para vuelos y alojamiento', 'Al ingresar, paga al hospital directamente según factura oficial', 'Cualquier acto adicional se presupuesta y aprueba antes de realizarse']
  },

  stories: {
    eyebrow: 'Experiencias de pacientes',
    title: 'Cómo fue esto para otras personas',
    sub: 'Publicadas con autorización del paciente y totalmente anonimizadas. Experiencias individuales únicamente; no constituyen promesa de resultado alguno.',
    items: [
      { text: 'Me dijeron que el tumor no se podía operar y que volviera a casa a estar cómodo. Jiuying envió mis imágenes a un hospital de Guangzhou y tres días después estaba en videollamada con un cirujano que me explicó una opción de radioterapia que nadie me había mencionado. Cinco sesiones, tres semanas en China y volví a casa con un plan de seguimiento.', name: 'Sr. L., 58 años', meta: 'Cáncer de hígado · Sudeste asiático' },
      { text: 'Lo que más me preocupaba era el idioma. Pero mi coordinador me habló en mi lengua desde el primer mensaje y hubo intérprete en todas las consultas. Nunca tuve que adivinar lo que el médico acababa de decirme.', name: 'Sra. N., 41 años', meta: 'Cáncer de mama · Vietnam' },
      { text: 'Lo que me convenció fue el dinero. Recibí una cifra por escrito antes de comprar el billete, pagué al hospital yo mismo y obtuve factura oficial, y el importe final se mantuvo dentro del rango que me dieron. Nada nuevo apareció después.', name: 'Sr. R., 63 años', meta: 'Cirugía cardíaca · Oriente Medio' }
    ]
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Lo que los pacientes preguntan antes de decidir',
    sub: 'Si algo sigue sin estar claro, escríbanos: responde una persona real, no un bot.',
    items: [
      { q: '¿Los hospitales chinos están realmente al nivel de los mejores de mi país?', a: 'Los hospitales con los que coordinamos son hospitales terciarios de grado A (三甲) y centros especializados nacionales, la categoría más alta del sistema chino. Su clasificación es pública y verificable en la Comisión Nacional de Salud. Varios de ellos realizan al año más procedimientos de radioterapia y cirugía que la mayoría de los grandes hospitales de otros países. Le damos el nombre del hospital y del médico antes de viajar para que lo compruebe usted mismo.' },
      { q: '¿Quién me tratará realmente? ¿Puedo saberlo de antemano?', a: 'Sí. Antes de comprometerse a nada recibe el nombre del hospital, del servicio y del médico responsable, con su cargo, además de una videoconsulta con ese médico. No enviamos a un paciente al hospital para que descubra allí quién le atiende.' },
      { q: 'No hablo nada de chino. ¿Cómo nos comunicaremos?', a: 'Dos niveles. Su coordinador habla su idioma y gestiona todo lo que ocurre fuera del hospital. Dentro, un intérprete médico asiste a las consultas, al ingreso y al alta. Los documentos escritos —plan de tratamiento, presupuesto, informe de alta— se entregan en su idioma.' },
      { q: '¿Qué documentación médica debo enviar?', a: 'Idealmente: imágenes (TC/RM/PET, mejor con los archivos DICOM originales), informes de anatomía patológica, analítica más reciente, resumen de tratamientos previos y lista de medicación actual. Si solo tiene un informe de alta, envíelo: le diremos qué falta.' },
      { q: '¿Cuánto tarda en empezar el tratamiento?', a: 'La prelectura lleva 2–3 días, la videoconsulta se programa normalmente en 3–5 días y el visado más el viaje suman 1–2 semanas. La mayoría empieza el tratamiento en las 1–2 semanas siguientes a su llegada a China. Del primer mensaje a la llegada suelen ser 2–4 semanas.' },
      { q: '¿Cuánto cuesta y cómo se paga?', a: 'Recibe un rango de costes por escrito tras la videoconsulta, antes de decidir. Los gastos médicos los paga usted directamente al hospital contra factura oficial. Nuestros honorarios de coordinación se acuerdan por escrito de antemano. Nunca custodiamos sus gastos médicos ni aceptamos efectivo.' },
      { q: '¿Puede acompañarme un familiar?', a: 'Sí, y lo recomendamos en tratamientos mayores. Ayudamos con la documentación de invitación para su visado, organizamos el alojamiento para ambos y gestionamos una cama de acompañante en la habitación si el hospital lo permite.' },
      { q: '¿Cómo funciona el visado médico?', a: 'El hospital expide una carta de invitación médica oficial a su nombre. Preparamos el paquete de documentación y le guiamos paso a paso. La mayoría de los pacientes son aprobados sin entrevista; los plazos dependen de su país, normalmente 1–2 semanas.' },
      { q: '¿Qué pasa después de volver a casa?', a: 'Se marcha con el informe de alta traducido y la pauta de medicación. Coordinamos consultas de seguimiento a distancia con el equipo que le trató, transmitimos resultados de anatomía patológica e imagen y organizamos derivaciones de rehabilitación o medicación cuando hacen falta.' },
      { q: '¿Son ustedes un hospital? ¿Quién responde si algo sale mal?', a: 'No, y ese es justamente el punto. Jiuying es un servicio de derivación y coordinación. Todo diagnóstico, tratamiento y decisión clínica corresponde al hospital, y toda la responsabilidad médica recae en el hospital según la legislación china. No ejercemos la medicina ni emitimos juicios médicos. Este límite consta por escrito en su contrato de servicio.' },
      { q: '¿Están seguros mis datos médicos?', a: 'Su historia clínica solo se comparte con los especialistas del hospital que revisan su caso, y únicamente con su autorización expresa. El tratamiento de datos cumple la ley china de protección de información personal y la normativa de transferencia transfronteriza. Puede pedirnos que borremos su expediente en cualquier momento.' }
    ],
    moreTitle: '¿Todavía tiene una pregunta?',
    moreText: 'Escríbanos y un coordinador responderá en 4 horas durante nuestro horario laboral (9:00–21:00 GMT+8, siete días por semana).',
    moreBtn: 'Preguntarnos directamente'
  },

  partners: {
    eyebrow: 'Colaboración de canal',
    title: 'Para agencias, clínicas y organizaciones comunitarias en el extranjero',
    sub: 'Si ya llega a pacientes que necesitan tratamientos que no existen en su país, puede conectarse a una red hospitalaria en expansión en lugar de quedar atado a un solo hospital.',
    whoT: 'Con quién trabajamos',
    who: ['Agencias de derivación médica y turismo de salud', 'Agencias de viaje y áreas de turismo médico', 'Centros de chequeos y clínicas privadas', 'Corredores de seguros y consultores de beneficios para empleados', 'Asociaciones y organizaciones de la comunidad china en el extranjero', 'Creadores de contenido locales en el ámbito de la salud'],
    doT: 'Qué hace un colaborador',
    dos: ['Llegar localmente a pacientes que necesitan atención imposible de obtener en su país', 'Realizar la primera consulta y cualificar la solicitud', 'Ayudar a recopilar y ordenar la historia clínica', 'Conectar al paciente con nosotros y organizar la videoconsulta', 'Apoyar al paciente en la organización del viaje'],
    earnT: 'Cómo gana el colaborador',
    earn: ['La comisión se abona cuando el paciente derivado completa el tratamiento', 'Sin cuota fija ni canon: nunca trasladamos costes operativos al colaborador', 'Las condiciones se acuerdan caso por caso en un contrato aparte', 'A medida que crece la red, el colaborador accede a más especialidades y hospitales'],
    boundT: 'Límites claros',
    bound: ['El colaborador no puede firmar, prometer ni cobrar en nombre del hospital', 'Sin publicidad engañosa ni promesas de curación o resultados', 'El colaborador nunca cobra los gastos médicos del paciente', 'La comunicación clínica es del hospital; el colaborador coordina localmente'],
    cta: 'Hablar de colaboración'
  },

  contact: {
    eyebrow: 'Contacto',
    title: 'Cuéntenos su situación. Respondemos en 4 horas.',
    sub: 'Envíe su historia clínica o simplemente describa la situación en su idioma. El primer estudio es gratuito y no genera ninguna obligación posterior.',
    wayEmail: 'Correo electrónico (preferible para historias clínicas)',
    wayHours: 'Horario de atención',
    wayHoursV: '9:00 – 21:00 GMT+8, siete días por semana',
    waySpeed: 'Primera respuesta',
    waySpeedV: 'En 4 horas',
    wayBase: 'Con sede en',
    wayBaseV: 'Guangzhou, China',
    formTitle: 'Enviar una consulta',
    fName: 'Nombre completo', fNamePh: 'ej. Nguyen Van A',
    fCountry: 'País / región', fCountryPh: 'ej. Vietnam',
    fContact: 'Correo electrónico o WhatsApp',
    fType: '¿Qué necesita?',
    fTypeOpts: ['Tratamiento oncológico', 'Segunda opinión / comité multidisciplinar', 'Cardiología', 'Neurocirugía', 'Traumatología', 'Chequeo médico', 'Rehabilitación MTC', 'Colaboración', 'Otro'],
    fMessage: 'Describa brevemente la situación',
    fMessagePh: 'Diagnóstico, qué le ha dicho su médico, qué ha probado ya y cuándo espera viajar…',
    fSubmit: 'Generar mi correo de consulta',
    fNote: 'Este formulario no tiene servidor detrás: al pulsar el botón se abre su propio cliente de correo con todo rellenado, de modo que su historia clínica nunca queda en un servidor de terceros. Si tiene archivos de imagen o anatomía patológica, adjúntelos a ese correo (DICOM, PDF o fotos, todos válidos).',
    fOkTitle: 'Su borrador de consulta está listo',
    fOkText: 'Su cliente de correo debería abrirse con el mensaje rellenado. Si no ocurre nada, permita las ventanas emergentes o escríbanos directamente.',
    stepsTitle: 'Qué ocurre después de enviarlo',
    steps: ['Un coordinador que habla su idioma responde en 4 horas', 'Usted envía la documentación médica que tenga', 'El hospital prelee su caso y emite una opinión', 'Se reúne con el médico por vídeo — y entonces decide usted']
  },

  footer: {
    about: 'La plataforma internacional de derivación médica Jiuying conecta a pacientes internacionales con hospitales terciarios de grado A de China. Nosotros gestionamos el recorrido: historia clínica, elección de centro, videoconsulta, visado, acogida y seguimiento; la medicina corresponde al hospital.',
    exploreT: 'Explorar', servicesT: 'Lo que gestionamos', contactT: 'Contacto',
    services: ['Radioterapia de precisión', 'Segunda opinión multidisciplinar', 'Cardiología', 'Neurocirugía', 'Traumatología', 'Chequeo médico', 'Rehabilitación MTC', 'Colaboración'],
    legal: 'Aviso legal: este sitio es un servicio de información y coordinación de derivación. No constituye asesoramiento médico, diagnóstico, recomendación terapéutica ni promesa de resultado clínico alguno. Las indicaciones, protocolos y riesgos son explicados al paciente por el hospital que le atiende, conforme a la legislación china. Los casos mostrados se publican con autorización del paciente y anonimizados. Los clientes de la región de Taiwán de China reciben servicio en las mismas condiciones que los de cualquier otra región.',
    rights: 'Todos los derechos reservados.',
    regions: 'Atendemos a pacientes en el sudeste asiático, Asia oriental, Europa, América, Oriente Medio, Asia meridional, África y Oceanía.'
  },

  common: {
    skip: 'Ir al contenido principal', close: 'Cerrar', menu: 'Menú',
    langLabel: 'Idioma', langHint: 'Elija su idioma',
    top: 'Volver arriba', required: 'Obligatorio',
    switchText: 'Ver este sitio en {lang}'
  },

  toast: {
    title: 'Hemos elegido un idioma y un estilo adecuados a su región',
    body: 'Según su conexión, el sitio se ha configurado en {lang}. Puede cambiarlo en cualquier momento desde el menú de la esquina superior derecha.',
    keep: 'Mantener', change: 'Cambiar'
  }

  });
})();
