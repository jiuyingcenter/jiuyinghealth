/* ==========================================================================
   data/site.js — non-translatable site data:
   icons, country→region→locale map, hospital network, stats, contact info.
   All human-readable copy lives in assets/js/lang/*.js instead.
   ========================================================================== */
(function () {
  'use strict';
  var JY = (window.JY = window.JY || {});

  /* ============================== icons ============================== */
  var P = {
    check: '<path d="M20 6 9 17l-5-5"/>',
    checkCircle: '<path d="M22 11.1V12a10 10 0 1 1-5.9-9.1"/><path d="M22 4 12 14.01l-3-3"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowLeft: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
    chevronDown: '<path d="m6 9 6 6 6-6"/>',
    chevronRight: '<path d="m9 18 6-6-6-6"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18Z"/>',
    languages: '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
    shieldCheck: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>',
    whatsapp: '<path d="M20.5 11.6A8.4 8.4 0 0 1 7.9 18.4L3.5 20l1.7-4.3A8.4 8.4 0 1 1 20.5 11.6Z"/><path d="M8.8 8.6c.2-.4.4-.4.7-.4h.6c.2 0 .5 0 .8.6l.9 2.2c.1.3 0 .5-.1.7l-.5.7c-.2.2-.4.3-.2.6a6.7 6.7 0 0 0 2.9 2.4c.3.1.5 0 .6-.2l.7-.9c.2-.2.4-.3.6-.1l2.2 1.1c.3.1.4.4.2.7-.5.9-1.3 1.3-2.1 1.4-.6.1-1.2 0-2.8-.7a10.6 10.6 0 0 1-4.4-4.4c-.7-1.6-.8-2.2-.7-2.8.1-.8.5-1.6 1.4-2.1Z"/>',
    chat: '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.9 9.9 0 0 1-2.8-.4L4 21l1.4-4.3A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5Z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 11h18"/>',
    heart: '<path d="M20.8 5.6a5.1 5.1 0 0 0-7.2 0L12 7.2l-1.6-1.6a5.1 5.1 0 0 0-7.2 7.2l8.8 8.8 8.8-8.8a5.1 5.1 0 0 0 0-7.2Z"/>',
    pulse: '<path d="M3 12h4l2.5-6 4 12 3-6h4.5"/>',
    stethoscope: '<path d="M4 3v6a5 5 0 0 0 10 0V3"/><path d="M4 3H2M14 3h2"/><path d="M9 14v2a5 5 0 0 0 10 0v-1"/><circle cx="19" cy="12" r="2"/>',
    hospital: '<path d="M12 6v4M8 10v.01M16 10v.01"/><path d="M10 3h4a2 2 0 0 1 2 2v11a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V5a2 2 0 0 1 2-2Z"/><path d="M6 21h12"/>',
    building: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2"/>',
    mapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    plane: '<path d="M17.8 19.2 16 11l3.5-3.5a2 2 0 0 0-2.8-2.8L13 8 4.8 6.2a.5.5 0 0 0-.5.8l3 3-2.2 2.2a1.4 1.4 0 0 0 0 2l1.7 1.7a1.4 1.4 0 0 0 2 0l2.2-2.2 3 3a.5.5 0 0 0 .8-.5Z"/>',
    passport: '<rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="11" r="3"/><path d="M9 17h6"/>',
    luggage: '<rect x="6" y="8" width="12" height="13" rx="2"/><path d="M9 8V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3"/><path d="M9 12v5M15 12v5"/>',
    bed: '<path d="M3 18V7M3 12h18v6"/><path d="M21 18v-2a4 4 0 0 0-4-4H7"/><circle cx="7.5" cy="9.5" r="1.5"/>',
    file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/>',
    clipboard: '<rect x="8" y="3" width="8" height="4" rx="1"/><path d="M16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/><path d="M9 12h6M9 16h4"/>',
    users: '<path d="M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="3"/><path d="M22 20v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    handshake: '<path d="m11 17 2 2 1-1"/><path d="m14 14 2 2 1-1"/><path d="M8 15l-2 2 1 1"/><path d="M3 13l3-3 5 2 3-3 3 3 4-4"/><path d="M3 13l3 4h6l2-2"/><path d="M7 10V8l3-3 3 3v2"/>',
    money: '<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M7 12h.01M17 12h.01"/>',
    receipt: '<path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2Z"/><path d="M9 8h6M9 12h6"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9L6.6 20l1-6.1L3.2 9.5l6.1-.9Z"/>',
    sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><path d="m6.3 6.3 2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/>',
    microscope: '<path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 18a5 5 0 0 0 2-7l-4-4-3 3 4 4"/><path d="M9 11 6 8a2 2 0 0 1 0-2.8l1.8-1.8a2 2 0 0 1 2.8 0L13 6"/><path d="M8 8l3 3"/>',
    brain: '<path d="M9.5 3a3 3 0 0 0-3 3 3 3 0 0 0-1.5 5.6A3 3 0 0 0 6 17a3 3 0 0 0 3.5 3h1"/><path d="M14.5 3a3 3 0 0 1 3 3 3 3 0 0 1 1.5 5.6A3 3 0 0 1 18 17a3 3 0 0 1-3.5 3h-1"/><path d="M9.5 3A3 3 0 0 1 12 4.5 3 3 0 0 1 14.5 3"/><path d="M12 4.5V20"/>',
    bone: '<path d="M8.5 4.5A3.5 3.5 0 0 0 5 8c0 1.4.8 2.6 2 3.2L16 19.3a3.5 3.5 0 1 0 2.5-2.5L10.2 8.5A3.5 3.5 0 0 0 8.5 4.5Z"/><path d="M5.5 5.5 8 8"/><path d="M16 16l2.5 2.5"/>',
    droplet: '<path d="M12 3s6 6.4 6 10.5A6 6 0 0 1 6 13.5C6 9.4 12 3 12 3Z"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 4 13c0-5 5-9 16-9 0 11-4 16-9 16Z"/><path d="M4 20c3-3 7-6 9-9"/>',
    video: '<rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 10 6-4v12l-6-4Z"/>',
    translate: '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    alert: '<path d="M12 3 2.5 20h19L12 3Z"/><path d="M12 9v5M12 17h.01"/>',
    quote: '<path d="M9 7H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v1a3 3 0 0 1-3 3"/><path d="M20 7h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v1a3 3 0 0 1-3 3"/>',
    arrowUp: '<path d="M12 19V5M6 11l6-6 6 6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    award: '<circle cx="12" cy="9" r="5.5"/><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7"/>',
    flask: '<path d="M9 3h6"/><path d="M10 3v6.5L5.3 18A2 2 0 0 0 7 21h10a2 2 0 0 0 1.7-3L14 9.5V3"/><path d="M7.5 14h9"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/>'
  };

  /* width/height are presentation attributes, so any CSS rule still wins.
     16px is the baseline for inline icons that no component sizes explicitly. */
  function icon(name, cls, style) {
    var body = P[name] || P.check;
    return '<svg class="' + (cls || 'ic') + '" viewBox="0 0 24 24" width="16" height="16" ' +
      'fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" ' +
      'stroke-linejoin="round" aria-hidden="true" ' +
      (style ? 'style="' + style + '" ' : '') + '>' + body + '</svg>';
  }

  /* ======================= country -> region -> locale ======================= */
  /* region codes: sea eas eur ame mea sas afr oce                              */
  var COUNTRY = {
    /* ---- Southeast Asia ---- */
    VN: { region: 'sea', locale: 'vi' }, TH: { region: 'sea', locale: 'th' },
    ID: { region: 'sea' }, MY: { region: 'sea' }, SG: { region: 'sea' },
    PH: { region: 'sea' }, KH: { region: 'sea' }, LA: { region: 'sea' },
    MM: { region: 'sea' }, BN: { region: 'sea' }, TL: { region: 'sea' },
    /* ---- East Asia ---- */
    CN: { region: 'eas', locale: 'zh-CN' }, TW: { region: 'eas', locale: 'zh-TW' },
    HK: { region: 'eas', locale: 'zh-TW' }, MO: { region: 'eas', locale: 'zh-TW' },
    JP: { region: 'eas' }, KR: { region: 'eas' }, MN: { region: 'eas' },
    /* ---- Europe ---- */
    FR: { region: 'eur', locale: 'fr' }, DE: { region: 'eur', locale: 'de' },
    AT: { region: 'eur', locale: 'de' }, CH: { region: 'eur', locale: 'de' },
    LI: { region: 'eur', locale: 'de' }, ES: { region: 'eur', locale: 'es' },
    AD: { region: 'eur', locale: 'es' }, PT: { region: 'eur' }, IT: { region: 'eur' },
    NL: { region: 'eur' }, BE: { region: 'eur' }, LU: { region: 'eur' },
    GB: { region: 'eur' }, IE: { region: 'eur' }, SE: { region: 'eur' },
    NO: { region: 'eur' }, DK: { region: 'eur' }, FI: { region: 'eur' },
    IS: { region: 'eur' }, PL: { region: 'eur' }, CZ: { region: 'eur' },
    SK: { region: 'eur' }, HU: { region: 'eur' }, RO: { region: 'eur' },
    BG: { region: 'eur' }, GR: { region: 'eur' }, HR: { region: 'eur' },
    SI: { region: 'eur' }, RS: { region: 'eur' }, UA: { region: 'eur' },
    RU: { region: 'eur' }, BY: { region: 'eur' }, EE: { region: 'eur' },
    LV: { region: 'eur' }, LT: { region: 'eur' }, MT: { region: 'eur' },
    CY: { region: 'eur' }, AL: { region: 'eur' }, MK: { region: 'eur' },
    /* ---- Americas ---- */
    US: { region: 'ame' }, CA: { region: 'ame' }, MX: { region: 'ame', locale: 'es' },
    BR: { region: 'ame' }, AR: { region: 'ame', locale: 'es' }, CL: { region: 'ame', locale: 'es' },
    CO: { region: 'ame', locale: 'es' }, PE: { region: 'ame', locale: 'es' },
    EC: { region: 'ame', locale: 'es' }, UY: { region: 'ame', locale: 'es' },
    PY: { region: 'ame', locale: 'es' }, VE: { region: 'ame', locale: 'es' },
    BO: { region: 'ame', locale: 'es' }, CR: { region: 'ame', locale: 'es' },
    PA: { region: 'ame', locale: 'es' }, GT: { region: 'ame', locale: 'es' },
    DO: { region: 'ame', locale: 'es' }, PR: { region: 'ame', locale: 'es' },
    CU: { region: 'ame', locale: 'es' }, HN: { region: 'ame', locale: 'es' },
    NI: { region: 'ame', locale: 'es' }, SV: { region: 'ame', locale: 'es' },
    JM: { region: 'ame' }, TT: { region: 'ame' }, BS: { region: 'ame' },
    /* ---- Middle East & North Africa ---- */
    SA: { region: 'mea', locale: 'ar' }, AE: { region: 'mea', locale: 'ar' },
    QA: { region: 'mea', locale: 'ar' }, KW: { region: 'mea', locale: 'ar' },
    BH: { region: 'mea', locale: 'ar' }, OM: { region: 'mea', locale: 'ar' },
    YE: { region: 'mea', locale: 'ar' }, JO: { region: 'mea', locale: 'ar' },
    LB: { region: 'mea', locale: 'ar' }, IQ: { region: 'mea', locale: 'ar' },
    SY: { region: 'mea', locale: 'ar' }, PS: { region: 'mea', locale: 'ar' },
    EG: { region: 'mea', locale: 'ar' }, LY: { region: 'mea', locale: 'ar' },
    MA: { region: 'mea', locale: 'ar' }, DZ: { region: 'mea', locale: 'ar' },
    TN: { region: 'mea', locale: 'ar' }, SD: { region: 'mea', locale: 'ar' },
    MR: { region: 'mea', locale: 'ar' }, IR: { region: 'mea' }, IL: { region: 'mea' },
    TR: { region: 'mea' },
    /* ---- South Asia ---- */
    IN: { region: 'sas' }, PK: { region: 'sas' }, BD: { region: 'sas' },
    LK: { region: 'sas' }, NP: { region: 'sas' }, AF: { region: 'sas' },
    MV: { region: 'sas' }, BT: { region: 'sas' },
    /* ---- Africa (sub-Saharan) ---- */
    NG: { region: 'afr' }, KE: { region: 'afr' }, ZA: { region: 'afr' },
    GH: { region: 'afr' }, TZ: { region: 'afr' }, UG: { region: 'afr' },
    ET: { region: 'afr' }, ZW: { region: 'afr' }, ZM: { region: 'afr' },
    MZ: { region: 'afr' }, AO: { region: 'afr' }, SN: { region: 'afr', locale: 'fr' },
    CI: { region: 'afr', locale: 'fr' }, ML: { region: 'afr', locale: 'fr' },
    CM: { region: 'afr', locale: 'fr' }, CD: { region: 'afr', locale: 'fr' },
    BJ: { region: 'afr', locale: 'fr' }, BF: { region: 'afr', locale: 'fr' },
    NE: { region: 'afr', locale: 'fr' }, TD: { region: 'afr', locale: 'fr' },
    GA: { region: 'afr', locale: 'fr' }, CG: { region: 'afr', locale: 'fr' },
    RW: { region: 'afr', locale: 'fr' }, MG: { region: 'afr', locale: 'fr' },
    /* ---- Oceania ---- */
    AU: { region: 'oce' }, NZ: { region: 'oce' }, FJ: { region: 'oce' },
    PG: { region: 'oce' }, SB: { region: 'oce' }, VU: { region: 'oce' },
    WS: { region: 'oce' }, TO: { region: 'oce' }, NC: { region: 'oce' }
  };

  /* Region defaults — used when the visitor's own language is not served. */
  var REGIONS = {
    sea: { defaultLocale: 'en' },
    eas: { defaultLocale: 'en' },
    eur: { defaultLocale: 'en' },
    ame: { defaultLocale: 'en' },
    mea: { defaultLocale: 'ar' },
    sas: { defaultLocale: 'en' },
    afr: { defaultLocale: 'en' },
    oce: { defaultLocale: 'en' }
  };

  /* ============================ hospital network ============================
     `name` carries the official name in the languages that have one; every
     other language falls back to `en`. Specialties use keys resolved from
     lang files (tag.*). Edit this list to update the network.
     ======================================================================== */
  var HOSPITALS = [
    /* ---- Guangzhou ---- */
    { id: 'jsz', city: 'guangzhou', first: true, tags: ['radio', 'onc', 'tcm'],
      name: { en: 'Guangzhou University of Chinese Medicine Jinshazhou Hospital', zh: '广州中医药大学金沙洲医院', tw: '廣州中醫藥大學金沙洲醫院' } },
    { id: 'zssy1', city: 'guangzhou', tags: ['complex', 'gi', 'transplant'],
      name: { en: 'The First Affiliated Hospital, Sun Yat-sen University', zh: '中山大学附属第一医院', tw: '中山大學附屬第一醫院' } },
    { id: 'nanfang', city: 'guangzhou', tags: ['onc', 'transplant'],
      name: { en: 'Nanfang Hospital, Southern Medical University', zh: '南方医科大学南方医院', tw: '南方醫科大學南方醫院' } },
    { id: 'gdph', city: 'guangzhou', tags: ['cardio'],
      name: { en: 'Guangdong Provincial People\'s Hospital', zh: '广东省人民医院', tw: '廣東省人民醫院' } },
    { id: 'sysucc', city: 'guangzhou', tags: ['onc', 'radio'],
      name: { en: 'Sun Yat-sen University Cancer Center', zh: '中山大学肿瘤防治中心', tw: '中山大學腫瘤防治中心' } },
    { id: 'zssy3', city: 'guangzhou', tags: ['complex', 'endo'],
      name: { en: 'The Third Affiliated Hospital, Sun Yat-sen University', zh: '中山大学附属第三医院', tw: '中山大學附屬第三醫院' } },
    { id: 'gdhtcm', city: 'guangzhou', tags: ['tcm'],
      name: { en: 'Guangdong Provincial Hospital of Traditional Chinese Medicine', zh: '广东省中医院', tw: '廣東省中醫院' } },
    { id: 'gyfy1', city: 'guangzhou', tags: ['complex', 'checkup'],
      name: { en: 'The First Affiliated Hospital, Guangzhou Medical University', zh: '广州医科大学附属第一医院', tw: '廣州醫科大學附屬第一醫院' } },
    { id: 'sysm', city: 'guangzhou', tags: ['onc', 'complex'],
      name: { en: 'Sun Yat-sen Memorial Hospital, Sun Yat-sen University', zh: '中山大学孙逸仙纪念医院', tw: '中山大學孫逸仙紀念醫院' } },
    { id: 'zhujiang', city: 'guangzhou', tags: ['neuro', 'complex'],
      name: { en: 'Zhujiang Hospital, Southern Medical University', zh: '南方医科大学珠江医院', tw: '南方醫科大學珠江醫院' } },
    { id: 'gzfirst', city: 'guangzhou', tags: ['gi', 'checkup'],
      name: { en: 'Guangzhou First People\'s Hospital', zh: '广州市第一人民医院', tw: '廣州市第一人民醫院' } },

    /* ---- Shenzhen ---- */
    { id: 'szrm', city: 'shenzhen', tags: ['complex', 'checkup'],
      name: { en: 'Shenzhen People\'s Hospital', zh: '深圳市人民医院', tw: '深圳市人民醫院' } },
    { id: 'pkusz', city: 'shenzhen', tags: ['ortho', 'gi'],
      name: { en: 'Peking University Shenzhen Hospital', zh: '北京大学深圳医院', tw: '北京大學深圳醫院' } },
    { id: 'sz2nd', city: 'shenzhen', tags: ['neuro', 'ortho'],
      name: { en: 'Shenzhen Second People\'s Hospital', zh: '深圳市第二人民医院', tw: '深圳市第二人民醫院' } },
    { id: 'hkuszh', city: 'shenzhen', tags: ['complex', 'checkup'],
      name: { en: 'The University of Hong Kong – Shenzhen Hospital', zh: '香港大学深圳医院', tw: '香港大學深圳醫院' } },

    /* ---- Other cities in Guangdong province ---- */
    { id: 'fsfirst', city: 'foshan', tags: ['cardio', 'complex'],
      name: { en: 'Foshan First People\'s Hospital', zh: '佛山市第一人民医院', tw: '佛山市第一人民醫院' } },
    { id: 'dgpeople', city: 'dongguan', tags: ['complex', 'checkup'],
      name: { en: 'Dongguan People\'s Hospital', zh: '东莞市人民医院', tw: '東莞市人民醫院' } },
    { id: 'zhpeople', city: 'zhuhai', tags: ['cardio', 'checkup'],
      name: { en: 'Zhuhai People\'s Hospital', zh: '珠海市人民医院', tw: '珠海市人民醫院' } },
    { id: 'stu1', city: 'shantou', tags: ['onc', 'complex'],
      name: { en: 'The First Affiliated Hospital, Shantou University Medical College', zh: '汕头大学医学院第一附属医院', tw: '汕頭大學醫學院第一附屬醫院' } }
  ];

  /* Ordered city list for the filter tabs — currently all in Guangdong province.
     Add a city here (and a matching `city.<id>` key in every lang file) when
     a hospital outside the province is signed. */
  var CITIES = ['guangzhou', 'shenzhen', 'foshan', 'dongguan', 'zhuhai', 'shantou'];

  /* Flip to true once hospitals outside Guangdong are signed — that brings back
     the "All cities" tab. While false, the first city in CITIES is preselected. */
  var SHOW_ALL_CITY_TAB = false;

  /* How many hospital cards stay visible before the "Show more" button appears */
  var HOSPITAL_PAGE = { narrow: 6, wide: 9, narrowMax: 900 };

  /* Specialty card definitions — text comes from lang files via `spec.<id>` */
  var SPECIALTIES = [
    { id: 'radio', icon: 'target', badge: 'spec.badge1' },
    { id: 'mdt', icon: 'users', badge: 'spec.badge2' },
    { id: 'cardio', icon: 'heart', badge: 'spec.badge3' },
    { id: 'neuro', icon: 'brain', badge: 'spec.badge4' },
    { id: 'ortho', icon: 'bone', badge: 'spec.badge5' },
    { id: 'gi', icon: 'flask', badge: 'spec.badge6' },
    { id: 'tcm', icon: 'leaf', badge: 'spec.badge7' },
    { id: 'checkup', icon: 'clipboard', badge: 'spec.badge8' }
  ];

  /* Headline trust figures (editable numbers) */
  var STATS = [
    { id: 'hospitals', value: '19' },
    { id: 'cities', value: '6' },
    { id: 'countries', value: '26' },
    { id: 'response', value: '4h', prefix: '<' }
  ];

  var CONTACT = {
    email: 'jiuying_center@126.com',
    company: {
      en: 'Guangzhou Jiuying Culture Media Co., Ltd.',
      zh: '广州九盈文化传媒有限公司',
      tw: '廣州九盈文化傳媒有限公司'
    },
    city: { en: 'Guangzhou, China', zh: '中国 · 广州', tw: '中國 · 廣州' },
    hours: '9:00 – 21:00 (GMT+8), 7 days a week',
    timezone: 'GMT+8'
  };

  JY.data = {
    icon: icon,
    countryMap: COUNTRY,
    regions: REGIONS,
    hospitals: HOSPITALS,
    cities: CITIES,
    showAllCityTab: SHOW_ALL_CITY_TAB,
    hospitalPage: HOSPITAL_PAGE,
    specialties: SPECIALTIES,
    stats: STATS,
    contact: CONTACT
  };
})();
