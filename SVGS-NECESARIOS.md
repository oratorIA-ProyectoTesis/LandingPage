# SVGs necesarios para la landing page

> ## 📦 ESTADO (2026-07-19)
> **✅ Integrados (10):** hero-collage · feature-progreso · desafio-vox ·
> producto-docentes · producto-investigacion · sala-solo-pregunta · esc-pitch ·
> esc-exposicion · esc-concurso · esc-reunion · esc-discurso
> (optimizados a WebP: 12.9 MB → 235 KB).
>
> **⚠️ PENDIENTE — solo quitar fondo (removebg) y volver a guardar SIN el sufijo `-DARKBG`:**
> 1. `feature-audiencia-DARKBG.png` → guardar como `feature-audiencia.png`
> 2. `feature-ciencia-DARKBG.png` → `feature-ciencia.png`
> 3. `feature-rpp-DARKBG.png` → `feature-rpp.png`
> 4. `sala-solo-alentador-DARKBG.png` → `sala-solo-alentador.png`
> 5. `sala-solo-atento-DARKBG.png` → `sala-solo-atento.png`
> 6. `sala-solo-exigente-DARKBG.png` → `sala-solo-exigente.png`
> 7. `esc-sustentacion-DARKBG.png` → `esc-sustentacion.png`
>
> Las ilustraciones ya están BUENÍSIMAS — solo traen fondo oscuro/glow horneado
> que no funciona sobre el fondo crema. Con remove.bg quedan listas y las integro.

Genera cada asset (Recraft/ChatGPT), **fondo transparente**, y guárdalo en
`src/assets/` con el nombre EXACTO indicado. Los slots punteados de la página
indican dónde va cada uno. Cuando un archivo exista, se reemplaza el slot.

> **Prompt base (pegar SIEMPRE antes del prompt del asset):**
> ```
> Flat vector illustration, rounded chunky friendly shapes, two-tone volume
> (each shape = base color + darker shade at the bottom + soft light highlight
> on top), thick soft forms, minimal or no outlines, playful warm learning-app
> style like Duolingo but original, transparent background, single centered
> composition, clean and high quality. Strict palette only: coral #FF6A3D,
> coral-deep #D9431C, amber #FFC24D, amber-deep #E39A16, teal #12B8A4,
> teal-deep #0B8576, grape #6C5AA6, ink #26203B, cream #FFFDF9. Subject:
> ```
> Usa el **Vox ya generado como referencia de estilo** para que todo combine.
> Formato ideal: SVG. Si solo sale PNG: 2x (mínimo 1024px), sin fondo.

---

## 🔴 Prioridad 0 — LOGO nuevo ("Spotlight O")

El isotipo actual (carita) queda deprecado — lee como emoji a tamaño pequeño.
Nuevo concepto: **la O construida como haz de spotlight sobre un punto (el orador)**.
Prompt completo y variantes V2/V3: pedidos en sesión 2026-07-19 (ver memoria) —
resumen: círculo coral `#FF6A3D` + haz ámbar `#FFC24D` + punto crema sobre tinta
`#26203B`, máx. 3 formas, flat, sin texto, test de favicon a 16px.
Al elegir ganadora: guardar como `logo-mark.png` (2048px, fondo transparente Y
versión sobre tinta) → se vectoriza y reemplaza `LogoMark` en `components/icons.tsx`
+ favicon.

## 🔴 Prioridad 1 — Features (los 4 slots del zigzag)

### 1. `feature-audiencia.svg` — cuadrado (~1:1)
Sección: "un público que reacciona a ti".
```
…the four rounded capsule audience listeners (teal encouraging with big smile,
grape attentive neutral, amber demanding slight frown, coral one raising a
small hand with a question), arranged like a small audience in two rows,
looking at the viewer, subtle reaction lines around them, NO text labels.
```

### 2. `feature-ciencia.svg` — cuadrado
Sección: "respaldado por la ciencia".
```
…the coral mascot (round body, cream belly, amber tuft) dressed as a friendly
scientist holding a big magnifying glass, next to a floating clipboard showing
a simple 4-bar rubric chart (bars in coral, teal, grape, amber), tiny sparkles.
```

