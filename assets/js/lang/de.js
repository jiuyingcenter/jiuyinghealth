/* ==========================================================================
   lang/de.js — Deutsch (German)
   ========================================================================== */
(function () {
  'use strict';
  var JY = window.JY;

  JY.i18n.register('de', {
    tag: 'de', dir: 'ltr', region: 'eur', native: 'Deutsch', english: 'German'
  }, {

  meta: {
    title: 'Jiuying – Internationale Medizinvermittlung — Behandlung in Chinas Krankenhäusern der Klasse A',
    description: 'Jiuying verbindet internationale Patienten mit tertiären Klasse-A-Krankenhäusern in China: kostenlose Vorprüfung der Krankenakte, Videosprechstunde mit dem behandelnden Arzt, Einladungsschreiben für das Medizinvisum, Flughafenabholung, Krankenhausdolmetschen und Nachsorge nach der Rückkehr.',
    ogDescription: 'Ihre verlässliche Brücke zu Chinas tertiären Klasse-A-Krankenhäusern.'
  },

  brand: { name: 'Jiuying Internationale Medizinvermittlung', short: 'Jiuying Gesundheit', sub: 'JIUYING GLOBAL HEALTH' },

  topbar: {
    promo: 'Kostenfreie Vorprüfung der Krankenakte — vor der Reise eine Fachmeinung einholen',
    hours: 'Antwort innerhalb von 4 Stunden · 7 Tage pro Woche'
  },

  nav: {
    help: 'Unsere Hilfe', hospitals: 'Krankenhausnetz', specialties: 'Fachbereiche',
    process: 'Ablauf', cost: 'Kosten', faq: 'FAQ', partners: 'Partner',
    contact: 'Kontakt', cta: 'Kostenfreie Prüfung'
  },

  hero: {
    badgeTag: 'Seit 2026',
    badgeText: 'Vermittlungsservice für internationale Patienten · Sitz in Guangzhou, China',
    titleBefore: 'Sich in China behandeln lassen',
    titleEm: 'muss nicht kompliziert sein.',
    sub: 'Senden Sie uns Ihre Krankenakte. Wir vermitteln Sie an ein tertiäres Klasse-A-Krankenhaus in China, organisieren die Videosprechstunde mit dem behandelnden Arzt und begleiten Sie vom Medizinvisum über die Abholung am Flughafen und das Dolmetschen im Krankenhaus bis zur Nachsorge nach Ihrer Rückkehr.',
    ctaPrimary: 'Kostenfreie Prüfung starten',
    ctaSecondary: 'So funktioniert es',
    proof: ['Vorprüfung kostenfrei', 'Behandlungskosten direkt an das Krankenhaus', 'Koordinator in Ihrer Sprache', 'Schriftliche Kostenschätzung vor der Reise'],
    plan: {
      tag: 'Fall #JY-2609',
      title: 'Ihr Behandlungsplan',
      s1t: 'Akte erhalten und übersetzt', s1d: 'Bildgebung, Pathologie und Labor bereits gebündelt',
      s2t: 'Krankenhaus-Vorprüfung abgeschlossen', s2d: 'Onkologie-Team hat eine vorläufige Einschätzung abgegeben',
      s3t: 'Videosprechstunde terminiert', s3d: 'Direktes Gespräch mit Ihrem behandelnden Arzt',
      s4t: 'Medizinisches Einladungsschreiben ausgestellt', s4d: 'Vom Krankenhaus ausgestellt, fertig für Ihr Visum',
      k1v: '2–4 Wochen', k1l: 'Voraussichtlicher Aufenthalt',
      k2v: 'Schriftlich', k2l: 'Kostenschätzung'
    },
    chipA: 'Krankenhauszulassungen bei der Nationalen Gesundheitskommission prüfbar',
    chipB: '9 Sprachen, Koordination rund um die Uhr'
  },

  trust: {
    hospitals: 'Klasse-A-Krankenhäuser im Netzwerk',
    cities: 'Abgedeckte medizinische Zentren',
    countries: 'Betreute Länder und Regionen',
    response: 'Durchschnittliche erste Antwort'
  },

  help: {
    eyebrow: 'Woran Patienten scheitern',
    title: 'Das Problem, an dem Sie festhängen — und was wir dagegen tun',
    sub: 'Fast jeder internationale Patient, der uns kontaktiert, steckt an einer dieser sechs Stellen fest. Hier steht genau, wie jede davon gelöst wird.',
    items: [
      { t: 'Man hat Ihnen gesagt, es gebe keine Möglichkeiten mehr', d: 'Der Tumor gilt als inoperabel, oder Ihr Facharzt sieht keine weitere Behandlungsoption.', s: 'Wir organisieren eine multidisziplinäre Fallbesprechung (MDT) und eine formale Zweitmeinung in einem Klasse-A-Krankenhaus. Ein Team erfahrener Fachärzte liest dieselben Aufnahmen neu — und öffnet oft Türen, die man Ihnen als verschlossen beschrieben hat.' },
      { t: 'Die Behandlung ist zu Hause finanziell unerreichbar', d: 'Dasselbe Protokoll kostet privat zu Hause drei- bis fünfmal so viel, und die Versicherung übernimmt es nicht.', s: 'Vergleichbare Geräte und Fachärzte, meist zu einem Drittel bis zur Hälfte der Privatpreise in den USA oder Westeuropa — und Sie erhalten vor jeder Zusage eine schriftliche Kostenspanne.' },
      { t: 'Die Warteliste dauert Monate', d: 'Öffentliche Wartelisten verschieben Operation oder Bestrahlung um Monate, während die Erkrankung weiter fortschreitet.', s: 'Sobald der Plan feststeht, beginnen die meisten Patienten innerhalb von 1–2 Wochen nach der Ankunft mit der Behandlung; der Aufnahmetermin wird bestätigt, bevor Sie den Flug buchen.' },
      { t: 'Sie können nicht erkennen, welche chinesischen Krankenhäuser wirklich spitze sind', d: 'Die Suchergebnisse sind voller Werbung, und die echte Einstufung eines Hauses lässt sich nicht prüfen.', s: 'Wir arbeiten ausschließlich mit tertiären Klasse-A-Krankenhäusern (三甲) und nationalen Fachzentren. Jede Zulassung ist öffentlich prüfbar, und wir nennen Ihnen Krankenhaus und behandelnden Arzt vor der Reise schriftlich beim Namen.' },
      { t: 'Niemand spricht Ihre Sprache', d: 'Formulare, Visite, Einwilligungen, Entlassungsbericht — alles auf Chinesisch.', s: 'Ein Koordinator, der Ihre Sprache spricht, betreut Ihren Fall durchgehend, und ein medizinischer Dolmetscher ist bei Konsultationen, Aufnahme und Entlassung im Krankenhaus dabei.' },
      { t: 'Visum, Geld und Nachsorge sind eine Blackbox', d: 'Sie haben von Vermittlern gehört, die kassieren und verschwinden, und Sie sorgen sich um die Zeit nach der Rückkehr.', s: 'Das Krankenhaus stellt das medizinische Einladungsschreiben aus; Sie zahlen die Behandlungskosten direkt an das Krankenhaus gegen offizielle Rechnung, niemals an uns; und wir koordinieren weiter die Fernnachsorge nach Ihrer Rückkehr.' }
    ],
    bandTitle: 'Noch unsicher, ob China zu Ihrem Fall passt?',
    bandText: 'Senden Sie Ihre Unterlagen zur kostenfreien Vorprüfung. Wenn wir nicht wirklich helfen können, sagen wir es Ihnen offen — ohne Rechnung, ohne Druck.',
    bandBtn: 'Meine Akte senden'
  },

  why: {
    eyebrow: 'Warum China',
    title: 'Warum immer mehr internationale Patienten nach China fliegen',
    sub: 'Chinas Spitzenkrankenhäuser verbinden Gerätedichte, Fallzahlen und Tempo auf eine Weise, wie es nur wenige Gesundheitssysteme können.',
    items: [
      { t: 'Weltklasse-Geräte, und sie sind verfügbar', d: 'CyberKnife, TOMO, Ethos, PET-MR und da-Vinci-Operationsroboter sind in führenden Häusern in großer Zahl installiert — deshalb wird ein Behandlungsplatz in Tagen gerechnet, nicht in Monaten.' },
      { t: 'Fachärzte mit sehr hohen Fallzahlen', d: 'Ein erfahrener Chirurg oder Radioonkologe an einem nationalen Zentrum bearbeitet pro Jahr ein Vielfaches der Fälle vergleichbarer Fachkräfte andernorts. Wiederholung schafft klinisches Urteilsvermögen.' },
      { t: 'Diagnostik in Tagen statt Wochen', d: 'MRT, PET-CT, Pathologie und genomisches Profiling liegen meist innerhalb weniger Tage vor, sodass die Therapieentscheidung nicht in einer Untersuchungsschlange stecken bleibt.' },
      { t: 'Kosten, die sich planen lassen', d: 'Detaillierte offizielle Rechnungen, ausgestellt vom Krankenhaus selbst. Vergleichbare Protokolle kosten üblicherweise ein Drittel bis die Hälfte der Privatpreise in den USA oder Westeuropa.' },
      { t: 'Chinesische und westliche Medizin unter einem Dach', d: 'Onkologische Rehabilitation mit traditioneller chinesischer Medizin, Akupunktur und Physiotherapie gehören hier zur Regelversorgung — hilfreich für Appetit, Schlaf, Schmerz und Erholung während der Therapie.' },
      { t: 'Internationale Patientenbereiche sind eingespielt', d: 'Große Klasse-A-Häuser haben eigene Abteilungen für internationale Medizin, englischsprachiges Personal, standardisierte internationale Abrechnung und routinierte Abläufe für das Medizinvisum.' }
    ]
  },

  hospitals: {
    eyebrow: 'Krankenhausnetz',
    title: 'Ein landesweites Netz tertiärer Klasse-A-Krankenhäuser',
    sub: 'Wir koordinieren über die wichtigsten medizinischen Zentren Chinas. In welches Krankenhaus Sie vermittelt werden, hängt von Ihrer Erkrankung ab — nicht davon, wer uns die höchste Provision zahlt.',
    tabAll: 'Alle Städte',
    more: 'Weitere Krankenhäuser anzeigen',
    less: 'Liste einklappen',
    perCount: 'Krankenhäuser',
    level: 'Tertiär, Klasse A (三甲)',
    firstTag: 'Erster Partner',
    note: 'Die folgende Liste ist das Koordinationsnetz der Plattform. Welche dieser Häuser Ihren Fall übernehmen können, hängt von der Diagnose und der aktuellen Kooperationsliste ab. Ihr Koordinator bestätigt Krankenhaus und behandelnden Arzt vor der Reise schriftlich. Das Netz wird laufend erweitert.',
    empty: 'In dieser Stadt entspricht derzeit kein Krankenhaus dem Filter.'
  },

  tag: {
    onc: 'Onkologie', radio: 'Präzisionsbestrahlung', cardio: 'Herz-Kreislauf', neuro: 'Neurochirurgie',
    ortho: 'Orthopädie', gi: 'Verdauung & minimalinvasiv', tcm: 'TCM-Rehabilitation',
    transplant: 'Transplantation', fertility: 'Reproduktionsmedizin', checkup: 'Gesundheitscheck',
    complex: 'Komplexe & seltene Erkrankungen', endo: 'Endokrinologie'
  },

  city: {
    guangzhou: 'Guangzhou', shenzhen: 'Shenzhen', foshan: 'Foshan',
    dongguan: 'Dongguan', zhuhai: 'Zhuhai', shantou: 'Shantou'
  },

  spec: {
    eyebrow: 'Fachbereiche',
    title: 'Was wir für Sie organisieren können',
    sub: 'Dies sind die Bereiche mit den meisten internationalen Fällen. Ist Ihre Erkrankung nicht dabei, senden Sie sie trotzdem — wir sagen Ihnen ehrlich, ob wir helfen können.',
    badge1: '3–5 Sitzungen', badge2: 'Bericht in 48 Std.', badge3: 'Interventionell', badge4: 'Zerebrovaskulär',
    badge5: 'Gelenkersatz', badge6: 'Endoskopisch', badge7: 'Integrative Versorgung', badge8: 'Ergebnisse in derselben Woche',
    radio: { t: 'Präzisionsbestrahlung bei Krebs', d: 'CyberKnife, TOMO und Ethos mit Submillimeter-Genauigkeit. Mehrere Schemata sind in 3–5 Sitzungen abgeschlossen, sodass ein Aufenthalt von 2–4 Wochen meist genügt.', l1: 'CyberKnife · TOMO · Ethos', l2: 'Kurze Schemata', l3: 'Überwiegend ambulant' },
    mdt: { t: 'Multidisziplinäres Tumorboard', d: 'Chirurgie, medizinische Onkologie, Radioonkologie, Radiologie und Pathologie prüfen Ihren Fall gemeinsam und erstellen eine schriftliche Zweitmeinung.', l1: 'Schriftliche Zweitmeinung', l2: '5–8 Fachärzte pro Fall', l3: 'Bericht innerhalb von 48 Stunden' },
    cardio: { t: 'Kardiologie & Herzchirurgie', d: 'Koronarintervention, Klappenrekonstruktion und -ersatz, Ablation bei Rhythmusstörungen und Bypass-Operation in nationalen Herzcentern.', l1: 'PCI · TAVR · Ablation', l2: 'Nationale Herzcenter', l3: 'Postoperative Versorgung auf Intensivniveau' },
    neuro: { t: 'Neurochirurgie & zerebrovaskuläre Erkrankungen', d: 'Hirn- und Rückenmarkstumoren, Aneurysma-Coiling, Tiefe Hirnstimulation (DBS) und neurorehabilitation durch erfahrene Teams.', l1: 'Tumor · Aneurysma · DBS', l2: 'Intraoperatives Neuromonitoring', l3: 'Rehabilitationspfad' },
    ortho: { t: 'Orthopädie, Wirbelsäule & Gelenkersatz', d: 'Hüft- und Knieendoprothetik, Wirbelkanalentlastung und Rekonstruktion komplexer Verletzungen, mit strukturierter Rehabilitation im Haus.', l1: 'Hüfte · Knie · Wirbelsäule', l2: 'Fast-Recovery-Protokolle', l3: 'Rehabilitation inklusive' },
    gi: { t: 'Verdauungserkrankungen & minimalinvasive Chirurgie', d: 'Endoskopische Resektion, hepatobiliäre und pankreatische Chirurgie sowie Behandlung chronisch-entzündlicher Darmerkrankungen in Zentren mit hohem Fallvolumen.', l1: 'Endoskopie · HPB-Chirurgie', l2: 'Laparoskopischer Zugang', l3: 'Kurzer Klinikaufenthalt' },
    tcm: { t: 'Onkologische Rehabilitation mit TCM', d: 'Akupunktur, Phytotherapie und Physiotherapie begleitend zur Standardtherapie, bei Schmerzen, Appetitlosigkeit, Erschöpfung und Schlafproblemen.', l1: 'Integrative Onkologie', l2: 'Akupunktur · Phytotherapie', l3: 'Unterstützung in der Erholung' },
    checkup: { t: 'Umfassende Vorsorge & Früherkennung', d: 'Vollständige Untersuchung mit PET-MR, genomischer Risikoanalyse und ärztlicher Befundbesprechung — Ergebnisse und Termin in derselben Woche.', l1: 'PET-MR · Genomik', l2: 'Ärztliches Gespräch', l3: 'Bericht auf Englisch' }
  },

  process: {
    eyebrow: 'Der Weg',
    title: 'Sechs Schritte — von der ersten Nachricht bis zur Nachsorge zu Hause',
    sub: 'Nichts geschieht ohne Ihre Bestätigung. Krankenhaus, Arzt, Plan und Kostenschätzung werden bestätigt, bevor Sie überhaupt einen Flug buchen.',
    steps: [
      { t: 'Kostenfreie Beratung & Fallanlage', dur: 'Am selben Tag', who: 'Ihr Koordinator', d: 'Nennen Sie uns die Diagnose und senden Sie die Unterlagen, die Sie haben. Ein Koordinator in Ihrer Sprache antwortet innerhalb von 4 Stunden und legt Ihre Fallakte an.' },
      { t: 'Unterlagen sammeln & Krankenhaus-Vorprüfung', dur: '2–3 Tage', who: 'Plattform + Krankenhaus', d: 'Wir ordnen, übersetzen und strukturieren Ihre Bildgebung, Pathologie und Laborwerte; danach prüfen die Fachärzte die Akte und geben eine vorläufige Einschätzung ab.' },
      { t: 'Videosprechstunde mit dem Arzt', dur: 'Termin in 3–5 Tagen', who: 'Fachärzte des Krankenhauses', d: 'Ein direktes Videogespräch mit dem Arzt, der Sie behandeln würde. Sie erhalten Behandlungsplan, Kostenrahmen und voraussichtliche Aufenthaltsdauer schriftlich.' },
      { t: 'Medizinvisum & Reise', dur: '1–2 Wochen', who: 'Plattform', d: 'Das Krankenhaus stellt das medizinische Einladungsschreiben aus. Wir bereiten die Visumsunterlagen vor, buchen Flüge und eine Unterkunft nahe dem Krankenhaus.' },
      { t: 'Behandlung in China', dur: '2–6 Wochen', who: 'Krankenhaus + Plattform', d: 'Abholung am Flughafen, Aufnahme, medizinisches Dolmetschen, tägliche Koordination und praktische Unterstützung für Sie und Ihre Begleitung.' },
      { t: 'Entlassung & Nachsorge zu Hause', dur: 'Langfristig', who: 'Plattform', d: 'Übersetzter Entlassungsbericht, Medikationsplan, Ferntermine zur Nachsorge und Reha-Vermittlung — die Beziehung endet nicht am Flughafen.' }
    ],
    note: 'Durchschnittliche Zeit von der ersten Nachricht bis zur Ankunft in China: 2–4 Wochen, abhängig von Vollständigkeit der Unterlagen und Visumsdauer.'
  },

  care: {
    eyebrow: 'Wer übernimmt was',
    title: 'Wir sind die Brücke, nicht das Krankenhaus — und das schreiben wir auch so',
    sub: 'Klare Grenzen schützen Sie. Hier steht genau, was wir übernehmen und was ausschließlich das Krankenhaus darf.',
    usT: 'Was Jiuying übernimmt',
    us: ['Kostenfreie Erstberatung und Einschätzung', 'Sammeln, Übersetzen und Strukturieren Ihrer Unterlagen', 'Auswahl des passenden Krankenhauses und Facharztes', 'Terminierung und Dolmetschen der Videosprechstunde', 'Unterstützung bei Einladungsschreiben und Visumsunterlagen', 'Flüge, Flughafenabholung, Unterkunft und Transport vor Ort', 'Medizinisches Dolmetschen und tägliche Koordination', 'Praktische Hilfe für mitreisende Angehörige', 'Übersetzung des Entlassungsberichts und Koordination der Fernnachsorge'],
    hospT: 'Was das Krankenhaus übernimmt',
    hosp: ['Prüfung der Unterlagen und medizinische Stellungnahme', 'Diagnose und Behandlungsplan', 'Aufnahme, Operation, Bestrahlung und Medikation', 'Pflege und stationsinterne Versorgung', 'Offizielle Rechnungen und medizinische Dokumente', 'Entlassungsbericht und klinische Nachsorge', 'Volle medizinische Verantwortung für alle klinischen Entscheidungen'],
    note: 'Alle medizinischen Entscheidungen und die gesamte medizinische Haftung liegen beim behandelnden Krankenhaus. Jiuying übt keine Heilkunde aus, trifft keine medizinischen Urteile, gibt keine Heilungs- oder Erfolgszusagen und nimmt Ihre Behandlungskosten niemals entgegen oder verwahrt sie.'
  },

  cost: {
    eyebrow: 'Kosten & Zahlung',
    title: 'Sie sehen die Zahl, bevor Sie an Bord gehen',
    sub: 'Keine Anzahlung, keine Zusage ins Blaue hinein. Die Schätzung entsteht, nachdem der Facharzt Ihre Unterlagen tatsächlich gesehen hat.',
    items: [
      { t: 'Behandlungskosten gehen direkt an das Krankenhaus', d: 'Sie zahlen direkt an das Krankenhaus gegen eine offizielle, aufgeschlüsselte Rechnung. Jiuying nimmt Ihre Behandlungskosten niemals entgegen, verwahrt sie nicht und leitet sie nicht weiter — das ist eine feste Regel, keine Vorliebe.' },
      { t: 'Schriftliche Schätzung vor dem Abflug', d: 'Nach der Videosprechstunde erhalten Sie einen schriftlichen Kostenrahmen für Behandlung, Klinikaufenthalt und voraussichtliche Medikamente. Sie entscheiden mit vollständigen Informationen.' },
      { t: 'Koordinationsgebühr im Voraus vereinbart', d: 'Unsere Koordinationsgebühr wird vor der Reise beziffert und schriftlich bestätigt. Keine versteckten Kosten, keine nach der Landung erfundenen Aufschläge.' },
      { t: 'Dokumente, die für Versicherungen taugen', d: 'Wir stellen aufgeschlüsselte Rechnungen, Diagnosebescheinigungen und Krankenunterlagen auf Englisch für die Erstattung bereit; ausgewählte internationale Versicherer können direkt abgerechnet werden.' }
    ],
    noteTitle: 'Was wir niemals tun werden',
    noteText: 'Wir versprechen keine Ergebnisse, verwenden keine Vorher-Nachher-Bilder als Wirksamkeitsnachweis und nehmen weder Bargeld noch Buchungen außerhalb der Bücher an. Alles läuft über offizielle, abrechnungsfähige Wege.',
    flowTitle: 'So läuft die Zahlung, Schritt für Schritt',
    flow: ['Videosprechstunde und schriftliche Kostenschätzung', 'Sie bestätigen Plan und Schätzung schriftlich', 'Anzahlung nur für Flug und Unterkunft', 'Bei Aufnahme zahlen Sie das Krankenhaus direkt nach offizieller Rechnung', 'Jede zusätzliche Leistung wird vorab beziffert und von Ihnen freigegeben']
  },

  stories: {
    eyebrow: 'Patientenerfahrungen',
    title: 'Wie das für andere ausgesehen hat',
    sub: 'Mit Einwilligung der Patienten veröffentlicht und vollständig anonymisiert. Einzelerfahrungen — keine Zusage eines bestimmten Ergebnisses.',
    items: [
      { text: 'Man sagte mir, der Tumor sei nicht operabel und ich solle nach Hause gehen und es mir bequem machen. Jiuying schickte meine Aufnahmen an ein Krankenhaus in Guangzhou, und drei Tage später sprach ich per Video mit einem Chirurgen, der mir eine Bestrahlungsoption erklärte, von der niemand gesprochen hatte. Fünf Sitzungen, drei Wochen in China, und ich kam mit einem Nachsorgeplan nach Hause.', name: 'Herr L., 58', meta: 'Leberkrebs · Südostasien' },
      { text: 'Am meisten Sorgen machte mir die Sprache. Aber mein Koordinator sprach von der ersten Nachricht an meine Sprache, und bei jeder Konsultation war ein Dolmetscher im Raum. Ich musste nie raten, was der Arzt gerade gesagt hatte.', name: 'Frau N., 41', meta: 'Brustkrebs · Vietnam' },
      { text: 'Überzeugt hat mich das Geld. Ich bekam eine Zahl schriftlich, bevor ich das Ticket kaufte, zahlte das Krankenhaus selbst und erhielt eine offizielle Rechnung, und die Endabrechnung blieb im angegebenen Rahmen. Danach wurde nichts mehr erfunden.', name: 'Herr R., 63', meta: 'Herzoperation · Naher Osten' }
    ]
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    title: 'Fragen, die Patienten vor der Entscheidung stellen',
    sub: 'Ist noch etwas unklar, schreiben Sie uns — es antwortet ein Mensch, kein Bot.',
    items: [
      { q: 'Sind chinesische Krankenhäuser wirklich mit den Top-Kliniken zu Hause vergleichbar?', a: 'Die Häuser, mit denen wir koordinieren, sind tertiäre Klasse-A-Krankenhäuser (三甲) und nationale Fachzentren — die höchste Stufe im chinesischen System. Ihre Einstufung ist öffentlich und über die Nationale Gesundheitskommission prüfbar. Mehrere von ihnen führen pro Jahr mehr Bestrahlungen und Operationen durch als die meisten großen Kliniken anderswo. Wir nennen Krankenhaus und Arzt vor der Reise, damit Sie selbst prüfen können.' },
      { q: 'Wer behandelt mich eigentlich? Kann ich das vorher erfahren?', a: 'Ja. Bevor Sie sich zu irgendetwas verpflichten, erhalten Sie Name des Krankenhauses, der Abteilung sowie Name und Titel des behandelnden Arztes — plus eine Videosprechstunde mit genau diesem Arzt. Wir schicken niemanden in ein Krankenhaus, der erst vor Ort erfährt, wer ihn behandelt.' },
      { q: 'Ich spreche kein Chinesisch. Wie funktioniert die Kommunikation?', a: 'Zwei Ebenen. Ihr Koordinator spricht Ihre Sprache und regelt alles außerhalb des Krankenhauses. Im Krankenhaus begleitet ein medizinischer Dolmetscher Konsultationen, Aufnahme und Entlassung. Schriftliche Unterlagen — Behandlungsplan, Kostenschätzung, Entlassungsbericht — erhalten Sie in Ihrer Sprache.' },
      { q: 'Welche Unterlagen soll ich schicken?', a: 'Im Idealfall: Bildgebung (CT/MRT/PET, am besten mit den Original-DICOM-Dateien), Pathologieberichte, aktuelle Blutwerte, Zusammenfassung bisheriger Behandlungen und die aktuelle Medikamentenliste. Haben Sie nur einen Entlassungsbericht, schicken Sie diesen — wir sagen Ihnen, was fehlt.' },
      { q: 'Wie schnell kann die Behandlung beginnen?', a: 'Die Vorprüfung dauert 2–3 Tage, die Videosprechstunde wird meist innerhalb von 3–5 Tagen terminiert, Visum und Reise benötigen 1–2 Wochen. Die meisten Patienten beginnen innerhalb von 1–2 Wochen nach der Ankunft in China. Von der ersten Nachricht bis zur Ankunft sind es meist 2–4 Wochen.' },
      { q: 'Wie viel kostet es, und wie bezahle ich?', a: 'Sie erhalten nach der Videosprechstunde und vor Ihrer Entscheidung einen schriftlichen Kostenrahmen. Die Behandlungskosten zahlen Sie selbst direkt an das Krankenhaus gegen offizielle Rechnung. Unsere Koordinationsgebühr wird vorab schriftlich vereinbart. Wir verwahren Ihre Behandlungskosten niemals und nehmen kein Bargeld an.' },
      { q: 'Kann mich ein Angehöriger begleiten?', a: 'Ja — bei größeren Behandlungen empfehlen wir es sogar. Wir helfen bei den Einladungsunterlagen für das Visum der Begleitung, organisieren die Unterkunft für Sie beide und richten im Krankenhaus, wo erlaubt, ein Begleitbett ein.' },
      { q: 'Wie läuft das Medizinvisum ab?', a: 'Das Krankenhaus stellt ein offizielles, auf Ihren Namen ausgestelltes Einladungsschreiben aus. Wir stellen das Dokumentenpaket zusammen und führen Sie Schritt für Schritt durch den Antrag. Die meisten Patienten werden ohne Interview zugelassen; die Dauer hängt von Ihrem Land ab, meist 1–2 Wochen.' },
      { q: 'Was passiert nach meiner Rückkehr?', a: 'Sie reisen mit übersetztem Entlassungsbericht und Medikationsplan ab. Wir koordinieren Fern-Nachsorgetermine mit Ihrem Behandlungsteam, übermitteln Pathologie- und Bildbefunde und vermitteln bei Bedarf Rehabilitation oder Medikation.' },
      { q: 'Sind Sie ein Krankenhaus? Wer haftet, wenn etwas schiefgeht?', a: 'Nein — und darauf kommt es an. Jiuying ist ein Vermittlungs- und Koordinationsdienst. Alle Diagnosen, Behandlungen und klinischen Entscheidungen trifft das Krankenhaus, und die gesamte medizinische Haftung liegt nach chinesischem Recht beim Krankenhaus. Wir üben keine Heilkunde aus und treffen keine medizinischen Urteile. Diese Grenze ist in Ihrem Dienstleistungsvertrag festgeschrieben.' },
      { q: 'Sind meine medizinischen Daten sicher?', a: 'Ihre Akte wird nur den Krankenhausärzten zugänglich gemacht, die Ihren Fall prüfen — und nur mit Ihrer ausdrücklichen Einwilligung. Die Verarbeitung folgt dem chinesischen Gesetz zum Schutz personenbezogener Daten und den Regeln für grenzüberschreitende Datenübermittlung. Sie können jederzeit die Löschung verlangen.' }
    ],
    moreTitle: 'Noch eine Frage?',
    moreText: 'Schreiben Sie uns — ein Koordinator antwortet innerhalb von 4 Stunden während unserer Arbeitszeiten (9:00–21:00 GMT+8, sieben Tage pro Woche).',
    moreBtn: 'Direkt fragen'
  },

  partners: {
    eyebrow: 'Kanalpartnerschaft',
    title: 'Für Agenturen, Kliniken und Gemeinschaftsorganisationen im Ausland',
    sub: 'Wenn Sie bereits Patienten erreichen, die vor Ort keine Behandlung bekommen können, schließen Sie sich an ein wachsendes Krankenhausnetz an, statt an ein einzelnes Haus gebunden zu sein.',
    whoT: 'Mit wem wir arbeiten',
    who: ['Vermittlungsagenturen und Medizintouristik-Anbieter', 'Reisebüros und Bereiche für Medizinreisen', 'Vorsorgezentren und Privatkliniken', 'Versicherungsmakler und Berater für betriebliche Leistungen', 'Chinesische Gemeinschaftsorganisationen im Ausland', 'Lokale Gesundheits-Content-Ersteller'],
    doT: 'Was ein Partner tut',
    dos: ['Patienten vor Ort erreichen, die eine Behandlung brauchen, die es bei ihnen nicht gibt', 'Erstberatung durchführen und die Anfrage einordnen', 'Beim Sammeln und Ordnen der Krankenakte helfen', 'Den Patienten mit uns verbinden und die Videosprechstunde organisieren', 'Den Patienten bei der Reiseplanung unterstützen'],
    earnT: 'Wie Partner verdienen',
    earn: ['Provision wird gezahlt, nachdem der vermittelte Patient die Behandlung abgeschlossen hat', 'Keine Fixgebühr, keine Eintrittsgebühr — wir wälzen unsere Betriebskosten nie auf Partner ab', 'Die Sätze werden im Einzelfall in einer separaten Kooperationsvereinbarung geregelt', 'Mit dem Wachstum des Netzes erhalten Partner Zugang zu mehr Fachbereichen und Häusern'],
    boundT: 'Klare Grenzen',
    bound: ['Partner dürfen im Namen des Krankenhauses nichts unterschreiben, zusagen oder kassieren', 'Keine irreführende Werbung, keine Heilungs- oder Erfolgsversprechen', 'Partner nehmen niemals Behandlungskosten des Patienten entgegen', 'Klinische Kommunikation bleibt beim Krankenhaus; Partner koordinieren vor Ort'],
    cta: 'Partnerschaft besprechen'
  },

  contact: {
    eyebrow: 'Kontakt aufnehmen',
    title: 'Sagen Sie uns, womit Sie es zu tun haben. Wir antworten in 4 Stunden.',
    sub: 'Senden Sie Ihre Unterlagen, oder beschreiben Sie die Situation einfach in Ihrer Sprache. Die erste Prüfung ist kostenlos, und danach entsteht keine Verpflichtung.',
    wayEmail: 'E-Mail (für Krankenakten bevorzugt)',
    wayHours: 'Arbeitszeiten',
    wayHoursV: '9:00 – 21:00 GMT+8, sieben Tage pro Woche',
    waySpeed: 'Erste Antwort',
    waySpeedV: 'Innerhalb von 4 Stunden',
    wayBase: 'Sitz in',
    wayBaseV: 'Guangzhou, China',
    formTitle: 'Anfrage senden',
    fName: 'Vollständiger Name', fNamePh: 'z. B. Nguyen Van A',
    fCountry: 'Land / Region', fCountryPh: 'z. B. Vietnam',
    fContact: 'E-Mail oder WhatsApp',
    fType: 'Was benötigen Sie?',
    fTypeOpts: ['Krebsbehandlung', 'Zweitmeinung / Tumorboard', 'Kardiologie', 'Neurochirurgie', 'Orthopädie', 'Gesundheitscheck', 'TCM-Rehabilitation', 'Partnerschaft', 'Etwas anderes'],
    fMessage: 'Beschreiben Sie die Situation kurz',
    fMessagePh: 'Diagnose, was Ihr Arzt gesagt hat, was Sie schon versucht haben und wann Sie reisen möchten…',
    fSubmit: 'Meine Anfrage-E-Mail erstellen',
    fNote: 'Dieses Formular hat keinen Server dahinter: Der Button öffnet Ihr eigenes E-Mail-Programm mit bereits ausgefülltem Inhalt, sodass Ihre Krankenakte auf keinem fremden Server liegt. Haben Sie Bild- oder Pathologiedateien, fügen Sie sie dieser E-Mail als Anhang bei (DICOM, PDF oder Fotos sind alle möglich).',
    fOkTitle: 'Ihr Anfrage-Entwurf ist bereit',
    fOkText: 'Ihr E-Mail-Programm sollte sich mit dem ausgefüllten Text öffnen. Passiert nichts, erlauben Sie bitte Pop-ups oder schreiben Sie uns direkt.',
    stepsTitle: 'Was nach dem Senden passiert',
    steps: ['Ein Koordinator in Ihrer Sprache antwortet innerhalb von 4 Stunden', 'Sie senden die Unterlagen, die Sie haben', 'Das Krankenhaus prüft vorab und gibt eine Einschätzung ab', 'Sie sprechen per Video mit dem Arzt — dann entscheiden Sie']
  },

  footer: {
    about: 'Die Jiuying Internationale Medizinvermittlung verbindet internationale Patienten mit tertiären Klasse-A-Krankenhäusern in China. Wir übernehmen den Weg — Akte, Auswahl, Videosprechstunde, Visum, Empfang und Nachsorge; die Medizin liegt beim Krankenhaus.',
    exploreT: 'Entdecken', servicesT: 'Was wir organisieren', contactT: 'Kontakt',
    services: ['Präzisionsbestrahlung', 'Multidisziplinäre Zweitmeinung', 'Kardiologie', 'Neurochirurgie', 'Orthopädie', 'Gesundheitscheck', 'TCM-Rehabilitation', 'Kanalpartnerschaft'],
    legal: 'Haftungsausschluss: Diese Website ist ein Informations- und Vermittlungskoordinationsdienst. Sie stellt keine medizinische Beratung, keine Diagnose, keine Behandlungsempfehlung und keine Zusage eines klinischen Ergebnisses dar. Indikationen, Protokolle und Risiken werden dem Patienten vom behandelnden Krankenhaus nach chinesischem Recht erläutert. Die gezeigten Fälle sind mit Einwilligung der Patienten veröffentlicht und anonymisiert. Kunden aus der Region Taiwan in China werden zu denselben Bedingungen betreut wie alle anderen Regionen.',
    rights: 'Alle Rechte vorbehalten.',
    regions: 'Wir betreuen Patienten in Südostasien, Ostasien, Europa, Amerika, dem Nahen Osten, Südasien, Afrika und Ozeanien.'
  },

  common: {
    skip: 'Zum Hauptinhalt springen', close: 'Schließen', menu: 'Menü',
    langLabel: 'Sprache', langHint: 'Wählen Sie Ihre Sprache',
    top: 'Nach oben', required: 'Pflichtfeld',
    switchText: 'Diese Seite auf {lang} ansehen'
  },

  toast: {
    title: 'Wir haben Sprache und Farbstil an Ihre Region angepasst',
    body: 'Aufgrund Ihrer Verbindung wurde die Seite auf {lang} eingestellt. Sie können sie jederzeit über das Menü oben rechts ändern.',
    keep: 'Beibehalten', change: 'Ändern'
  }

  });
})();
