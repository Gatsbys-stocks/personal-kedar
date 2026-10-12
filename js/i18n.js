/* =====================================================================
   IDIOMAS · Kedar Nath Dhungana
   La web sale en el idioma del dispositivo (inglés, español, catalán o
   nepalí). Si el dispositivo está en otro idioma, sale en inglés.
   El visitante puede cambiarlo con el selector (arriba a la izquierda y en el pie) y
   se recuerda para la próxima visita. También se puede forzar con
   ?lang=es | en | ca | ne en el enlace.

   Para cambiar un texto: búscalo aquí en los cuatro idiomas.
   Los textos de los locales están en js/config.js.
   ===================================================================== */

const IDIOMAS = {
  en: "English",
  es: "Español",
  ca: "Català",
  ne: "नेपाली"
};
const IDIOMA_POR_DEFECTO = "en";

const TEXTOS = {
  en: {
    "doc.title": "Kedar Nath Dhungana · Nepali entrepreneur in Barcelona",
    "doc.desc": "Kedar Nath Dhungana, Nepali entrepreneur in Barcelona: Supermercat Industria, Atithi, Aruku and Kobe. Former President of Prabasi Nepali Manch Spain (Overseas Nepali Forum – Spain).",
    "lang.label": "Language",
    "intro.label": "Introduction",
    "intro.alt": "Kedar Nath Dhungana greeting with a namaste",
    "intro.tagline": "Nepali entrepreneur in Barcelona · Former President of Prabasi Nepali Manch Spain",
    "intro.hint": "Scroll",
    "flag": "Flag of Nepal",

    "about.kicker": "About Kedar",
    "about.title": "From Pokhara to Barcelona",
    "about.p1": "Kedar Nath Dhungana is a Nepali entrepreneur based in Barcelona. Born in Pokhara and educated at Tribhuvan University, he now runs four businesses in the city: the Nepali supermarket Supermercat Industria, the Indian restaurant Atithi, and the gluten-free Japanese restaurants Aruku and Kobe.",
    "about.p2": "Within the Nepali community he has served as President of Prabasi Nepali Manch Spain (Overseas Nepali Forum – Spain) and of Kaski Samaj Spain. On TikTok and Instagram he shares daily content about Nepali culture and the Nepali community in Spain.",
    "fact.city": "City",
    "fact.city.v": "Barcelona, Spain",
    "fact.origin": "Hometown",
    "fact.origin.v": "Pokhara, Nepal",
    "fact.biz": "Businesses",
    "fact.biz.v": "4 in Barcelona",
    "fact.edu": "Education",
    "fact.edu.v": "Tribhuvan University",

    "biz.kicker": "His businesses in Barcelona",
    "biz.title": "Businesses",
    "btn.whatsapp": "WhatsApp",
    "btn.web": "Website",
    "btn.instagram": "Instagram",
    "btn.call": "Call",
    "btn.map": "Directions",
    "btn.email": "Email",

    "comm.kicker": "Nepali community in Spain",
    "comm.title": "Serving his community",
    "comm.former": "Former President",
    "comm.pnm.sub": "Overseas Nepali Forum – Spain · Founded in 2007",
    "comm.kaski.sub": "Association of the Kaski (Pokhara) community",

    "social.kicker": "Social media",
    "social.title": "Follow him",
    "social.lead": "Videos and photos of the Nepali community in Barcelona, his businesses and the culture of Nepal, every week.",
    "social.followers": "Followers",
    "social.likes": "Likes",
    "social.posts": "Posts",
    "social.bio1": "Owner · Buddha Bhumi, Barcelona",
    "social.bio2": "Former President · Prabasi Nepali Manch Spain",
    "social.bio3": "Former President · Kaski Samaj Spain",
    "social.follow.tt": "Follow on TikTok",
    "social.follow.ig": "Follow on Instagram",
    "social.follow.fb": "Follow on Facebook",
    "social.fb.handle": "Digital creator · Barcelona",

    "contact.kicker": "Contact",
    "contact.title": "Get in touch",

    "footer.places": "BARCELONA · POKHARA"
  },

  es: {
    "doc.title": "Kedar Nath Dhungana · Empresario nepalí en Barcelona",
    "doc.desc": "Kedar Nath Dhungana, empresario nepalí en Barcelona: Supermercat Industria, Atithi, Aruku y Kobe. Expresidente de Prabasi Nepali Manch Spain (Overseas Nepali Forum – Spain).",
    "lang.label": "Idioma",
    "intro.label": "Presentación",
    "intro.alt": "Kedar Nath Dhungana saludando con namaste",
    "intro.tagline": "Empresario nepalí en Barcelona · Expresidente de Prabasi Nepali Manch Spain",
    "intro.hint": "Desliza",
    "flag": "Bandera de Nepal",

    "about.kicker": "Sobre Kedar",
    "about.title": "De Pokhara a Barcelona",
    "about.p1": "Kedar Nath Dhungana es un empresario nepalí afincado en Barcelona. Originario de Pokhara y formado en la Universidad Tribhuvan, hoy está al frente de cuatro locales en la ciudad: el supermercado nepalí Supermercat Industria, el restaurante indio Atithi y los restaurantes japoneses sin gluten Aruku y Kobe.",
    "about.p2": "En la comunidad nepalí ha sido presidente de Prabasi Nepali Manch Spain (Overseas Nepali Forum – Spain) y de Kaski Samaj Spain. En TikTok e Instagram comparte a diario contenido sobre la cultura y la comunidad nepalí en España.",
    "fact.city": "Ciudad",
    "fact.city.v": "Barcelona, España",
    "fact.origin": "Origen",
    "fact.origin.v": "Pokhara, Nepal",
    "fact.biz": "Locales",
    "fact.biz.v": "4 en Barcelona",
    "fact.edu": "Formación",
    "fact.edu.v": "Universidad Tribhuvan",

    "biz.kicker": "Sus locales en Barcelona",
    "biz.title": "Negocios",
    "btn.whatsapp": "WhatsApp",
    "btn.web": "Web",
    "btn.instagram": "Instagram",
    "btn.call": "Llamar",
    "btn.map": "Cómo llegar",
    "btn.email": "Email",

    "comm.kicker": "Comunidad nepalí en España",
    "comm.title": "Al servicio de su gente",
    "comm.former": "Expresidente",
    "comm.pnm.sub": "Overseas Nepali Forum – Spain · Fundado en 2007",
    "comm.kaski.sub": "Asociación de la comunidad de Kaski (Pokhara)",

    "social.kicker": "Redes sociales",
    "social.title": "Síguele",
    "social.lead": "Vídeos y fotos de la comunidad nepalí en Barcelona, sus locales y la cultura de Nepal, cada semana.",
    "social.followers": "Seguidores",
    "social.likes": "Me gusta",
    "social.posts": "Publicaciones",
    "social.bio1": "Propietario · Buddha Bhumi, Barcelona",
    "social.bio2": "Expresidente · Prabasi Nepali Manch Spain",
    "social.bio3": "Expresidente · Kaski Samaj Spain",
    "social.follow.tt": "Seguir en TikTok",
    "social.follow.ig": "Seguir en Instagram",
    "social.follow.fb": "Seguir en Facebook",
    "social.fb.handle": "Creador digital · Barcelona",

    "contact.kicker": "Contacto",
    "contact.title": "Hablemos",

    "footer.places": "BARCELONA · POKHARA"
  },

  ca: {
    "doc.title": "Kedar Nath Dhungana · Empresari nepalès a Barcelona",
    "doc.desc": "Kedar Nath Dhungana, empresari nepalès a Barcelona: Supermercat Industria, Atithi, Aruku i Kobe. Expresident de Prabasi Nepali Manch Spain (Overseas Nepali Forum – Spain).",
    "lang.label": "Idioma",
    "intro.label": "Presentació",
    "intro.alt": "Kedar Nath Dhungana saludant amb un namaste",
    "intro.tagline": "Empresari nepalès a Barcelona · Expresident de Prabasi Nepali Manch Spain",
    "intro.hint": "Llisca",
    "flag": "Bandera del Nepal",

    "about.kicker": "Sobre en Kedar",
    "about.title": "De Pokhara a Barcelona",
    "about.p1": "Kedar Nath Dhungana és un empresari nepalès establert a Barcelona. Originari de Pokhara i format a la Universitat Tribhuvan, avui és al capdavant de quatre locals a la ciutat: el supermercat nepalès Supermercat Industria, el restaurant indi Atithi i els restaurants japonesos sense gluten Aruku i Kobe.",
    "about.p2": "A la comunitat nepalesa ha estat president de Prabasi Nepali Manch Spain (Overseas Nepali Forum – Spain) i de Kaski Samaj Spain. A TikTok i Instagram comparteix cada dia contingut sobre la cultura i la comunitat nepalesa a Espanya.",
    "fact.city": "Ciutat",
    "fact.city.v": "Barcelona, Espanya",
    "fact.origin": "Origen",
    "fact.origin.v": "Pokhara, Nepal",
    "fact.biz": "Locals",
    "fact.biz.v": "4 a Barcelona",
    "fact.edu": "Formació",
    "fact.edu.v": "Universitat Tribhuvan",

    "biz.kicker": "Els seus locals a Barcelona",
    "biz.title": "Negocis",
    "btn.whatsapp": "WhatsApp",
    "btn.web": "Web",
    "btn.instagram": "Instagram",
    "btn.call": "Trucar",
    "btn.map": "Com arribar-hi",
    "btn.email": "Correu",

    "comm.kicker": "Comunitat nepalesa a Espanya",
    "comm.title": "Al servei de la seva gent",
    "comm.former": "Expresident",
    "comm.pnm.sub": "Overseas Nepali Forum – Spain · Fundat el 2007",
    "comm.kaski.sub": "Associació de la comunitat de Kaski (Pokhara)",

    "social.kicker": "Xarxes socials",
    "social.title": "Segueix-lo",
    "social.lead": "Vídeos i fotos de la comunitat nepalesa a Barcelona, els seus locals i la cultura del Nepal, cada setmana.",
    "social.followers": "Seguidors",
    "social.likes": "M'agrada",
    "social.posts": "Publicacions",
    "social.bio1": "Propietari · Buddha Bhumi, Barcelona",
    "social.bio2": "Expresident · Prabasi Nepali Manch Spain",
    "social.bio3": "Expresident · Kaski Samaj Spain",
    "social.follow.tt": "Segueix-lo a TikTok",
    "social.follow.ig": "Segueix-lo a Instagram",
    "social.follow.fb": "Segueix-lo a Facebook",
    "social.fb.handle": "Creador digital · Barcelona",

    "contact.kicker": "Contacte",
    "contact.title": "Parlem",

    "footer.places": "BARCELONA · POKHARA"
  },

  ne: {
    "doc.title": "केदारनाथ ढुङ्गाना · बार्सिलोनामा नेपाली व्यवसायी",
    "doc.desc": "केदारनाथ ढुङ्गाना, बार्सिलोनामा नेपाली व्यवसायी: Supermercat Industria, Atithi, Aruku र Kobe। प्रवासी नेपाली मञ्च स्पेनका पूर्व अध्यक्ष।",
    "lang.label": "भाषा",
    "intro.label": "परिचय",
    "intro.alt": "नमस्ते गर्दै केदारनाथ ढुङ्गाना",
    "intro.tagline": "बार्सिलोनामा नेपाली व्यवसायी · प्रवासी नेपाली मञ्च स्पेनका पूर्व अध्यक्ष",
    "intro.hint": "तल सार्नुहोस्",
    "flag": "नेपालको झन्डा",

    "about.kicker": "केदारबारे",
    "about.title": "पोखराबाट बार्सिलोनासम्म",
    "about.p1": "केदारनाथ ढुङ्गाना बार्सिलोनामा बसोबास गर्ने नेपाली व्यवसायी हुनुहुन्छ। पोखरामा जन्मनुभएका र त्रिभुवन विश्वविद्यालयबाट अध्ययन गर्नुभएका उहाँ अहिले यस सहरमा चारवटा व्यवसाय सञ्चालन गर्नुहुन्छ: नेपाली सुपरमार्केट Supermercat Industria, भारतीय रेस्टुरेन्ट Atithi, र ग्लुटेन-रहित जापानी रेस्टुरेन्ट Aruku र Kobe।",
    "about.p2": "नेपाली समुदायमा उहाँ प्रवासी नेपाली मञ्च स्पेन (Overseas Nepali Forum – Spain) र कास्की समाज स्पेनको अध्यक्ष भइसक्नुभएको छ। टिकटक र इन्स्टाग्राममा उहाँ स्पेनमा रहेको नेपाली समुदाय र नेपाली संस्कृतिबारे दैनिक सामग्री सेयर गर्नुहुन्छ।",
    "fact.city": "सहर",
    "fact.city.v": "बार्सिलोना, स्पेन",
    "fact.origin": "जन्मस्थान",
    "fact.origin.v": "पोखरा, नेपाल",
    "fact.biz": "व्यवसाय",
    "fact.biz.v": "बार्सिलोनामा ४ वटा",
    "fact.edu": "शिक्षा",
    "fact.edu.v": "त्रिभुवन विश्वविद्यालय",

    "biz.kicker": "बार्सिलोनामा उहाँका व्यवसाय",
    "biz.title": "व्यवसाय",
    "btn.whatsapp": "WhatsApp",
    "btn.web": "वेबसाइट",
    "btn.instagram": "Instagram",
    "btn.call": "फोन गर्नुहोस्",
    "btn.map": "बाटो हेर्नुहोस्",
    "btn.email": "इमेल",

    "comm.kicker": "स्पेनमा नेपाली समुदाय",
    "comm.title": "आफ्नो समुदायको सेवामा",
    "comm.former": "पूर्व अध्यक्ष",
    "comm.pnm.sub": "Overseas Nepali Forum – Spain · स्थापना सन् २००७",
    "comm.kaski.sub": "कास्की (पोखरा) समुदायको संस्था",

    "social.kicker": "सामाजिक सञ्जाल",
    "social.title": "फलो गर्नुहोस्",
    "social.lead": "बार्सिलोनाको नेपाली समुदाय, उहाँका व्यवसाय र नेपाली संस्कृतिका भिडियो र तस्बिरहरू, हरेक हप्ता।",
    "social.followers": "फलोअर्स",
    "social.likes": "लाइक्स",
    "social.posts": "पोस्टहरू",
    "social.bio1": "प्रोपाइटर · बुद्ध भूमि, बार्सिलोना",
    "social.bio2": "पूर्व अध्यक्ष · प्रवासी नेपाली मञ्च स्पेन",
    "social.bio3": "पूर्व अध्यक्ष · कास्की समाज स्पेन",
    "social.follow.tt": "TikTok मा फलो गर्नुहोस्",
    "social.follow.ig": "Instagram मा फलो गर्नुहोस्",
    "social.follow.fb": "Facebook मा फलो गर्नुहोस्",
    "social.fb.handle": "डिजिटल क्रिएटर · बार्सिलोना",

    "contact.kicker": "सम्पर्क",
    "contact.title": "सम्पर्क गर्नुहोस्",

    "footer.places": "बार्सिलोना · पोखरा"
  }
};

