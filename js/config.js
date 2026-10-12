/* =====================================================================
   CONFIGURACIÓN DE LA WEB · Kedar Nath Dhungana
   Todo lo que se suele cambiar está aquí: contacto y locales.
   Los textos de "Sobre Kedar" y "Comunidad" están en index.html.
   ===================================================================== */

/* Contacto personal de Kedar (sección "Hablemos").
   Si un campo se deja vacío (""), su botón no aparece. */
const CONTACTO = {
  telefono: "+34 632 787 457",          // como se ve en la web
  whatsapp: "34632787457",              // solo números, con prefijo 34
  email:    "kndhungana2017@gmail.com"
};

/* Redes sociales de Kedar (bloque "Síguele en redes" de Contacto).
   Pon solo el usuario, sin @. Si se deja vacío, esa red no sale. */
const REDES = {
  tiktok:    "kedardhungana4",
  instagram: "kndhungana",
  facebook:  ""                         // enlace completo de su perfil o página
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
    tipo: "Supermercado nepalí",
    nombre: "Supermercat Industria",
    nombreOriginal: "नेपाली सुपरमार्केट",
    cargo: "Propietario · Administrador único (Buddha Bhumi SL)",
    descripcion: "Alimentación nepalí, momos congelados, ollas a presión y arroceras, vaporeras para momos, bebidas y artículos de puja. Envíos desde Barcelona a otras ciudades de Europa.",
    direccion: "C/ Indústria, 124 · 08025 Barcelona",
    mapa: "Carrer de la Indústria 124, 08025 Barcelona",
    telefonos: ["93 194 29 95"],
    whatsapp: "34931942995",
    email: "",
    web: "",
    instagram: "",
    desde: "Desde 2023"
  },
  {
    estilo: "atithi",
    tipo: "Restaurante indio",
    nombre: "Atithi",
    nombreOriginal: "Authentic Indian Flavours",
    cargo: "Manager",
    descripcion: "Cocina india auténtica en Barcelona.",
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
    tipo: "Japonés · 100% sin gluten",
    nombre: "Aruku",
    nombreOriginal: "歩く",
    cargo: "",
    descripcion: "Cocina japonesa elaborada íntegramente sin gluten.",
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
    tipo: "Sushi · 100% sin gluten",
    nombre: "Kobe",
    nombreOriginal: "神戸",
    cargo: "",
    descripcion: "Japanese Gluten Free: sushi y cocina japonesa elaborada sin gluten.",
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
