/* ==========================================================================
   lang/en.js — English (reference pack; every other language mirrors it)
   ========================================================================== */
(function () {
  'use strict';
  var JY = window.JY;

  JY.i18n.register('en', {
    tag: 'en', dir: 'ltr', region: 'sea', native: 'English', english: 'English'
  }, {

  /* ------------------------------- meta ------------------------------- */
  meta: {
    title: "Jiuying International Medical Referral Platform — Treatment in China's Leading Hospitals",
    description: "We connect international patients with China's national Grade-A tertiary hospitals: free medical-record pre-review, video consultation with the attending doctor, medical visa assistance, airport pickup, in-hospital interpreting and follow-up after you fly home.",
    ogDescription: "Your trusted bridge to China's national Grade-A tertiary hospitals."
  },

  brand: { name: 'Jiuying International Medical Referral Platform', short: 'Jiuying Health', sub: 'JIUYING GLOBAL HEALTH' },

  /* ------------------------------ topbar ------------------------------ */
  topbar: {
    promo: 'Free medical-record pre-review — hear a specialist opinion before you travel',
    hours: 'Reply within 4 hours · 7 days a week'
  },

  /* -------------------------------- nav -------------------------------- */
  nav: {
    help: 'How we help', hospitals: 'Hospitals', specialties: 'Specialties',
    process: 'Process', cost: 'Costs', faq: 'FAQ', partners: 'Partners',
    contact: 'Contact', cta: 'Free case review'
  },

  /* -------------------------------- hero ------------------------------- */
  hero: {
    badgeTag: 'Since 2026',
    badgeText: 'International patient referral service · Based in Guangzhou, China',
    titleBefore: 'Getting treated in China',
    titleEm: 'should not be complicated.',
    sub: 'Send us your medical records. We match you with a national Grade-A tertiary hospital in China, arrange a video consultation with the attending doctor, and stay with you from the medical visa to the airport pickup, the ward round and the follow-up after you fly home.',
    ctaPrimary: 'Start a free case review',
    ctaSecondary: 'See how it works',
    proof: ['No upfront fee for the case review', 'Medical fees paid directly to the hospital', 'Coordinator who speaks your language', 'Written estimate before you fly'],
    plan: {
      tag: 'Case #JY-2609',
      title: 'Your treatment plan',
      s1t: 'Records received and translated', s1d: 'Imaging, pathology and blood work reviewed',
      s2t: 'Hospital pre-review complete', s2d: 'Specialist opinion issued by the oncology team',
      s3t: 'Video consultation booked', s3d: 'Face-to-face with your attending doctor',
      s4t: 'Visa invitation letter issued', s4d: 'Hospital-issued, ready for your application',
      k1v: '2–4 weeks', k1l: 'Estimated stay',
      k2v: 'Written', k2l: 'Cost estimate'
    },
    chipA: 'Licence verifiable with the National Health Commission',
    chipB: '9 languages, 24/7 coordination'
  },

  /* -------------------------------- trust ------------------------------ */
  trust: {
    hospitals: 'Grade-A tertiary hospitals in the network',
    cities: 'Major Chinese medical hubs covered',
    countries: 'Countries and regions served',
    response: 'Average first reply'
  },

  /* --------------------------- how we help ----------------------------- */
  help: {
    eyebrow: 'What patients come to us with',
    title: 'The problem you are stuck on — and what we do about it',
    sub: 'Almost every international patient who contacts us is blocked by one of these six things. Here is exactly how each one is handled.',
    items: [
      { t: 'You have been told there are no more options', d: 'The tumour was called inoperable, or your specialist said there is nothing further to try.', s: 'We arrange a multidisciplinary (MDT) review and a formal second opinion at a national Grade-A hospital — a fresh set of senior eyes on the same scans, often reopening options you were told were closed.' },
      { t: 'Treatment at home is financially out of reach', d: 'The same protocol can cost three to five times more privately at home, and insurance will not cover it.', s: 'Comparable equipment and senior specialists, typically at one third to one half of US or Western European private prices — and you receive a written cost range before committing to anything.' },
      { t: 'The waiting list is months long', d: 'Public queues push surgery or radiotherapy out by months while the disease keeps moving.', s: 'Once your plan is confirmed, most patients start treatment within 1–2 weeks of arrival, with the admission date confirmed before you book a flight.' },
      { t: 'You cannot tell which hospitals are genuinely top tier', d: 'Search results are full of advertising, and you have no way to check a hospital’s real grade.', s: 'We coordinate only with national Grade-A tertiary (三甲) hospitals and national specialty centres. Every licence is publicly verifiable, and we tell you the hospital and the attending doctor by name, in writing, before you travel.' },
      { t: 'Nobody speaks your language', d: 'Forms, ward rounds, consent papers and discharge notes — all in Chinese.', s: 'A coordinator who speaks your own language handles your case end to end, and a medical interpreter is present in the hospital for consultations, admission and discharge.' },
      { t: 'Visa, money and aftercare are a black box', d: 'You have heard of agents who took the money and vanished, and you worry about what happens once you are home.', s: 'The hospital issues your medical invitation letter; medical fees are paid by you straight to the hospital against an official invoice, never to us; and we stay on for remote follow-up after you fly home.' }
    ],
    bandTitle: 'Not sure whether China is right for your case?',
    bandText: 'Send your records for a free pre-review. If we cannot genuinely help, we will tell you so — no charge, no pressure.',
    bandBtn: 'Send my records'
  },

  /* ------------------------------ why China ---------------------------- */
  why: {
    eyebrow: 'Why China',
    title: 'Why so many international patients now fly to China',
    sub: 'China’s top-tier hospitals combine equipment density, case volume and speed in a way very few health systems can match.',
    items: [
      { t: 'World-class equipment, actually available', d: 'CyberKnife, TOMO, Ethos, PET-MR and da Vinci surgical systems are installed across China’s leading hospitals in large numbers — which is why a treatment slot is measured in days rather than months.' },
      { t: 'Specialists with very high case volume', d: 'A senior surgeon or radiation oncologist at a national centre handles several times the annual case volume of a typical specialist elsewhere. Repetition builds judgement.' },
      { t: 'Diagnostics measured in days', d: 'MRI, PET-CT, pathology and genomic profiling are routinely completed within a few days, so a treatment decision is not stalled by a test queue.' },
      { t: 'Costs you can plan around', d: 'Itemised official invoices issued by the hospital itself. Comparable protocols commonly run at one third to one half of private US or Western European prices.' },
      { t: 'Chinese and Western medicine under one roof', d: 'TCM oncology rehabilitation, acupuncture and physiotherapy sit inside mainstream hospital care here — useful for recovery, appetite, sleep and pain control during treatment.' },
      { t: 'International patient services are mature', d: 'Major tertiary hospitals run dedicated international medical departments with English-speaking staff, standardised international billing and established medical-visa processes.' }
    ]
  },

  /* ----------------------------- hospitals ----------------------------- */
  hospitals: {
    eyebrow: 'Hospital network',
    title: 'A national network of Grade-A tertiary hospitals',
    sub: 'We coordinate across China’s principal medical centres. Which hospital you are matched with depends on your condition — not on who pays us a commission.',
    tabAll: 'All cities',
    more: 'Show more hospitals',
    less: 'Show fewer hospitals',
    perCount: 'hospitals',
    level: 'Grade-A tertiary (三甲)',
    firstTag: 'Anchor partner',
    note: 'The list below is the platform’s coordinating network. Which of these hospitals can take your case depends on your diagnosis and the current cooperation list — your coordinator confirms the exact hospital and attending doctor in writing before you travel. The network is continuously expanding.',
    empty: 'No hospital in this city matches the current filter.'
  },

  tag: {
    onc: 'Oncology', radio: 'Precision radiotherapy', cardio: 'Cardiovascular', neuro: 'Neurosurgery',
    ortho: 'Orthopaedics', gi: 'Digestive & minimally invasive', tcm: 'TCM rehabilitation',
    transplant: 'Transplantation', fertility: 'Reproductive health', checkup: 'Health screening',
    complex: 'Complex & rare disease', endo: 'Endocrinology'
  },

  city: {
    guangzhou: 'Guangzhou', shenzhen: 'Shenzhen', foshan: 'Foshan',
    dongguan: 'Dongguan', zhuhai: 'Zhuhai', shantou: 'Shantou'
  },

  /* ---------------------------- specialties ---------------------------- */
  spec: {
    eyebrow: 'Clinical focus',
    title: 'What we can arrange for you',
    sub: 'These are the areas where we handle the most international cases. If your condition is not listed, send it anyway — we will tell you honestly whether we can help.',
    badge1: '3–5 sessions', badge2: '48-hour report', badge3: 'Interventional', badge4: 'Cerebrovascular',
    badge5: 'Joint replacement', badge6: 'Endoscopic', badge7: 'Integrative care', badge8: 'Same-week results',
    radio: { t: 'Precision radiotherapy for cancer', d: 'CyberKnife, TOMO and Ethos platforms with sub-millimetre targeting. Several regimens finish in 3–5 sessions, so a stay of 2–4 weeks is usually enough.', l1: 'CyberKnife · TOMO · Ethos', l2: 'Short-course regimens', l3: 'Outpatient-friendly' },
    mdt: { t: 'Multidisciplinary tumour board', d: 'Surgery, oncology, radiotherapy, radiology and pathology specialists review your case together and issue a written second opinion.', l1: 'Second opinion in writing', l2: '5–8 specialists per case', l3: 'Report within 48 hours' },
    cardio: { t: 'Cardiology & cardiac surgery', d: 'Coronary intervention, valve repair and replacement, arrhythmia ablation and bypass surgery at national cardiovascular centres.', l1: 'PCI · TAVR · ablation', l2: 'National heart centres', l3: 'ICU-level aftercare' },
    neuro: { t: 'Neurosurgery & cerebrovascular disease', d: 'Brain and spinal tumours, aneurysm coiling, deep brain stimulation and neuro-rehabilitation under senior neurosurgical teams.', l1: 'Tumour · aneurysm · DBS', l2: 'Intraoperative monitoring', l3: 'Rehabilitation pathway' },
    ortho: { t: 'Orthopaedics, spine & joint replacement', d: 'Hip and knee replacement, spinal decompression and complex trauma reconstruction, with structured in-hospital rehabilitation.', l1: 'Hip · knee · spine', l2: 'Rapid recovery protocols', l3: 'Rehab included' },
    gi: { t: 'Digestive disease & minimally invasive surgery', d: 'Endoscopic resection, hepatobiliary and pancreatic surgery, and inflammatory bowel disease management in high-volume centres.', l1: 'Endoscopy · HPB surgery', l2: 'Laparoscopic approach', l3: 'Short hospital stay' },
    tcm: { t: 'TCM oncology rehabilitation', d: 'Acupuncture, herbal medicine and physiotherapy integrated alongside conventional treatment to help with pain, appetite, fatigue and sleep.', l1: 'Integrative oncology', l2: 'Acupuncture · herbal', l3: 'Recovery support' },
    checkup: { t: 'Executive screening & early detection', d: 'Comprehensive health checks with PET-MR, genomic risk profiling and specialist review — results and a physician consultation within the same week.', l1: 'PET-MR · genomics', l2: 'Physician consultation', l3: 'English report' }
  },

  /* ------------------------------- process ------------------------------ */
  process: {
    eyebrow: 'The pathway',
    title: 'Six steps, from your first message to follow-up at home',
    sub: 'Nothing happens without your confirmation. You approve the hospital, the doctor, the plan and the cost estimate before you ever book a flight.',
    steps: [
      { t: 'Free consultation & case file', dur: 'Same day', who: 'Your coordinator', d: 'Tell us the diagnosis and send whatever records you have. A coordinator who speaks your language replies within 4 hours and opens your case file.' },
      { t: 'Records collection & hospital pre-review', dur: '2–3 days', who: 'Platform + hospital', d: 'We organise, translate and summarise your imaging, pathology and blood work, then the hospital’s specialists review the file and issue a preliminary opinion.' },
      { t: 'Video consultation with the doctor', dur: 'Scheduled in 3–5 days', who: 'Attending specialists', d: 'A face-to-face video consultation with the doctor who would treat you. You receive the treatment plan, the cost range and the expected length of stay in writing.' },
      { t: 'Medical visa & travel', dur: '1–2 weeks', who: 'Platform', d: 'The hospital issues a medical invitation letter. We prepare the visa documentation, arrange flights and book accommodation close to the hospital.' },
      { t: 'Treatment in China', dur: '2–6 weeks', who: 'Hospital + platform', d: 'Airport pickup, admission, in-hospital interpreting, daily coordination and practical support for you and whoever travels with you.' },
      { t: 'Discharge & follow-up at home', dur: 'Long term', who: 'Platform', d: 'A translated discharge summary, medication guidance, remote follow-up appointments and rehabilitation referrals — the relationship does not end at the airport.' }
    ],
    note: 'Average time from first message to arrival in China: 2–4 weeks, depending on how quickly records are complete and how long the visa takes.'
  },

  /* -------------------------------- care -------------------------------- */
  care: {
    eyebrow: 'Who does what',
    title: 'We are the bridge, not the hospital — and we say so in writing',
    sub: 'Clear boundaries protect you. Here is exactly what we handle, and what only the hospital handles.',
    usT: 'What Jiuying handles',
    us: ['Free first consultation and case assessment', 'Collecting, translating and structuring your medical records', 'Matching you to the right hospital and specialist', 'Scheduling and interpreting your video consultation', 'Medical invitation letter and visa documentation support', 'Flights, airport pickup, accommodation and local transport', 'In-hospital medical interpreting and daily coordination', 'Practical support for accompanying family members', 'Translated discharge summary and remote follow-up coordination'],
    hospT: 'What the hospital handles',
    hosp: ['Reviewing your records and issuing the medical opinion', 'Diagnosis and the treatment plan', 'Admission, surgery, radiotherapy and medication', 'Nursing care and inpatient management', 'Official invoices and medical documentation', 'Discharge summary and clinical follow-up', 'Full medical liability for all clinical decisions'],
    note: 'All medical decisions and all medical liability rest with the treating hospital. Jiuying does not practise medicine, does not make medical judgements, does not issue treatment guarantees, and never collects or holds your treatment fees.'
  },

  /* -------------------------------- cost -------------------------------- */
  cost: {
    eyebrow: 'Costs & payment',
    title: 'You see the number before you board the plane',
    sub: 'No deposit, no blind commitment. The estimate is issued after the specialist has actually seen your records.',
    items: [
      { t: 'Treatment fees go straight to the hospital', d: 'You pay the hospital directly against an official, itemised invoice. Jiuying never collects, holds or forwards your medical fees — that is a hard rule, not a preference.' },
      { t: 'A written estimate before you fly', d: 'After the video consultation you receive a written cost range covering treatment, hospital stay and expected medication. You decide with full information.' },
      { t: 'Coordination fee agreed up front', d: 'Our coordination fee is quoted and confirmed in writing before you travel. No hidden charges, no add-ons invented after you land.' },
      { t: 'Insurance-ready documentation', d: 'We supply itemised invoices, diagnosis certificates and medical records in English for reimbursement claims. Selected international insurers can be billed directly.' }
    ],
    noteTitle: 'What we will never do',
    noteText: 'We do not promise outcomes, we do not use before-and-after images as proof of efficacy, and we do not ask for cash payments or off-book transfers. Everything runs through official, invoiced channels.',
    flowTitle: 'How payment works, step by step',
    flow: ['Video consultation and written estimate issued', 'You confirm the plan and the estimate in writing', 'Travel deposit for flights and accommodation only', 'On admission you pay the hospital directly, per the official invoice', 'Any further treatment is quoted and approved before it happens']
  },

  /* ------------------------------- stories ------------------------------ */
  stories: {
    eyebrow: 'Patient experiences',
    title: 'What this looked like for other people',
    sub: 'Published with patient authorisation and fully anonymised. Individual experiences only — not a promise of any particular outcome.',
    items: [
      { text: 'I was told the tumour could not be operated on and that I should go home and make myself comfortable. Jiuying sent my scans to a hospital in Guangzhou, and three days later I was on a video call with a surgeon who explained a radiotherapy option nobody had mentioned. Five sessions, three weeks in China, and I was home with a follow-up plan.', name: 'Mr. L., 58', meta: 'Liver cancer · Southeast Asia' },
      { text: 'The part I worried about most was the language. But my coordinator spoke my language from the first message, and there was an interpreter in the room for every consultation. I never once had to guess what a doctor had just told me.', name: 'Ms. N., 41', meta: 'Breast cancer · Vietnam' },
      { text: 'What convinced me was the money. I was quoted a number in writing before I bought a ticket, I paid the hospital myself and got an official invoice, and the final figure stayed inside the range they gave me. Nothing was invented afterwards.', name: 'Mr. R., 63', meta: 'Cardiac surgery · Middle East' }
    ]
  },

  /* --------------------------------- faq -------------------------------- */
  faq: {
    eyebrow: 'Common questions',
    title: 'Questions patients ask before they decide',
    sub: 'If something is still unclear, send us a message — a real person answers, not a bot.',
    items: [
      { q: 'Are Chinese hospitals really comparable to top hospitals at home?', a: 'The hospitals we coordinate with are national Grade-A tertiary (三甲) hospitals and national specialty centres — the highest classification in the Chinese system. They publish their grading, and you can verify it through the National Health Commission. Several of them run more radiotherapy and surgical cases in a year than most large hospitals elsewhere. We name the hospital and the doctor before you travel so you can check them yourself.' },
      { q: 'Who will actually treat me? Can I know in advance?', a: 'Yes. Before you commit to anything you receive the hospital name, the department, and the name and title of the attending doctor, plus a video consultation with that doctor. We do not send patients to a hospital and let them find out on arrival.' },
      { q: 'I do not speak any Chinese. How does communication work?', a: 'Two layers. Your case coordinator speaks your own language and handles everything outside the hospital. Inside the hospital, a medical interpreter joins consultations, admission and discharge. Written materials — the treatment plan, cost estimate and discharge summary — are delivered in your language.' },
      { q: 'What medical records do I need to send?', a: 'Ideally: imaging (CT/MRI/PET) with the original DICOM files if you have them, pathology reports, the most recent blood work, a summary of previous treatments and your current medication list. If you only have a discharge summary, send that — we will tell you what else is needed.' },
      { q: 'How soon can treatment start?', a: 'Records pre-review takes 2–3 days, a video consultation is usually scheduled within 3–5 days, and visa plus travel takes 1–2 weeks. Most patients start treatment within 1–2 weeks of arriving in China. From first message to arrival is typically 2–4 weeks.' },
      { q: 'How much does it cost, and how do I pay?', a: 'You receive a written cost range after the video consultation, before you decide. Treatment fees are paid by you directly to the hospital against an official invoice. Our coordination fee is agreed in writing up front. We never hold your medical fees and we do not ask for cash.' },
      { q: 'Can a family member come with me?', a: 'Yes, and we recommend it for major treatment. We help with their visa invitation documentation, arrange accommodation for both of you, and provide a companion bed in the ward where the hospital allows it.' },
      { q: 'How does the medical visa work?', a: 'The hospital issues a formal medical invitation letter addressed to you. We prepare the supporting documentation package and walk you through the application. Most patients are approved without an interview; timelines depend on your country, typically 1–2 weeks.' },
      { q: 'What happens after I fly home?', a: 'You leave with a translated discharge summary and medication schedule. We coordinate remote follow-up consultations with your treating team, relay pathology and imaging results, and arrange rehabilitation or medication referrals where needed.' },
      { q: 'Are you a hospital? Who is liable if something goes wrong?', a: 'No — and this is the point. Jiuying is a referral and coordination service. All diagnosis, treatment and clinical decisions are made by the hospital, and all medical liability rests with the hospital under Chinese law. We do not practise medicine and we do not make medical judgements. The boundary is stated in your service agreement.' },
      { q: 'Is my medical data safe?', a: 'Your records are shared only with the hospital specialists reviewing your case, and only with your explicit authorisation. Transfers are handled under China’s Personal Information Protection Law and applicable cross-border data rules. You can ask us to delete your file at any time.' }
    ],
    moreTitle: 'Still have a question?',
    moreText: 'Send it to us and a coordinator will answer within 4 hours during our working day (9:00–21:00 GMT+8, seven days a week).',
    moreBtn: 'Ask us directly'
  },

  /* ------------------------------- partners ----------------------------- */
  partners: {
    eyebrow: 'Channel partnership',
    title: 'For overseas agencies, clinics and community organisations',
    sub: 'If you already reach patients who need treatment they cannot get locally, you can plug into a growing hospital network instead of a single hospital.',
    whoT: 'Who we work with',
    who: ['Medical referral and medical tourism agencies', 'Travel agencies and medical travel desks', 'Screening centres and private clinics', 'Insurance brokers and employee-benefit consultants', 'Chinese community organisations and associations abroad', 'Local content creators in the health space'],
    doT: 'What a partner does',
    dos: ['Reach patients locally who need care they cannot get at home', 'Run first-line consultation and qualify the enquiry', 'Help collect and organise the medical records', 'Connect the patient to us and set up the video consultation', 'Support the patient through the travel arrangements'],
    earnT: 'How partners earn',
    earn: ['Commission is paid after a referred patient completes treatment', 'No fixed fee, no franchise cost — we never pass operating costs to partners', 'Rates are agreed case by case under a separate cooperation agreement', 'As the hospital network grows, partners gain access to more specialties and more hospitals'],
    boundT: 'Clear boundaries',
    bound: ['Partners may not sign, promise or collect payment in the hospital’s name', 'No false advertising and no promises of cure or outcome', 'Partners never collect the patient’s medical fees', 'Clinical communication stays with the hospital; partners coordinate locally'],
    cta: 'Discuss a partnership'
  },

  /* ------------------------------- contact ------------------------------ */
  contact: {
    eyebrow: 'Get in touch',
    title: 'Tell us what you are dealing with. We answer within 4 hours.',
    sub: 'Send your records, or just describe the situation in your own language. There is no charge for the first review and no obligation afterwards.',
    wayEmail: 'Email (preferred for medical records)',
    wayHours: 'Working hours',
    wayHoursV: '9:00 – 21:00 GMT+8, seven days a week',
    waySpeed: 'First reply',
    waySpeedV: 'Within 4 hours',
    wayBase: 'Based in',
    wayBaseV: 'Guangzhou, China',
    formTitle: 'Send an enquiry',
    fName: 'Full name', fNamePh: 'e.g. Nguyen Van A',
    fCountry: 'Country / region', fCountryPh: 'e.g. Vietnam',
    fContact: 'Email or WhatsApp',
    fType: 'What do you need?',
    fTypeOpts: ['Cancer treatment', 'Second opinion / MDT', 'Cardiac', 'Neurosurgery', 'Orthopaedics', 'Health screening', 'TCM rehabilitation', 'Partnership enquiry', 'Something else'],
    fMessage: 'Briefly describe the situation',
    fMessagePh: 'Diagnosis, what your doctor has told you, what you have already tried, and when you hope to travel…',
    fSubmit: 'Generate my enquiry email',
    fNote: 'This form has no server behind it — pressing the button opens your own email client with everything filled in, so your records never sit on a third-party server. If you have imaging or pathology files, attach them to that email (DICOM, PDF or photos are all fine).',
    fOkTitle: 'Your enquiry draft is ready',
    fOkText: 'Your email client should open with the message filled in. If nothing happens, please allow pop-ups or email us directly.',
    stepsTitle: 'What happens after you send it',
    steps: ['A coordinator who speaks your language replies within 4 hours', 'You send whatever medical records you have', 'The hospital pre-reviews your file and issues an opinion', 'You meet the doctor by video — then you decide']
  },

  /* -------------------------------- footer ------------------------------ */
  footer: {
    about: 'Jiuying International Medical Referral Platform connects international patients with China’s national Grade-A tertiary hospitals. We handle the pathway — records, matching, video consultation, visa, arrival and follow-up — while the hospital handles the medicine.',
    exploreT: 'Explore', servicesT: 'What we arrange', contactT: 'Contact',
    services: ['Precision radiotherapy', 'Multidisciplinary second opinion', 'Cardiac care', 'Neurosurgery', 'Orthopaedics', 'Health screening', 'TCM rehabilitation', 'Channel partnership'],
    legal: 'Disclaimer: this website is an information and referral-coordination service. It does not constitute medical advice, a diagnosis, a treatment recommendation or a promise of any clinical outcome. Treatment indications, protocols and risks are explained to patients by the treating hospital in accordance with Chinese law. Cases shown are published with patient authorisation and are anonymised. Patients from the Taiwan region of China are served under the same terms as all other regions.',
    rights: 'All rights reserved.',
    regions: 'Serving patients across Southeast Asia, East Asia, Europe, the Americas, the Middle East, South Asia, Africa and Oceania.'
  },

  /* -------------------------------- common ------------------------------ */
  common: {
    skip: 'Skip to main content', close: 'Close', menu: 'Menu',
    langLabel: 'Language', langHint: 'Choose your language',
    top: 'Back to top', required: 'Required',
    switchText: 'View this site in {lang}'
  },

  /* --------------------------- geo detection toast ---------------------- */
  toast: {
    title: 'We picked a language and a look for your region',
    body: 'Based on your connection we set the site to {lang}. You can change it at any time from the menu at the top right.',
    keep: 'Keep it', change: 'Change'
  }

  });
})();
