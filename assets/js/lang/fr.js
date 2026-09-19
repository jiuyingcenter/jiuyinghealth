/* ==========================================================================
   lang/fr.js — Français (French)
   ========================================================================== */
(function () {
  'use strict';
  var JY = window.JY;

  JY.i18n.register('fr', {
    tag: 'fr', dir: 'ltr', region: 'eur', native: 'Français', english: 'French'
  }, {

  meta: {
    title: 'Plateforme de réorientation médicale internationale Jiuying — Se faire soigner dans les hôpitaux de grade A de Chine',
    description: 'Jiuying met en relation les patients internationaux avec les hôpitaux tertiaires de grade A de Chine : pré-lecture gratuite du dossier médical, téléconsultation avec le médecin traitant, lettre d’invitation pour visa médical, accueil à l’aéroport, interprétariat hospitalier et suivi après le retour.',
    ogDescription: 'Votre passerelle fiable vers les hôpitaux tertiaires de grade A de Chine.'
  },

  brand: { name: 'Plateforme de réorientation médicale internationale Jiuying', short: 'Jiuying Santé', sub: 'JIUYING GLOBAL HEALTH' },

  topbar: {
    promo: 'Pré-lecture gratuite du dossier médical — un avis de spécialiste avant de voyager',
    hours: 'Réponse sous 4 heures · 7 jours sur 7'
  },

  nav: {
    help: 'Notre aide', hospitals: 'Réseau hospitalier', specialties: 'Spécialités',
    process: 'Parcours', cost: 'Coûts', faq: 'FAQ', partners: 'Partenaires',
    contact: 'Contact', cta: 'Étude gratuite du dossier'
  },

  hero: {
    badgeTag: 'Depuis 2026',
    badgeText: 'Service d’orientation des patients internationaux · Basé à Guangzhou, en Chine',
    titleBefore: 'Se faire soigner en Chine',
    titleEm: 'n’a pas à être compliqué.',
    sub: 'Envoyez-nous votre dossier médical. Nous vous orientons vers un hôpital tertiaire de grade A en Chine, organisons une téléconsultation avec le médecin traitant et vous accompagnons du visa médical à l’accueil à l’aéroport, à l’interprétariat à l’hôpital et au suivi après votre retour.',
    ctaPrimary: 'Demander une étude gratuite',
    ctaSecondary: 'Voir comment ça marche',
    proof: ['Étude du dossier sans frais', 'Frais médicaux payés directement à l’hôpital', 'Coordinateur parlant votre langue', 'Devis écrit avant le départ'],
    plan: {
      tag: 'Dossier #JY-2609',
      title: 'Votre plan de traitement',
      s1t: 'Dossier reçu et traduit', s1d: 'Imagerie, anatomopathologie et bilans regroupés',
      s2t: 'Pré-lecture hospitalière terminée', s2d: 'Avis préliminaire rendu par l’équipe d’oncologie',
      s3t: 'Téléconsultation planifiée', s3d: 'En face à face avec votre médecin traitant',
      s4t: 'Lettre d’invitation médicale émise', s4d: 'Délivrée par l’hôpital, prête pour votre visa',
      k1v: '2–4 semaines', k1l: 'Durée de séjour estimée',
      k2v: 'Par écrit', k2l: 'Estimation des coûts'
    },
    chipA: 'Licences hospitalières vérifiables auprès de la Commission nationale de la santé',
    chipB: '9 langues, coordination 24h/24'
  },

  trust: {
    hospitals: 'Hôpitaux de grade A du réseau',
    cities: 'Grands pôles médicaux chinois couverts',
    countries: 'Pays et régions desservis',
    response: 'Délai moyen de première réponse'
  },

  help: {
    eyebrow: 'Ce qui bloque les patients',
    title: 'Le problème qui vous bloque — et ce que nous y faisons',
    sub: 'Presque tous les patients internationaux qui nous contactent sont bloqués par l’une de ces six situations. Voici exactement comment chacune est traitée.',
    items: [
      { t: 'On vous a dit qu’il n’y a plus rien à faire', d: 'La tumeur a été jugée inopérable, ou votre spécialiste a indiqué qu’il n’existait plus d’option.', s: 'Nous organisons une réunion de concertation pluridisciplinaire (RCP) et un second avis formel dans un hôpital de grade A — une équipe de spécialistes chevronnés relit exactement les mêmes images, et rouvre souvent des portes que l’on vous avait dites fermées.' },
      { t: 'Le traitement est financièrement hors de portée chez vous', d: 'Le même protocole peut coûter trois à cinq fois plus cher en privé chez vous, et l’assurance ne le couvre pas.', s: 'Des équipements et des spécialistes comparables, généralement au tiers ou à la moitié des tarifs privés américains ou d’Europe de l’Ouest — et vous recevez une fourchette de coûts écrite avant tout engagement.' },
      { t: 'La liste d’attente dure des mois', d: 'Les files d’attente publiques repoussent la chirurgie ou la radiothérapie de plusieurs mois, pendant que la maladie progresse.', s: 'Une fois le plan confirmé, la plupart des patients commencent le traitement dans les 1 à 2 semaines suivant leur arrivée, avec une date d’admission confirmée avant que vous réserviez votre vol.' },
      { t: 'Impossible de savoir quels hôpitaux chinois sont réellement excellents', d: 'Les résultats de recherche sont saturés de publicités, et rien ne permet de vérifier le vrai niveau d’un établissement.', s: 'Nous ne travaillons qu’avec des hôpitaux tertiaires de grade A (三甲) et des centres spécialisés nationaux. Chaque licence est vérifiable publiquement, et nous vous communiquons par écrit le nom de l’hôpital et du médecin traitant avant votre départ.' },
      { t: 'Personne ne parle votre langue', d: 'Formulaires, visites, consentements, compte rendu de sortie — tout est en chinois.', s: 'Un coordinateur qui parle votre langue suit votre dossier de bout en bout, et un interprète médical est présent à l’hôpital pour les consultations, l’admission et la sortie.' },
      { t: 'Visa, argent et suivi au retour restent une boîte noire', d: 'Vous avez entendu parler d’intermédiaires qui encaissent puis disparaissent, et vous craignez de vous retrouver seul une fois rentré.', s: 'L’hôpital délivre votre lettre d’invitation médicale ; vous réglez les frais médicaux directement à l’hôpital contre une facture officielle, jamais à nous ; et nous assurons le suivi à distance après votre retour.' }
    ],
    bandTitle: 'Vous ne savez pas si la Chine convient à votre cas ?',
    bandText: 'Envoyez votre dossier pour une pré-lecture gratuite. Si nous ne pouvons pas vous aider, nous vous le dirons franchement — sans frais, sans pression.',
    bandBtn: 'Envoyer mon dossier'
  },

  why: {
    eyebrow: 'Pourquoi la Chine',
    title: 'Pourquoi autant de patients internationaux viennent se faire soigner en Chine',
    sub: 'Les meilleurs hôpitaux chinois combinent densité d’équipements, volume de cas et rapidité comme très peu de systèmes de santé savent le faire.',
    items: [
      { t: 'Des équipements de classe mondiale, réellement disponibles', d: 'CyberKnife, TOMO, Ethos, PET-MR et robots chirurgicaux da Vinci sont installés en grand nombre dans les hôpitaux de premier plan — les délais se comptent donc en jours, pas en mois.' },
      { t: 'Des spécialistes au volume de cas très élevé', d: 'Un chirurgien ou un radiothérapeute chevronné d’un centre national traite chaque année plusieurs fois le volume d’un spécialiste comparable ailleurs. La répétition forge le jugement clinique.' },
      { t: 'Des diagnostics rendus en quelques jours', d: 'IRM, TEP-TDM, anatomopathologie et profilage génomique aboutissent en quelques jours : la décision thérapeutique n’est pas bloquée par une file d’attente d’examens.' },
      { t: 'Des coûts que l’on peut anticiper', d: 'Factures officielles détaillées émises par l’hôpital lui-même. Les protocoles comparables reviennent couramment au tiers ou à la moitié des tarifs privés aux États-Unis ou en Europe de l’Ouest.' },
      { t: 'Médecine chinoise et occidentale sous un même toit', d: 'La rééducation oncologique en médecine traditionnelle chinoise, l’acupuncture et la kinésithérapie font partie des soins hospitaliers courants — utiles pour l’appétit, le sommeil, la douleur et la récupération pendant le traitement.' },
      { t: 'Des services internationaux déjà rodés', d: 'Les grands hôpitaux de grade A disposent de départements de médecine internationale dédiés, de personnel anglophone, d’une facturation internationale standardisée et d’une procédure de visa médical bien établie.' }
    ]
  },

  hospitals: {
    eyebrow: 'Réseau hospitalier',
    title: 'Un réseau national d’hôpitaux tertiaires de grade A',
    sub: 'Nous coordonnons les principaux pôles médicaux chinois. L’hôpital vers lequel vous êtes orienté dépend de votre pathologie — pas de qui nous verse la commission la plus élevée.',
    tabAll: 'Toutes les villes',
    more: 'Voir plus d’hôpitaux',
    less: 'Réduire la liste',
    perCount: 'hôpitaux',
    level: 'Tertiaire de grade A (三甲)',
    firstTag: 'Partenaire fondateur',
    note: 'La liste ci-dessous est le réseau d’hôpitaux avec lesquels la plateforme coordonne. Les établissements réellement en mesure de prendre votre dossier dépendent du diagnostic et de la liste de coopération en vigueur — votre coordinateur confirme par écrit l’hôpital et le médecin traitant avant votre départ. Le réseau s’élargit en continu.',
    empty: 'Aucun hôpital dans cette ville ne correspond au filtre actuel.'
  },

  tag: {
    onc: 'Oncologie', radio: 'Radiothérapie de précision', cardio: 'Cardiovasculaire', neuro: 'Neurochirurgie',
    ortho: 'Orthopédie', gi: 'Digestif et mini-invasif', tcm: 'Rééducation MTC',
    transplant: 'Greffe', fertility: 'Assistance médicale à la procréation', checkup: 'Bilan de santé',
    complex: 'Maladies complexes et rares', endo: 'Endocrinologie'
  },

  city: {
    guangzhou: 'Guangzhou', shenzhen: 'Shenzhen', foshan: 'Foshan',
    dongguan: 'Dongguan', zhuhai: 'Zhuhai', shantou: 'Shantou'
  },

  spec: {
    eyebrow: 'Domaines cliniques',
    title: 'Ce que nous pouvons organiser pour vous',
    sub: 'Voici les domaines où nous traitons le plus de dossiers internationaux. Si votre situation n’y figure pas, envoyez-la quand même — nous vous dirons honnêtement si nous pouvons aider.',
    badge1: '3 à 5 séances', badge2: 'Rapport en 48 h', badge3: 'Interventionnel', badge4: 'Vascularisation cérébrale',
    badge5: 'Prothèse articulaire', badge6: 'Endoscopique', badge7: 'Soins intégratifs', badge8: 'Résultats dans la semaine',
    radio: { t: 'Radiothérapie de précision en oncologie', d: 'Plateformes CyberKnife, TOMO et Ethos avec une précision sub-millimétrique. Plusieurs protocoles se déroulent en 3 à 5 séances : un séjour de 2 à 4 semaines suffit généralement.', l1: 'CyberKnife · TOMO · Ethos', l2: 'Protocoles courts', l3: 'Majoritairement ambulatoire' },
    mdt: { t: 'Réunion de concertation pluridisciplinaire', d: 'Chirurgiens, oncologues médicaux, radiothérapeutes, radiologues et pathologistes examinent votre dossier ensemble et rendent un second avis écrit.', l1: 'Second avis écrit', l2: '5 à 8 spécialistes par dossier', l3: 'Rapport sous 48 heures' },
    cardio: { t: 'Cardiologie et chirurgie cardiaque', d: 'Intervention coronarienne, réparation et remplacement valvulaire, ablation de troubles du rythme et pontage dans des centres cardiovasculaires nationaux.', l1: 'PCI · TAVR · ablation', l2: 'Centres cardiaques nationaux', l3: 'Soins post-opératoires de niveau réanimation' },
    neuro: { t: 'Neurochirurgie et pathologies vasculaires cérébrales', d: 'Tumeurs cérébrales et médullaires, embolisation d’anévrisme, stimulation cérébrale profonde (DBS) et rééducation neurologique par des équipes chevronnées.', l1: 'Tumeur · anévrisme · DBS', l2: 'Monitorage neurologique peropératoire', l3: 'Parcours de rééducation' },
    ortho: { t: 'Orthopédie, rachis et prothèses articulaires', d: 'Prothèses de hanche et de genou, décompression rachidienne et reconstruction de traumatismes complexes, avec rééducation hospitalière structurée.', l1: 'Hanche · genou · rachis', l2: 'Protocoles de récupération rapide', l3: 'Rééducation incluse' },
    gi: { t: 'Pathologies digestives et chirurgie mini-invasive', d: 'Résection endoscopique, chirurgie hépatobiliaire et pancréatique, prise en charge des maladies inflammatoires de l’intestin dans des centres à fort volume.', l1: 'Endoscopie · chirurgie HPB', l2: 'Voie cœlioscopique', l3: 'Hospitalisation courte' },
    tcm: { t: 'Rééducation oncologique en médecine traditionnelle chinoise', d: 'Acupuncture, phytothérapie et kinésithérapie en complément du traitement conventionnel, pour la douleur, l’appétit, la fatigue et le sommeil.', l1: 'Oncologie intégrative', l2: 'Acupuncture · phytothérapie', l3: 'Soutien à la convalescence' },
    checkup: { t: 'Bilan de santé complet et dépistage précoce', d: 'Bilan complet avec TEP-IRM, profilage du risque génomique et lecture par un spécialiste — résultats et consultation médicale dans la même semaine.', l1: 'TEP-IRM · génomique', l2: 'Consultation en face à face', l3: 'Rapport en anglais' }
  },

  process: {
    eyebrow: 'Le parcours',
    title: 'Six étapes, du premier message au suivi chez vous',
    sub: 'Rien ne se fait sans votre accord. Vous validez l’hôpital, le médecin, le plan et l’estimation des coûts avant de réserver le moindre vol.',
    steps: [
      { t: 'Consultation gratuite et ouverture du dossier', dur: 'Le jour même', who: 'Votre coordinateur', d: 'Indiquez-nous le diagnostic et envoyez les documents dont vous disposez. Un coordinateur parlant votre langue vous répond sous 4 heures et ouvre votre dossier.' },
      { t: 'Collecte du dossier et pré-lecture hospitalière', dur: '2 à 3 jours', who: 'Plateforme + hôpital', d: 'Nous organisons, traduisons et structurons votre imagerie, votre anatomopathologie et vos bilans ; les spécialistes de l’hôpital examinent le dossier et rendent un avis préliminaire.' },
      { t: 'Téléconsultation avec le médecin', dur: 'Planifiée sous 3 à 5 jours', who: 'Spécialistes de l’hôpital', d: 'Une téléconsultation en face à face avec le médecin qui vous traitera. Vous recevez par écrit le plan de traitement, la fourchette de coûts et la durée de séjour prévue.' },
      { t: 'Visa médical et voyage', dur: '1 à 2 semaines', who: 'Plateforme', d: 'L’hôpital délivre une lettre d’invitation médicale. Nous préparons le dossier de visa, réservons les vols et l’hébergement à proximité de l’hôpital.' },
      { t: 'Traitement en Chine', dur: '2 à 6 semaines', who: 'Hôpital + plateforme', d: 'Accueil à l’aéroport, admission, interprétariat médical, coordination quotidienne et aide pratique pour vous et vos proches.' },
      { t: 'Sortie et suivi au retour', dur: 'À long terme', who: 'Plateforme', d: 'Compte rendu de sortie traduit, schéma posologique, rendez-vous de suivi à distance et orientation en rééducation — la relation ne s’arrête pas à l’aéroport.' }
    ],
    note: 'Délai moyen entre le premier message et l’arrivée en Chine : 2 à 4 semaines, selon la complétude du dossier et la durée d’obtention du visa.'
  },

  care: {
    eyebrow: 'Qui fait quoi',
    title: 'Nous sommes le pont, pas l’hôpital — et nous l’écrivons noir sur blanc',
    sub: 'Des frontières claires vous protègent. Voici exactement ce que nous prenons en charge, et ce que seul l’hôpital peut faire.',
    usT: 'Ce que Jiuying prend en charge',
    us: ['Première consultation et évaluation gratuites', 'Collecte, traduction et structuration de votre dossier médical', 'Orientation vers l’hôpital et le spécialiste adaptés', 'Planification et interprétariat de la téléconsultation', 'Appui pour la lettre d’invitation médicale et le dossier de visa', 'Vols, accueil à l’aéroport, hébergement et transports locaux', 'Interprétariat médical à l’hôpital et coordination quotidienne', 'Aide pratique pour les proches qui vous accompagnent', 'Traduction du compte rendu de sortie et coordination du suivi à distance'],
    hospT: 'Ce que l’hôpital prend en charge',
    hosp: ['Lecture du dossier et avis médical', 'Diagnostic et plan de traitement', 'Admission, chirurgie, radiothérapie et médication', 'Soins infirmiers et gestion de l’hospitalisation', 'Factures officielles et documents médicaux', 'Compte rendu de sortie et suivi clinique', 'Responsabilité médicale entière pour toute décision clinique'],
    note: 'Toutes les décisions et l’entière responsabilité médicales incombent à l’hôpital qui vous reçoit. Jiuying n’exerce pas la médecine, ne porte pas de jugement médical, ne garantit aucun résultat thérapeutique et ne perçoit ni ne détient jamais vos frais médicaux.'
  },

  cost: {
    eyebrow: 'Coûts et paiement',
    title: 'Vous connaissez le montant avant d’embarquer',
    sub: 'Pas d’acompte, pas d’engagement à l’aveugle. L’estimation est établie après que le spécialiste a réellement étudié votre dossier.',
    items: [
      { t: 'Les frais médicaux vont directement à l’hôpital', d: 'Vous payez l’hôpital directement contre une facture officielle détaillée. Jiuying n’encaisse, ne détient ni ne transmet jamais vos frais médicaux — c’est une règle stricte, pas une préférence.' },
      { t: 'Une estimation écrite avant le départ', d: 'Après la téléconsultation, vous recevez une fourchette de coûts écrite couvrant le traitement, l’hospitalisation et les médicaments prévus. Vous décidez en toute connaissance de cause.' },
      { t: 'Des frais de coordination fixés à l’avance', d: 'Nos frais de coordination sont chiffrés et confirmés par écrit avant votre départ. Aucun frais caché, aucun supplément inventé après l’atterrissage.' },
      { t: 'Des documents exploitables par votre assurance', d: 'Nous fournissons factures détaillées, certificats de diagnostic et dossiers médicaux en anglais pour vos demandes de remboursement ; certains assureurs internationaux peuvent être facturés directement.' }
    ],
    noteTitle: 'Ce que nous ne ferons jamais',
    noteText: 'Nous ne promettons aucun résultat, nous n’utilisons pas de photos avant/après comme preuve d’efficacité, et nous n’acceptons ni espèces ni virements hors comptabilité. Tout passe par des circuits officiels et facturés.',
    flowTitle: 'Comment se déroule le paiement, étape par étape',
    flow: ['Téléconsultation et remise de l’estimation écrite', 'Vous confirmez le plan et l’estimation par écrit', 'Acompte versé uniquement pour les vols et l’hébergement', 'À l’admission, vous réglez l’hôpital directement selon la facture officielle', 'Tout acte supplémentaire est chiffré et validé avant d’être réalisé']
  },

  stories: {
    eyebrow: 'Témoignages',
    title: 'Ce que cela a donné pour d’autres',
    sub: 'Publiés avec l’autorisation des patients et entièrement anonymisés. Expériences individuelles uniquement — aucune promesse de résultat.',
    items: [
      { text: 'On m’avait dit que la tumeur était inopérable et que je devais rentrer chez moi et profiter du temps qu’il me restait. Jiuying a transmis mes images à un hôpital de Guangzhou, et trois jours plus tard j’étais en visioconférence avec un chirurgien qui m’a expliqué une option de radiothérapie dont personne ne m’avait parlé. Cinq séances, trois semaines en Chine, et je suis rentré avec un plan de suivi.', name: 'M. L., 58 ans', meta: 'Cancer du foie · Asie du Sud-Est' },
      { text: 'Ce qui m’inquiétait le plus, c’était la langue. Mais mon coordinateur m’a parlé dans ma langue dès le premier message, et un interprète était présent à chaque consultation. Je n’ai jamais eu à deviner ce que le médecin venait de dire.', name: 'Mme N., 41 ans', meta: 'Cancer du sein · Viêt Nam' },
      { text: 'Ce qui m’a convaincu, c’est l’argent. J’ai reçu un chiffre écrit avant d’acheter mon billet, j’ai payé l’hôpital moi-même et obtenu une facture officielle, et le montant final est resté dans la fourchette annoncée. Rien n’a été inventé après coup.', name: 'M. R., 63 ans', meta: 'Chirurgie cardiaque · Moyen-Orient' }
    ]
  },

  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Les questions que les patients posent avant de décider',
    sub: 'S’il reste un point obscur, écrivez-nous — c’est une personne réelle qui répond, pas un robot.',
    items: [
      { q: 'Les hôpitaux chinois valent-ils vraiment les meilleurs hôpitaux de chez moi ?', a: 'Les hôpitaux avec lesquels nous coordonnons sont des hôpitaux tertiaires de grade A (三甲) et des centres spécialisés nationaux — le plus haut niveau du système chinois. Leur classement est public et vérifiable auprès de la Commission nationale de la santé. Plusieurs d’entre eux réalisent chaque année davantage d’actes de radiothérapie et de chirurgie que la plupart des grands hôpitaux ailleurs. Nous vous communiquons le nom de l’hôpital et du médecin avant le départ pour que vous puissiez vérifier vous-même.' },
      { q: 'Qui me soignera réellement ? Puis-je le savoir à l’avance ?', a: 'Oui. Avant tout engagement, vous recevez le nom de l’hôpital, du service, ainsi que le nom et le titre du médecin traitant, et vous bénéficiez d’une téléconsultation avec ce médecin. Nous n’envoyons pas un patient à l’hôpital pour qu’il découvre sur place qui le prend en charge.' },
      { q: 'Je ne parle pas un mot de chinois. Comment communiquera-t-on ?', a: 'Deux niveaux. Votre coordinateur parle votre langue et gère tout ce qui se passe hors de l’hôpital. À l’intérieur, un interprète médical assiste aux consultations, à l’admission et à la sortie. Les documents écrits — plan de traitement, estimation des coûts, compte rendu de sortie — vous sont fournis dans votre langue.' },
      { q: 'Quels documents médicaux dois-je envoyer ?', a: 'Idéalement : l’imagerie (TDM/IRM/TEP, avec les fichiers DICOM d’origine si vous les avez), les comptes rendus d’anatomopathologie, les derniers bilans sanguins, un résumé des traitements antérieurs et votre liste de médicaments actuels. Si vous n’avez qu’un compte rendu de sortie, envoyez-le : nous vous dirons ce qu’il faut ajouter.' },
      { q: 'Dans combien de temps le traitement peut-il commencer ?', a: 'La pré-lecture du dossier prend 2 à 3 jours, la téléconsultation est généralement planifiée sous 3 à 5 jours, et le visa plus le voyage prennent 1 à 2 semaines. La plupart des patients commencent dans les 1 à 2 semaines suivant leur arrivée en Chine. Du premier message à l’arrivée, comptez généralement 2 à 4 semaines.' },
      { q: 'Combien cela coûte-t-il, et comment paie-t-on ?', a: 'Vous recevez une fourchette de coûts écrite après la téléconsultation, avant de vous décider. Les frais médicaux sont réglés par vous directement à l’hôpital contre facture officielle. Nos frais de coordination sont fixés par écrit à l’avance. Nous ne détenons jamais vos frais médicaux et n’acceptons pas d’espèces.' },
      { q: 'Un proche peut-il m’accompagner ?', a: 'Oui, et nous le recommandons pour les traitements lourds. Nous l’aidons pour les documents d’invitation en vue du visa, organisons l’hébergement pour vous deux et prévoyons un lit d’accompagnant dans la chambre lorsque l’hôpital l’autorise.' },
      { q: 'Comment fonctionne le visa médical ?', a: 'L’hôpital délivre une lettre d’invitation médicale officielle à votre nom. Nous préparons le dossier de pièces justificatives et vous accompagnons pas à pas dans la demande. La plupart des patients sont acceptés sans entretien ; les délais dépendent de votre pays, généralement 1 à 2 semaines.' },
      { q: 'Que se passe-t-il après mon retour ?', a: 'Vous repartez avec un compte rendu de sortie traduit et votre schéma posologique. Nous coordonnons les consultations de suivi à distance avec l’équipe qui vous a traité, transmettons les résultats d’anatomopathologie et d’imagerie, et organisons si besoin une orientation en rééducation ou pour les médicaments.' },
      { q: 'Êtes-vous un hôpital ? Qui est responsable en cas de problème ?', a: 'Non — et c’est là le point essentiel. Jiuying est un service d’orientation et de coordination. Tous les diagnostics, traitements et décisions cliniques relèvent de l’hôpital, et l’entière responsabilité médicale incombe à l’hôpital au regard du droit chinois. Nous n’exerçons pas la médecine et ne portons pas de jugement médical. Cette limite est écrite dans votre contrat de service.' },
      { q: 'Mes données médicales sont-elles protégées ?', a: 'Votre dossier n’est transmis qu’aux spécialistes de l’hôpital qui examinent votre cas, et uniquement avec votre autorisation explicite. Le traitement des données respecte la loi chinoise sur la protection des informations personnelles et les règles applicables aux transferts transfrontaliers. Vous pouvez demander la suppression de votre dossier à tout moment.' }
    ],
    moreTitle: 'Encore une question ?',
    moreText: 'Écrivez-nous : un coordinateur répond sous 4 heures pendant nos horaires de travail (9h00–21h00 GMT+8, sept jours sur sept).',
    moreBtn: 'Nous poser la question'
  },

  partners: {
    eyebrow: 'Partenariat de canal',
    title: 'Pour les agences, cliniques et associations à l’étranger',
    sub: 'Si vous touchez déjà des patients qui ont besoin de soins indisponibles localement, vous pouvez vous connecter à un réseau hospitalier qui s’élargit, au lieu d’être lié à un seul établissement.',
    whoT: 'Avec qui nous travaillons',
    who: ['Agences d’orientation médicale et de tourisme médical', 'Agences de voyage et départements tourisme médical', 'Centres de bilans de santé et cliniques privées', 'Courtiers en assurance et conseillers en avantages sociaux', 'Associations et organisations communautaires chinoises à l’étranger', 'Créateurs de contenu locaux dans le domaine de la santé'],
    doT: 'Ce que fait un partenaire',
    dos: ['Toucher localement les patients qui ont besoin de soins indisponibles chez eux', 'Assurer la première consultation et qualifier la demande', 'Aider à réunir et organiser le dossier médical', 'Mettre le patient en relation avec nous et organiser la téléconsultation', 'Accompagner le patient dans l’organisation du voyage'],
    earnT: 'Comment les partenaires sont rémunérés',
    earn: ['La commission est versée après que le patient orienté a terminé son traitement', 'Aucun frais fixe, aucun droit d’entrée — nous ne répercutons jamais nos coûts d’exploitation', 'Les taux sont convenus au cas par cas dans un accord de coopération distinct', 'À mesure que le réseau s’élargit, les partenaires accèdent à plus de spécialités et d’hôpitaux'],
    boundT: 'Des limites claires',
    bound: ['Le partenaire ne peut signer, promettre ni encaisser au nom de l’hôpital', 'Aucune publicité mensongère, aucune promesse de guérison ou de résultat', 'Le partenaire ne perçoit jamais les frais médicaux du patient', 'La communication clinique reste à l’hôpital ; le partenaire coordonne localement'],
    cta: 'Parler d’un partenariat'
  },

  contact: {
    eyebrow: 'Nous contacter',
    title: 'Dites-nous ce que vous traversez. Nous répondons sous 4 heures.',
    sub: 'Envoyez votre dossier, ou décrivez simplement la situation dans votre langue. La première étude est gratuite et n’engage à rien ensuite.',
    wayEmail: 'E-mail (à privilégier pour les dossiers médicaux)',
    wayHours: 'Horaires',
    wayHoursV: '9h00 – 21h00 GMT+8, sept jours sur sept',
    waySpeed: 'Première réponse',
    waySpeedV: 'Sous 4 heures',
    wayBase: 'Basés à',
    wayBaseV: 'Guangzhou, Chine',
    formTitle: 'Envoyer une demande',
    fName: 'Nom complet', fNamePh: 'ex. Nguyen Van A',
    fCountry: 'Pays / région', fCountryPh: 'ex. Vietnam',
    fContact: 'E-mail ou WhatsApp',
    fType: 'De quoi avez-vous besoin ?',
    fTypeOpts: ['Traitement du cancer', 'Second avis / RCP', 'Cardiologie', 'Neurochirurgie', 'Orthopédie', 'Bilan de santé', 'Rééducation MTC', 'Partenariat', 'Autre'],
    fMessage: 'Décrivez brièvement la situation',
    fMessagePh: 'Diagnostic, ce que votre médecin vous a dit, ce que vous avez déjà essayé, et quand vous espérez voyager…',
    fSubmit: 'Générer mon e-mail de demande',
    fNote: 'Ce formulaire n’a aucun serveur derrière lui : le bouton ouvre votre propre messagerie avec tout pré-rempli, de sorte que votre dossier ne transite jamais par un serveur tiers. Si vous avez des fichiers d’imagerie ou d’anatomopathologie, joignez-les à cet e-mail (DICOM, PDF ou photos conviennent).',
    fOkTitle: 'Votre brouillon de demande est prêt',
    fOkText: 'Votre messagerie devrait s’ouvrir avec le message déjà rempli. Si rien ne se passe, autorisez les fenêtres surgissantes ou écrivez-nous directement.',
    stepsTitle: 'Ce qui se passe après l’envoi',
    steps: ['Un coordinateur parlant votre langue répond sous 4 heures', 'Vous envoyez les documents médicaux dont vous disposez', 'L’hôpital pré-étudie votre dossier et rend un avis', 'Vous rencontrez le médecin en visio — ensuite, c’est vous qui décidez']
  },

  footer: {
    about: 'La plateforme de réorientation médicale internationale Jiuying met en relation les patients internationaux avec les hôpitaux tertiaires de grade A de Chine. Nous gérons le parcours — dossier, orientation, téléconsultation, visa, accueil et suivi — tandis que la médecine relève de l’hôpital.',
    exploreT: 'Explorer', servicesT: 'Ce que nous organisons', contactT: 'Contact',
    services: ['Radiothérapie de précision', 'Second avis pluridisciplinaire', 'Cardiologie', 'Neurochirurgie', 'Orthopédie', 'Bilan de santé', 'Rééducation MTC', 'Partenariat'],
    legal: 'Avertissement : ce site est un service d’information et de coordination d’orientation. Il ne constitue ni un avis médical, ni un diagnostic, ni une recommandation thérapeutique, ni la promesse d’un résultat clinique. Les indications, protocoles et risques sont expliqués au patient par l’hôpital qui le prend en charge, conformément au droit chinois. Les cas présentés sont publiés avec l’autorisation des patients et anonymisés. Les clients de la région de Taiwan en Chine sont servis aux mêmes conditions que toutes les autres régions.',
    rights: 'Tous droits réservés.',
    regions: 'Nous servons des patients en Asie du Sud-Est, en Asie de l’Est, en Europe, dans les Amériques, au Moyen-Orient, en Asie du Sud, en Afrique et en Océanie.'
  },

  common: {
    skip: 'Aller au contenu principal', close: 'Fermer', menu: 'Menu',
    langLabel: 'Langue', langHint: 'Choisissez votre langue',
    top: 'Retour en haut', required: 'Obligatoire',
    switchText: 'Voir ce site en {lang}'
  },

  toast: {
    title: 'Nous avons choisi une langue et une palette adaptées à votre région',
    body: 'D’après votre connexion, le site est passé en {lang}. Vous pouvez changer à tout moment depuis le menu en haut à droite.',
    keep: 'Conserver', change: 'Changer'
  }

  });
})();
