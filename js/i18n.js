/* ============================================================
   ENG Tech Community — Internationalisation (i18n)
   Supports: en (English), it (Italian)
   Default: it
   ============================================================ */

'use strict';

(function initI18n() {

  /* ── Translations ──────────────────────────────────────── */
  const translations = {

    /* ════════════════════════════════════════════════════════
       ENGLISH
       ════════════════════════════════════════════════════════ */
    en: {
      /* Navbar */
      'nav.home':       'Home',
      'nav.pastEvents': 'Past Events',
      'nav.about':      'About',
      'nav.openMenu':   'Open navigation menu',
      'nav.langToggle': 'IT',   /* shown when EN is active → click to go IT */

      /* Footer */
      'footer.copy': '© 2026 ENG Tech Community. All rights reserved.',

      /* ── Home ─────────────────────────────────────────── */
      'home.metaDesc':  'ENG Tech Community — Together, we elevate technology to make it closer and more relevant, every day.',
      'home.title':     'ENG Tech Community',
      'home.heroTyping':'Together, we elevate technology to make it closer and more relevant, every day.',
      'home.heroCta':   'Iscriviti all\'evento',
      'home.heroCta.aria': 'Iscriviti all\'evento',
      'home.aboutTag':  'Who we are',
      'home.aboutTitle':'A community built<br />by engineers, for engineers.',
      'home.aboutP1':   'ENG Tech Community is an internal knowledge-sharing initiative founded on the belief that collective intelligence drives innovation. We bring together engineers, architects, developers and tech enthusiasts to exchange ideas, learn from each other and shape the future of technology at scale.',
      'home.aboutP2':   'Whether you\'re a seasoned architect or a junior developer, there\'s a seat at our table — and a talk waiting to be given.',
      'home.learnMore': 'Learn More',
      'home.learnMore.aria': 'Learn more about the community',
      'home.stat.members':  'Community Members',
      'home.stat.events':   'Events Held',
      'home.stat.speakers': 'Speakers',
      'home.stat.years':    'Years Active',
      'home.latestTag':   'Recent Highlights',
      'home.latestTitle': 'Latest Events',
      'home.latestDesc':  'A glimpse at what the community has been up to lately.',
      'home.card1.tag':   'AI / ML',
      'home.card1.date':  'March 14, 2025',
      'home.card1.title': 'GenAI in Production: Lessons from the Trenches',
      'home.card1.desc':  'A deep dive into real-world challenges when deploying large language models at enterprise scale — latency, cost, and hallucination mitigation.',
      'home.card1.aria':  'Event: GenAI in Production',
      'home.card2.tag':   'DevOps',
      'home.card2.date':  'February 6, 2025',
      'home.card2.title': 'Platform Engineering: Building the Golden Path',
      'home.card2.desc':  'How our infra team built an Internal Developer Platform that reduced time-to-deploy from days to minutes and improved developer happiness.',
      'home.card2.aria':  'Event: Platform Engineering',
      'home.card3.tag':   'Architecture',
      'home.card3.date':  'January 22, 2025',
      'home.card3.title': 'DDD in the Wild: Tactical Patterns That Actually Work',
      'home.card3.desc':  'An honest retrospective on applying Domain-Driven Design to a legacy monolith migration, including the trade-offs nobody talks about.',
      'home.card3.aria':  'Event: Domain-Driven Design',
      'home.seeAll':      'See All Events',
      'home.seeAll.aria': 'See all past events',

      /* ── Events ───────────────────────────────────────── */
      'events.metaDesc': 'ENG Tech Community — Browse all past events, talks and workshops.',
      'events.title':    'Past Events — ENG Tech Community',
      'events.heroTitle':'Past <span style="color:var(--eng-tech-pink);">Events</span>',
      'events.heroSub':  'All the talks, workshops and meetups from the community.',
      'events.list':     'Events list',
      'events.filter.aria':         'Filter events by category',
      'events.filter.all':          'All',
      'events.filter.aiml':         'AI / ML',
      'events.filter.devops':       'DevOps',
      'events.filter.architecture': 'Architecture',
      'events.filter.frontend':     'Frontend',
      'events.filter.security':     'Security',
      'events.card1.tag':   'AI / ML',
      'events.card1.date':  'March 14, 2025',
      'events.card1.title': 'GenAI in Production: Lessons from the Trenches',
      'events.card1.desc':  'Real-world challenges when deploying large language models at enterprise scale — latency, cost optimisation and hallucination mitigation strategies.',
      'events.card1.aria':  'GenAI in Production',
      'events.card2.tag':   'DevOps',
      'events.card2.date':  'February 6, 2025',
      'events.card2.title': 'Platform Engineering: Building the Golden Path',
      'events.card2.desc':  'How our infra team built an Internal Developer Platform that cut time-to-deploy from days to minutes and significantly improved developer happiness scores.',
      'events.card2.aria':  'Platform Engineering',
      'events.card3.tag':   'Architecture',
      'events.card3.date':  'January 22, 2025',
      'events.card3.title': 'DDD in the Wild: Tactical Patterns That Actually Work',
      'events.card3.desc':  'An honest retrospective on applying Domain-Driven Design to a legacy monolith migration — including the trade-offs nobody on Medium talks about.',
      'events.card3.aria':  'Domain-Driven Design',
      'events.card4.tag':   'Frontend',
      'events.card4.date':  'December 10, 2024',
      'events.card4.title': 'Web Performance at Scale: Core Web Vitals in Practice',
      'events.card4.desc':  'Practical techniques to achieve green Core Web Vitals on high-traffic pages — from image optimisation to edge rendering with modern frameworks.',
      'events.card4.aria':  'Web Performance',
      'events.card5.tag':   'Security',
      'events.card5.date':  'November 19, 2024',
      'events.card5.title': 'Zero Trust Architecture: Beyond the Buzzword',
      'events.card5.desc':  'A practical implementation guide to Zero Trust networks, identity-aware proxies and continuous verification in a hybrid cloud environment.',
      'events.card5.aria':  'Zero Trust Architecture',
      'events.card6.tag':   'AI / ML',
      'events.card6.date':  'October 8, 2024',
      'events.card6.title': 'MLOps Pipelines: From Notebook to Scalable Service',
      'events.card6.desc':  'Step-by-step walkthrough of a production-grade ML pipeline: data versioning, feature stores, model registry, A/B testing and automated retraining.',
      'events.card6.aria':  'MLOps Pipelines',
      'events.card7.tag':   'DevOps',
      'events.card7.date':  'September 25, 2024',
      'events.card7.title': 'Kubernetes at Scale: Multi-Cluster Strategies',
      'events.card7.desc':  'Lessons learned running Kubernetes across multiple regions and clouds — cluster federation, service mesh trade-offs and cost control techniques.',
      'events.card7.aria':  'Kubernetes at Scale',
      'events.card8.tag':   'Architecture',
      'events.card8.date':  'July 17, 2024',
      'events.card8.title': 'Event-Driven Architecture with Apache Kafka',
      'events.card8.desc':  'A deep-dive into event sourcing, CQRS and saga patterns implemented on Apache Kafka — including schema evolution and exactly-once semantics.',
      'events.card8.aria':  'Event-Driven Architecture',
      'events.card9.tag':   'Frontend',
      'events.card9.date':  'June 5, 2024',
      'events.card9.title': 'Micro Frontends: Scaling UI Without Losing Your Mind',
      'events.card9.desc':  'How we decomposed a monolithic frontend into independently deployable modules using Module Federation, while keeping a consistent design system.',
      'events.card9.aria':  'Micro Frontends',

      /* ── About ────────────────────────────────────────── */
      'about.metaDesc':  'About ENG Tech Community — our mission, vision, team and story.',
      'about.title':     'About — ENG Tech Community',
      'about.heroTitle': 'Who <span style="color:var(--eng-tech-pink);">We Are</span>',
      'about.heroSub':   'The story, the people and the purpose behind ENG Tech Community.',
      'about.purposeTag':   'Our Purpose',
      'about.missionTitle': 'What is ENG Tech Community?',
      'about.missionDesc':  'An independent group of technology and innovation enthusiasts born in 2016 within Engineering, with the goal of sharing our passion for IT and growing our knowledge. Our first meeting was held on 3 May 2016 and, meetup after meetup, we reached April 2019 with our 51st event. Over those three years we covered a huge range of topics: Front-End, Node.js, Android, Docker and Kubernetes, Agile, Big Data, Bitcoin and much more. Over time we "forked" and Front-ENG Talks and Technical Talks were born. We moved our meetings to the evenings for more time, opened the doors to external participants and started connecting with other communities.',
      'about.teamTag':   'The People',
      'about.teamTitle': 'Meet the Team',
      'about.teamDesc':  'Volunteers who keep the community alive, one talk at a time.',
      'about.role.founderLead':      'Founder & Lead Organiser',
      'about.role.aimlLead':         'AI / ML Track Lead',
      'about.role.designUx':         'Design & UX Chapter',
      'about.role.devopsLead':       'DevOps & Platform Track',
      'about.role.communityEvents':  'Community & Events',
      'about.role.architectureGuild':'Architecture Guild',
      'about.role.securityLead':     'Security Chapter Lead',
      'about.role.frontendGuild':    'Frontend Guild',
      'about.role.technicalManager':        'Technical Manager',
      'about.role.softwareDevSpecialist':   'Software Development Specialist',
      'about.role.itArchDesignSpecialist':  'IT Architecture Design Specialist',
      'about.storyTag':        'Our Story',
      'about.storyTitle':      'How it all started',
      'about.tl2016.title':    'The Beginning',
      'about.tl2016.desc':     'On 3 May 2016 the first meeting takes place: an independent group of technology enthusiasts is born within Engineering, sharing a passion for IT and growing together.',
      'about.tl201619.title':  '51 Events in 3 Years',
      'about.tl201619.desc':   'Meetup after meetup, the community covers a huge range of topics: Front-End, Node.js, Android, Docker and Kubernetes, Agile, Big Data, Bitcoin and much more. April 2019 marks the 51st event.',
      'about.tl2019spin.title':'The Spin-offs',
      'about.tl2019spin.desc': 'Front-ENG Talks and Technical Talks are born, broadening the formats for knowledge sharing.',
      'about.tl2019open.title':'Opening Up',
      'about.tl2019open.desc': 'Meetings move to the evenings for more time. The doors open to external participants and the community starts connecting with other communities.',
      'about.tlToday.title':   'The Next Chapter',
      'about.tlToday.desc':    'The story continues — and there\'s always room for one more meetup.',
      'about.locationTag':        'Where We Are',
      'about.locationTitle':      'Find Us',
      'about.locationDesc':       'Our events are held at the Engineering headquarters in Rome.',
      'about.locationOpenMap':    'Open in Gmaps ↗',

      'about.ctaTag':      'Get Involved',
      'about.ctaTitle':    'Ready to share your knowledge?',
      'about.ctaDesc':     'Whether you want to give a talk, propose a topic or just attend — everyone is welcome.',
      'about.ctaBtn':      'Browse Past Events',
      'about.ctaBtn.aria': 'Browse past events',
    },

    /* ════════════════════════════════════════════════════════
       ITALIAN
       ════════════════════════════════════════════════════════ */
    it: {
      /* Navbar */
      'nav.home':       'Home',
      'nav.pastEvents': 'Eventi Passati',
      'nav.about':      'Chi Siamo',
      'nav.openMenu':   'Apri menu di navigazione',
      'nav.langToggle': 'EN',   /* shown when IT is active → click to go EN */

      /* Footer */
      'footer.copy': '© 2026 ENG Tech Community. Tutti i diritti riservati.',

      /* ── Home ─────────────────────────────────────────── */
      'home.metaDesc':  'ENG Tech Community — Insieme, eleviamo la tecnologia per renderla più vicina e rilevante, ogni giorno.',
      'home.title':     'ENG Tech Community',
      'home.heroTyping':'Insieme, eleviamo la tecnologia per renderla più vicina e rilevante, ogni giorno.',
      'home.heroCta':   'Iscriviti all\'evento',
      'home.heroCta.aria': 'Iscriviti all\'evento',
      'home.aboutTag':  'Chi siamo',
      'home.aboutTitle':'Una community costruita<br />dagli ingegneri, per gli ingegneri.',
      'home.aboutP1':   'ENG Tech Community è un\'iniziativa interna di condivisione della conoscenza fondata sulla convinzione che l\'intelligenza collettiva guidi l\'innovazione. Riuniamo ingegneri, architetti, sviluppatori e appassionati di tecnologia per scambiare idee, imparare gli uni dagli altri e plasmare il futuro della tecnologia su larga scala.',
      'home.aboutP2':   'Che tu sia un architetto esperto o uno sviluppatore junior, c\'è un posto per te al nostro tavolo — e un talk che aspetta di essere tenuto.',
      'home.learnMore': 'Scopri di più',
      'home.learnMore.aria': 'Scopri di più sulla community',
      'home.stat.members':  'Membri della Community',
      'home.stat.events':   'Eventi Tenuti',
      'home.stat.speakers': 'Relatori',
      'home.stat.years':    'Anni di Attività',
      'home.latestTag':   'Ultimi Highlights',
      'home.latestTitle': 'Ultimi Eventi',
      'home.latestDesc':  'Uno sguardo a ciò che la community ha fatto ultimamente.',
      'home.card1.tag':   'AI / ML',
      'home.card1.date':  '14 Marzo 2025',
      'home.card1.title': 'GenAI in Produzione: Lezioni dal Campo',
      'home.card1.desc':  'Un\'analisi approfondita delle sfide reali nel deploy di large language model su scala enterprise — latenza, costi e mitigazione delle allucinazioni.',
      'home.card1.aria':  'Evento: GenAI in Produzione',
      'home.card2.tag':   'DevOps',
      'home.card2.date':  '6 Febbraio 2025',
      'home.card2.title': 'Platform Engineering: Costruire il Percorso Ideale',
      'home.card2.desc':  'Come il nostro team infra ha costruito una Internal Developer Platform che ha ridotto il time-to-deploy da giorni a minuti migliorando la soddisfazione degli sviluppatori.',
      'home.card2.aria':  'Evento: Platform Engineering',
      'home.card3.tag':   'Architettura',
      'home.card3.date':  '22 Gennaio 2025',
      'home.card3.title': 'DDD sul Campo: Pattern Tattici che Funzionano Davvero',
      'home.card3.desc':  'Un\'onesta retrospettiva sull\'applicazione del Domain-Driven Design alla migrazione di un monolite legacy, inclusi i trade-off di cui nessuno parla.',
      'home.card3.aria':  'Evento: Domain-Driven Design',
      'home.seeAll':      'Vedi tutti gli eventi',
      'home.seeAll.aria': 'Vedi tutti gli eventi passati',

      /* ── Events ───────────────────────────────────────── */
      'events.metaDesc': 'ENG Tech Community — Sfoglia tutti gli eventi, talk e workshop passati.',
      'events.title':    'Eventi Passati — ENG Tech Community',
      'events.heroTitle':'Eventi <span style="color:var(--eng-tech-pink);">Passati</span>',
      'events.heroSub':  'Tutti i talk, workshop e meetup della community.',
      'events.list':     'Lista degli eventi',
      'events.filter.aria':         'Filtra gli eventi per categoria',
      'events.filter.all':          'Tutti',
      'events.filter.aiml':         'AI / ML',
      'events.filter.devops':       'DevOps',
      'events.filter.architecture': 'Architettura',
      'events.filter.frontend':     'Frontend',
      'events.filter.security':     'Sicurezza',
      'events.card1.tag':   'AI / ML',
      'events.card1.date':  '14 Marzo 2025',
      'events.card1.title': 'GenAI in Produzione: Lezioni dal Campo',
      'events.card1.desc':  'Sfide reali nel deploy di large language model su scala enterprise — latenza, ottimizzazione dei costi e strategie di mitigazione delle allucinazioni.',
      'events.card1.aria':  'GenAI in Produzione',
      'events.card2.tag':   'DevOps',
      'events.card2.date':  '6 Febbraio 2025',
      'events.card2.title': 'Platform Engineering: Costruire il Percorso Ideale',
      'events.card2.desc':  'Come il nostro team infra ha costruito una Internal Developer Platform che ha ridotto il time-to-deploy da giorni a minuti, migliorando significativamente i punteggi di soddisfazione degli sviluppatori.',
      'events.card2.aria':  'Platform Engineering',
      'events.card3.tag':   'Architettura',
      'events.card3.date':  '22 Gennaio 2025',
      'events.card3.title': 'DDD sul Campo: Pattern Tattici che Funzionano Davvero',
      'events.card3.desc':  'Un\'onesta retrospettiva sull\'applicazione del Domain-Driven Design alla migrazione di un monolite legacy — inclusi i trade-off di cui nessuno parla.',
      'events.card3.aria':  'Domain-Driven Design',
      'events.card4.tag':   'Frontend',
      'events.card4.date':  '10 Dicembre 2024',
      'events.card4.title': 'Web Performance su Larga Scala: Core Web Vitals in Pratica',
      'events.card4.desc':  'Tecniche pratiche per raggiungere Core Web Vitals verdi su pagine ad alto traffico — dall\'ottimizzazione delle immagini all\'edge rendering con framework moderni.',
      'events.card4.aria':  'Web Performance',
      'events.card5.tag':   'Sicurezza',
      'events.card5.date':  '19 Novembre 2024',
      'events.card5.title': 'Zero Trust Architecture: Oltre il Buzzword',
      'events.card5.desc':  'Una guida pratica all\'implementazione di reti Zero Trust, proxy identity-aware e verifica continua in un ambiente cloud ibrido.',
      'events.card5.aria':  'Zero Trust Architecture',
      'events.card6.tag':   'AI / ML',
      'events.card6.date':  '8 Ottobre 2024',
      'events.card6.title': 'Pipeline MLOps: Dal Notebook al Servizio Scalabile',
      'events.card6.desc':  'Walkthrough passo-passo di una pipeline ML production-grade: versionamento dei dati, feature store, model registry, A/B testing e retraining automatizzato.',
      'events.card6.aria':  'Pipeline MLOps',
      'events.card7.tag':   'DevOps',
      'events.card7.date':  '25 Settembre 2024',
      'events.card7.title': 'Kubernetes su Larga Scala: Strategie Multi-Cluster',
      'events.card7.desc':  'Lezioni apprese gestendo Kubernetes su più regioni e cloud — federazione dei cluster, trade-off dei service mesh e tecniche di controllo dei costi.',
      'events.card7.aria':  'Kubernetes su Larga Scala',
      'events.card8.tag':   'Architettura',
      'events.card8.date':  '17 Luglio 2024',
      'events.card8.title': 'Architettura Event-Driven con Apache Kafka',
      'events.card8.desc':  'Un\'analisi approfondita di event sourcing, CQRS e pattern saga implementati su Apache Kafka — inclusa l\'evoluzione degli schema e la semantica exactly-once.',
      'events.card8.aria':  'Architettura Event-Driven',
      'events.card9.tag':   'Frontend',
      'events.card9.date':  '5 Giugno 2024',
      'events.card9.title': 'Micro Frontend: Scalare la UI Senza Perdere la Testa',
      'events.card9.desc':  'Come abbiamo decomposto un frontend monolitico in moduli deployabili in modo indipendente usando Module Federation, mantenendo un design system coerente.',
      'events.card9.aria':  'Micro Frontend',

      /* ── About ────────────────────────────────────────── */
      'about.metaDesc':  'Chi siamo — ENG Tech Community: mission, vision, team e storia.',
      'about.title':     'Chi Siamo — ENG Tech Community',
      'about.heroTitle': 'Chi <span style="color:var(--eng-tech-pink);">Siamo</span>',
      'about.heroSub':   'La storia, le persone e lo scopo dietro a ENG Tech Community.',
      'about.purposeTag':   'Il Nostro Scopo',
      'about.missionTitle': 'Cos\'è la ENG Tech Community?',
      'about.missionDesc':  'Un gruppo indipendente di appassionati di tecnologia e innovazione nato nel 2016 all\'interno di Engineering, con l\'obiettivo di condividere la passione per l\'informatica e accrescere le nostre conoscenze. Il nostro primo incontro si è tenuto il 3 maggio 2016 e, incontro dopo incontro, siamo arrivati fino all\'aprile 2019 con il 51° evento. In quei tre anni abbiamo affrontato tantissimi argomenti: Front-End, Node.js, Android, Docker e Kubernetes, Agile, Big Data, Bitcoin e molto altro. Nel tempo, ci siamo "forkati" e sono nati i Front-ENG Talks e i Technical Talks. Abbiamo spostato gli incontri alla sera per avere più tempo e aperto le porte agli esterni, entrando in contatto con altre community.',
      'about.teamTag':   'Le Persone',
      'about.teamTitle': 'Il Team',
      'about.teamDesc':  'Volontari che tengono viva la community, un talk alla volta.',
      'about.role.founderLead':      'Fondatrice e Lead Organizzatrice',
      'about.role.aimlLead':         'AI / ML Track Lead',
      'about.role.designUx':         'Design & UX Chapter',
      'about.role.devopsLead':       'DevOps & Platform Track',
      'about.role.communityEvents':  'Community & Events',
      'about.role.architectureGuild':'Architecture Guild',
      'about.role.securityLead':     'Security Chapter Lead',
      'about.role.frontendGuild':    'Frontend Guild',
      'about.role.technicalManager':        'Technical Manager',
      'about.role.softwareDevSpecialist':   'Specialista Sviluppo Software',
      'about.role.itArchDesignSpecialist':  'Specialista Progettazione Architetture IT',
      'about.storyTag':        'La Nostra Storia',
      'about.storyTitle':      'Come è iniziato tutto',
      'about.tl2016.title':    'La nascita',
      'about.tl2016.desc':     'Il 3 maggio 2016 si tiene il primo incontro: nasce un gruppo indipendente di appassionati di tecnologia all\'interno di Engineering, con l\'obiettivo di condividere la passione per l\'informatica e far crescere le proprie conoscenze.',
      'about.tl201619.title':  '51 eventi in 3 anni',
      'about.tl201619.desc':   'Incontro dopo incontro vengono affrontati tantissimi argomenti: Front-End, Node.js, Android, Docker e Kubernetes, Agile, Big Data, Bitcoin e molto altro. Ad aprile 2019 si raggiunge il traguardo del 51° evento.',
      'about.tl2019spin.title':'Le Spin-off',
      'about.tl2019spin.desc': 'Dal tronco comune nascono i Front-ENG Talks e i Technical Talks, ampliando i formati di condivisione della conoscenza.',
      'about.tl2019open.title':'Apertura verso l\'esterno',
      'about.tl2019open.desc': 'Gli incontri vengono spostati alla sera per avere più tempo. Le porte si aprono agli esterni, entrando in contatto con altre community e portando nuove prospettive.',
      'about.tlToday.title':   'Il Prossimo Capitolo',
      'about.tlToday.desc':    'La storia continua — e c\'è sempre spazio per un altro incontro.',
      'about.locationTag':        'Dove Siamo',
      'about.locationTitle':      'La Nostra Sede',
      'about.locationDesc':       'I nostri eventi si tengono presso la sede di Engineering a Roma.',
      'about.locationOpenMap':    'Apri in GMaps ↗',

      'about.ctaTag':      'Partecipa',
      'about.ctaTitle':    'Pronto a condividere le tue conoscenze?',
      'about.ctaDesc':     'Che tu voglia tenere un talk, proporre un argomento o semplicemente assistere — tutti sono benvenuti.',
      'about.ctaBtn':      'Sfoglia gli eventi passati',
      'about.ctaBtn.aria': 'Sfoglia gli eventi passati',
    }
  };

  /* ── Translation lookup ────────────────────────────────── */
  function t(lang, key) {
    const map = translations[lang];
    return (map && map[key] !== undefined) ? map[key] : undefined;
  }

  /* ── Apply all translations to the current page ─────────── */
  function applyTranslations(lang) {
    document.documentElement.lang = lang;

    /* textContent */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = t(lang, el.dataset.i18n);
      if (val !== undefined) el.textContent = val;
    });

    /* innerHTML — for elements containing HTML markup (spans, br…) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = t(lang, el.dataset.i18nHtml);
      if (val !== undefined) el.innerHTML = val;
    });

    /* aria-label */
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var val = t(lang, el.dataset.i18nAria);
      if (val !== undefined) el.setAttribute('aria-label', val);
    });

    /* data-text (typing effect) */
    document.querySelectorAll('[data-i18n-typing]').forEach(function (el) {
      var val = t(lang, el.dataset.i18nTyping);
      if (val !== undefined) el.dataset.text = val;
    });

    /* meta description */
    var metaDesc = document.querySelector('meta[name="description"]');
    var pageKey  = document.body.dataset.i18nPage;
    if (metaDesc && pageKey) {
      var desc = t(lang, pageKey + '.metaDesc');
      if (desc) metaDesc.setAttribute('content', desc);
    }

    /* document title */
    if (pageKey) {
      var title = t(lang, pageKey + '.title');
      if (title) document.title = title;
    }

    /* lang-toggle button */
    var toggle = document.getElementById('lang-toggle');
    if (toggle) {
      var label = t(lang, 'nav.langToggle');
      toggle.textContent = label !== undefined ? label : (lang === 'it' ? 'EN' : 'IT');
      toggle.setAttribute('aria-label', lang === 'it' ? 'Switch to English' : 'Passa all\'italiano');
      toggle.setAttribute('lang', lang === 'it' ? 'en' : 'it');
    }
  }

  /* ── Persistence ───────────────────────────────────────── */
  function getLang() {
    return localStorage.getItem('eng-lang') || 'it';
  }

  function setLang(lang) {
    localStorage.setItem('eng-lang', lang);
    applyTranslations(lang);
  }

  /* ── Bootstrap ─────────────────────────────────────────── */
  applyTranslations(getLang());

  var toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      setLang(getLang() === 'it' ? 'en' : 'it');
    });
  }

  /* ── Public API ────────────────────────────────────────── */
  window.ENGI18n = { setLang: setLang, getLang: getLang };

})();