/* ---------------------------------------------------------------------
   Motor de idiomas (no hace falta tocarlo)
   --------------------------------------------------------------------- */
const I18N = (function () {
  const GUARDADO = "kedar-idioma";
  // Idiomas cercanos que se muestran en otro: gallego y euskera → español
  const PARECIDOS = { gl: "es", eu: "es", hi: "ne" };

  function detectar() {
    try {
      const q = new URLSearchParams(location.search).get("lang");
      if (q && TEXTOS[q]) return q;
    } catch (e) {}
    try {
      const g = localStorage.getItem(GUARDADO);
      if (g && TEXTOS[g]) return g;
    } catch (e) {}
    const lista = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || ""];
    for (const l of lista) {
      const base = String(l).toLowerCase().split("-")[0];
      if (TEXTOS[base]) return base;
      if (PARECIDOS[base]) return PARECIDOS[base];
    }
    return IDIOMA_POR_DEFECTO;
  }

  let idioma = detectar();
  const avisos = [];

  // Texto de la interfaz por clave
  const t = (clave) => (TEXTOS[idioma] && TEXTOS[idioma][clave]) || TEXTOS[IDIOMA_POR_DEFECTO][clave] || clave;

  // Texto de config.js: puede ser "texto" o { en: "...", es: "...", ... }
  const elegir = (v) => {
    if (v == null) return "";
    if (typeof v !== "object") return String(v);
    return v[idioma] || v[IDIOMA_POR_DEFECTO] || v.es || Object.values(v)[0] || "";
  };

  // Números de seguidores con el formato del idioma (14,8 mil · 14.8K · १४ हजार)
  const numero = (n) => {
    if (n === "" || n == null) return "";
    if (typeof n !== "number") return String(n);
    try {
      // Hasta 9.999 el número exacto (1.001); a partir de ahí abreviado (14,8 mil)
      const opciones = n >= 10000 ? { notation: "compact", maximumFractionDigits: 1 } : {};
      return new Intl.NumberFormat(idioma, opciones).format(n);
    } catch (e) { return String(n); }
  };

  function aplicar() {
    document.documentElement.lang = idioma;
    document.title = t("doc.title");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t("doc.desc"));
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => { el.alt = t(el.dataset.i18nAlt); });
    document.querySelectorAll("[data-i18n-label]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nLabel)); });
    document.querySelectorAll(".idioma-sel").forEach((sel) => { sel.value = idioma; });
    document.querySelectorAll(".idioma-corto").forEach((el) => { el.textContent = idioma.toUpperCase(); });
  }

  function cambiar(nuevo) {
    if (!TEXTOS[nuevo] || nuevo === idioma) return;
    idioma = nuevo;
    try { localStorage.setItem(GUARDADO, nuevo); } catch (e) {}
    aplicar();
    avisos.forEach((fn) => fn(idioma));
  }

  function montarSelector() {
    document.querySelectorAll(".idioma-sel").forEach((sel) => {
      sel.innerHTML = Object.entries(IDIOMAS).map(([c, n]) => `<option value="${c}">${n}</option>`).join("");
      sel.value = idioma;
      sel.addEventListener("change", () => cambiar(sel.value));
    });
  }

  return {
    get idioma() { return idioma; },
    t, elegir, numero, aplicar, cambiar, montarSelector,
    alCambiar: (fn) => avisos.push(fn)
  };
})();
