/* ═══════════════════════════════════════════════════════════════
   PROJECTS — Rich slide-based case studies (all content inline)
   Each slide has a `phase` field for the progress bar.
   Layouts: default, stat (stat-highlight), beforeAfter, images (multi-image), annotated
   ═══════════════════════════════════════════════════════════════ */
export const PROJECTS = {
  monitoreo: {
    title: { es: "Rediseño de Monitoreo en Tiempo Real", en: "Real-Time Monitoring Redesign" },
    company: "Helpdesk SaaS",
    role: "Product Designer → Product Owner",
    period: "2024",
    competency: { es: "User Research · Iteración basada en data · Data Viz", en: "User Research · Data-driven iteration · Data Viz" },
    slides: [
      /* ══════════════════════════════════════════
         1. RESUMEN Y CONTEXTO
         ══════════════════════════════════════════ */
      {
        phase: "context",
        icon: "📊", title: { es:"Resumen", en:"Overview" },
        content: { es:"Rediseñé por completo la sección de monitoreo de una plataforma SaaS de atención al cliente. Los supervisores tenían acceso a datos valiosos de productividad — tickets por estado, tiempos de respuesta, carga por ejecutivo — pero la interfaz los presentaba de forma tan confusa que preferían extraerlos por API y visualizarlos en herramientas externas.\n\nEste era un problema recurrente en la aplicación: los clientes preferían extraer la información del sistema y llevársela a otras herramientas de visualización. Esto nos obligaba a crear y mantener sistemas de exportación y APIs que generaban costos significativos en infraestructura y en horas de desarrollo. El resultado del rediseño fue un dashboard en tiempo real con alarmas visuales configurables que eliminó esa dependencia, subió la satisfacción de 3.9 a 4.2/5, y se convirtió en un patrón que se expandió a otras secciones del producto.", en:"I completely redesigned the monitoring section of a customer service SaaS platform. Supervisors had access to valuable productivity data — tickets by status, response times, workload per agent — but the interface presented it so confusingly that they preferred extracting it via API and visualizing it in external tools.\n\nThis was a recurring problem across the application: clients preferred extracting information from the system and taking it to other visualization tools. This forced us to build and maintain export systems and APIs that generated significant infrastructure and development costs. The redesign resulted in a real-time dashboard with configurable visual alarms that eliminated that dependency, raised satisfaction from 3.9 to 4.2/5, and became a pattern that expanded to other product sections." },
        tags: ["Analytics","Real-time","User Research","Data Viz","Redesign"],
      },
      {
        phase: "context",
        icon: "🔥", title: { es:"El Problema", en:"The Problem" },
        content: { es:"La sección de Monitoreo debía ser la herramienta principal de los supervisores. El ciclo de vida de un ticket de atención al cliente pasa por múltiples etapas, y los supervisores necesitan ver en tiempo real cuántos tickets hay en cada estado para detectar cuellos de botella antes de que escalen:", en:"The Monitoring section should have been the supervisors' primary tool. A customer service ticket's lifecycle passes through multiple stages, and supervisors need to see in real time how many tickets are in each state to detect bottlenecks before they escalate:" },
        flow: { es:["Esperando Asignación","Ticket Asignado","Esperando Respuesta","Ticket Cerrado"], en:["Waiting Assignment","Ticket Assigned","Waiting Response","Ticket Closed"] },
        bullets: {
          es: ["⏳ Esperando Asignación — tickets recién creados que ningún ejecutivo ha tomado aún. Si se acumulan, los clientes esperan sin respuesta","👤 Ticket Asignado — ya tiene un ejecutivo responsable, pero aún no ha sido contactado el cliente","💬 Esperando Respuesta — el ejecutivo respondió y espera la respuesta del cliente. Acá se mide el SLA","✅ Ticket Cerrado — caso resuelto. El volumen de cierre indica la productividad del equipo","📉 Nadie usaba la sección — los supervisores la evitaban y extraían los datos por API a herramientas externas","💸 Esto generaba costos en infraestructura y horas de desarrollo para mantener sistemas de exportación que no deberían existir"],
          en: ["⏳ Waiting Assignment — newly created tickets no agent has picked up yet. If they pile up, customers wait without response","👤 Ticket Assigned — already has a responsible agent, but the customer hasn't been contacted yet","💬 Waiting Response — the agent responded and awaits the customer's reply. SLA is measured here","✅ Ticket Closed — case resolved. Closure volume indicates team productivity","📉 Nobody used the section — supervisors avoided it and extracted data via API to external tools","💸 This generated infrastructure and development costs to maintain export systems that shouldn't need to exist"],
        },
      },
      {
        phase: "context",
        icon: "🖥️", title: { es:"Estado previo", en:"Previous state" },
        content: { es:"La versión existente tenía problemas de UX fundamentales. El dashboard mostraba números planos sin iconos de canal, cada sección tenía filtros distintos (la tabla de KPIs tenía su propio filtro de departamento separado del general), y la vista de detalle tenía links poco visibles con una jerarquía de información confusa:", en:"The existing version had fundamental UX problems. The dashboard showed flat numbers without channel icons, each section had different filters (the KPI table had its own department filter separate from the general one), and the detail view had hard-to-find links with a confusing information hierarchy:" },
        images: [
          { src: "/images/mon_old_v1_dashboard.png", caption: { es:"Dashboard: números planos sin iconos de canal", en:"Dashboard: flat numbers without channel icons" } },
          { src: "/images/mon_old_v1_filters.png", caption: { es:"Filtros inconsistentes entre secciones", en:"Inconsistent filters between sections" } },
          { src: "/images/mon_old_v1_detail.png", caption: { es:"Vista detalle con links poco visibles", en:"Detail view with hard-to-find links" } },
          { src: "/images/mon_old_v1_kpi.png", caption: { es:"Vista completa con todos los problemas juntos", en:"Full view with all problems together" } },
        ],
      },

      /* ══════════════════════════════════════════
         2. PROCESO DE DISEÑO — Investigación
         ══════════════════════════════════════════ */
      {
        phase: "research",
        icon: "👂", title: { es:"Investigación: lo que descubrimos en campo", en:"Research: what we discovered in the field" },
        content: { es:"Agendamos reuniones con supervisores y visitamos la oficina de un cliente clave. Lo que encontramos cambió completamente nuestra hipótesis — el problema no era que no valoraran la data, sino que nuestra interfaz era tan mala que habían construido su propia solución:", en:"We scheduled meetings with supervisors and visited a key client's office. What we found completely changed our hypothesis — the problem wasn't that they didn't value the data, but that our interface was so bad they had built their own solution:" },
        bullets: {
          es: ["✅ Valoraban la data — la usaban activamente todos los días para tomar decisiones en tiempo real","🖥️ La proyectaban en una pantalla gigante visible para todo el equipo de supervisores","🚨 La herramienta externa tenía alarmas visuales que cambiaban de color según umbrales — algo que nuestro producto no ofrecía","💡 Insight clave: la información era valiosa, la forma de presentarla era el único problema"],
          en: ["✅ They valued the data — actively using it every day for real-time decisions","🖥️ They projected it on a big screen visible to the entire supervisor team","🚨 The external tool had visual alarms that changed color based on thresholds — something our product didn't offer","💡 Key insight: the information was valuable, the presentation was the only problem"],
        },
      },
      {
        phase: "research",
        icon: "🎯", title: { es:"Del insight a los objetivos", en:"From insight to goals" },
        content: { es:"La visita de campo nos dio una dirección clara. Si los supervisores ya habían invertido esfuerzo en replicar nuestra data en otra herramienta, significaba que el valor estaba ahí — solo necesitábamos presentarlo mejor que la alternativa. Definimos 4 objetivos basados directamente en lo observado:", en:"The field visit gave us a clear direction. If supervisors had already invested effort replicating our data in another tool, it meant the value was there — we just needed to present it better than the alternative. We defined 4 goals based directly on what we observed:" },
        bullets: {
          es: ["🏠 Traer a los usuarios de vuelta — porque si la experiencia es mejor que la externa, no hay razón para salir","👁️ Información consumible de un vistazo — porque la proyectaban en una pantalla compartida y necesitaban lectura rápida","🚨 Sistema de alarmas configurable — porque ya lo usaban afuera y era su feature más valorada","🔗 Filtros unificados — porque la inconsistencia era la causa #1 de confusión"],
          en: ["🏠 Bring users back — because if the experience is better than external, there's no reason to leave","👁️ Information consumable at a glance — because they projected it on a shared screen and needed quick reading","🚨 Configurable alarm system — because they already used it externally and it was their most valued feature","🔗 Unified filters — because inconsistency was the #1 cause of confusion"],
        },
      },

      /* ══════════════════════════════════════════
         2. PROCESO DE DISEÑO — Ideación
         ══════════════════════════════════════════ */
      {
        phase: "ideation",
        icon: "📝", title: { es:"Ideación: ¿por qué esta estructura?", en:"Ideation: why this structure?" },
        content: { es:"La decisión más importante fue reorganizar toda la información en columnas por estado de ticket. ¿Por qué? Porque los supervisores piensan en estados — '¿cuántos tickets están esperando asignación?' es la pregunta que hacen 50 veces al día. La versión anterior los obligaba a navegar entre vistas para responder algo que debería verse de un vistazo.\n\nDefiní 5 columnas — Abiertos, Asignados, Abordados, Cerrados e Ignorados — cada una con espacio para alarmas visuales. Elegí cards en vez de tablas porque las cards permiten escaneo visual rápido y se adaptan mejor a la proyección en pantallas grandes que los supervisores ya usaban.", en:"The most important decision was reorganizing all information into columns by ticket status. Why? Because supervisors think in states — 'how many tickets are waiting assignment?' is the question they ask 50 times a day. The previous version forced them to navigate between views to answer something that should be visible at a glance.\n\nI defined 5 columns — Open, Assigned, Attended, Closed and Ignored — each with space for visual alarms. I chose cards over tables because cards allow quick visual scanning and adapt better to the large screen projection supervisors already used." },
        image: "/images/mon_wireframe_cards.png",
        bullets: {
          es: ["🔝 Filtros unificados arriba — una sola experiencia de filtrado para toda la sección","📊 KPIs principales siempre visibles: ticket más antiguo, promedio antigüedad, SLA","📋 Cards por cada estado de ticket con desglose por canal","🚨 Sistema de alarmas integrado en cada card"],
          en: ["🔝 Unified filters at top — one filtering experience for the entire section","📊 Main KPIs always visible: oldest ticket, average age, SLA","📋 Cards per ticket state with channel breakdown","🚨 Alarm system integrated into each card"],
        },
      },
      {
        phase: "ideation",
        icon: "💻", title: { es:"El prototipo", en:"The prototype" },
        content: { es:"El prototipo implementó la visión completa. La decisión de incluir tabs (Por Ejecutivo, Por Cuenta, Por Departamento) vino directamente del research: los supervisores necesitaban ver la misma data agrupada de formas distintas según el momento del día.\n\nLas cards se expanden in-place mostrando desglose por ejecutivo — porque abrir una nueva vista rompía el flujo de monitoreo continuo. También agregué un panel lateral de previsualización de tickets para que pudieran revisar contenido sin salir de la vista general.", en:"The prototype implemented the full vision. The decision to include tabs (By Executive, By Account, By Department) came directly from research: supervisors needed to see the same data grouped differently depending on the time of day.\n\nCards expand in-place showing breakdown by executive — because opening a new view broke the continuous monitoring flow. I also added a side panel for ticket preview so they could review content without leaving the main view." },
        images: [
          { src: "/images/mon_proto_columns.png", caption: { es:"Cards por estado con alarmas y desglose por canal", en:"State cards with alarms and channel breakdown" } },
          { src: "/images/mon_proto_expanded.png", caption: { es:"Card expandida con desglose por ejecutivo", en:"Expanded card with executive breakdown" } },
          { src: "/images/mon_proto_detail.png", caption: { es:"Panel de previsualización de tickets", en:"Ticket preview panel" } },
        ],
        figmaLink: "https://www.figma.com/proto/wcEPfz9xRPJZaGWILTHoTT/METRI.-Monitoreo-3.0--En-Desarrollo---Copy-?node-id=6405-10462&node-type=frame&viewport=2408%2C445%2C0.31&t=8vqWBvjqgumEmjfK-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6405%3A10462&show-proto-sidebar=1",
      },

      /* ══════════════════════════════════════════
         2. PROCESO DE DISEÑO — Iteración
         ══════════════════════════════════════════ */
      {
        phase: "iteration",
        icon: "💭", title: { es:"Primera encuesta: el diseño no era perfecto", en:"First survey: the design wasn't perfect" },
        content: { es:"Lanzamos una encuesta in-app preguntando '¿Qué tan completa te parece esta vista?'. Los resultados confirmaron que íbamos en la dirección correcta, pero que había problemas importantes por resolver:", en:"We launched an in-app survey asking 'How complete does this view feel?'. The results confirmed we were heading in the right direction, but there were important problems to solve:" },
        stat: "3.9/5",
        statLabel: { es:"Promedio de 37 participantes — 5 dieron 1 estrella", en:"Average from 37 participants — 5 gave 1 star" },
        image: "/images/mon_survey_complete.png",
        bullets: {
          es: ["😐 3.9/5 con 37 respuestas — bueno pero no suficiente","⭐ 5 participantes dieron 1 estrella — una señal que no podíamos ignorar","🔍 Problema #1: no encontraban el botón para ver detalle de tickets","🏢 Problema #2: pedían agrupar por Departamento — no lo habíamos incluido inicialmente"],
          en: ["😐 3.9/5 from 37 responses — good but not enough","⭐ 5 participants gave 1 star — a signal we couldn't ignore","🔍 Problem #1: couldn't find the button to see ticket details","🏢 Problem #2: requested Department grouping — we hadn't included it initially"],
        },
      },
      {
        phase: "iteration",
        icon: "🔧", title: { es:"Iterar y validar", en:"Iterate and validate" },
        content: { es:"Cada cambio respondió directamente a un hallazgo de la encuesta. No asumí — dejé que la data guiara las decisiones. Tras implementar los cambios, medimos de nuevo con '¿Qué tan útiles te parecen estas métricas?':", en:"Each change responded directly to a survey finding. I didn't assume — I let the data guide the decisions. After implementing the changes, we measured again with 'How useful do you find these metrics?':" },
        stat: "4.2/5",
        statLabel: { es:"Segunda encuesta: 24 participantes — 18 dieron 5 estrellas (75%)", en:"Second survey: 24 participants — 18 gave 5 stars (75%)" },
        statDelta: { es:"↑ 0.3 puntos vs primera encuesta", en:"↑ 0.3 points vs first survey" },
        image: "/images/mon_survey_useful.png",
        bullets: {
          es: ["👁️ Botón de detalle más prominente y visible sin scroll — el 100% de los que dieron 1 estrella no lo encontraban","🏢 Tab de agrupación por Departamento — era la forma natural en que organizaban sus equipos","📊 Más información en el preview de columna — para reducir la necesidad de hacer click","🎉 Resultado: de 3.9 a 4.2 — la iteración basada en feedback real cerró la brecha"],
          en: ["👁️ Detail button more prominent and visible without scrolling — 100% of 1-star respondents couldn't find it","🏢 Department grouping tab — that was the natural way they organized their teams","📊 More information in column preview — to reduce the need to click","🎉 Result: from 3.9 to 4.2 — feedback-driven iteration closed the gap"],
        },
        highlight: true,
      },

      /* ══════════════════════════════════════════
         3. LA SOLUCIÓN Y RESULTADOS
         ══════════════════════════════════════════ */
      {
        phase: "results",
        icon: "🎬", title: { es:"La Solución Final", en:"The Final Solution" },
        content: { es:"Un dashboard de monitoreo en tiempo real con dark mode, diseñado para ser proyectado en pantallas compartidas. Cards por estado de ticket con desglose por canal, alarmas visuales configurables, y tres niveles de agrupación:", en:"A real-time monitoring dashboard with dark mode, designed to be projected on shared screens. State cards with channel breakdown, configurable visual alarms, and three grouping levels:" },
        image: "/images/mon_final_demo.gif",
        highlight: true,
      },
      {
        phase: "results",
        icon: "🏆", title: { es:"Resultados", en:"Results" },
        content: { es:"El rediseño no solo mejoró la experiencia — resolvió un problema estructural del producto. Los clientes dejaron de necesitar herramientas externas, lo que nos permitió reducir el esfuerzo en mantener sistemas de exportación y APIs costosas que existían solo porque la interfaz no cumplía su función:", en:"The redesign didn't just improve the experience — it solved a structural product problem. Clients stopped needing external tools, which allowed us to reduce effort maintaining export systems and costly APIs that existed only because the interface wasn't doing its job:" },
        stat: { es:"3.9 → 4.2", en:"3.9 → 4.2" },
        statLabel: { es:"Evolución de satisfacción entre iteraciones (de 5)", en:"Satisfaction evolution between iterations (out of 5)" },
        image: "/images/mon_final_dark.png",
        bullets: {
          es: ["🏠 Los usuarios dejaron de usar la herramienta externa — la info ahora vivía donde debía","💸 Se redujo la necesidad de mantener sistemas de exportación y APIs costosas — la interfaz ahora cumplía su función","🧠 Pidieron incluir MÁS datos porque ahora sí los entendían y querían profundizar","🚨 El sistema de alarmas se convirtió en patrón y se expandió a otras secciones del producto","📈 Satisfacción de 3.9 a 4.2 con 75% de puntuaciones máximas en la segunda medición"],
          en: ["🏠 Users stopped using the external tool — data now lived where it should","💸 Reduced the need to maintain costly export systems and APIs — the interface now did its job","🧠 They asked for MORE data because they could finally understand it and wanted to go deeper","🚨 The alarm system became a pattern and expanded to other product sections","📈 Satisfaction from 3.9 to 4.2 with 75% maximum scores in the second measurement"],
        },
        highlight: true,
      },
    ],
  },
  dds: {
    title: { es: "Unificando una experiencia fragmentada", en: "Unifying a fragmented experience" },
    company: "CX Platform",
    role: "Product Designer",
    period: "2023 — Presente",
    competency: { es: "Pensamiento sistémico · Colaboración con desarrollo", en: "Systems thinking · Dev collaboration" },
    figma: "https://www.figma.com/design/QWUDUeRFjdanjn0JhW4iU3/Diamond-Design-System-by-Yayo?node-id=0-501",
    slides: [
      /* ══════════════════════════════════════════
         1. RESUMEN Y CONTEXTO
         ══════════════════════════════════════════ */
      {
        phase: "context",
        icon: "💎", title: { es:"Resumen", en:"Overview" },
        content: { es:"Mi primer proyecto como Product Designer en la empresa, tomado proactivamente. Al hacer un barrido de la aplicación encontré hasta 5 estilos distintos de un mismo componente — botones, selectores, filtros — todos diferentes entre sí. La plataforma estaba construida en 3 lenguajes de programación distintos, con secciones que llevaban años sin actualizarse y sin ningún sistema de diseño.\n\nEsto significaba que cada desarrollador creaba componentes y decidía estilos al momento de construir, lo que aumentaba el tiempo de desarrollo y generaba una experiencia visual incoherente que impactaba la percepción de los usuarios sobre la plataforma. Creé el Diamond Design System en aproximadamente 3 semanas: un sistema basado en Atomic Design con Rubik y Karla como tipografías, retícula de 8pts, y documentación pensada para desarrolladores. Tres años después, sigue siendo el sistema activo del producto.", en:"My first project as Product Designer at the company, taken on proactively. When auditing the application I found up to 5 different styles for the same component — buttons, selectors, filters — all different from each other. The platform was built in 3 different programming languages, with sections that hadn't been updated in years and no design system whatsoever.\n\nThis meant each developer created components and decided styles on the fly, increasing development time and generating an incoherent visual experience that impacted users' perception of the platform. I created the Diamond Design System in approximately 3 weeks: a system based on Atomic Design with Rubik and Karla as typefaces, 8pt grid, and documentation designed for developers. Three years later, it's still the product's active system." },
        tags: ["Design System","Atomic Design","Systems Thinking","Figma","Dev Handoff"],
      },
      {
        phase: "context",
        icon: "🔥", title: { es:"El Problema", en:"The Problem" },
        content: { es:"La plataforma había crecido orgánicamente durante años. Tres lenguajes de programación distintos, secciones construidas en diferentes épocas, y cero gobernanza visual. El resultado era una aplicación que se sentía como varias apps distintas pegadas:", en:"The platform had grown organically over the years. Three different programming languages, sections built in different eras, and zero visual governance. The result was an application that felt like several different apps glued together:" },
        bullets: {
          es: ["🎨 Hasta 5 estilos distintos de botones, selectores y filtros en la misma aplicación","💻 3 lenguajes de programación distintos — imposible compartir componentes entre secciones","⏳ Secciones construidas hace años sin actualizar — deuda técnica visual acumulada","🔨 Cada desarrollador creaba componentes y decidía estilos al momento → tiempo de desarrollo alto","😤 Los usuarios no se quejaban del estilo, pero sí de la usabilidad de filtros y selectores antiguos que tenían una UX pobre","👁️ La inconsistencia visual afectaba la percepción profesional de la plataforma"],
          en: ["🎨 Up to 5 different styles for buttons, selectors and filters in the same application","💻 3 different programming languages — impossible to share components between sections","⏳ Sections built years ago without updates — accumulated visual tech debt","🔨 Each developer created components and decided styles on the fly → high development time","😤 Users didn't complain about style, but about the usability of old filters and selectors with poor UX","👁️ Visual inconsistency affected the platform's professional perception"],
        },
      },
      {
        phase: "context",
        icon: "🖥️", title: { es:"Estado previo", en:"Previous state" },
        content: { es:"Al recorrer la aplicación documenté las inconsistencias. Un mismo tipo de componente podía verse completamente diferente dependiendo de la sección y del desarrollador que lo había construido. No existía una fuente de verdad visual:", en:"When going through the application I documented the inconsistencies. The same type of component could look completely different depending on the section and the developer who built it. There was no visual source of truth:" },
        bullets: {
          es: ["🔘 Botones: al menos 5 variaciones distintas de color, forma y tamaño sin ninguna lógica","📝 Inputs y selectores: cada sección tenía su propia versión, algunos con usabilidad muy pobre","🎨 Colores: sin paleta definida — cada dev elegía tonos arbitrariamente","📏 Espaciados: inconsistentes, sin retícula — cada layout era un mundo aparte","📋 Los filtros y selectores más antiguos generaban quejas de usabilidad por parte de los usuarios"],
          en: ["🔘 Buttons: at least 5 distinct variations of color, shape and size with no logic","📝 Inputs and selectors: each section had its own version, some with very poor usability","🎨 Colors: no defined palette — each dev chose tones arbitrarily","📏 Spacing: inconsistent, no grid — each layout was its own world","📋 The oldest filters and selectors generated usability complaints from users"],
        },
      },

      /* ══════════════════════════════════════════
         2. PROCESO DE DISEÑO — Investigación
         ══════════════════════════════════════════ */
      {
        phase: "research",
        icon: "🔍", title: { es:"Investigación", en:"Research" },
        content: { es:"Mi primer paso fue un barrido general de toda la aplicación, capturando cada variación de componentes que encontraba. Luego entrevisté a los desarrolladores para entender las limitaciones y posibilidades de cada lenguaje, y así decidir en cuál construir el sistema. También trabajé con marketing y el CEO para definir el color principal alineado con la imagen de marca:", en:"My first step was a general sweep of the entire application, capturing every component variation I found. Then I interviewed developers to understand the limitations and possibilities of each language, and decide which one to build the system in. I also worked with marketing and the CEO to define the primary color aligned with the brand image:" },
        bullets: {
          es: ["🔎 Auditoría visual completa — recorrí cada sección documentando variaciones de componentes","👨‍💻 Entrevistas con desarrolladores — entender limitaciones y posibilidades de cada lenguaje de programación","🎯 Decisión de lenguaje — elegimos el más estable y actualizable para construir el DS","🎨 Color principal — definido junto con marketing y CEO para alinear con imagen de marca","👥 Sin quejas directas de estilo por parte de usuarios, pero sí sobre usabilidad de filtros y selectores antiguos"],
          en: ["🔎 Complete visual audit — went through every section documenting component variations","👨‍💻 Developer interviews — understand limitations and possibilities of each programming language","🎯 Language decision — we chose the most stable and updatable to build the DS","🎨 Primary color — defined with marketing and CEO to align with brand image","👥 No direct style complaints from users, but usability complaints about old filters and selectors"],
        },
      },
      {
        phase: "research",
        icon: "🎯", title: { es:"Decisiones clave", en:"Key decisions" },
        content: { es:"Cada decisión del sistema respondió a una necesidad concreta del contexto. No elegí por moda — elegí por pragmatismo:", en:"Every system decision responded to a concrete contextual need. I didn't choose by trend — I chose by pragmatism:" },
        bullets: {
          es: ["🧬 Atomic Design — escalable y fácil de modificar. Una marca y sus estilos están en constante cambio: la idea era hacer un esfuerzo grande al inicio y luego solo mantención","✏️ Rubik — la tipografía oficial de la marca. No negociable","📝 Karla — necesitábamos una variación más sobria para el cuerpo del sistema, complementaria a Rubik","📐 Retícula de 8pts — estándar de la industria, facilita alineación y consistencia en todos los componentes","🔒 Restricción principal: el DS debía vivir dentro de un solo lenguaje de programación y convivir con sus limitaciones"],
          en: ["🧬 Atomic Design — scalable and easy to modify. A brand and its styles are constantly changing: the idea was to make a big effort upfront and then just maintenance","✏️ Rubik — the brand's official typeface. Non-negotiable","📝 Karla — we needed a more sober variation for the system body, complementary to Rubik","📐 8pt grid — industry standard, facilitates alignment and consistency across all components","🔒 Main constraint: the DS had to live within a single programming language and coexist with its limitations"],
        },
      },

      /* ══════════════════════════════════════════
         2. PROCESO DE DISEÑO — Ideación
         ══════════════════════════════════════════ */
      {
        phase: "ideation",
        icon: "🧬", title: { es:"Estructura del sistema", en:"System structure" },
        content: { es:"Organicé todo bajo Atomic Design con retícula de 8pts. Cada nivel construye sobre el anterior, desde los elementos más básicos hasta las composiciones completas:", en:"I organized everything under Atomic Design with an 8pt grid. Each level builds on the previous, from the most basic elements to complete compositions:" },
        atoms: {
          es: ["⚛️ Átomos — Colores (paleta primaria, secundaria, estados, neutros), tipografías (Rubik + Karla), iconos por categoría, logos, espaciados en base 8","🧬 Moléculas — Botones (Default/Hover/Active/Disabled, tamaños S/M/L), Inputs (con label, helper text, estados), Dropdowns (búsqueda, multi-select), Tablas, Alertas, Tooltips","🦠 Organismos — Módulo de Creación, Toolbar, Tarjetas de Resumen, Modales, Formularios completos, Headers"],
          en: ["⚛️ Atoms — Colors (primary, secondary, states, neutrals palette), typography (Rubik + Karla), icons by category, logos, 8-based spacing","🧬 Molecules — Buttons (Default/Hover/Active/Disabled, sizes S/M/L), Inputs (with label, helper text, states), Dropdowns (search, multi-select), Tables, Alerts, Tooltips","🦠 Organisms — Creation Module, Toolbar, Summary Cards, Modals, Complete Forms, Headers"],
        },
        images: [
          { src: "/images/dds_palette.png", caption: { es:"Paleta principal: Azul Diamante + Morado Luna", en:"Main palette: Diamond Blue + Moon Purple" } },
          { src: "/images/dds_theme.png", caption: { es:"Tema de marca: aplicación Light/Dark", en:"Brand theme: Light/Dark application" } },
        ],
      },
      {
        phase: "ideation",
        icon: "📘", title: { es:"Componentes y handoff", en:"Components and handoff" },
        content: { es:"Un diseño increíble que el dev no puede traducir a código no sirve de nada. Mi enfoque fue documentar cada componente pensando en el desarrollador como un traductor, no un intérprete. Cada variación documentada, cada estado especificado, cada medida explícita:", en:"An incredible design the dev can't translate to code is worthless. My approach was to document every component thinking of the developer as a translator, not an interpreter. Every variation documented, every state specified, every measurement explicit:" },
        bullets: {
          es: ["📄 Cada componente con todas sus variaciones y estados documentados","🔗 Documentado en términos de código, no solo de diseño — ej: AButton con props, no solo un rectángulo azul","📐 Figma con specs exactas — el dev es traductor, no intérprete","💬 Sesiones de explicación presenciales — documentar no reemplaza la conversación","🎨 Sistema de color completo: primarios, secundarios, estados (éxito, error, warning, info), neutros"],
          en: ["📄 Every component with all variations and states documented","🔗 Documented in code terms, not just design — e.g., AButton with props, not just a blue rectangle","📐 Figma with exact specs — dev is translator, not interpreter","💬 In-person explanation sessions — documentation doesn't replace conversation","🎨 Complete color system: primary, secondary, states (success, error, warning, info), neutrals"],
        },
        images: [
          { src: "/images/dds_buttons_blue.png", caption: { es:"Botones: Principal, Secundario, Delineado con todos sus estados", en:"Buttons: Primary, Secondary, Outlined with all states" } },
          { src: "/images/dds_calendar.png", caption: { es:"Calendario: 7 variaciones documentadas con casos de uso", en:"Calendar: 7 documented variations with use cases" } },
        ],
        figmaLink: "https://www.figma.com/design/QWUDUeRFjdanjn0JhW4iU3/Diamond-Design-System-by-Yayo?node-id=0-501",
      },

      /* ══════════════════════════════════════════
         2. PROCESO DE DISEÑO — Iteración
         ══════════════════════════════════════════ */
      {
        phase: "iteration",
        icon: "🔧", title: { es:"Iteración: el caso del header", en:"Iteration: the header case" },
        content: { es:"Ni siquiera los componentes 'resueltos' están exentos de iteración. El header que diseñé inicialmente cumplía su función, pero estaba ocupando demasiado espacio vertical en las pantallas de los usuarios, quitándole espacio a lo realmente importante — el contenido:", en:"Not even 'solved' components are exempt from iteration. The header I initially designed fulfilled its function, but was taking up too much vertical space on users' screens, stealing space from what really matters — the content:" },
        beforeAfter: {
          before: {
            image: "/images/dds_header_before.png",
            bullets: { es:["Header con título y botón 'Volver atrás' — ocupaba demasiado espacio vertical"], en:["Header with title and 'Go back' button — took up too much vertical space"] },
          },
          after: {
            image: "/images/dds_header_after.png",
            bullets: { es:["Breadcrumbs con navegación contextual — ganancia significativa de espacio"], en:["Breadcrumbs with contextual navigation — significant space gain"] },
          },
        },
        bullets: {
          es: ["💡 Aprendizaje: hasta los componentes que parecen resueltos necesitan validación en el contexto real de uso","📐 Esto reforzó la filosofía del sistema: está vivo, siempre se puede mejorar"],
          en: ["💡 Learning: even components that seem solved need validation in real usage context","📐 This reinforced the system's philosophy: it's alive, it can always be improved"],
        },
      },

      /* ══════════════════════════════════════════
         3. LA SOLUCIÓN Y RESULTADOS
         ══════════════════════════════════════════ */
      {
        phase: "results",
        icon: "📈", title: { es:"Adopción y resultados", en:"Adoption and results" },
        content: { es:"La adopción del Diamond Design System fue total. Un desarrollador dedicó entre 1 y 2 meses a implementar la base del sistema en código, y luego todo el equipo se sumó a utilizarlo, actualizarlo y mantenerlo:", en:"The Diamond Design System's adoption was total. One developer spent 1 to 2 months implementing the system's base in code, and then the entire team joined in using, updating and maintaining it:" },
        bullets: {
          es: ["✅ Adopción del 100% — todos los desarrolladores adoptaron el sistema","👨‍💻 Implementación: 1 dev dedicado 1-2 meses a la base, luego todos contribuyeron","🔄 3 años después sigue vivo — se reutiliza cada vez que viene una funcionalidad nueva","👥 Los clientes notaron la consistencia, especialmente en los nuevos desarrollos","⚠️ Deuda técnica: muchas secciones antiguas mantienen estilos viejos que son difíciles de actualizar","📐 Los developers tienen una fuente de verdad única para UI por primera vez"],
          en: ["✅ 100% adoption — all developers adopted the system","👨‍💻 Implementation: 1 dev dedicated 1-2 months to the base, then everyone contributed","🔄 3 years later still alive — reused every time a new feature comes in","👥 Clients noticed the consistency, especially in new developments","⚠️ Tech debt: many old sections still have old styles that are hard to update","📐 Developers have a single source of truth for UI for the first time"],
        },
        highlight: true,
      },
      {
        phase: "results",
        icon: "🏆", title: { es:"Un sistema vivo", en:"A living system" },
        content: { es:"El Diamond Design System no tiene 'fin'. Surgen nuevas problemáticas, el producto evoluciona, componentes necesitan ajustes. Eso es signo de buena salud — un esfuerzo grande al principio que se convirtió en mantención continua ligera:", en:"The Diamond Design System has no 'end'. New challenges arise, the product evolves, components need adjustments. That's a sign of good health — a big effort upfront that became light continuous maintenance:" },
        bullets: {
          es: ["🔄 Sistema vivo — se actualiza con cada nueva feature del producto","⏱️ La inversión inicial de 3 semanas se ha pagado cientos de veces en tiempo de desarrollo ahorrado","🎨 UI consistente a lo largo de toda la plataforma por primera vez","💎 De 5 estilos distintos de botón a 1 sistema unificado — ese es el impacto"],
          en: ["🔄 Living system — updates with every new product feature","⏱️ The initial 3-week investment has paid for itself hundreds of times in saved development time","🎨 Consistent UI across the entire platform for the first time","💎 From 5 different button styles to 1 unified system — that's the impact"],
        },
        highlight: true,
      },
    ],
  },
  rendimiento: {
    title: { es: "Rediseño de Rendimiento de Equipo", en: "Team Performance Redesign" },
    company: "Helpdesk SaaS",
    role: "Product Designer",
    period: "2025",
    competency: { es: "Analytics · Data Viz · Definición de datos · Diseño en fases", en: "Analytics · Data Viz · Data definition · Phased design" },
    slides: [
      /* ══════════════════════════════════════════
         1. RESUMEN Y CONTEXTO
         ══════════════════════════════════════════ */
      {
        phase: "context",
        icon: "📈", title: { es:"Resumen", en:"Overview" },
        content: { es:"La sección de Rendimiento de Equipo es el centro de analytics de una plataforma SaaS de atención al cliente. Los analistas y administradores necesitan evaluar la productividad de sus agentes — volumen de tickets, tiempos de primera atención, eficiencia y satisfacción — pero la sección existente presentaba datos dispersos en categorías poco intuitivas que obligaban a los usuarios a exportar y procesar la información por su cuenta.\n\nJunto a la Product Owner y el equipo de Customer Care, redefinimos desde cero qué datos debían mostrarse y cómo. Lo que más tiempo tomó no fue el diseño visual, sino la definición de los datos que realmente darían valor. El resultado fue un dashboard con filtros combinables, gráficos claros y tablas desplegables que transformó datos crudos en información accionable.", en:"The Team Performance section is the analytics hub of a customer service SaaS platform. Analysts and admins need to evaluate their agents' productivity — ticket volume, first response times, efficiency and satisfaction — but the existing section presented data scattered across unintuitive categories that forced users to export and process information on their own.\n\nTogether with the Product Owner and Customer Care team, we redefined from scratch what data should be shown and how. What took the most time wasn't the visual design, but defining the data that would truly deliver value. The result was a dashboard with combinable filters, clear charts and expandable tables that transformed raw data into actionable information." },
        tags: ["Analytics","Data Viz","Data Definition","Phased Delivery","Contact Center"],
      },
      {
        phase: "context",
        icon: "🔥", title: { es:"El Problema", en:"The Problem" },
        content: { es:"Un ticket es una consulta de un cliente a través de un canal como WhatsApp, Instagram, Facebook o email. Los agentes atienden estas consultas y los analistas/administradores necesitan evaluar su rendimiento. La sección de Historial era su herramienta principal, pero tenía problemas fundamentales:", en:"A ticket is a customer inquiry through a channel like WhatsApp, Instagram, Facebook or email. Agents handle these inquiries and analysts/admins need to evaluate their performance. The History section was their main tool, but it had fundamental problems:" },
        bullets: {
          es: ["🗂️ Datos valiosos fragmentados en categorías aisladas — Departamentos, Cuentas, Ejecutivos y Tickets mostraban información relevante para las demás, pero no se podían cruzar","🔄 Combinaciones imposibles — un analista no podía ver 'tickets abordados por el agente X en el departamento Y durante marzo'. Tenía que entrar a cada tab por separado","📊 Gráficos de líneas sobrecargados — múltiples series superpuestas imposibles de comparar, sin indicar si un dato era bueno o malo","📤 La sección era solo un punto de exportación — los usuarios entraban, descargaban el detalle y lo procesaban en Excel para poder ordenarlo de manera intuitiva","⏱️ Visitas muy bajas y cortas según Amplitude — los usuarios no pasaban tiempo suficiente como para descubrir información valiosa"],
          en: ["🗂️ Valuable data fragmented across isolated categories — Departments, Accounts, Executives and Tickets each showed information relevant to others, but couldn't be cross-referenced","🔄 Impossible combinations — an analyst couldn't see 'tickets handled by agent X in department Y during March'. They had to check each tab separately","📊 Overloaded line charts — multiple overlapping series impossible to compare, with no indication of whether a metric was good or bad","📤 The section was just an export point — users entered, downloaded the detail and processed it in Excel to organize it intuitively","⏱️ Very low and short visits according to Amplitude — users didn't spend enough time to discover valuable information"],
        },
      },
      {
        phase: "context",
        icon: "🖥️", title: { es:"Estado previo", en:"Previous state" },
        content: { es:"La información estaba agrupada en categorías no intuitivas (Tickets, Ejecutivos, Departamentos, Mensajes, Cuentas, Clientes). Cada una mostraba datos que también habrían sido valiosos en otras categorías, pero unificarlos era imposible. El resultado: una sección que los usuarios solo visitaban para exportar.", en:"Information was grouped in unintuitive categories (Tickets, Executives, Departments, Messages, Accounts, Clients). Each showed data that would have also been valuable in other categories, but unifying them was impossible. The result: a section users only visited to export." },
        images: [
          { src: "/images/rend_old_graficos.png", caption: { es:"Gráficos de líneas confusos y KPIs planos sin contexto", en:"Confusing line charts and flat KPIs without context" } },
          { src: "/images/rend_old_datos_planos.gif", caption: { es:"Datos tabulares sin jerarquía — los usuarios exportaban todo para procesarlo aparte", en:"Tabular data without hierarchy — users exported everything to process it separately" } },
        ],
      },

      /* ══════════════════════════════════════════
         2. PROCESO — Investigación
         ══════════════════════════════════════════ */
      {
        phase: "research",
        icon: "👂", title: { es:"Investigación: los datos que importan", en:"Research: the data that matters" },
        content: { es:"El descubrimiento vino de dos fuentes complementarias. Primero, reuniones constantes con la Product Owner y el equipo de Customer Care. Este equipo ya preparaba reportes mensuales para clientes de alto volumen mostrando el rendimiento de sus cuentas y agentes — ya tenían definidos muchos de los datos que los usuarios necesitaban ver. Contrastar esa información con lo que la plataforma ya mostraba nos dio un mapa claro de los gaps.\n\nSegundo, implementamos tracking con Amplitude para medir el uso real de la sección de Historial. Los resultados confirmaron la hipótesis: visitas muy bajas y sesiones cortas, lo que indicaba que los usuarios no exploraban — solo exportaban.", en:"Discovery came from two complementary sources. First, constant meetings with the Product Owner and Customer Care team. This team already prepared monthly reports for high-volume clients showing their accounts and agents' performance — they had already defined many of the data points users needed to see. Contrasting that information with what the platform already showed gave us a clear map of the gaps.\n\nSecond, we implemented Amplitude tracking to measure actual usage of the History section. Results confirmed the hypothesis: very low visits and short sessions, indicating users weren't exploring — just exporting." },
        bullets: {
          es: ["🤝 Customer Care ya modelaba los datos que los clientes necesitaban — no partimos de cero, partimos de conocimiento real","📊 Amplitude confirmó sesiones cortas = la sección era solo un punto de exportación, no una herramienta de análisis","🔍 El gap principal: los datos existían en la plataforma, pero estaban dispersos y no se podían combinar"],
          en: ["🤝 Customer Care already modeled the data clients needed — we didn't start from zero, we started from real knowledge","📊 Amplitude confirmed short sessions = the section was just an export point, not an analysis tool","🔍 The main gap: the data existed in the platform, but was scattered and couldn't be combined"],
        },
      },

      /* ══════════════════════════════════════════
         2. PROCESO — Decisiones clave
         ══════════════════════════════════════════ */
      {
        phase: "research",
        icon: "🎯", title: { es:"Decisiones clave", en:"Key decisions" },
        content: { es:"Después de definir los datos, cada decisión de diseño respondió a un problema concreto:", en:"After defining the data, each design decision addressed a specific problem:" },
        bullets: {
          es: ["🔀 Departamentos, Cuentas y Agentes como filtros combinables — porque las categorías aisladas eran el problema raíz. Los analistas necesitan cruzar dimensiones libremente según lo que estén investigando","📊 Gráficos acompañados de tablas desplegables — porque no queríamos abrumar al usuario pero tampoco privarlo del detalle. El gráfico da la foto rápida, la tabla permite profundizar","🚀 Desarrollo dividido en fases (MVP primero) — porque la complejidad de los cálculos era alta y necesitábamos empezar a entregar valor sin esperar a tener todo listo","📖 Documentación de Figma para desarrollo — cada dato tenía su fórmula y lógica de cálculo documentada, porque los desarrolladores necesitaban entender exactamente qué significaba cada métrica"],
          en: ["🔀 Departments, Accounts and Agents as combinable filters — because isolated categories were the root problem. Analysts need to freely cross dimensions based on what they're investigating","📊 Charts accompanied by expandable tables — because we didn't want to overwhelm the user but also didn't want to hide detail. The chart gives the quick picture, the table allows drilling down","🚀 Development split into phases (MVP first) — because calculation complexity was high and we needed to start delivering value without waiting for everything to be ready","📖 Figma documentation for development — every metric had its formula and calculation logic documented, because developers needed to understand exactly what each metric meant"],
        },
      },

      /* ══════════════════════════════════════════
         2. PROCESO — Ideación
         ══════════════════════════════════════════ */
      {
        phase: "ideation",
        icon: "📐", title: { es:"Arquitectura de la información", en:"Information architecture" },
        content: { es:"Reorganizamos toda la información en 3 categorías orientadas a preguntas de negocio, con un sistema de filtros superiores (tiempo, cuentas, departamentos y agentes) que permite cualquier combinación:", en:"We reorganized all information into 3 categories oriented around business questions, with a top filter system (time, accounts, departments and agents) that allows any combination:" },
        flow: {
          es: ["Filtros combinables","Tickets: volumen y gestión","Primera Atención: calidad y tiempos","Eficiencia y Satisfacción: TMO, CSAT"],
          en: ["Combinable filters","Tickets: volume & management","First Response: quality & times","Efficiency & Satisfaction: AHT, CSAT"],
        },
        bullets: {
          es: ["🎫 Tickets — Volumen de conversaciones, gestión (cerrados, derivados, abordados), resolución en primer contacto, % atendido por IA. Acompañado de detalle por departamento y agente","⏱️ Primera Atención — Tickets dentro del estándar de primera respuesta, tiempos promedio de abordaje. Incluye un heat map que distribuye tickets por agente y rango de tiempo (0-3min hasta +1hr) para identificar dónde cae la mayoría y ajustar bonos o estándares","📊 Eficiencia y Satisfacción — TMO (tiempo medio de operación desde creación hasta resolución), tiempos de silencio entre respuestas, CSAT por agente y departamento. Evalúa la calidad percibida de la atención"],
          en: ["🎫 Tickets — Conversation volume, management (closed, transferred, handled), first contact resolution, % handled by AI. Accompanied by detail per department and agent","⏱️ First Response — Tickets within first response quality standard, average handling times. Includes a heat map distributing tickets by agent and time range (0-3min to +1hr) to identify where most tickets fall and adjust bonuses or standards","📊 Efficiency & Satisfaction — AHT (average handling time from creation to resolution), silence times between responses, CSAT per agent and department. Evaluates perceived quality of service"],
        },
      },

      /* ══════════════════════════════════════════
         2. PROCESO — Prototipo + Demo
         ══════════════════════════════════════════ */
      {
        phase: "ideation",
        icon: "🖥️", title: { es:"La nueva sección en acción", en:"The new section in action" },
        content: { es:"El diseño final reemplazó las categorías rígidas por un sistema flexible donde los filtros superiores permiten a los analistas hacer cualquier combinación de departamento, cuenta y agente. Cada categoría muestra un gráfico para la lectura rápida y una tabla desplegable para el detalle — el usuario decide cuánta profundidad necesita.", en:"The final design replaced rigid categories with a flexible system where top filters allow analysts to make any combination of department, account and agent. Each category shows a chart for quick reading and an expandable table for detail — the user decides how much depth they need." },
        image: "/images/rend_new_dashboard.gif",
      },

      /* ══════════════════════════════════════════
         2. PROCESO — Iteración
         ══════════════════════════════════════════ */
      {
        phase: "iteration",
        icon: "🔧", title: { es:"Iteración: guía y documentación", en:"Iteration: guide and documentation" },
        content: { es:"La primera versión se lanzó con una guía integrada que indicaba al usuario qué esperar de cada gráfico y tabla, ayudándolo a descubrir las funcionalidades de la nueva sección. En paralelo, documenté en Figma la lógica de cálculo de cada métrica para que el equipo de desarrollo entendiera exactamente qué significaba cada dato — esta documentación fue clave para alinear diseño e implementación.\n\nEl siguiente paso identificado es permitir filtros por datos del ticket (campos personalizados de cada operación), lo que permitiría descubrir resultados sobre temáticas específicas para cada cliente.", en:"The first version launched with an integrated guide showing users what to expect from each chart and table, helping them discover the new section's features. In parallel, I documented in Figma the calculation logic for each metric so the development team understood exactly what each data point meant — this documentation was key to aligning design and implementation.\n\nThe next identified step is enabling filters by ticket data (custom fields per operation), which would allow discovering results about specific topics for each client." },
        images: [
          { src: "/images/rend_new_con_guia.gif", caption: { es:"Guía integrada para el lanzamiento — orientaba al usuario sobre qué información encontrar en cada sección", en:"Integrated launch guide — helped users understand what information to find in each section" } },
          { src: "/images/rend_new_con_docs.gif", caption: { es:"Documentación en Figma — cada métrica con su fórmula y lógica de cálculo para el equipo de desarrollo", en:"Figma documentation — each metric with its formula and calculation logic for the development team" } },
        ],
      },

      /* ══════════════════════════════════════════
         3. SOLUCIÓN Y RESULTADOS
         ══════════════════════════════════════════ */
      {
        phase: "results",
        icon: "🎬", title: { es:"La Solución Final", en:"The Final Solution" },
        content: { es:"Un dashboard de rendimiento que reemplazó categorías aisladas por filtros combinables y agrupó los datos en 3 dimensiones orientadas a preguntas de negocio: Tickets, Primera Atención, y Eficiencia y Satisfacción. Cada dimensión combina gráficos para lectura rápida con tablas desplegables para el detalle, guía integrada para nuevos usuarios y documentación técnica para desarrollo.", en:"A performance dashboard that replaced isolated categories with combinable filters and grouped data into 3 business-oriented dimensions: Tickets, First Response, and Efficiency & Satisfaction. Each dimension combines charts for quick reading with expandable tables for detail, an integrated guide for new users, and technical documentation for development." },
        image: "/images/rend_new_dashboard.gif",
        highlight: true,
      },
      {
        phase: "results",
        icon: "🏆", title: { es:"Impacto y próximos pasos", en:"Impact & next steps" },
        content: { es:"Este proyecto transformó una sección que era solo un punto de exportación en una herramienta de análisis real. El mayor logro no fue visual — fue la definición colaborativa de los datos correctos con Customer Care y Product, asegurándonos de que cada métrica respondiera a una pregunta real de negocio.", en:"This project transformed a section that was just an export point into a real analysis tool. The biggest achievement wasn't visual — it was the collaborative definition of the right data with Customer Care and Product, ensuring every metric answered a real business question." },
        bullets: {
          es: ["🔀 De categorías aisladas a filtros combinables — los analistas ahora pueden cruzar departamentos, cuentas y agentes libremente","📊 De gráficos confusos a dashboards con propósito — cada sección responde a una pregunta de negocio específica","📖 Documentación como puente — la documentación de Figma alineó diseño y desarrollo, reduciendo idas y vueltas","🚀 Próximo paso: filtros por datos del ticket — campos personalizados que permitirán análisis por temáticas específicas de cada operación","🔄 Proyecto en fases — el MVP ya entrega valor mientras se construyen las siguientes iteraciones"],
          en: ["🔀 From isolated categories to combinable filters — analysts can now freely cross departments, accounts and agents","📊 From confusing charts to purposeful dashboards — each section answers a specific business question","📖 Documentation as a bridge — Figma documentation aligned design and development, reducing back-and-forth","🚀 Next step: filters by ticket data — custom fields that will enable analysis by specific topics per operation","🔄 Phased project — the MVP already delivers value while next iterations are being built"],
        },
        highlight: true,
      },
    ],
  },
};
