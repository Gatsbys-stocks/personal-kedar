/* =====================================================================
   Kedar Nath Dhungana · lógica de la web
   1. Pinta los locales y el contacto desde js/config.js
   2. Banderas de oración y letras del nombre
   3. Animación del namaste y del amanecer al hacer scroll
   4. Aparición suave de las secciones
   ===================================================================== */
(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const soloNumeros = (t) => String(t).replace(/\D/g, "");
  const tel = (t) => { const n = soloNumeros(t); return "tel:+" + (n.length === 9 ? "34" + n : n); };
  const externo = 'target="_blank" rel="noopener"';

  /* ---------- Iconos ---------- */
  const ICON = {
    tel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3z"/></svg>',
    tt: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.8 5.8 0 0 0-.8-.1 5.8 5.8 0 1 0 5.8 5.8V9.1a7.4 7.4 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.3-1.6z"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.4 0-4.1 1.5-4.1 4.2v2.3H7.5V14h2.7v8h3.3z"/></svg>'
  };

  /* ---------- 1. Locales ---------- */
  function pintarLocales() {
    const caja = $("locales");
    if (!caja || typeof LOCALES === "undefined") return;
    caja.innerHTML = LOCALES.map((l) => {
      const tels = (l.telefonos || []).filter(Boolean);
      const lineas = [`<li>${ICON.map}<span>${esc(l.direccion)}</span></li>`];
      if (tels.length) lineas.push(`<li>${ICON.tel}<span>${tels.map(esc).join(" · ")}</span></li>`);
      if (l.email) lineas.push(`<li>${ICON.mail}<a href="mailto:${esc(l.email)}">${esc(l.email)}</a></li>`);

      const botones = [];
      if (l.whatsapp) botones.push(`<a class="lb" href="https://wa.me/${soloNumeros(l.whatsapp)}" ${externo}>${ICON.wa}WhatsApp</a>`);
      if (l.web) botones.push(`<a class="lb" href="${esc(l.web)}" ${externo}>${ICON.web}Web</a>`);
      if (l.instagram) botones.push(`<a class="lb" href="https://www.instagram.com/${esc(l.instagram)}/" ${externo}>${ICON.ig}Instagram</a>`);
      if (tels.length) botones.push(`<a class="lb" href="${tel(tels[0])}">${ICON.tel}Llamar</a>`);
      if (l.mapa) botones.push(`<a class="lb" href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(l.mapa)}" ${externo}>${ICON.map}Cómo llegar</a>`);

      return `
        <article class="local l-${esc(l.estilo)} reveal">
          <header class="lhead">
            <div class="ltag">${esc(l.tipo)}</div>
            <h3>${esc(l.nombre)}</h3>
            ${l.nombreOriginal ? `<div class="lnative">${esc(l.nombreOriginal)}</div>` : ""}
          </header>
          <div class="lbody">
            ${l.cargo ? `<div class="lrole">${esc(l.cargo)}</div>` : ""}
            ${l.descripcion ? `<p>${esc(l.descripcion)}</p>` : ""}
            <ul class="linfo">${lineas.join("")}</ul>
            <div class="lbtns">${botones.join("")}</div>
            ${l.desde ? `<span class="since">${esc(l.desde)}</span>` : ""}
          </div>
        </article>`;
    }).join("");
  }

  /* ---------- 1b. Contacto ---------- */
  function pintarContacto() {
    if (typeof CONTACTO === "undefined") return;
    const c = CONTACTO, info = $("contactoInfo"), btns = $("contactoBotones");
    const lineas = [], botones = [];
    if (c.telefono) lineas.push(`<li>${ICON.tel}<a href="${tel(c.telefono)}">${esc(c.telefono)}</a></li>`);
    if (c.email) lineas.push(`<li>${ICON.mail}<a href="mailto:${esc(c.email)}">${esc(c.email)}</a></li>`);
    if (c.whatsapp) botones.push(`<a class="cb cb-wa" href="https://wa.me/${soloNumeros(c.whatsapp)}" ${externo}>${ICON.wa}<span>WhatsApp</span></a>`);
    if (c.telefono) botones.push(`<a class="cb" href="${tel(c.telefono)}">${ICON.tel}<span>Llamar</span></a>`);
    if (c.email) botones.push(`<a class="cb" href="mailto:${esc(c.email)}">${ICON.mail}<span>Email</span></a>`);
    if (info) info.innerHTML = lineas.join("");
    if (btns) { btns.innerHTML = botones.join(""); btns.style.setProperty("--n", botones.length); }
  }

  /* ---------- 1c. Redes: tarjetas de perfil estilo TikTok e Instagram ---------- */
  function pintarRedes() {
    const caja = $("perfiles");
    if (!caja || typeof REDES === "undefined") return;
    const limpio = (u) => String(u || "").trim().replace(/^@/, "");
    const stat = (num, txt) => (num ? `<div class="stat"><b>${esc(num)}</b><span>${txt}</span></div>` : "");
    const bio = `
      <p class="pbio">Propietario · Buddha Bhumi, Barcelona<br>Expresidente · Prabasi Nepali Manch Spain<br>Expresidente · Kaski Samaj Spain</p>`;
    const tarjetas = [];

    const tt = REDES.tiktok || {};
    if (limpio(tt.usuario)) {
      const u = limpio(tt.usuario), url = `https://www.tiktok.com/@${esc(u)}`;
      tarjetas.push(`
        <a class="perfil p-tt reveal" href="${url}" ${externo} aria-label="TikTok de Kedar Dhungana, @${esc(u)}">
          <div class="pbar"><span class="plogo">${ICON.tt}TikTok</span></div>
          <div class="pava"><img src="img/avatar.webp" alt="" width="96" height="96" loading="lazy"></div>
          <div class="pname">Kedar Dhungana</div>
          <div class="phandle">@${esc(u)}</div>
          <div class="pstats">${stat(tt.seguidores, "Seguidores")}${stat(tt.meGusta, "Me gusta")}</div>
          ${bio}
          <span class="pbtn">Seguir en TikTok</span>
        </a>`);
    }

    const ig = REDES.instagram || {};
    if (limpio(ig.usuario)) {
      const u = limpio(ig.usuario), url = `https://www.instagram.com/${esc(u)}/`;
      tarjetas.push(`
        <a class="perfil p-ig reveal" href="${url}" ${externo} aria-label="Instagram de Kedar Dhungana, @${esc(u)}">
          <div class="pbar"><span class="plogo">${ICON.ig}Instagram</span></div>
          <div class="pava"><img src="img/avatar.webp" alt="" width="96" height="96" loading="lazy"></div>
          <div class="pname">Kedar Dhungana</div>
          <div class="phandle">@${esc(u)}</div>
          <div class="pstats">${stat(ig.publicaciones, "Publicaciones")}${stat(ig.seguidores, "Seguidores")}</div>
          ${bio}
          <span class="pbtn">Seguir en Instagram</span>
        </a>`);
    }

    const fb = REDES.facebook || {};
    if (fb.enlace) {
      tarjetas.push(`
        <a class="perfil p-fb reveal" href="${esc(fb.enlace)}" ${externo} aria-label="Facebook de Kedar Dhungana">
          <div class="pbar"><span class="plogo">${ICON.fb}Facebook</span></div>
          <div class="pava"><img src="img/avatar.webp" alt="" width="96" height="96" loading="lazy"></div>
          <div class="pname">Kedar Dhungana</div>
          <div class="phandle">Digital creator · Barcelona</div>
          <div class="pstats">${stat(fb.seguidores, "Seguidores")}</div>
          ${bio}
          <span class="pbtn">Seguir en Facebook</span>
        </a>`);
    }

    caja.innerHTML = tarjetas.join("");
    caja.dataset.n = tarjetas.length;
    if (!tarjetas.length) $("redes").hidden = true;
  }

  pintarLocales();
  pintarContacto();
  pintarRedes();

  /* ---------- 2. Banderas de oración (lungta) ---------- */
  (function banderas() {
    const svg = $("prayerSvg");
    if (!svg) return;
    const NS = "http://www.w3.org/2000/svg";
    const colores = ["#1f5fbf", "#f4f1ea", "#d4142f", "#2e8b3e", "#f2c230"];
    const n = 22, pts = [];
    let d = "";
    for (let i = 0; i <= n; i++) {
      const x = (i * 1000) / n, y = 4 + Math.sin((i / n) * Math.PI) * 14;
      pts.push([x, y]);
      d += (i ? "L" : "M") + x + " " + y + " ";
    }
    const cuerda = document.createElementNS(NS, "path");
    cuerda.setAttribute("d", d);
    cuerda.setAttribute("fill", "none");
    cuerda.setAttribute("stroke", "#ecb95e");
    cuerda.setAttribute("stroke-width", "1");
    cuerda.setAttribute("vector-effect", "non-scaling-stroke");
    svg.appendChild(cuerda);
    for (let i = 0; i < n; i++) {
      const [x, y] = pts[i], w = (1000 / n) * 0.78, r = document.createElementNS(NS, "rect");
      r.setAttribute("x", x + (1000 / n - w) / 2);
      r.setAttribute("y", y + 1);
      r.setAttribute("width", w);
      r.setAttribute("height", 28);
      r.setAttribute("fill", colores[i % 5]);
      r.setAttribute("class", "flag");
      r.style.animationDelay = (-(i * 0.6) % 7) + "s";
      svg.appendChild(r);
    }
  })();

  /* ---------- 2b. Letras del nombre ---------- */
  const letras = [];
  document.querySelectorAll("#name .line").forEach((linea) => {
    [...linea.dataset.text].forEach((c) => {
      const s = document.createElement("span");
      if (c === " ") s.className = "sp";
      else { s.className = "ch"; s.textContent = c; letras.push(s); }
      linea.appendChild(s);
    });
  });

  /* ---------- 3. Animación al hacer scroll ---------- */
  const intro = $("intro"), frames = $("frames");
  const fotos = frames ? [...frames.querySelectorAll("img")] : [];
  const sol = $("sun"), cieloDia = $("skyDay"), estrellas = $("stars");
  const capas = ["far", "macha", "mid", "near", "fore"].map((k) => document.querySelector(".l-" + k));
  const subida = [1.5, 3, 5, 7, 9]; // cuánto sube cada capa de montañas (en vh)
  const rule = $("rule"), deva = $("devaName"), tag = $("tagline"), hint = $("hint");

  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const tramo = (p, a, b) => clamp((p - a) / (b - a));
  const smooth = (t) => t * t * (3 - 2 * t);
  const soft = (t) => t * t * t * (t * (t * 6 - 15) + 10);

  function pintar(p) {
    // Fotogramas del namaste: cada uno se funde con el siguiente
    const f = tramo(p, 0.04, 0.84) * (fotos.length - 1);
    const i = Math.min(Math.floor(f), fotos.length - 1);
    const mezcla = smooth(tramo(f - i, 0.1, 1));
    fotos.forEach((im, k) => {
      im.style.zIndex = k;
      im.style.opacity = k === i ? 1 : k === i + 1 ? mezcla : 0;
    });

    // Amanecer
    const s = smooth(p);
    sol.style.transform = `translateY(${(-s * 22).toFixed(2)}vh)`;
    cieloDia.style.opacity = (s * 0.85).toFixed(3);
    estrellas.style.opacity = (0.8 * (1 - tramo(p, 0, 0.45))).toFixed(3);

    // Paralaje de las montañas
    const vh = innerHeight / 100;
    capas.forEach((c, k) => { if (c) c.style.transform = `translateY(${(-s * subida[k] * vh).toFixed(1)}px)`; });
    frames.style.transform = `scale(${(1.04 - 0.04 * s).toFixed(4)})`;

    // Nombre, bandera, nombre en devanagari y frase
    const n = letras.length;
    letras.forEach((c, k) => {
      const ini = 0.08 + k * (0.4 / n), t = soft(tramo(p, ini, ini + 0.18));
      c.style.opacity = t.toFixed(3);
      c.style.transform = `translateY(${((1 - t) * 0.25).toFixed(3)}em)`;
    });
    rule.style.opacity = soft(tramo(p, 0.58, 0.74));
    const dv = soft(tramo(p, 0.66, 0.84));
    deva.style.opacity = dv;
    deva.style.transform = `translateY(${(1 - dv) * 10}px)`;
    const g = soft(tramo(p, 0.76, 0.94));
    tag.style.opacity = g;
    tag.style.transform = `translateY(${(1 - g) * 10}px)`;
    hint.style.opacity = 1 - tramo(p, 0.01, 0.08);
  }

  if (intro && frames) {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      pintar(1);
    } else {
      // El scroll marca el destino y la animación lo sigue con suavidad
      const k = typeof SUAVIDAD === "number" ? SUAVIDAD : 0.09;
      let destino = 0, actual = 0, enMarcha = false;
      const leer = () => {
        const r = intro.getBoundingClientRect();
        destino = clamp(-r.top / (intro.offsetHeight - innerHeight));
      };
      const bucle = () => {
        actual += (destino - actual) * k;
        if (Math.abs(destino - actual) < 0.0004) { actual = destino; enMarcha = false; pintar(actual); return; }
        pintar(actual);
        requestAnimationFrame(bucle);
      };
      const avisar = () => { leer(); if (!enMarcha) { enMarcha = true; requestAnimationFrame(bucle); } };
      addEventListener("scroll", avisar, { passive: true });
      addEventListener("resize", avisar);
      leer(); actual = destino; pintar(actual);
    }
  }

  /* ---------- 4. Aparición de secciones ---------- */
  const io = new IntersectionObserver((entradas) => entradas.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* Año del pie */
  const anio = $("anio");
  if (anio) anio.textContent = new Date().getFullYear();
})();
