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
  flowbuilder: {
    hidden: true,
    title: { es: "De listas confusas a un canvas visual", en: "From confusing lists to a visual canvas" },
    company: "Helpdesk SaaS",
    role: "Product Designer",
    period: "2023 — 2024",
    competency: { es: "Diseño de interacciones complejas · Adopción", en: "Complex interaction design · Adoption" },
    slides: [
      /* ── CONTEXT ── */
      {
        phase: "context",
        icon: "🤖", title: { es:"El Desafío", en:"The Challenge" },
        content: { es:"Los bots de atención al cliente son poderosos: filtran spam, recopilan datos, encuentran información y reducen tiempos de atención. Pero construirlos era una pesadilla. Los flujos se armaban mediante una lista plana — como intentar entender un árbol de decisiones leyendo un documento de texto.", en:"Customer service bots are powerful: they filter spam, gather data, find information and reduce response times. But building them was a nightmare. Flows were assembled through a flat list — like trying to understand a decision tree by reading a text document." },
        tags: ["AI","Flow Builder","Interaction Design","0→1","Adoption"],
      },
      {
        phase: "context",
        icon: "🔄", title: { es:"Cómo funciona el sistema", en:"How the system works" },
        content: { es:"El sistema funciona en dos ámbitos: lo que pasa dentro del bot (configuración) y lo que pasa fuera (interacción con el cliente). Esta dualidad era clave para diseñar la experiencia:", en:"The system works in two scopes: what happens inside the bot (configuration) and what happens outside (client interaction). This duality was key to designing the experience:" },
        flow: { es:["Crear Bot AI","Conectar Cuenta","Crear Intenciones","Crear Flujos","Cliente Escribe","Bot Identifica","Dispara Flujo"], en:["Create AI Bot","Connect Account","Create Intentions","Create Flows","Client Writes","Bot Identifies","Triggers Flow"] },
        bullets: {
          es: ["🤖 DENTRO: Admin crea bot → conecta cuenta → define intenciones → crea flujos por intención","👤 FUERA: Cliente escribe → se crea ticket → bot identifica intención → dispara flujo o deriva a agente"],
          en: ["🤖 INSIDE: Admin creates bot → connects account → defines intentions → creates flows per intention","👤 OUTSIDE: Client writes → ticket created → bot identifies intention → triggers flow or routes to agent"],
        },
      },
      {
        phase: "context",
        icon: "😤", title: { es:"Lo que no funcionaba", en:"What wasn't working" },
        content: { es:"El producto estaba en beta con pocos usuarios, mayoría internos. Al investigar, encontramos problemas fundamentales:", en:"The product was in beta with few users, mostly internal. When investigating, we found fundamental problems:" },
        bullets: {
          es: ["🤨 Los flujos se construían mediante una LISTA — imposible entender la lógica completa","💻 Muchas opciones avanzadas existían en backend pero no en la interfaz","😰 Cada flujo era un silo — no se podían conectar entre sí","😵 Entender flujos completos era confuso incluso para usuarios avanzados","🔍 Encontrar un nodo específico era como buscar una aguja en un pajar"],
          en: ["🤨 Flows were built through a LIST — impossible to understand the full logic","💻 Many advanced options existed in backend but not in the interface","😰 Each flow was a silo — couldn't connect them to each other","😵 Understanding complete flows was confusing even for advanced users","🔍 Finding a specific node was like finding a needle in a haystack"],
        },
      },
      /* ── RESEARCH ── */
      {
        phase: "research",
        icon: "👂", title: { es:"Lo que nos dijeron los usuarios", en:"What users told us" },
        content: { es:"Trabajamos con usuarios beta internos que construían bots diariamente. Sus frustraciones nos guiaron:", en:"We worked with internal beta users who built bots daily. Their frustrations guided us:" },
        bullets: {
          es: ["📋 No podían visualizar la lógica completa sin navegar ida y vuelta entre vistas","🔄 Cambiar una condición requería múltiples pasos que podían romper el flujo","📱 Los más técnicos querían acceso a opciones que solo existían en consola","🧩 La desconexión entre flujos hacía imposible reutilizar lógica común"],
          en: ["📋 Couldn't visualize the complete logic without navigating back and forth between views","🔄 Changing a condition required multiple steps that could break the flow","📱 More technical users wanted access to options that only existed in console","🧩 The disconnection between flows made it impossible to reuse common logic"],
        },
      },
      /* ── GOALS ── */
      {
        phase: "goals",
        icon: "🎯", title: { es:"El objetivo: pensar visualmente", en:"The goal: think visually" },
        content: { es:"La construcción de bots es inherentemente visual — son árboles de decisión. La interfaz debía reflejar esa naturaleza:", en:"Bot building is inherently visual — they're decision trees. The interface had to reflect that nature:" },
        bullets: {
          es: ["🧠 Que se entienda un flujo completo de un vistazo — como un diagrama de flujo real","🪜 Flujos escalables y conectables entre sí — eliminar silos","💻 Modo avanzado para power users — sin perder simplicidad","🌳 Canvas visual tipo Figma/Miro en vez de lista"],
          en: ["🧠 Understand a complete flow at a glance — like a real flowchart","🪜 Scalable and connectable flows — eliminate silos","💻 Advanced mode for power users — without losing simplicity","🌳 Visual canvas like Figma/Miro instead of a list"],
        },
      },
      /* ── WIREFRAMES ── */
      {
        phase: "wireframes",
        icon: "✏️", title: { es:"De sketch a wireframe", en:"From sketch to wireframe" },
        content: { es:"Empecé con sketches a mano y evolucioné a wireframes de alta fidelidad. Transformé la lista en un canvas con nodos arrastrables:", en:"Started with hand sketches, evolved to high-fidelity wireframes. Transformed the list into a canvas with draggable nodes:" },
        bullets: {
          es: ["📐 Canvas visual con nodos arrastrables — como Figma o Miro","🔀 Condiciones con ramas A, B, C y 'De lo contrario'","📝 Tipos de nodo: Mensajes, Obtención de datos, Metadatos, Derivación","📋 Panel lateral para agregar instrucciones arrastrándolas al canvas"],
          en: ["📐 Visual canvas with draggable nodes — like Figma or Miro","🔀 Conditions with branches A, B, C and 'Otherwise'","📝 Node types: Messages, Data gathering, Metadata, Derivation","📋 Side panel to add instructions by dragging to canvas"],
        },
      },
      {
        phase: "wireframes",
        icon: "🔀", title: { es:"Diseño de nodos", en:"Node design" },
        content: { es:"El diseño de cada tipo de nodo fue crítico. Las condiciones eran el elemento más complejo — necesitaban mostrar branching visual claro:", en:"Each node type's design was critical. Conditions were the most complex element — they needed to show clear visual branching:" },
        bullets: {
          es: ["🟦 Nodos de mensaje — contenido directo al cliente","🔀 Nodos de condición — ramas visuales con etiquetas A, B, C","📥 Nodos de obtención de datos — recopilación de info del cliente","🏁 Nodos terminales — Derivación a agente, Cierre, Ignorar"],
          en: ["🟦 Message nodes — direct content to client","🔀 Condition nodes — visual branches with labels A, B, C","📥 Data gathering nodes — collecting client info","🏁 Terminal nodes — Route to agent, Close, Ignore"],
        },
      },
      /* ── PROTOTYPE ── */
      {
        phase: "prototype",
        icon: "💻", title: { es:"El prototipo", en:"The prototype" },
        content: { es:"El prototipo implementó la visión completa del flow builder como un editor visual de nodos:", en:"The prototype implemented the full vision of the flow builder as a visual node editor:" },
        bullets: {
          es: ["📋 Vista de lista de flujos con disparadores y estados on/off","🌳 Editor visual con nodos conectados por líneas","📝 Panel de instrucciones: Mensaje, Obtención de datos, Condición, Consulta HTTP","🏁 Instrucciones terminales: Derivación, Cierre, Ignorar","✏️ Edición inline al clickear nodos"],
          en: ["📋 Flow list view with triggers and on/off states","🌳 Visual editor with line-connected nodes","📝 Instruction panel: Message, Data gathering, Condition, HTTP Query","🏁 Terminal instructions: Derivation, Close, Ignore","✏️ Inline editing on node click"],
        },
      },
      {
        phase: "prototype",
        icon: "📦", title: { es:"Handoff a desarrollo", en:"Dev handoff" },
        content: { es:"Documenté cada tipo de instrucción con specs exactos. El handoff incluía todos los estados posibles de cada nodo y sus interacciones:", en:"I documented every instruction type with exact specs. The handoff included all possible states of each node and their interactions:" },
        bullets: {
          es: ["📘 Documentación completa de todos los tipos de instrucciones","🔗 Specs de conexión entre nodos — reglas de qué puede conectar con qué","🎨 Estados visuales: default, hover, selected, error, disabled","📐 Figma detallado con medidas exactas"],
          en: ["📘 Complete documentation of all instruction types","🔗 Node connection specs — rules for what can connect to what","🎨 Visual states: default, hover, selected, error, disabled","📐 Detailed Figma with exact measurements"],
        },
      },
      {
        phase: "prototype",
        icon: "🖥️", title: { es:"Prototipo interactivo", en:"Interactive prototype" },
        content: { es:"Explora el prototipo del Flow Builder en Figma. Navega por las pantallas para ver la experiencia del canvas visual en detalle:", en:"Explore the Flow Builder prototype in Figma. Navigate through the screens to see the visual canvas experience in detail:" },
        figmaEmbed: "https://www.figma.com/proto/uL9YK8WAAwGU739SFw6kRn/FLUJOS.-Visualizaci%C3%B3n-de-Flujos--LISTO---Copy-?page-id=2%3A25&node-id=7219-66754&node-type=frame&viewport=1881%2C952%2C0.21&t=JqzNd32DJwplF0pE-1&scaling=contain&content-scaling=fixed",
      },
      /* ── ITERATION ── */
      {
        phase: "iteration",
        icon: "🔧", title: { es:"Lo que ajustamos", en:"What we adjusted" },
        content: { es:"Tras las primeras pruebas con usuarios reales, identificamos problemas y los resolvimos:", en:"After initial testing with real users, we identified problems and resolved them:" },
        bullets: {
          es: ["📏 Headers ocupaban demasiado espacio vertical — se comprimieron","💾 Botón guardar poco visible — se hizo prominente con alerta al salir sin guardar","🧭 Se añadió breadcrumb de navegación para ubicarse","🚨 Alerta persistente de 'Recuerda guardar' para evitar pérdida de trabajo"],
          en: ["📏 Headers consumed too much vertical space — compressed","💾 Save button wasn't visible enough — made prominent with exit-without-saving alert","🧭 Navigation breadcrumb added for orientation","🚨 Persistent 'Remember to save' alert to prevent work loss"],
        },
      },
      /* ── RESULTS ── */
      {
        phase: "results",
        icon: "🏆", title: { es:"El impacto", en:"The impact" },
        content: { es:"El nuevo Flow Builder transformó completamente cómo se construyen bots en la plataforma:", en:"The new Flow Builder completely transformed how bots are built on the platform:" },
        bullets: {
          es: ["🗑️ La vista de lista se deprecó — adopción instantánea del canvas","🔗 Flujos conectables entre sí — menos trabajo para los usuarios","💻 Modo avanzado con edición de código — power users autónomos","👀 Flujos comprensibles de un vistazo con zoom y reorganización automática"],
          en: ["🗑️ List view deprecated — instant canvas adoption","🔗 Connectable flows — less work for users","💻 Advanced mode with code editing — autonomous power users","👀 Flows understandable at a glance with zoom and auto-reorganize"],
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
    role: "Product Designer → Product Owner",
    period: "2024",
    competency: { es: "Analytics · Data Viz · Iteración basada en feedback", en: "Analytics · Data Viz · Feedback-driven iteration" },
    slides: [
      /* ══════════════════════════════════════════
         1. RESUMEN Y CONTEXTO
         ══════════════════════════════════════════ */
      {
        phase: "context",
        icon: "📈", title: { es:"Resumen", en:"Overview" },
        content: { es:"Rediseñé la sección de Rendimiento de Equipo de una plataforma SaaS de atención al cliente. Los supervisores necesitaban entender la productividad de sus equipos — volumen de tickets, tiempos de resolución, nivel de servicio — pero la interfaz presentaba datos planos y gráficos de líneas confusos que no les permitían tomar decisiones rápidas.\n\nEl resultado fue un dashboard de analytics con gráficos de barras claros, dark mode, y documentación integrada que transformó datos crudos en información accionable para la gestión diaria del equipo.", en:"I redesigned the Team Performance section of a customer service SaaS platform. Supervisors needed to understand their team's productivity — ticket volume, resolution times, service level — but the interface showed flat data and confusing line charts that didn't support quick decision-making.\n\nThe result was an analytics dashboard with clear bar charts, dark mode, and integrated documentation that transformed raw data into actionable information for daily team management." },
        tags: ["Analytics","Data Viz","Redesign","Dark Mode","Documentation"],
      },
      {
        phase: "context",
        icon: "🔥", title: { es:"El Problema", en:"The Problem" },
        content: { es:"La sección de Historial era la herramienta principal para evaluar el rendimiento del equipo. Tenía tabs por dimensión (Tickets, Ejecutivos, Departamentos, Mensajes, Cuentas, Clientes) y mostraba KPIs como tickets creados, cerrados, ignorados, reabiertos y abordados. Pero la forma de presentar esta información tenía problemas fundamentales:", en:"The History section was the main tool for evaluating team performance. It had tabs by dimension (Tickets, Executives, Departments, Messages, Accounts, Clients) and showed KPIs like created, closed, ignored, reopened and attended tickets. But the way this information was presented had fundamental problems:" },
        bullets: {
          es: ["📊 Gráficos de líneas sobrecargados — múltiples series superpuestas que eran imposibles de comparar","🔢 Números planos sin contexto — KPIs como '1132 Creados' y '594 Ignorados' sin referencia de si eso era bueno o malo","📉 4 gráficos compitiendo por atención — distribución por estado, nivel de servicio, nivel de atención y evolución, todos iguales visualmente","🎨 Sin jerarquía visual — nada destacaba lo importante de lo secundario","[PENDIENTE: agregar más problemas específicos que descubriste]"],
          en: ["📊 Overloaded line charts — multiple overlapping series impossible to compare","🔢 Flat numbers without context — KPIs like '1132 Created' and '594 Ignored' with no reference of whether that was good or bad","📉 4 charts competing for attention — distribution by state, service level, attention level and evolution, all visually identical","🎨 No visual hierarchy — nothing distinguished what was important from what was secondary","[PENDING: add more specific problems you discovered]"],
        },
      },
      {
        phase: "context",
        icon: "🖥️", title: { es:"Estado previo", en:"Previous state" },
        content: { es:"La versión existente usaba gráficos de líneas para todo tipo de dato, incluso cuando las barras habrían sido más apropiadas para comparar volúmenes. Los filtros de periodo y KPI estaban en una barra superior densa, y los datos tabulares se presentaban sin formato claro:", en:"The existing version used line charts for all data types, even when bars would have been more appropriate for comparing volumes. Period and KPI filters were in a dense top bar, and tabular data was presented without clear formatting:" },
        images: [
          { src: "/images/rend_old_graficos.png", caption: { es:"Dashboard anterior: gráficos de líneas confusos y KPIs planos", en:"Previous dashboard: confusing line charts and flat KPIs" } },
          { src: "/images/rend_old_datos_planos.gif", caption: { es:"Vista de datos planos sin jerarquía visual", en:"Flat data view without visual hierarchy" } },
        ],
      },

      /* ══════════════════════════════════════════
         2. PROCESO DE DISEÑO — Investigación
         ══════════════════════════════════════════ */
      {
        phase: "research",
        icon: "👂", title: { es:"Investigación: entendiendo el dolor", en:"Research: understanding the pain" },
        content: { es:"[PENDIENTE: ¿Cómo descubriste lo que los usuarios necesitaban? ¿Hiciste entrevistas, revisaste tickets de soporte, analizaste uso con analytics? ¿Qué insights clave encontraste?]", en:"[PENDING: How did you discover what users needed? Did you conduct interviews, review support tickets, analyze usage with analytics? What key insights did you find?]" },
        bullets: {
          es: ["[PENDIENTE: insight 1]","[PENDIENTE: insight 2]","[PENDIENTE: insight 3]"],
          en: ["[PENDING: insight 1]","[PENDING: insight 2]","[PENDING: insight 3]"],
        },
      },
      {
        phase: "research",
        icon: "🎯", title: { es:"Decisiones clave de diseño", en:"Key design decisions" },
        content: { es:"[PENDIENTE: ¿Por qué elegiste gráficos de barras sobre líneas? ¿Por qué dark mode? ¿Qué alternativas consideraste y descartaste? Cada decisión debe tener un 'porque...']", en:"[PENDING: Why did you choose bar charts over lines? Why dark mode? What alternatives did you consider and discard? Each decision should have a 'because...']" },
        bullets: {
          es: ["📊 Barras en vez de líneas — [PENDIENTE: porque...]","🌙 Dark mode — [PENDIENTE: porque...]","📖 Documentación integrada — [PENDIENTE: porque...]","[PENDIENTE: otras decisiones]"],
          en: ["📊 Bars instead of lines — [PENDING: because...]","🌙 Dark mode — [PENDING: because...]","📖 Integrated documentation — [PENDING: because...]","[PENDING: other decisions]"],
        },
      },

      /* ══════════════════════════════════════════
         2. PROCESO DE DISEÑO — Ideación
         ══════════════════════════════════════════ */
      {
        phase: "ideation",
        icon: "📝", title: { es:"La solución: analytics que se entienden", en:"The solution: analytics that make sense" },
        content: { es:"[PENDIENTE: Describe la estructura de la solución. ¿Cómo reorganizaste la información? ¿Qué wireframes o esquemas creaste? ¿Cuál fue la lógica detrás de la nueva estructura?]", en:"[PENDING: Describe the solution structure. How did you reorganize the information? What wireframes or sketches did you create? What was the logic behind the new structure?]" },
        image: "/images/rend_new_dashboard.gif",
      },

      /* ══════════════════════════════════════════
         2. PROCESO DE DISEÑO — Iteración
         ══════════════════════════════════════════ */
      {
        phase: "iteration",
        icon: "🔧", title: { es:"Iteración: documentación y guías", en:"Iteration: documentation and guides" },
        content: { es:"[PENDIENTE: ¿Qué cambió tras el primer lanzamiento? ¿Qué feedback recibiste? ¿Por qué agregaste la guía y la documentación integrada? ¿Qué problema resolvió?]", en:"[PENDING: What changed after the first launch? What feedback did you receive? Why did you add the guide and integrated documentation? What problem did it solve?]" },
        images: [
          { src: "/images/rend_new_con_guia.gif", caption: { es:"Dashboard con guía integrada para nuevos usuarios", en:"Dashboard with integrated guide for new users" } },
          { src: "/images/rend_new_con_docs.gif", caption: { es:"Documentación accesible desde la misma sección", en:"Documentation accessible from the same section" } },
        ],
      },

      /* ══════════════════════════════════════════
         3. LA SOLUCIÓN Y RESULTADOS
         ══════════════════════════════════════════ */
      {
        phase: "results",
        icon: "🎬", title: { es:"La Solución Final", en:"The Final Solution" },
        content: { es:"Un dashboard de rendimiento de equipo con gráficos de barras claros, dark mode, documentación integrada y guías contextuales. Diseñado para que los supervisores puedan evaluar la productividad de su equipo de un vistazo y tomar decisiones informadas sin salir de la plataforma.", en:"A team performance dashboard with clear bar charts, dark mode, integrated documentation and contextual guides. Designed so supervisors can evaluate their team's productivity at a glance and make informed decisions without leaving the platform." },
        image: "/images/rend_new_dashboard.gif",
        highlight: true,
      },
      {
        phase: "results",
        icon: "🏆", title: { es:"Resultados", en:"Results" },
        content: { es:"[PENDIENTE: ¿Qué impacto tuvo el rediseño? Métricas, feedback cualitativo, adopción, testimonios. ¿Los usuarios dejaron de hacer algo que hacían antes? ¿Pidieron expandir el patrón a otras secciones?]", en:"[PENDING: What impact did the redesign have? Metrics, qualitative feedback, adoption, testimonials. Did users stop doing something they used to? Did they ask to expand the pattern to other sections?]" },
        bullets: {
          es: ["[PENDIENTE: resultado 1]","[PENDIENTE: resultado 2]","[PENDIENTE: resultado 3]"],
          en: ["[PENDING: result 1]","[PENDING: result 2]","[PENDING: result 3]"],
        },
        highlight: true,
      },
    ],
  },
};
