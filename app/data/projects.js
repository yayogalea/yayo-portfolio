/* ═══════════════════════════════════════════════════════════════
   PROJECTS — Rich slide-based case studies (all content inline)
   Each slide has a `phase` field for the progress bar.
   Layouts: default, stat (stat-highlight), beforeAfter, images (multi-image), annotated
   ═══════════════════════════════════════════════════════════════ */
export const PROJECTS = {
  monitoreo: {
    title: { es: "De datos ignorados a decisiones en tiempo real", en: "From ignored data to real-time decisions" },
    company: "Helpdesk SaaS",
    role: "Product Designer → Product Owner",
    period: "2024",
    competency: { es: "User Research · Iteración basada en data", en: "User Research · Data-driven iteration" },
    slides: [
      /* ── CONTEXT ── */
      {
        phase: "context",
        icon: "📊", title: { es:"El Desafío", en:"The Challenge" },
        content: { es:"Una plataforma de customer service tenía toda la data de productividad de los equipos de atención, pero nadie la usaba. Los supervisores preferían extraer los datos por API y visualizarlos en herramientas externas. El producto tenía los datos correctos — el problema era cómo los presentaba.", en:"A customer service platform had all the productivity data for support teams, but nobody used it. Supervisors preferred extracting data via API and visualizing it in external tools. The product had the right data — the problem was how it presented them." },
        tags: ["Analytics","Real-time","User Research","Data Viz","Redesign"],
      },
      {
        phase: "context",
        icon: "🔄", title: { es:"Lo que estaba en juego", en:"What was at stake" },
        content: { es:"La sección de Monitoreo era una de las más usadas por supervisores de atención al cliente — o debería serlo. El ciclo de un ticket pasa por múltiples etapas, y el Monitoreo debe mostrar cuántos hay en cada una:", en:"The Monitoring section was one of the most used by customer service supervisors — or should have been. A ticket's lifecycle passes through multiple stages, and Monitoring must show how many are in each:" },
        flow: { es:["Esperando Asignación","Ticket Asignado","Esperando Respuesta","Ticket Cerrado"], en:["Waiting Assignment","Ticket Assigned","Waiting Response","Ticket Closed"] },
        bullets: {
          es: ["💬 Cada mensaje de cliente genera un ticket que necesita seguimiento","⏳ Los supervisores necesitan ver en tiempo real dónde se acumulan los cuellos de botella","📊 Sin esta visibilidad, los problemas se descubren demasiado tarde"],
          en: ["💬 Every customer message creates a ticket that needs tracking","⏳ Supervisors need to see in real time where bottlenecks pile up","📊 Without this visibility, problems are discovered too late"],
        },
      },
      {
        phase: "context",
        icon: "😤", title: { es:"Por qué nadie lo usaba", en:"Why nobody used it" },
        content: { es:"La versión existente tenía problemas de UX tan serios que los supervisores la evitaban activamente:", en:"The existing version had UX problems so serious that supervisors actively avoided it:" },
        image: "/images/mon_problems_12.png",
        bullets: {
          es: ["1️⃣ No se podían ver todos los estados de tickets de un vistazo — había que navegar entre vistas","2️⃣ Los canales (WhatsApp, Facebook, Email) eran difíciles de diferenciar visualmente","3️⃣ Cada sección tenía filtros distintos — inconsistencia total que generaba confusión","4️⃣ Patrones de diseño mal aplicados hacían la información difícil de consumir"],
          en: ["1️⃣ Couldn't see all ticket states at a glance — had to navigate between views","2️⃣ Channels (WhatsApp, Facebook, Email) were hard to differentiate visually","3️⃣ Each section had different filters — total inconsistency that created confusion","4️⃣ Poorly applied design patterns made information hard to consume"],
        },
      },
      /* ── RESEARCH ── */
      {
        phase: "research",
        icon: "👂", title: { es:"Lo que descubrimos en campo", en:"What we discovered in the field" },
        content: { es:"Agendamos reuniones con supervisores y visitamos la oficina de un cliente. Lo que encontramos fue revelador — no es que no valoraran la data, sino que la consumían fuera de nuestra plataforma:", en:"We scheduled meetings with supervisors and visited a client's office. What we found was revealing — it wasn't that they didn't value the data, but they consumed it outside our platform:" },
        bullets: {
          es: ["✅ Valoraban la data — la usaban activamente para identificar problemas en tiempo real","🤝 Pero no dentro de nuestra plataforma — extraían todo por API a una herramienta externa","🖥️ Proyectaban la info en una pantalla gigante para que todos los supervisores la vieran","🚨 La herramienta externa tenía alarmas visuales que nuestro producto no ofrecía","💡 Esto confirmó que la información era valiosa — la forma de presentarla era el problema"],
          en: ["✅ They valued the data — actively using it to identify real-time problems","🤝 But not inside our platform — they extracted everything via API to an external tool","🖥️ They projected the info on a big screen for all supervisors to see","🚨 The external tool had visual alarms our product didn't offer","💡 This confirmed the information was valuable — the presentation was the problem"],
        },
      },
      /* ── GOALS ── */
      {
        phase: "goals",
        icon: "🎯", title: { es:"La apuesta", en:"The bet" },
        content: { es:"Si mejoramos la experiencia lo suficiente, los usuarios no necesitarán herramientas externas. Definimos 4 objetivos:", en:"If we improve the experience enough, users won't need external tools. We defined 4 goals:" },
        bullets: {
          es: ["🏠 Traer a los usuarios de vuelta a la plataforma — eliminar la dependencia de herramientas externas","🤝 Hacer la información clara y rápida de consumir — que un vistazo sea suficiente","🚨 Implementar el sistema de alarmas que ya usaban afuera — alertas visuales configurables","🔗 Unificar filtros en toda la sección — consistencia total"],
          en: ["🏠 Bring users back to the platform — eliminate external tool dependency","🤝 Make information clear and quick to consume — one glance should be enough","🚨 Implement the alarm system they already used externally — configurable visual alerts","🔗 Unify filters across the entire section — total consistency"],
        },
      },
      /* ── WIREFRAMES ── */
      {
        phase: "wireframes",
        icon: "📝", title: { es:"Diseño de la solución", en:"Designing the solution" },
        content: { es:"Reorganicé la información completamente. La nueva estructura priorizaba visibilidad inmediata y consistencia:", en:"I completely reorganized the information. The new structure prioritized immediate visibility and consistency:" },
        image: "/images/mon_wireframe_2.png",
        bullets: {
          es: ["🔝 Filtros unificados arriba — una sola experiencia de filtrado para toda la sección","📊 KPIs principales siempre visibles: ticket más antiguo, promedio antigüedad, SLA","📋 Cards por cada estado de ticket con desglose por canal","🚨 Sistema de alarmas integrado en cada card"],
          en: ["🔝 Unified filters at top — one filtering experience for the entire section","📊 Main KPIs always visible: oldest ticket, average age, SLA","📋 Cards per ticket state with channel breakdown","🚨 Alarm system integrated into each card"],
        },
      },
      /* ── PROTOTYPE ── */
      {
        phase: "prototype",
        icon: "💻", title: { es:"El prototipo", en:"The prototype" },
        content: { es:"El prototipo implementó la visión completa: cards por estado con código de colores y alarmas visuales, KPIs por ejecutivo, y la flexibilidad que los supervisores necesitaban.", en:"The prototype implemented the full vision: state cards with color coding and visual alarms, KPIs per executive, and the flexibility supervisors needed." },
        image: "/images/mon_prototype_columns.png",
        bullets: {
          es: ["🎨 Cards por estado: Abiertos, Esperando Asignación, Sin Abordar, Esperando Respuesta","📊 Cada card con desglose Agente/Bot y canales con iconos reconocibles","🚨 Alarmas visuales cuando los números superan umbrales configurables","🔀 Tabs para agrupar: Por Ejecutivo, Por Cuenta, Por Departamento"],
          en: ["🎨 State cards: Open, Waiting Assignment, Unattended, Waiting Response","📊 Each card with Agent/Bot breakdown and channels with recognizable icons","🚨 Visual alarms when numbers exceed configurable thresholds","🔀 Tabs to group: By Executive, By Account, By Department"],
        },
      },
      {
        phase: "prototype",
        icon: "🖥️", title: { es:"Prototipo interactivo", en:"Interactive prototype" },
        content: { es:"Explora el prototipo completo en Figma. Navega por las pantallas para ver la experiencia rediseñada en detalle:", en:"Explore the full prototype in Figma. Navigate through the screens to see the redesigned experience in detail:" },
        figmaEmbed: "https://www.figma.com/proto/wcEPfz9xRPJZaGWILTHoTT/METRI.-Monitoreo-3.0--En-Desarrollo---Copy-?node-id=6405-10462&node-type=frame&viewport=2408%2C445%2C0.31&t=8vqWBvjqgumEmjfK-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6405%3A10462&show-proto-sidebar=1",
      },
      /* ── ITERATION ── */
      {
        phase: "iteration",
        icon: "💭", title: { es:"Primera encuesta: feedback dividido", en:"First survey: divided feedback" },
        content: { es:"Lanzamos una encuesta in-app preguntando '¿Qué te pareció la actualización de esta sección?'. Los resultados nos obligaron a iterar:", en:"We launched an in-app survey asking 'What did you think of this section update?'. The results forced us to iterate:" },
        stat: "67%",
        statLabel: { es:"Respuestas positivas en primera encuesta", en:"Positive responses in first survey" },
        image: "/images/mon_survey_67.png",
        bullets: {
          es: ["😐 67% positivo, 33% negativo — opiniones divididas","🔍 No encontraban el botón para ver detalle de tickets","🏢 Pedían agrupar tickets por Departamento — necesitaban ver sus equipos"],
          en: ["😐 67% positive, 33% negative — divided opinions","🔍 Couldn't find the button to see ticket details","🏢 They wanted to group tickets by Department — needed to see their teams"],
        },
      },
      {
        phase: "iteration",
        icon: "🔧", title: { es:"Escuchar e iterar", en:"Listen and iterate" },
        content: { es:"Tomamos cada punto del feedback e implementamos cambios concretos. No asumimos — escuchamos:", en:"We took each feedback point and implemented concrete changes. We didn't assume — we listened:" },
        bullets: {
          es: ["👁️ Se hizo más prominente el botón de detalle — ahora visible sin scroll","🏢 Se añadió tab de agrupación por Departamento","📊 Se mejoró el preview de columna — más información sin hacer click","🎨 Se refinaron los colores y estados de las alarmas visuales"],
          en: ["👁️ Made ticket detail button more prominent — now visible without scrolling","🏢 Added Department grouping tab","📊 Improved column preview — more information without clicking","🎨 Refined colors and visual alarm states"],
        },
      },
      {
        phase: "iteration",
        icon: "📈", title: { es:"Segunda encuesta: el salto", en:"Second survey: the leap" },
        content: { es:"Implementamos los cambios y volvimos a medir. La diferencia fue contundente:", en:"We implemented the changes and measured again. The difference was decisive:" },
        stat: "93%",
        statLabel: { es:"Respuestas positivas en segunda encuesta", en:"Positive responses in second survey" },
        statDelta: { es:"↑ 26 puntos vs primera encuesta", en:"↑ 26 points vs first survey" },
        image: "/images/mon_survey_93.png",
        bullets: {
          es: ["🎉 93% positivo — de 14 respuestas","✅ Solo 1 negativa y no estaba relacionada","📊 Más participación que en la primera ronda"],
          en: ["🎉 93% positive — from 14 responses","✅ Only 1 negative and it wasn't related","📊 More participation than the first round"],
        },
        highlight: true,
      },
      /* ── RESULTS ── */
      {
        phase: "results",
        icon: "🏆", title: { es:"El impacto", en:"The impact" },
        content: { es:"El rediseño transformó la relación de los supervisores con la plataforma:", en:"The redesign transformed the relationship supervisors had with the platform:" },
        stat: { es:"67% → 93%", en:"67% → 93%" },
        statLabel: { es:"Evolución de satisfacción entre iteraciones", en:"Satisfaction evolution between iterations" },
        bullets: {
          es: ["🏠 Los usuarios dejaron de usar la plataforma externa — la info ahora vivía donde debía","🧠 Pidieron incluir MÁS datos porque ahora sí los entendían","🚨 El sistema de alarmas se expandió a otras secciones del producto","📈 De 67% a 93% de satisfacción — evidencia de que escuchar funciona"],
          en: ["🏠 Users stopped using the external platform — data now lived where it should","🧠 They asked for MORE data because they could finally understand it","🚨 The alarm system expanded to other product sections","📈 From 67% to 93% satisfaction — proof that listening works"],
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
