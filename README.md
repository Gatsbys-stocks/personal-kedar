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
- **Contacto y redes**: WhatsApp, llamada y email directos, y enlaces a su TikTok (@kedardhungana4) e Instagram (@kndhungana).
- **Vista previa al compartir**: imagen y texto propios cuando se pega el enlace en WhatsApp o Facebook.
- **Datos para Google** (`schema.org/Person`): nombre, cargo y locales para que los buscadores le identifiquen.

## Estructura

| Archivo | Qué es |
|---|---|
| `index.html` | La página |
| `css/styles.css` | Estilos |
| `js/config.js` | **Datos que se cambian**: contacto, locales y velocidad de la animación |
| `js/main.js` | Lógica: pinta locales y contacto, banderas de oración y animación |
| `img/namaste/` | Los 8 fotogramas del namaste, sin fondo |
| `img/montanas/` | Las 5 capas del paisaje (SVG) |
| `img/og-kedar.jpg` | Imagen que sale al compartir el enlace |
| `icon-*.png`, `apple-touch-icon.png` | Iconos de la pestaña y de "Añadir a pantalla de inicio" |

`.nojekyll` va vacío: súbelo también, para que GitHub Pages publique los archivos tal cual.

## Cambiar datos

- **Añadir, quitar o editar un local**: `js/config.js` → `LOCALES`. Cada local es un bloque `{ ... }`; un campo vacío (`""`) no se muestra.
- **Teléfono y email de Kedar**: `js/config.js` → `CONTACTO`.
- **Redes (TikTok, Instagram, Facebook)**: `js/config.js` → `REDES`. Solo el usuario, sin @; Facebook con el enlace completo. Si una se deja vacía, no sale.
- **Velocidad de la animación**: `js/config.js` → `SUAVIDAD`. La longitud del recorrido está en `css/styles.css` → `#intro { height: 420vh }`.
- **Textos de "Sobre Kedar" y "Comunidad"**: directamente en `index.html`.

## Publicar en GitHub Pages

1. Sube todo el contenido de la carpeta (incluido `.nojekyll`) a la raíz del repositorio.
2. *Settings → Pages → Deploy from a branch → `main` / `(root)`*.
3. La web queda en `https://gatsbys-stocks.github.io/kedar-dhungana/`.

Si el repositorio tiene otro nombre o se le pone un dominio propio, cambia esa dirección en `index.html` (etiquetas `og:url`, `og:image`, `canonical` y el bloque `application/ld+json`). Si no, la vista previa de WhatsApp no sale.

## Decisiones técnicas

- **Cero dependencias de build**: HTML, CSS y JS sin compilar, como el resto de mis webs. Se aloja en GitHub Pages tal cual.
- **Fotos sin fondo en WebP con transparencia**: 8 fotogramas, unos 650 KB en total. El primero se precarga para que la entrada salga al momento.
- **Paisaje en SVG por capas**: pesa poco, se ve nítido en cualquier pantalla y permite el efecto de profundidad.
- **Una sola animación con `requestAnimationFrame`** que solo corre mientras hay movimiento. Con `prefers-reduced-motion` la entrada se muestra ya terminada.
- **Accesible y usable en móvil**: foco visible, textos alternativos y diseño pensado primero para el móvil, que es donde se abrirá el enlace.