### 3. `feature-rpp.svg` — cuadrado
Sección: "una sola corrección a la vez".
```
…a big rounded feedback card with four stacked rows, the FIRST row highlighted
in coral with a star and slightly lifted (3D shadow), the other three rows
muted cream/grey and smaller, a small coral arrow pointing at the highlighted
one, conveying "one priority at a time", NO readable text (use abstract bars).
```

### 4. `feature-progreso.svg` — cuadrado
Sección: "progreso que engancha".
```
…the coral mascot celebrating with both arms up, surrounded by: a chunky
two-tone flame (amber+coral), a rounded trophy with amber star, and a rising
3-bar level chart (amber, coral, grape), confetti dots, joyful energy.
```

## 🟠 Prioridad 2 — Secciones grandes

### 5. `desafio-vox.svg` — cuadrado (fondo OSCURO #26203B — diseñar para contraste)
Sección oscura "Modo Desafío".
```
…the coral mascot standing confident on a small stage under a warm spotlight
cone (soft amber light from above), in front of it two amber demanding
audience capsules with firm looks, dramatic but friendly, designed to sit on
a very dark purple background #26203B (add light rim highlights so it pops).
```

### 6. `producto-docentes.svg` — cuadrado
Sección "oratorIA para docentes".
```
…a friendly teacher character (rounded capsule body, grape #6C5AA6 clothing,
simple face, NO realistic features) pointing at a floating rounded dashboard
with four progress bars (coral, teal, amber, grape) and small student capsule
avatars below, warm and approachable.
```

### 7. `producto-investigacion.svg` — cuadrado
Sección "nacido de una investigación".
```
…the coral mascot wearing a graduation cap, proudly holding a rolled diploma
with an amber ribbon, next to a floating open book and a small magnifying
glass, tiny sparkles, academic but playful.
```

## 🟡 Prioridad 3 — Hero y detalles (mejoran, no bloquean)

### 8. `hero-collage.svg` (o PNG 2x) — cuadrado grande
Reemplaza al par la-sala.png + vox-base.png del hero por UNA composición.
> ⚠️ **Regla UX (gaze cueing, eye-tracking de J. Breeze):** la mascota y los
> oyentes deben MIRAR HACIA LA DERECHA (donde vive el titular y el CTA), no a
> cámara — la mirada del personaje redirige la atención del visitante al CTA.
```
…a joyful cluster composition: the coral mascot waving in the center front,
surrounded by the four audience capsule listeners (teal, grape, amber, coral)
floating at different heights and angles around it, plus a chunky flame, a
rounded trophy and an amber star floating between them, dynamic and balanced
like a celebration collage, NO text. IMPORTANT: all characters look slightly
to the RIGHT side of the frame (toward where the headline and button will be).
```

### 9. `sala-solo-<estado>.svg` — 4 archivos separados, SIN texto
`sala-solo-alentador.svg` · `sala-solo-atento.svg` · `sala-solo-exigente.svg` · `sala-solo-pregunta.svg`
Para animarlos individualmente (hero, strip, futuros usos). Mismo prompt de la
Sala del brief, pero **un personaje por imagen y sin labels**.

### 10. Iconos de escenarios (strip) — 6 archivos pequeños, estilo icono chunky
`esc-sustentacion.svg` (birrete) · `esc-pitch.svg` (cohete) · `esc-exposicion.svg`
(pizarra) · `esc-concurso.svg` (trofeo pequeño) · `esc-reunion.svg` (maletín) ·
`esc-discurso.svg` (podio con micrófono — aquí SÍ se permite mic, es un icono
funcional, no el logo).
```
…a small chunky two-tone icon of a [OBJETO], thick rounded shapes, base color
+ darker bottom shade + light top highlight, single object, icon style,
consistent 64x64 grid.
```

---

## ✅ Ya tenemos (no generar)
- `vox-base.png` — mascota saludando (hero y CTA final)
- `la-sala.png` — los 4 oyentes juntos (hero; tiene labels en inglés, por eso
  la P3 pide los 4 separados sin texto)

## Reglas de calidad (checklist por asset)
- [ ] Solo la paleta Spotlight (ningún color fuera de la lista)
- [ ] Volumen dos-tonos (base + sombra inferior + brillo)
- [ ] Sin rostros humanos realistas · sin degradados morados · sin 3D render
- [ ] Fondo transparente · sin texto incrustado (salvo que se pida)
- [ ] Combina con vox-base.png (mismos ojos/acabado)
