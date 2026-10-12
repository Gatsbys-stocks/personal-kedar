/* =====================================================================
   CONFIGURACIÓN DE LA WEB · Kedar Nath Dhungana
   Todo lo que se suele cambiar está aquí: contacto, redes y locales.
   Los textos fijos de la página (en los 4 idiomas) están en js/i18n.js.

   Los textos que cambian según el idioma se escriben así:
     { en: "English", es: "Español", ca: "Català", ne: "नेपाली" }
   Si falta un idioma, se usa el inglés.
   ===================================================================== */

/* Contacto personal de Kedar (sección "Hablemos").
   Si un campo se deja vacío (""), su botón no aparece. */
const CONTACTO = {
  telefono: "+34 632 787 457",          // como se ve en la web
  whatsapp: "34632787457",              // solo números, con prefijo 34
  email:    "kndhungana2017@gmail.com"
};

/* Redes sociales de Kedar (sección "Síguele").
   - usuario: sin @. Si se deja vacío, esa red no sale.
   - Los números van sin puntos ni "mil" (14800, no "14,8 mil"): la web
     los pone en el formato de cada idioma. Hay que actualizarlos a mano
     de vez en cuando. Si se dejan vacíos (""), no se muestran. */
const REDES = {
  tiktok: {
    usuario: "kedardhungana4",
    seguidores: 14800,
    meGusta: 114600
  },
  instagram: {
    usuario: "kndhungana",
    seguidores: 1001,
    publicaciones: 35
  },
  facebook: {
    enlace: "",                // enlace completo de su perfil o página
    seguidores: 6100
  }
};

/* Locales. Se pintan en este orden en la sección "Negocios".
   - estilo:   color de la cabecera → "super" (rojo), "atithi" (negro y oro),
               "aruku" (verde oscuro), "kobe" (dorado)
   - telefonos: el primero es el que usa el botón "Llamar"
   - whatsapp: solo números con prefijo; si está vacío no sale el botón
   - Cualquier campo vacío ("") o lista vacía ([]) simplemente no se muestra */
const LOCALES = [
  {
    estilo: "super",
    tipo: { en: "Nepali supermarket", es: "Supermercado nepalí", ca: "Supermercat nepalès", ne: "नेपाली सुपरमार्केट" },
    nombre: "Supermercat Industria",
    nombreOriginal: "नेपाली सुपरमार्केट",
    cargo: {
      en: "Owner · Sole director (Buddha Bhumi SL)",
      es: "Propietario · Administrador único (Buddha Bhumi SL)",
      ca: "Propietari · Administrador únic (Buddha Bhumi SL)",
      ne: "प्रोपाइटर · एकल प्रशासक (Buddha Bhumi SL)"
    },
    descripcion: {
      en: "Nepali groceries, frozen momos, pressure and rice cookers, momo steamers, drinks and puja items. Shipping from Barcelona to other cities across Europe.",
      es: "Alimentación nepalí, momos congelados, ollas a presión y arroceras, vaporeras para momos, bebidas y artículos de puja. Envíos desde Barcelona a otras ciudades de Europa.",
      ca: "Alimentació nepalesa, momos congelats, olles a pressió i arrosseres, vaporeres per a momos, begudes i articles de puja. Enviaments des de Barcelona a altres ciutats d'Europa.",
      ne: "नेपाली खाद्यान्न सामग्री, फ्रोजन मःम, प्रेसर/राइस कुकर, मःम पकाउने भाँडा, पेय पदार्थ र पूजाका सामग्री। बार्सिलोनाबाट युरोपका अन्य सहरमा पनि डेलिभरी गरिन्छ।"
    },
    direccion: "C/ Indústria, 124 · 08025 Barcelona",
    mapa: "Carrer de la Indústria 124, 08025 Barcelona",
    telefonos: ["93 194 29 95"],
    whatsapp: "34931942995",
    email: "",
    web: "",
    instagram: "",
    desde: { en: "Since 2023", es: "Desde 2023", ca: "Des del 2023", ne: "सन् २०२३ देखि" }
  },
  {
    estilo: "atithi",
    tipo: { en: "Indian restaurant", es: "Restaurante indio", ca: "Restaurant indi", ne: "भारतीय रेस्टुरेन्ट" },
    nombre: "Atithi",
    nombreOriginal: "Authentic Indian Flavours",
    cargo: { en: "Manager", es: "Manager", ca: "Manager", ne: "म्यानेजर" },
    descripcion: {
      en: "Authentic Indian cuisine in Barcelona.",
      es: "Cocina india auténtica en Barcelona.",
      ca: "Cuina índia autèntica a Barcelona.",
      ne: "बार्सिलोनामा प्रामाणिक भारतीय खाना।"
    },
    direccion: "C/ Mallorca, 534 · 08026 Barcelona",
    mapa: "Carrer de Mallorca 534, 08026 Barcelona",
    telefonos: ["632 787 457"],
    whatsapp: "",
    email: "atithibarcelona@gmail.com",
    web: "https://www.atithibarcelona.com",
    instagram: "",
    desde: ""
  },
  {
    estilo: "aruku",
    tipo: { en: "Japanese · 100% gluten-free", es: "Japonés · 100% sin gluten", ca: "Japonès · 100% sense gluten", ne: "जापानी · १००% ग्लुटेन-रहित" },
    nombre: "Aruku",
    nombreOriginal: "歩く",
    cargo: "",
    descripcion: {
      en: "Japanese cuisine made entirely gluten-free.",
      es: "Cocina japonesa elaborada íntegramente sin gluten.",
      ca: "Cuina japonesa elaborada íntegrament sense gluten.",
      ne: "पूर्ण रूपमा ग्लुटेन-रहित जापानी खाना।"
    },
    direccion: "C/ Provença, 327-329 · 08037 Barcelona",
    mapa: "Carrer de Provença 327, 08037 Barcelona",
    telefonos: ["93 459 26 42", "692 043 240"],
    whatsapp: "",
    email: "admin@arukubcn.com",
    web: "https://www.arukubcn.com",
    instagram: "aruku.bcn",
    desde: ""
  },
  {
    estilo: "kobe",
    tipo: { en: "Sushi · 100% gluten-free", es: "Sushi · 100% sin gluten", ca: "Sushi · 100% sense gluten", ne: "सुसी · १००% ग्लुटेन-रहित" },
    nombre: "Kobe",
    nombreOriginal: "神戸",
    cargo: "",
    descripcion: {
      en: "Japanese Gluten Free: sushi and Japanese cuisine made without gluten.",
      es: "Japanese Gluten Free: sushi y cocina japonesa elaborada sin gluten.",
      ca: "Japanese Gluten Free: sushi i cuina japonesa elaborada sense gluten.",
      ne: "Japanese Gluten Free: ग्लुटेनबिना बनाइएको सुसी र जापानी खाना।"
    },
    direccion: "C/ Bruniquer, 51 · 08024 Barcelona",
    mapa: "Carrer de Bruniquer 51, 08024 Barcelona",
    telefonos: ["931 371 596", "615 219 121"],
    whatsapp: "",
    email: "kobebcn51@gmail.com",
    web: "https://www.kobebcn.com",
    instagram: "kobe_sushi_bcn",
    desde: ""
  }
];

/* Velocidad de la animación del namaste.
   SUAVIDAD: lo rápido que la foto alcanza al scroll (0.05 = muy suave · 0.15 = casi directo).
   La longitud del recorrido se cambia en css/styles.css → #intro { height: 420vh } */
const SUAVIDAD = 0.09;
