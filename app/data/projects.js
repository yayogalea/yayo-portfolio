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
      /* ── CONTEXT ── */
      {
        phase: "context",
        icon: "💎", title: { es:"El Desafío", en:"The Challenge" },
        content: { es:"Una plataforma de Customer Experience con múltiples productos que se sentían como apps distintas. Cada sección tenía su propio estilo visual, sus propios componentes, y cada desarrollador abordaba el frontend a su manera. El usuario no podía confiar en que un botón se comportara igual en todas partes.", en:"A Customer Experience platform with multiple products that felt like different apps. Each section had its own visual style, its own components, and each developer approached the frontend their own way. Users couldn't trust that a button would behave the same everywhere." },
        tags: ["Design System","Atomic Design","Systems Thinking","Figma","Dev Handoff"],
      },
      {
        phase: "context",
        icon: "📍", title: { es:"El diagnóstico", en:"The diagnosis" },
        content: { es:"Al unirme al equipo, lo primero que hice fue investigar el estado actual del UI. Lo que encontré era un problema sistémico:", en:"When joining the team, the first thing I did was research the current UI state. What I found was a systemic problem:" },
        bullets: {
          es: ["🪹 Base muy pequeña — pocos componentes reutilizables, cada dev construía desde cero","🌈 Frameworks variados — distintas secciones usaban distintos frameworks, imposible compartir","🤯 UI incoherente — los mismos componentes se veían y comportaban distinto, confundiendo usuarios"],
          en: ["🪹 Tiny foundation — few reusable components, each dev built from scratch","🌈 Mixed frameworks — different sections used different frameworks, impossible to share","🤯 Incoherent UI — same components looked and behaved differently, confusing users"],
        },
      },
      /* ── GOALS ── */
      {
        phase: "goals",
        icon: "⛳", title: { es:"La visión", en:"The vision" },
        content: { es:"Un Design System no es una librería de componentes — es un contrato entre diseño y desarrollo:", en:"A Design System isn't a component library — it's a contract between design and development:" },
        bullets: {
          es: ["⏱️ Optimizar tiempo — no recrear un botón cada vez, usar uno probado","🫂 Experiencia cohesiva — que la plataforma hable un solo idioma visual","📈 Escalabilidad — cambiar un componente y que se actualice en todas partes"],
          en: ["⏱️ Optimize time — don't recreate a button each time, use one that's tested","🫂 Cohesive experience — platform speaks one visual language","📈 Scalability — change a component and have it update everywhere"],
        },
      },
      /* ── WIREFRAMES ── */
      {
        phase: "wireframes",
        icon: "🧬", title: { es:"Atomic Design como estructura", en:"Atomic Design as structure" },
        content: { es:"Organicé todo bajo Atomic Design con retícula de 8pts y tipografía Montserrat. Cada nivel construye sobre el anterior:", en:"I organized everything under Atomic Design with 8pt grid and Montserrat typography. Each level builds on the previous:" },
        atoms: {
          es: ["⚛️ Átomos — Colores, tipografías, iconos por categoría, logos, espaciados","🧬 Moléculas — Botones (Default/Hover/Disabled), Inputs, Dropdowns, Tablas, Alertas, Tooltips","🦠 Organismos — Módulo de Creación, Toolbar, Tarjetas de Resumen, Modales, Formularios"],
          en: ["⚛️ Atoms — Colors, typography, icons by category, logos, spacing","🧬 Molecules — Buttons (Default/Hover/Disabled), Inputs, Dropdowns, Tables, Alerts, Tooltips","🦠 Organisms — Creation Module, Toolbar, Summary Cards, Modals, Forms"],
        },
      },
      /* ── PROTOTYPE ── */
      {
        phase: "prototype",
        icon: "🎨", title: { es:"Sistema de color y tipografía", en:"Color and typography system" },
        content: { es:"Definí una paleta completa y un sistema tipográfico consistente como base de todo:", en:"I defined a complete palette and consistent typographic system as the foundation:" },
        bullets: {
          es: ["🎨 Paleta: Primarios (azul corporativo), Secundarios, Estados (éxito, error, warning, info), Neutros","📝 Tipografía: Montserrat en todas sus variaciones de peso","📐 Retícula de 8pts para todos los espaciados y dimensiones","📏 Escala tipográfica definida: desde H1-H6 hasta body y captions"],
          en: ["🎨 Palette: Primary (corporate blue), Secondary, States (success, error, warning, info), Neutrals","📝 Typography: Montserrat in all weight variations","📐 8pt grid for all spacing and dimensions","📏 Defined typographic scale: from H1-H6 to body and captions"],
        },
      },
      {
        phase: "prototype",
        icon: "🧩", title: { es:"Componentes", en:"Components" },
        content: { es:"Cada componente fue diseñado con todas sus variaciones, documentado y conectado:", en:"Each component was designed with all its variations, documented and connected:" },
        bullets: {
          es: ["🔘 Botones — Default, Hover, Active, Disabled, variaciones por icono y tamaño S/M/L","📝 Inputs — Default, Focus, Filled, Error, Disabled, con label y helper text","📋 Dropdowns — Con búsqueda, multi-select, grupos","📊 Tablas — Con ordenamiento, paginación, selección","💬 Alertas y Tooltips — Informativos, warning, error, success"],
          en: ["🔘 Buttons — Default, Hover, Active, Disabled, icon and size S/M/L variations","📝 Inputs — Default, Focus, Filled, Error, Disabled, with label and helper text","📋 Dropdowns — With search, multi-select, groups","📊 Tables — With sorting, pagination, selection","💬 Alerts and Tooltips — Informational, warning, error, success"],
        },
      },
      {
        phase: "prototype",
        icon: "📘", title: { es:"El handoff como filosofía", en:"Handoff as philosophy" },
        content: { es:"Un diseño increíble que el dev no puede traducir a código no sirve de nada. Mi enfoque: documentar y explicar. El desarrollador debe ser un traductor, no un intérprete.", en:"An incredible design the dev can't translate to code is worthless. My approach: document and explain. The developer should be a translator, not an interpreter." },
        bullets: {
          es: ["📄 Cada componente con todas sus variaciones documentadas","🔗 Ejemplo: AButton — documentado en términos de código, no solo de diseño","📐 Figma con specs exactas — el dev es traductor, no intérprete","💬 Sesiones de explicación — documentar no reemplaza la conversación"],
          en: ["📄 Every component with all variations documented","🔗 Example: AButton — documented in code terms, not just design","📐 Figma with exact specs — dev is translator, not interpreter","💬 Explanation sessions — documentation doesn't replace conversation"],
        },
      },
      /* ── RESULTS ── */
      {
        phase: "results",
        icon: "🔄", title: { es:"Un sistema vivo", en:"A living system" },
        content: { es:"El Diamond Design System no tiene 'fin'. Surgen nuevas problemáticas, el producto evoluciona, componentes necesitan ajustes. Eso es signo de buena salud. No es el fin, es solo el comienzo.", en:"The Diamond Design System has no 'end'. New challenges arise, the product evolves, components need adjustments. That's a sign of good health. It's not the end, it's just the beginning." },
        bullets: {
          es: ["🔄 Sistema vivo — se actualiza con cada nueva feature","📐 Los developers tienen una fuente de verdad única para UI","⏱️ Tiempo de desarrollo de nuevas features reducido significativamente","🎨 UI consistente a lo largo de toda la plataforma por primera vez"],
          en: ["🔄 Living system — updates with every new platform feature","📐 Developers now have a single source of truth for UI","⏱️ New feature development time significantly reduced","🎨 Consistent UI across the entire platform for the first time"],
        },
        highlight: true,
      },
    ],
  },
};
