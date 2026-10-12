# Kedar Nath Dhungana

Web de presentación de **Kedar Nath Dhungana**, empresario nepalí en Barcelona, propietario de Buddha Bhumi y expresidente de Prabasi Nepali Manch Spain (Overseas Nepali Forum – Spain). Es un enlace para compartir: quien lo abre ve quién es, qué locales tiene y cómo contactarle.

## El problema que resolví

Kedar tiene cuatro locales en Barcelona y un cargo en la comunidad nepalí, pero todo estaba repartido en tarjetas de visita, TikTok, Instagram, Facebook y registros de empresas. Necesitaba un solo enlace profesional que se pudiera mandar por WhatsApp y que reuniera su perfil, sus negocios y su contacto, con una entrada que se recuerde.

## Qué hice

- **Entrada animada con el scroll**: Kedar, recortado de sus fotos, hace el namaste delante del Himalaya (el Machapuchare de Pokhara, su ciudad) mientras amanece. El sol sube, el cielo se aclara, las montañas se mueven a distinta velocidad y su nombre aparece letra a letra, con la versión en devanagari.
- **Animación suave**: el scroll marca el destino y la animación lo sigue con suavidad, así que no da saltos aunque se baje rápido.
- **Sobre Kedar**: origen, formación y trayectoria.
- **Negocios**: Supermercat Industria, Atithi, Aruku y Kobe, cada uno con su color, dirección, teléfonos y botones de WhatsApp, Web, Instagram, Llamar y Cómo llegar (Google Maps).
- **Comunidad**: expresidente de Prabasi Nepali Manch Spain y de Kaski Samaj Spain.
- **Síguele**: tarjetas de perfil con el estilo de cada red, TikTok (@kedardhungana4) en negro con cian y rosa, e Instagram (@kndhungana) con su degradado. Llevan foto, seguidores, bio y botón "Seguir". Si se añade Facebook, sale una tercera.
- **Contacto**: tarjeta con su foto, teléfono, email y botones grandes de WhatsApp, Llamar y Email.
- **Vista previa al compartir**: imagen y texto propios cuando se pega el enlace en WhatsApp o Facebook.
- **4 idiomas automáticos**: inglés (por defecto), español, catalán y nepalí. La web sale en el idioma del dispositivo: un móvil en español la ve en español, uno en nepalí en nepalí, y cualquier otro idioma en inglés. Arriba a la izquierda y en el pie hay un selector para cambiarlo, y la elección se recuerda. Con `?lang=ne` (o `en`, `es`, `ca`) en el enlace se fuerza un idioma.
- **Datos para Google** (`schema.org/Person`): nombre, cargo y locales para que los buscadores le identifiquen.

## Estructura

| Archivo | Qué es |
|---|---|
| `index.html` | La página |
| `css/styles.css` | Estilos |
| `js/i18n.js` | **Textos de la página en los 4 idiomas** y detección del idioma |
| `js/config.js` | **Datos que se cambian**: contacto, redes, locales (con sus textos en 4 idiomas) y velocidad de la animación |
| `js/main.js` | Lógica: pinta locales y contacto, banderas de oración y animación |
| `img/namaste/` | Los 8 fotogramas del namaste, sin fondo |
| `img/montanas/` | Las 5 capas del paisaje (SVG) |
| `img/avatar.webp` | Foto de perfil de las tarjetas de redes y contacto |
| `img/og-kedar.jpg` | Imagen que sale al compartir el enlace |
| `icon-*.png`, `apple-touch-icon.png` | Iconos de la pestaña y de "Añadir a pantalla de inicio" |

`.nojekyll` va vacío: súbelo también, para que GitHub Pages publique los archivos tal cual.

## Cambiar datos

- **Añadir, quitar o editar un local**: `js/config.js` → `LOCALES`. Cada local es un bloque `{ ... }`; un campo vacío (`""`) no se muestra.
- **Teléfono y email de Kedar**: `js/config.js` → `CONTACTO`.
- **Redes (TikTok, Instagram, Facebook)**: `js/config.js` → `REDES`. El usuario va sin @, y Facebook con el enlace completo. Los seguidores se escriben a mano y sin puntos (por ejemplo `14800`), y la web los pone en el formato de cada idioma. Actualízalos de vez en cuando. Si una red se deja vacía, no sale.
- **Velocidad de la animación**: `js/config.js` → `SUAVIDAD`. La longitud del recorrido está en `css/styles.css` → `#intro { height: 420vh }`.
- **Cualquier texto de la página**: `js/i18n.js`, en `en`, `es`, `ca` y `ne`. El texto de `index.html` es solo el inglés de respaldo para Google.
- **Textos de un local**: en `js/config.js`, cada texto va como `{ en: "...", es: "...", ca: "...", ne: "..." }`. Si falta un idioma, sale el inglés.
- **Añadir un idioma**: añade su bloque en `TEXTOS` y su nombre en `IDIOMAS` dentro de `js/i18n.js`.

## Publicar en GitHub Pages

1. Sube todo el contenido de la carpeta (incluido `.nojekyll`) a la raíz del repositorio.
2. *Settings → Pages → Deploy from a branch → `main` / `(root)`*.
3. Dominio propio: **kedarnath.site** (archivo `CNAME`). Si cambia el dominio, cambia `https://kedarnath.site/` en `index.html` (`og:url`, `og:image`, `canonical` y el bloque `application/ld+json`). Si no, la vista previa de WhatsApp no sale.

**Al subir cambios de CSS o JS**, sube el número `?v=9` de `index.html` (por ejemplo a `?v=10` en `styles.css`, `i18n.js`, `config.js` y `main.js`). Así los navegadores no se quedan con la versión vieja guardada.

## Decisiones técnicas

- **Idiomas sin librerías**: `navigator.languages` elige el idioma, `Intl.NumberFormat` da formato a los seguidores (14.8K · 14,8 mil) y el devanagari usa Noto Sans Devanagari, sin espaciado entre letras para no romper las ligaduras.
- **Cero dependencias de build**: HTML, CSS y JS sin compilar, como el resto de mis webs. Se aloja en GitHub Pages tal cual.
- **Fotos sin fondo en WebP con transparencia**: 8 fotogramas, unos 650 KB en total. El primero se precarga para que la entrada salga al momento.
- **Paisaje en SVG por capas**: pesa poco, se ve nítido en cualquier pantalla y permite el efecto de profundidad.
- **Una sola animación con `requestAnimationFrame`** que solo corre mientras hay movimiento. Con `prefers-reduced-motion` la entrada se muestra ya terminada.
- **Accesible y usable en móvil**: foco visible, textos alternativos y diseño pensado primero para el móvil, que es donde se abrirá el enlace.
