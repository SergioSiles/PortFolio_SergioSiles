# Documentación del Proyecto Intermodular

## Portfolio Personal – Sergio Siles Gómez

**Asignatura:** Diseño de Interfaces Web  
**Ciclo:** 2.º Desarrollo de Aplicaciones Web  
**Curso:** 2025–2026  
**Autor:** Sergio Siles Gómez  
**Ubicación:** Toledo, España

---

# Índice

1. [Contexto (Briefing)](#1-contexto-briefing)
2. [Análisis y Planificación](#2-análisis-y-planificación)
3. [Diseño y Prototipado](#3-diseño-y-prototipado)
4. [Desarrollo Web](#4-desarrollo-web)
5. [Publicación (GitHub Pages)](#5-publicación-github-pages)
6. [Bibliografía y Referencias](#6-bibliografía-y-referencias)

---

# 1. Contexto (Briefing)

## 1.1 Información General del Cliente

| Campo                | Detalle                        |
| -------------------- | ------------------------------ |
| **Nombre**           | Sergio Siles Gómez             |
| **Tipo de proyecto** | Portfolio personal             |
| **Sector**           | Desarrollo de Aplicaciones Web |
| **Ubicación**        | Toledo, España                 |
| **Contacto**         | +34 660 470 064                |

Este proyecto consiste en el desarrollo de un **portfolio web personal** cuyo objetivo principal es mostrar las habilidades técnicas y creativas del desarrollador, sirviendo como carta de presentación profesional.

## 1.2 Objetivos del Proyecto

- **Mostrar habilidades:** Presentar de forma clara y ordenada las competencias técnicas en desarrollo web.
- **Carta de presentación:** Servir como herramienta profesional ante empresas y reclutadores del sector.
- **Facilitar el contacto:** Proporcionar una vía de comunicación accesible y funcional a través de un formulario de contacto integrado.
- **Buenas prácticas:** Aplicar estándares modernos de diseño y desarrollo web.

## 1.3 Descripción del Negocio

El portfolio representa la actividad profesional de un desarrollador de aplicaciones web, enfocado en la creación de sitios web modernos, accesibles y responsivos. El objetivo es transmitir una imagen profesional, clara y actual, mostrando tanto conocimientos técnicos como capacidad de organización y diseño.

## 1.4 Público Objetivo

El público al que va dirigido este portfolio incluye:

- **Reclutadores** del sector tecnológico que buscan perfiles de desarrolladores web.
- **Empresas** del ámbito del desarrollo web y software.
- **Clientes potenciales** interesados en servicios freelance de desarrollo web.

## 1.5 Requerimientos Específicos

| Requisito              | Descripción                                            |
| ---------------------- | ------------------------------------------------------ |
| Diseño responsivo      | Adaptado a escritorio, tablet y móvil                  |
| Accesibilidad          | Cumplimiento de criterios básicos de accesibilidad web |
| Rendimiento            | Optimización para una carga rápida                     |
| Estilo visual          | Diseño retro/neon moderno con estética arcade          |
| Navegación             | Clara e intuitiva mediante scroll y anclas             |
| Formulario de contacto | Funcional vía EmailJS (sin backend)                    |

## 1.6 Detalles Técnicos

Las tecnologías y herramientas empleadas en el proyecto son:

- **HTML5** – Estructura semántica del contenido.
- **Tailwind CSS 4** – Framework CSS con directivas `@theme` y `@apply`.
- **JavaScript (ES6+)** – Animaciones, efectos visuales y formulario de contacto.
- **Figma** – Diseño, prototipado y sistema de diseño.
- **GitHub Pages** – Publicación y despliegue del sitio web.
- **EmailJS** – Servicio de envío de formulario sin backend.
- **pnpm** – Gestor de paquetes y dependencias.

## 1.7 Plazos y Observaciones

| Campo                 | Detalle                             |
| --------------------- | ----------------------------------- |
| **Duración estimada** | 1 mes (febrero 2026)                |
| **Tipo de entrega**   | Académica                           |
| **Observaciones**     | Proyecto Intermodular del ciclo DAW |

El proyecto se desarrolla como parte del Proyecto Intermodular del ciclo de Desarrollo de Aplicaciones Web, aplicando los conocimientos adquiridos en las distintas asignaturas del currículo.

---

# 2. Análisis y Planificación

## 2.1 Objetivos Principales (SMART)

Los objetivos son específicos, medibles, alcanzables, relevantes y limitados en tiempo:

| #   | Objetivo                                                                          | Indicador                      | Plazo      |
| --- | --------------------------------------------------------------------------------- | ------------------------------ | ---------- |
| O1  | Diseñar el prototipo completo en Figma (escritorio + móvil) con sistema de diseño | Prototipo publicado y enlazado | Semana 1   |
| O2  | Desarrollar la web funcional con HTML + Tailwind CSS 4 (responsiva)               | Site accesible localmente      | Semana 2-3 |
| O3  | Integrar sprites SVG, variables `@theme` y clases `@apply`                        | Criterios de rúbrica cumplidos | Semana 3   |
| O4  | Publicar el portfolio en GitHub Pages con README completo                         | URL pública accesible          | Semana 4   |

## 2.2 Desglose de Tareas

| ID  | Tarea                                            | Responsable  | Inicio     | Fin        |
| --- | ------------------------------------------------ | ------------ | ---------- | ---------- |
| T1  | Redacción del briefing                           | Sergio Siles | 03/02/2026 | 03/02/2026 |
| T2  | Investigación de referencias y competidores      | Sergio Siles | 03/02/2026 | 04/02/2026 |
| T3  | Creación del sistema de diseño en Figma          | Sergio Siles | 04/02/2026 | 06/02/2026 |
| T4  | Wireframe / Prototipo escritorio en Figma        | Sergio Siles | 06/02/2026 | 08/02/2026 |
| T5  | Prototipo móvil en Figma                         | Sergio Siles | 08/02/2026 | 09/02/2026 |
| T6  | Estructura HTML base + Tailwind                  | Sergio Siles | 10/02/2026 | 12/02/2026 |
| T7  | Desarrollo secciones: Hero, Sobre mí, Proyectos  | Sergio Siles | 12/02/2026 | 17/02/2026 |
| T8  | Sección Contacto + formulario EmailJS            | Sergio Siles | 17/02/2026 | 19/02/2026 |
| T9  | Biblioteca sprites.svg + integración             | Sergio Siles | 19/02/2026 | 20/02/2026 |
| T10 | Variables `@theme` y clases `@apply` en Tailwind | Sergio Siles | 20/02/2026 | 21/02/2026 |
| T11 | Ajustes responsivos y pruebas en móvil           | Sergio Siles | 21/02/2026 | 23/02/2026 |
| T12 | Publicación en GitHub Pages + README.md          | Sergio Siles | 24/02/2026 | 25/02/2026 |
| T13 | Revisión final y entrega                         | Sergio Siles | 26/02/2026 | 27/02/2026 |

## 2.3 Diagrama de Gantt

_(Se adjunta el diagrama de Gantt como imagen: `src/assets/img/DiagramaDeGantt.png`)_

El diagrama de Gantt muestra la distribución temporal de las 13 tareas a lo largo de las 4 semanas del proyecto, permitiendo una visión general rápida de la planificación.

## 2.4 Mapa del Sitio

El portfolio es una **Single Page Application (SPA)** con navegación mediante anclas internas. Todas las secciones residen en un mismo `index.html`:

```
📄 index.html (Página Principal)
│
├── 🏠 Header (Navegación fija)
│   ├── Logo / Nombre  →  #main (scroll al inicio)
│   ├── Sobre mí       →  #about
│   ├── Proyectos      →  #projects
│   └── Contacto       →  #contact
│
├── 🎯 #main (Hero / Inicio)
│   ├── Foto de perfil / Ilustración
│   ├── Nombre animado (efecto wave neon)
│   └── Descripción corta
│
├── 👤 #about (Sobre Mí)
│   ├── ¿Quién soy?       (tarjeta retro)
│   ├── Tecnologías        (badges: HTML, CSS, JS, Python, Java, SQL)
│   ├── Frameworks         (badges: React, Tailwind, JDBC, JPA)
│   ├── Experiencia        (lista: BEEP, OutSystems)
│   └── Intereses          (badges: Backend, BigData, IA, Ciberseguridad)
│
├── 💼 #projects (Proyectos)
│   ├── Proyecto 1: Biblioteca  (Java, JDBC, JPA, SQL) — Completado
│   └── Proyecto 2: E-Commerce  (WordPress, CSS)       — En desarrollo
│
└── 📬 #contact (Contacto)
    ├── Tarjeta de redes sociales
    │   ├── GitHub   →  enlace externo
    │   └── LinkedIn →  enlace externo
    └── Formulario de contacto
        ├── Campo: Nombre
        ├── Campo: Email
        ├── Campo: Mensaje
        └── Botón: Enviar (vía EmailJS)
```

### Diagrama visual del mapa del sitio

```
          ┌──────────────────────────────┐
          │        index.html            │
          │      (Página Principal)      │
          └──────────────┬───────────────┘
                         │
          ┌──────────────┼───────────────┐
          │              │               │
     ┌────▼────┐   ┌─────▼─────┐   ┌────▼────┐
     │ Header  │   │   #main   │   │  Footer │
     │  (Nav)  │   │   (Hero)  │   │  (N/A)  │
     └────┬────┘   └───────────┘   └─────────┘
          └───┐
   ┌──────────┼──────────┬──────────┐
   │          │          │          │
┌───▼───┐ ┌───▼───┐ ┌────▼────┐ ┌───▼────┐
│ About │ │ Proj  │ │ Contact │ │  Hero  │
│ #about│ │ #proj │ │#contact │ │  #main │
└───────┘ └───────┘ └─────────┘ └────────┘
```

---

# 3. Diseño y Prototipado

## 3.1 Referencias e Inspiración

Para la creación del diseño visual del portfolio, se consultaron múltiples fuentes de inspiración:

- **Figma Resource Library** – Ejemplos de portfolios profesionales.
- **WeAreDevelopers** – Portfolios de desarrolladores web destacados.
- **Dev.to** – Colección de portfolios impactantes de la comunidad.

El estilo visual elegido es un diseño **retro arcade / neon cyberpunk**, inspirado en la estética de las pantallas CRT de los años 80-90, con colores neón vibrantes y efectos digitales.

## 3.2 Sistema de Diseño

El sistema de diseño se creó en **Figma** y contiene los siguientes elementos:

### Paleta de Colores

| Token                | Color (HEX) | Uso                                   |
| -------------------- | ----------- | ------------------------------------- |
| `--color-primary`    | `#ff00ff`   | Color primario (magenta neón)         |
| `--color-secondary`  | `#00ffff`   | Color secundario (cian neón)          |
| `--color-accent`     | `#9d00ff`   | Color de acento (violeta)             |
| `--color-background` | `#0a0015`   | Fondo principal (negro profundo)      |
| `--color-surface`    | `#1a0a2e`   | Superficies / tarjetas                |
| `--color-text`       | `#00ffff`   | Texto principal                       |
| `--color-text-muted` | `#ff00aa`   | Texto secundario / subtítulos         |
| `--color-success`    | `#00ff00`   | Estado de éxito (verde neón)          |
| `--color-warning`    | `#ffff00`   | Estado de advertencia (amarillo neón) |

### Tipografía

| Token           | Familia tipográfica         | Uso                             |
| --------------- | --------------------------- | ------------------------------- |
| `--font-arcade` | "Press Start 2P", monospace | Toda la interfaz (estilo 8-bit) |

Se utiliza la fuente **Press Start 2P** de Google Fonts, una tipografía pixelada que refuerza la estética retro arcade del portfolio.

### Espaciado y Radios

| Token            | Valor  | Uso                         |
| ---------------- | ------ | --------------------------- |
| `--radius-retro` | `8px`  | Bordes de tarjetas retro    |
| `--radius-card`  | `12px` | Bordes de tarjetas proyecto |

### Breakpoints Personalizados

| Token             | Valor    | Dispositivo       |
| ----------------- | -------- | ----------------- |
| `--breakpoint-xs` | `480px`  | Móviles pequeños  |
| `--breakpoint-sm` | `640px`  | Móviles           |
| `--breakpoint-md` | `768px`  | Tablets           |
| `--breakpoint-lg` | `1024px` | Escritorio        |
| `--breakpoint-xl` | `1280px` | Pantallas grandes |

### Enlace al prototipo en Figma

🔗 **Prototipo Figma:** [https://www.figma.com/design/xz0WDbHxAzLEPwLMG3Ymsx/Portfolio?m=draw](https://www.figma.com/design/xz0WDbHxAzLEPwLMG3Ymsx/Portfolio?m=draw)

El prototipo incluye:

- Diseño completo para **escritorio** y **móvil** en páginas separadas.
- Sistema de diseño con colores, tipografías, espaciados y grid.
- Definición de variables y tokens de diseño.
- Componentes reutilizables con variantes.

---

# 4. Desarrollo Web

## 4.1 Herramientas Software Utilizadas

| Herramienta               | Uso                                        | Fase                 |
| ------------------------- | ------------------------------------------ | -------------------- |
| **Figma**                 | Diseño, sistema de diseño, prototipos      | Diseño y prototipado |
| **VS Code**               | Editor de código principal                 | Desarrollo           |
| **Tailwind CSS 4**        | Framework CSS (vía CLI)                    | Desarrollo           |
| **pnpm**                  | Gestor de paquetes                         | Desarrollo           |
| **GitHub / GitHub Pages** | Control de versiones y publicación         | Publicación          |
| **EmailJS**               | Servicio de envío de emails desde frontend | Desarrollo           |
| **Google Fonts**          | Tipografía "Press Start 2P"                | Diseño / Desarrollo  |
| **SVG Sprite Generator**  | Creación de la biblioteca `sprite.svg`     | Desarrollo           |

## 4.2 Estructura del Proyecto (Código Fuente)

```
PortFolio/
├── src/
│   ├── index.html              # Página principal (353 líneas)
│   └── assets/
│       ├── img/
│       │   ├── Foto.png         # Foto de perfil
│       │   └── DiagramaDeGantt.png  # Diagrama de planificación
│       ├── js/
│       │   └── app.js           # Scripts JS (97 líneas)
│       └── sprite.svg           # Biblioteca de iconos SVG (12 símbolos)
├── dist/
│   ├── input.css                # CSS fuente: Tailwind + @theme + @apply (612 líneas)
│   └── output.css               # CSS compilado para producción
├── docs/
│   ├── briefing.md              # Documento de briefing
│   ├── planificacion.md         # Objetivos, tareas y Gantt
│   ├── sitemap.md               # Mapa del sitio
│   └── bibliografia.md          # Referencias y bibliografía
├── figma/
│   └── FigmaLink.txt            # Enlace al diseño en Figma
├── package.json                 # Configuración del proyecto
├── pnpm-lock.yaml               # Lockfile de dependencias
└── README.md                    # Documentación del repositorio
```

## 4.3 Creación de Variables Propias en Tailwind (`@theme`)

Las variables del sistema de diseño creado en Figma se exportaron a formato compatible con **Tailwind CSS 4** utilizando la directiva `@theme`. Estas variables se definen en el archivo `dist/input.css`:

```css
@theme {
  /* === COLORES PRINCIPALES === */
  --color-primary: #ff00ff;
  --color-secondary: #00ffff;
  --color-accent: #9d00ff;
  --color-background: #0a0015;
  --color-surface: #1a0a2e;
  --color-text: #00ffff;
  --color-text-muted: #ff00aa;
  --color-success: #00ff00;
  --color-warning: #ffff00;

  /* === TIPOGRAFÍAS === */
  --font-arcade: "Press Start 2P", monospace;

  /* === BREAKPOINTS PERSONALIZADOS === */
  --breakpoint-xs: 480px;
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;

  /* === SPACING / RADIOS === */
  --radius-retro: 8px;
  --radius-card: 12px;
}
```

Estas variables permiten que Tailwind genere automáticamente clases de utilidad basadas en estos tokens personalizados, como `text-primary`, `bg-surface`, `rounded-[var(--radius-retro)]`, etc.

## 4.4 Reutilización de Estilos con `@apply`

Se crearon múltiples clases personalizadas reutilizables mediante la directiva `@apply` de Tailwind CSS dentro de `@layer components`. Estas clases encapsulan combinaciones de utilidades de Tailwind en clases semánticas:

### Componentes creados con `@apply`

| Clase CSS            | Descripción                                              |
| -------------------- | -------------------------------------------------------- |
| `.water-container`   | Contenedor flex para el texto animado con wave           |
| `.water-text`        | Texto individual con gradiente neon y animación wave     |
| `.retro-title`       | Títulos de sección con text-shadow y línea decorativa    |
| `.retro-card`        | Tarjetas con borde violeta, fondo translúcido y hover    |
| `.tech-badge`        | Badges de tecnologías con borde cian y glow              |
| `.project-card`      | Tarjetas de proyecto con efecto de barrido al hover      |
| `.mini-badge`        | Badges pequeñas para tecnologías dentro de proyectos     |
| `.retro-input`       | Inputs estilizados con borde neón y efecto de focus      |
| `.retro-button`      | Botón con gradiente, efecto de expansión radial al hover |
| `.contact-item-link` | Contenedores de enlaces de contacto con desplazamiento   |
| `.contact-icon-svg`  | Iconos SVG con drop-shadow neón                          |
| `.nav-link`          | Enlaces de navegación con text-shadow y escala al hover  |

**Ejemplo de uso de `@apply`:**

```css
.retro-card {
  @apply rounded-[var(--radius-retro)] p-6 relative transition-all duration-300;
  z-index: 10;
  background: rgba(26, 10, 46, 0.6);
  border: 2px solid var(--color-accent);
  box-shadow:
    0 0 15px rgba(157, 0, 255, 0.4),
    inset 0 0 20px rgba(255, 0, 255, 0.05);
}

.retro-card:hover {
  @apply -translate-y-1;
  border-color: var(--color-primary);
  box-shadow:
    0 0 25px rgba(255, 0, 255, 0.6),
    inset 0 0 30px rgba(255, 0, 255, 0.1);
}
```

## 4.5 Biblioteca `sprite.svg`

Se creó un archivo `sprite.svg` que contiene **12 símbolos SVG** reutilizables para iconos y logos de tecnologías. Estos iconos se cargan mediante la etiqueta `<use>` de SVG, lo que permite mantener un único archivo de sprites y referenciarlos desde el HTML:

### Iconos incluidos en `sprite.svg`

| ID del símbolo | Descripción         |
| -------------- | ------------------- |
| `react`        | Logo de React       |
| `node`         | Logo de Node.js     |
| `typescript`   | Logo de TypeScript  |
| `html`         | Logo de HTML5       |
| `css`          | Logo de CSS3        |
| `javascript`   | Logo de JavaScript  |
| `github`       | Logo de GitHub      |
| `linkedin`     | Logo de LinkedIn    |
| `instagram`    | Logo de Instagram   |
| `youtube`      | Logo de YouTube     |
| `x`            | Logo de X (Twitter) |
| `twitch`       | Logo de Twitch      |
| `strava`       | Logo de Strava      |
| `verified`     | Icono de verificado |

**Ejemplo de uso en HTML:**

```html
<svg class="contact-icon-svg" aria-hidden="true">
  <use href="./assets/img/sprite.svg#github"></use>
</svg>
```

## 4.6 Diseño Responsivo

El diseño responsivo se implementa mediante dos estrategias complementarias:

### 1. Clases responsivas de Tailwind

Se utilizan los prefijos `md:` (≥768px) para adaptar el layout entre móvil y escritorio:

```html
<!-- Ejemplo: layout flex-col en móvil, flex-row en escritorio -->
<header class="flex flex-col md:flex-row justify-between items-center">
  <!-- Ejemplo: tamaño de texto adaptativo -->
  <h2 class="text-3xl md:text-4xl">
    <!-- Ejemplo: grid adaptativo -->
    <div class="grid md:grid-cols-2 gap-8"></div>
  </h2>
</header>
```

### 2. Media queries personalizadas

Se aplican media queries para ajustar padding y tamaño de fuente en dispositivos móviles:

```css
@media (max-width: 768px) {
  p {
    padding: 1rem !important;
    font-size: 0.75rem !important;
  }

  .retro-card {
    padding: 1rem;
  }

  .project-card {
    padding: 1.5rem;
  }

  .contact-item-link {
    gap: 0.75rem;
    padding: 1rem;
  }
}
```

### 3. Función `clamp()` para tipografía fluida

```css
.font-arcade {
  font-size: clamp(0.7rem, 1.2vw, 1.1rem);
}

.font-arcade-title {
  font-size: clamp(0.8rem, 2vw, 1.6rem);
}
```

## 4.7 Efectos Visuales y Animaciones (JavaScript)

El archivo `app.js` implementa tres funcionalidades principales:

### 1. Efecto de ola neón (Wave Text)

Cada carácter del nombre se envuelve en un `<span>` con la clase `.water-text`, que aplica una animación CSS de ondulación vertical con un retardo progresivo:

```javascript
[...text].forEach((char, i) => {
  const span = document.createElement("span");
  span.textContent = char === " " ? "\u00A0" : char;
  span.className = "water-text";
  span.style.setProperty("--i", i); // retardo progresivo
  container.appendChild(span);
});
```

### 2. Efecto glitch aleatorio

Cada 2 segundos se selecciona un carácter al azar y se le aplica un text-shadow desplazado aleatoriamente durante 100ms, simulando un efecto de interferencia digital:

```javascript
function randomGlitch() {
  const allSpans = document.querySelectorAll(".water-text");
  const randomSpan = allSpans[Math.floor(Math.random() * allSpans.length)];
  // ... aplica text-shadow aleatorio y lo retira tras 100ms
}
setInterval(randomGlitch, 2000);
```

### 3. Formulario de contacto (EmailJS)

El formulario envía mensajes directamente al email del desarrollador sin necesidad de backend, utilizando la API de EmailJS:

- Validación HTML nativa (`required`).
- Feedback visual: "Enviando…" (amarillo), "Enviado" (verde), "Error" (rojo).
- Deshabilitación temporal del botón durante el envío.
- Reset automático del formulario tras envío exitoso.

## 4.8 Efectos CSS Destacados

| Efecto                  | Descripción                                                             |
| ----------------------- | ----------------------------------------------------------------------- |
| **CRT Scanlines**       | Líneas horizontales animadas sobre toda la pantalla (pseudo `::before`) |
| **Grid retro de fondo** | Cuadrícula 50×50px en magenta y cian (pseudo `::after`)                 |
| **Gradiente de fondo**  | Triple capa: gradiente, scanlines repeating y gradiente lateral         |
| **Glow neón**           | Múltiples capas de `text-shadow` y `box-shadow` en todos los elementos  |
| **Hover de tarjetas**   | Elevación con `-translate-y`, cambio de borde y box-shadow              |
| **Barrido de proyecto** | Efecto de barrido horizontal con gradiente (`::before`) al hover        |
| **Botón con expansión** | Efecto radial circular que se expande al hover (`::before`)             |
| **Wave animado**        | Ondulación vertical del texto con animation-delay por carácter          |
| **Pulse de estado**     | Animación de pulso en badges "En desarrollo"                            |

---

# 5. Publicación (GitHub Pages)

## 5.1 Repositorio

El proyecto está alojado en GitHub y es accesible públicamente:

- **Repositorio:** [https://github.com/SergioSiles/PortFolio_SergioSiles](https://github.com/SergioSiles/PortFolio_SergioSiles)
- **GitHub Pages:** [https://sergiosiles.github.io/PortFolio/](https://sergiosiles.github.io/PortFolio/)

## 5.2 README.md

El archivo `README.md` del repositorio incluye:

- ✅ Enlace al prototipo en Figma.
- ✅ Enlace a la página publicada en GitHub Pages.
- ✅ Estructura del proyecto.
- ✅ Tecnologías utilizadas.
- ✅ Instrucciones de instalación y compilación.
- ✅ Datos del autor.

## 5.3 Instrucciones de Compilación

```bash
# Instalar dependencias
pnpm install

# Compilar CSS (modo watch)
pnpm run build-styles
```

El script de compilación utiliza la CLI de Tailwind CSS:

```
pnpm dlx @tailwindcss/cli -i ./assets/css/input.css -o ./assets/css/output.css --watch
```

## 5.4 Capturas del Sitio Web Publicado

Las capturas del sitio publicado en GitHub Pages se pueden consultar accediendo directamente a la URL del portfolio:

🔗 **[https://sergiosiles.github.io/PortFolio/](https://sergiosiles.github.io/PortFolio/)**

_(Se recomienda incluir capturas de pantalla del sitio en versión escritorio y móvil en este apartado para la entrega final en PDF.)_

---

# 6. Bibliografía y Referencias

## Tutoriales y Material de Apoyo

### Figma

| #   | Descripción                                                                                              | Enlace                                                                        |
| --- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 1   | Tutorial Figma – Sistema de diseño: variables, tokens, componentes, modos Light/Dark, tipografía y Grid. | [YouTube](https://www.youtube.com/watch?v=VsL5scpdT00)                        |
| 2   | Tutorial Figma 2: paleta de colores, sombras, tipografías, grids, componentes y variantes.               | [YouTube](https://youtu.be/VdS9ZGHHXWQ?si=V-lji_1JTg8W3pTU&t=4361)            |
| 3   | Plugin Figma – Exportar variables a formato Tailwind CSS v4.                                             | [Figma Community](https://www.figma.com/community/plugin/1482322139658592700) |

### Tailwind CSS

| #   | Descripción                                                 | Enlace                                                                  |
| --- | ----------------------------------------------------------- | ----------------------------------------------------------------------- |
| 4   | Tutorial Tailwind 4: creación de un portfolio desde cero.   | [YouTube](https://www.youtube.com/watch?v=R5EXap3vNDA)                  |
| 5   | Diseño responsivo en Tailwind: breakpoints y clases.        | [Documentación oficial](https://tailwindcss.com/docs/responsive-design) |
| 6   | Variables propias en Tailwind (`@theme`): tokens de diseño. | [Documentación oficial](https://tailwindcss.com/docs/theme)             |

### Portfolios de Inspiración

| #   | Descripción                                                      | Enlace                                                                                                        |
| --- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 7   | Ejemplos de portfolios en Figma Resource Library.                | [Figma](https://www.figma.com/es-es/resource-library/ejemplos-sitios-portfolio/)                              |
| 8   | Ejemplos de portfolios de desarrolladores web (WeAreDevelopers). | [WeAreDevelopers](https://www.wearedevelopers.com/en/magazine/161/web-developer-portfolio-examples)           |
| 9   | Colección de portfolios impresionantes (Dev.to).                 | [Dev.to](https://dev.to/anmolbaranwal/stunning-portfolios-that-will-blow-your-mind-fuel-your-creativity-226o) |

### Documentación Técnica y Guías

| #   | Descripción                                  | Enlace                                                                                                         |
| --- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 10  | Sintaxis Markdown: guía completa de formato. | [tutorialmarkdown.com](https://tutorialmarkdown.com/sintaxis)                                                  |
| 11  | Qué es un sitemap y cómo generarlo.          | [Hostinger](https://www.hostinger.com/es/tutoriales/que-es-un-sitemap)                                         |
| 12  | Publicar en GitHub Pages: guía oficial.      | [GitHub Docs](https://docs.github.com/es/pages/getting-started-with-github-pages/creating-a-github-pages-site) |

## Herramientas y Servicios Utilizados

| Herramienta          | Propósito                                   | URL                                              |
| -------------------- | ------------------------------------------- | ------------------------------------------------ |
| **Google Fonts**     | Tipografía "Press Start 2P"                 | https://fonts.google.com/specimen/Press+Start+2P |
| **EmailJS**          | Envío de formulario de contacto sin backend | https://www.emailjs.com/                         |
| **GitHub**           | Repositorio y control de versiones          | https://github.com/SergioSiles/PortFolio         |
| **GitHub Pages**     | Publicación del sitio web                   | https://pages.github.com/                        |
| **Figma**            | Diseño y prototipado                        | https://www.figma.com/                           |
| **pnpm**             | Gestor de dependencias                      | https://pnpm.io/                                 |
| **Tailwind CSS CLI** | Compilación del CSS                         | https://tailwindcss.com/                         |

---

_Documento generado el 28 de febrero de 2026._  
_Portfolio de Sergio Siles Gómez – Proyecto Intermodular DAW 2025-2026._
