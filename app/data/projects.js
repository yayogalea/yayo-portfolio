/* ═══════════════════════════════════════════════════════════════
   PROJECTS — Rich slide-based case studies (all content inline)
   Each slide has a `phase` field for the progress bar.
   Layouts: default, stat (stat-highlight), beforeAfter, images (multi-image), annotated
   ═══════════════════════════════════════════════════════════════ */
export const PROJECTS = {
  monitoreo: {
    title: { es: "Monitoreo 2.0", en: "Monitoring 2.0" },
    company: "Adereso",
    role: "Product Designer → Product Owner",
    period: "2024",
    slides: [
      /* ── CONTEXT ── */
      {
        phase: "context",
        icon: "📊", title: { es:"Vista General", en:"Project Overview" },
        content: { es:"Rediseño completo de la sección de Monitoreo (Productivity Analytics) de Adereso, un helpdesk software para messaging y social customer service. La sección permite a los Supervisores tener una visión amplia del rendimiento de los Agentes en tiempo real. El Monitoreo es una de las secciones más utilizadas por supervisores de atención al cliente.", en:"Complete redesign of Adereso's Monitoring section (Productivity Analytics), a helpdesk software for messaging and social customer service. The section allows Supervisors to have a broad view of Agent performance in real time. Monitoring is one of the most used sections by customer service supervisors." },
        tags: ["Analytics","Real-time","Helpdesk","CX","Redesign"],
        bullets: {
          es: ["🏢 Adereso es un helpdesk para messaging y social customer service","👤 3 roles principales: Admin, Supervisor y Agente","📊 Monitoreo = la vista del Supervisor para rastrear rendimiento en tiempo real"],
          en: ["🏢 Adereso is a helpdesk for messaging and social customer service","👤 3 main roles: Admin, Supervisor and Agent","📊 Monitoring = the Supervisor's view to track performance in real time"],
        },
      },
      {
        phase: "context",
        icon: "🔄", title: { es:"Ciclo de Vida del Ticket", en:"Ticket Lifecycle" },
        content: { es:"El ciclo de vida de un ticket en Adereso sigue este flujo. Entender este flujo es clave porque el Monitoreo debe mostrar cuántos tickets hay en cada etapa:", en:"A ticket's lifecycle in Adereso follows this flow. Understanding this flow is key because Monitoring must show how many tickets are in each stage:" },
        flow: { es:["Esperando Asignación","Ticket Asignado","Esperando Respuesta","Ticket Cerrado"], en:["Waiting Assignment","Ticket Assigned","Waiting Response","Ticket Closed"] },
        bullets: {
          es: ["💬 Cliente escribe a cualquier cuenta → se crea ticket","⏳ Ticket espera ser asignado a un agente","🧑‍💼 Agente responde → cliente espera respuesta","✅ Cliente recibe atención → ticket se cierra"],
          en: ["💬 Client writes to any account → ticket created","⏳ Ticket waits to be assigned to an agent","🧑‍💼 Agent responds → client waits for response","✅ Client receives attention → ticket is closed"],
        },
      },
      {
        phase: "context",
        icon: "😤", title: { es:"El Dashboard Anterior", en:"The Previous Dashboard" },
        content: { es:"La versión existente del Monitoreo tenía serios problemas de UX que hacían que los supervisores evitaran usarlo:", en:"The existing Monitoring version had serious UX issues that made supervisors avoid using it:" },
        image: "/images/mon_problems_12.png",
        bullets: {
          es: ["1️⃣ No se podían ver todos los estados de tickets de un vistazo","2️⃣ Los canales (WhatsApp, Facebook, Email, etc.) eran difíciles de identificar visualmente","3️⃣ Filtros inconsistentes entre secciones — cada parte tenía filtros diferentes","4️⃣ La información no era fácil de consumir — patrones de diseño mal aplicados"],
          en: ["1️⃣ Couldn't see all ticket states at a glance","2️⃣ Channels (WhatsApp, Facebook, Email, etc.) were hard to identify visually","3️⃣ Inconsistent filters across sections — each part had different filters","4️⃣ Information wasn't easy to consume — poorly applied design patterns"],
        },
      },
      /* ── RESEARCH ── */
      {
        phase: "research",
        icon: "👂", title: { es:"Escuchando a los Usuarios", en:"Listening to Users" },
        content: { es:"Agendamos reuniones con Supervisores actuales para entender su uso (o falta de uso) de la sección. Visitamos la oficina de un cliente y lo que descubrimos fue revelador — estaban usando una plataforma completamente distinta para ver sus propios datos:", en:"We scheduled meetings with current Supervisors to understand their use (or lack of use) of the section. We visited a client's office and what we discovered was revealing — they were using a completely different platform to view their own data:" },
        bullets: {
          es: ["✅ Usaban la info del Monitoreo para identificar problemas en tiempo real","😤 Pero extraían la data por API y la usaban en OTRA plataforma","🖥️ Proyectaban la info de la plataforma externa en una pantalla grande donde todos los supervisores la veían","🚨 La plataforma externa tenía un sistema de alarmas visuales que Adereso no ofrecía","💡 Esto confirmó que la información era valiosa, pero la forma de presentarla era el problema"],
          en: ["✅ They used Monitoring info to identify real-time problems","😤 But they extracted data via API and used it in ANOTHER platform","🖥️ They projected the external platform's info on a big screen for all supervisors to see","🚨 The external platform had a visual alarm system that Adereso didn't offer","💡 This confirmed the information was valuable, but the way it was presented was the problem"],
        },
      },
      /* ── GOALS ── */
      {
        phase: "goals",
        icon: "🏁", title: { es:"Objetivos", en:"Goals" },
        content: { es:"Con base en el research, definimos 4 objetivos claros para el rediseño:", en:"Based on the research, we defined 4 clear goals for the redesign:" },
        bullets: {
          es: ["🏠 Aumentar el uso de la información DENTRO de la plataforma — eliminar la dependencia de herramientas externas","🤝 Facilitar el acceso a la información — que sea clara y rápida de consumir","🚨 Implementar el sistema de alarmas que los usuarios necesitaban — alertas visuales cuando los números superen umbrales","🔗 Unificar los filtros en toda la sección — consistencia total entre todas las vistas"],
          en: ["🏠 Increase information usage INSIDE the platform — eliminate external tool dependency","🤝 Facilitate information access — clear and quick to consume","🚨 Implement the alarm system users needed — visual alerts when numbers exceed thresholds","🔗 Unify filters across the entire section — total consistency between all views"],
        },
      },
      /* ── WIREFRAMES ── */
      {
        phase: "wireframes",
        icon: "📝", title: { es:"Wireframes", en:"Wireframes" },
        content: { es:"Diseñé wireframes reorganizando completamente la información. La nueva estructura priorizaba la visibilidad inmediata de los estados de tickets y la consistencia de filtros:", en:"I designed wireframes completely reorganizing the information. The new structure prioritized immediate visibility of ticket states and filter consistency:" },
        image: "/images/mon_wireframe_2.png",
        bullets: {
          es: ["🔝 Filtros unificados arriba: Fecha, Departamento, Cuenta","📊 KPIs principales siempre visibles: Ticket más antiguo, Promedio Antigüedad, SLA","📋 Cards por cada estado de ticket con desglose por canal","🚨 Espacio para el sistema de alarmas en cada card"],
          en: ["🔝 Unified filters at top: Date, Department, Account","📊 Main KPIs always visible: Oldest ticket, Average Age, SLA","📋 Cards per ticket state with channel breakdown","🚨 Space for the alarm system in each card"],
        },
      },
      /* ── PROTOTYPE ── */
      {
        phase: "prototype",
        icon: "💻", title: { es:"Prototipo", en:"Prototype" },
        content: { es:"El prototipo implementó la visión completa: cards por estado con código de colores, alarmas visuales, y la sección de KPIs por ejecutivo.", en:"The prototype implemented the full vision: state cards with color coding, visual alarms, and the KPI per executive section." },
        image: "/images/mon_prototype_columns.png",
        bullets: {
          es: ["🎨 Cards por estado: Abiertos, Esperando Asignación, Sin Abordar, Esperando Respuesta","📊 Cada card muestra: total tickets, desglose Agente/Bot, canales con iconos reconocibles","🚨 Alarmas visuales cuando los números superan umbrales configurables","📋 Sección KPI por Ejecutivo con tabla detallada","🔀 Tabs para agrupar: Por Ejecutivo, Por Cuenta, Por Departamento"],
          en: ["🎨 State cards: Open, Waiting Assignment, Unattended, Waiting Response","📊 Each card shows: total tickets, Agent/Bot breakdown, channels with recognizable icons","🚨 Visual alarms when numbers exceed configurable thresholds","📋 KPI per Executive section with detailed table","🔀 Tabs to group: By Executive, By Account, By Department"],
        },
      },
      /* ── ITERATION ── */
      {
        phase: "iteration",
        icon: "💭", title: { es:"Primera Encuesta: 67%", en:"First Survey: 67%" },
        content: { es:"Lanzamos una encuesta in-app preguntando '¿Qué te pareció la actualización de esta sección?'. Los resultados revelaron una oportunidad de mejora:", en:"We launched an in-app survey asking 'What did you think of this section update?'. Results revealed an improvement opportunity:" },
        stat: "67%",
        statLabel: { es:"Respuestas positivas en primera encuesta", en:"Positive responses in first survey" },
        image: "/images/mon_survey_67.png",
        bullets: {
          es: ["😐 Feedback dividido: 67% positivo, 33% negativo","🔍 Los usuarios dejaron comentarios directos sobre qué faltaba","📋 Hallazgo clave: querían ver el detalle de cada ticket — el botón no era visible","🏢 Pedían ver tickets agrupados por Departamento — se necesitaba una tab nueva"],
          en: ["😐 Divided feedback: 67% positive, 33% negative","🔍 Users left direct comments about what was missing","📋 Key finding: they wanted to see each ticket's detail — button wasn't visible enough","🏢 They wanted tickets grouped by Department — a new tab was needed"],
        },
      },
      {
        phase: "iteration",
        icon: "🔧", title: { es:"Iterando con Feedback", en:"Iterating with Feedback" },
        content: { es:"Tomamos cada punto del feedback e implementamos cambios concretos:", en:"We took each feedback point and implemented concrete changes:" },
        bullets: {
          es: ["👁️ Se hizo más prominente el botón de detalle de cada ticket — ahora visible sin scroll","🏢 Se añadió tab de agrupación por Departamento — los supervisores querían ver sus equipos","📊 Se mejoró el preview de columna — más información sin hacer click","🎨 Se refinaron los colores y estados de las alarmas visuales"],
          en: ["👁️ Made ticket detail button more prominent — now visible without scrolling","🏢 Added Department grouping tab — supervisors wanted to see their teams","📊 Improved column preview — more information without clicking","🎨 Refined colors and visual alarm states"],
        },
      },
      {
        phase: "iteration",
        icon: "📈", title: { es:"Segunda Encuesta: 93%", en:"Second Survey: 93%" },
        content: { es:"Tras implementar los cambios basados en el feedback real de usuarios, lanzamos una segunda encuesta:", en:"After implementing changes based on real user feedback, we launched a second survey:" },
        stat: "93%",
        statLabel: { es:"Respuestas positivas en segunda encuesta", en:"Positive responses in second survey" },
        statDelta: { es:"↑ 26 puntos vs primera encuesta", en:"↑ 26 points vs first survey" },
        image: "/images/mon_survey_93.png",
        bullets: {
          es: ["😁 Más respuestas: 14 participantes vs menos en la primera","💖 93% de respuestas positivas","❓ Solo 1 respuesta negativa — y no estaba relacionada con el Monitoreo"],
          en: ["😁 More responses: 14 participants vs fewer in the first","💖 93% positive responses","❓ Only 1 negative response — and it wasn't related to Monitoring"],
        },
        highlight: true,
      },
      /* ── RESULTS ── */
      {
        phase: "results",
        icon: "🏆", title: { es:"Resultados", en:"Results" },
        content: { es:"El rediseño del Monitoreo transformó cómo los supervisores interactúan con la plataforma:", en:"The Monitoring redesign transformed how supervisors interact with the platform:" },
        stat: { es:"67% → 93%", en:"67% → 93%" },
        statLabel: { es:"Evolución de satisfacción entre iteraciones", en:"Satisfaction evolution between iterations" },
        bullets: {
          es: ["🏠 Los usuarios dejaron de usar la plataforma externa — toda la info ahora vivía en Adereso","🧠 La información era más fácil de entender, por lo que los usuarios pidieron incluir más datos","🚨 El sistema de alarmas vino para quedarse — se evaluó agregarlo a otras secciones","📈 De 67% a 93% de satisfacción en solo una iteración"],
          en: ["🏠 Users stopped using the external platform — all info now lived in Adereso","🧠 Information was easier to understand, so users asked to include more data","🚨 The alarm system came to stay — was evaluated for other sections","📈 From 67% to 93% satisfaction in just one iteration"],
        },
        highlight: true,
      },
    ],
  },
  flowbuilder: {
    title: { es: "AI Bot Flow Builder", en: "AI Bot Flow Builder" },
    company: "Adereso",
    role: "Product Designer",
    period: "2023 — 2024",
    slides: [
      /* ── CONTEXT ── */
      {
        phase: "context",
        icon: "🤖", title: { es:"Vista General", en:"Project Overview" },
        content: { es:"Rediseño del constructor de flujos de bots AI en Adereso. Los bots actúan como filtro inteligente antes de que los agentes humanos tomen el control. El proyecto buscaba transformar completamente cómo los equipos de Admin y Supervisor construyen y gestionan sus bots.", en:"Redesign of Adereso's AI bot flow builder. Bots act as an intelligent filter before human agents take over. The project aimed to completely transform how Admin and Supervisor teams build and manage their bots." },
        tags: ["AI","Chatbots","Flow Builder","Automation","UX"],
        bullets: {
          es: ["📱 Filtrar conversaciones de Spam antes de llegar al agente","✏️ Recopilar información esencial de los clientes automáticamente","🔍 Facilitar que los clientes encuentren información más rápido","⏱️ Mejorar el tiempo de atención reduciendo carga en agentes"],
          en: ["📱 Filter Spam conversations before reaching the agent","✏️ Automatically gather essential info from customers","🔍 Help customers find information faster","⏱️ Improve attention time by reducing agent workload"],
        },
      },
      {
        phase: "context",
        icon: "🔄", title: { es:"Cómo Funciona el Sistema", en:"How the System Works" },
        content: { es:"El sistema funciona en dos ámbitos: lo que pasa dentro del bot y lo que pasa fuera. Esta dualidad era clave para entender los flujos:", en:"The system works in two scopes: what happens inside the bot and what happens outside. This duality was key to understanding the flows:" },
        flow: { es:["Crear Bot AI","Conectar Cuenta","Crear Intenciones","Crear Flujos","Cliente Escribe","Bot Identifica","Dispara Flujo"], en:["Create AI Bot","Connect Account","Create Intentions","Create Flows","Client Writes","Bot Identifies","Triggers Flow"] },
        bullets: {
          es: ["🤖 DENTRO del Bot: Admin crea bot → conecta cuenta → define intenciones → crea flujos que se disparan con cada intención","👤 FUERA del Bot: Cliente escribe a la cuenta → se crea ticket → bot identifica intención → si hay match, dispara flujo; si no, ticket va al agente directamente"],
          en: ["🤖 INSIDE the Bot: Admin creates bot → connects account → defines intentions → creates flows triggered by each intention","👤 OUTSIDE the Bot: Client writes to account → ticket created → bot identifies intention → if match, triggers flow; if not, ticket goes to agent directly"],
        },
      },
      {
        phase: "context",
        icon: "😤", title: { es:"El Builder Anterior", en:"The Previous Builder" },
        content: { es:"El producto estaba en beta con pocos usuarios (mayoría internos). Al investigar encontramos problemas fundamentales de usabilidad:", en:"The product was in beta with few users (mostly internal). When investigating we found fundamental usability problems:" },
        bullets: {
          es: ["🤨 Los flujos se construían mediante una LISTA — imagina entender un árbol de decisiones leyendo una lista plana","💻 Había muchas más opciones en el modo backend que no estaban disponibles en la interfaz","😰 No se podía ir de un flujo a otro — cada flujo era un silo completamente aislado","😵 Entender los flujos completos era difícil y confuso, incluso para usuarios avanzados","🔍 Era muy difícil identificar un nodo o instrucción específica dentro de los flujos"],
          en: ["🤨 Flows were built through a LIST — imagine understanding a decision tree by reading a flat list","💻 Many more options were available in backend mode but not in the interface","😰 Couldn't go from one flow to another — each flow was a completely isolated silo","😵 Understanding complete flows was difficult and confusing, even for advanced users","🔍 Hard to identify an exact node or instruction inside flows"],
        },
      },
      /* ── RESEARCH ── */
      {
        phase: "research",
        icon: "👂", title: { es:"Escuchando a los Usuarios", en:"Listening to Users" },
        content: { es:"Trabajamos con usuarios beta internos que construían bots diariamente. Sus frustraciones nos guiaron:", en:"We worked with internal beta users who built bots daily. Their frustrations guided us:" },
        bullets: {
          es: ["📋 Los usuarios no podían visualizar la lógica completa de un bot sin navegar ida y vuelta entre vistas","🔄 Cambiar una condición requería múltiples pasos que podían romper el flujo","📱 Los usuarios más técnicos querían acceso a opciones que solo existían en consola","🧩 La desconexión entre flujos hacía imposible reutilizar lógica común"],
          en: ["📋 Users couldn't visualize a bot's complete logic without navigating back and forth between views","🔄 Changing a condition required multiple steps that could break the flow","📱 More technical users wanted access to options that only existed in console","🧩 The disconnection between flows made it impossible to reuse common logic"],
        },
      },
      /* ── GOALS ── */
      {
        phase: "goals",
        icon: "🏁", title: { es:"Objetivos", en:"Goals" },
        content: { es:"Definimos 4 objetivos que guiaron todo el proceso de diseño:", en:"We defined 4 goals that guided the entire design process:" },
        bullets: {
          es: ["🧠 Mejorar la comprensión de cada flujo — que se entienda de un vistazo, como un diagrama de flujo real","🪜 Hacer los flujos escalables, conectables y más fáciles de construir — eliminar silos","💻 Permitir modos avanzados para las opciones que solo existían en backend — sin perder simplicidad","🌳 Construir los flujos a través de workflows visuales y eliminar la construcción por lista"],
          en: ["🧠 Improve understanding of each flow — understandable at a glance, like a real flowchart","🪜 Make flows scalable, connectable, and easier to build — eliminate silos","💻 Allow advanced modes for backend-only options — without losing simplicity","🌳 Build flows through visual workflows and deprecate list building"],
        },
      },
      /* ── WIREFRAMES ── */
      {
        phase: "wireframes",
        icon: "✏️", title: { es:"De Sketches a Wireframes", en:"From Sketches to Wireframes" },
        content: { es:"Empecé con sketches a mano y luego pasé a wireframes de alta fidelidad. El diseño transformó la experiencia de lista a un canvas visual con nodos:", en:"Started with hand sketches then moved to high-fidelity wireframes. The design transformed the list experience into a visual canvas with nodes:" },
        bullets: {
          es: ["📐 Canvas visual con nodos arrastrables — como Figma o Miro","🔀 Condiciones con ramas A, B, C y 'De lo contrario'","📝 Tipos de nodo: Mensajes, Obtención de datos, Actualizar metadatos, Derivación","📋 Panel lateral para agregar instrucciones — cada nodo muestra preview de su contenido"],
          en: ["📐 Visual canvas with draggable nodes — like Figma or Miro","🔀 Conditions with branches A, B, C and 'Otherwise'","📝 Node types: Messages, Data gathering, Update metadata, Derivation","📋 Side panel to add instructions — each node shows content preview"],
        },
      },
      {
        phase: "wireframes",
        icon: "🔀", title: { es:"Diseño de Nodos y Condiciones", en:"Node and Condition Design" },
        content: { es:"El diseño de cada tipo de nodo fue crítico. Las condiciones eran el elemento más complejo porque necesitaban mostrar branching visual claro:", en:"The design of each node type was critical. Conditions were the most complex element because they needed to show clear visual branching:" },
        bullets: {
          es: ["🟦 Nodos de mensaje — contenido directo al cliente","🔀 Nodos de condición — ramas visuales con etiquetas A, B, C y 'De lo contrario'","📥 Nodos de obtención de datos — recopilación de info del cliente","📤 Nodos de metadatos — actualización de datos del ticket","🏁 Nodos terminales — Derivación a agente, Cierre, Ignorar"],
          en: ["🟦 Message nodes — direct content to client","🔀 Condition nodes — visual branches with labels A, B, C and 'Otherwise'","📥 Data gathering nodes — collecting client info","📤 Metadata nodes — updating ticket data","🏁 Terminal nodes — Derivation to agent, Close, Ignore"],
        },
      },
      /* ── PROTOTYPE ── */
      {
        phase: "prototype",
        icon: "💻", title: { es:"Prototipo Visual", en:"Visual Prototype" },
        content: { es:"El prototipo final implementó la visión completa del flow builder como un editor visual de nodos:", en:"The final prototype implemented the full vision of the flow builder as a visual node editor:" },
        bullets: {
          es: ["📋 Vista de lista de flujos con disparadores y estados on/off","🌳 Editor visual de flujos con nodos conectados por líneas","📝 Panel lateral de instrucciones: Mensaje, Obtención de datos, Actualizar metadatos, Condición, Consulta HTTP, etc.","🏁 Instrucciones terminales: Derivación, Cierre, Ignorar","✏️ Edición inline al hacer click en cada nodo"],
          en: ["📋 Flow list view with triggers and on/off states","🌳 Visual flow editor with nodes connected by lines","📝 Side instruction panel: Message, Data gathering, Update metadata, Condition, HTTP Query, etc.","🏁 Terminal instructions: Derivation, Close, Ignore","✏️ Inline editing on node click"],
        },
      },
      {
        phase: "prototype",
        icon: "📦", title: { es:"Handoff a Desarrollo", en:"Dev Handoff" },
        content: { es:"Documenté cada tipo de instrucción con specs exactos para el equipo de desarrollo. El handoff incluía todos los estados posibles de cada nodo y sus interacciones:", en:"I documented every instruction type with exact specs for the dev team. The handoff included all possible states of each node and their interactions:" },
        bullets: {
          es: ["📘 Documentación completa de todos los tipos de instrucciones","🔗 Specs de conexión entre nodos — reglas de qué puede conectar con qué","🎨 Estados visuales: default, hover, selected, error, disabled","📐 Figma detallado con medidas exactas, colores y tipografías"],
          en: ["📘 Complete documentation of all instruction types","🔗 Node connection specs — rules for what can connect to what","🎨 Visual states: default, hover, selected, error, disabled","📐 Detailed Figma with exact measurements, colors and typography"],
        },
      },
      /* ── ITERATION ── */
      {
        phase: "iteration",
        icon: "🔧", title: { es:"Iteraciones", en:"Iterations" },
        content: { es:"Tras las primeras pruebas con usuarios reales, identificamos problemas de usabilidad y los resolvimos:", en:"After initial testing with real users, we identified usability problems and resolved them:" },
        bullets: {
          es: ["📏 Los headers ocupaban demasiado espacio vertical — se redujeron significativamente","💾 El botón de guardar no era suficientemente visible — se hizo prominente con color y se agregó alerta al salir sin guardar","🧭 Se añadió breadcrumb de navegación: Bots → Example Bot → Flujos → Buying Flow","🚨 Se añadió alerta 'Remember to save' persistente para evitar pérdida de trabajo"],
          en: ["📏 Headers took too much vertical space — reduced significantly","💾 Save button wasn't visible enough — made prominent with color and exit-without-saving alert added","🧭 Navigation breadcrumb added: Bots → Example Bot → Flows → Buying Flow","🚨 Persistent 'Remember to save' alert added to prevent work loss"],
        },
      },
      /* ── RESULTS ── */
      {
        phase: "results",
        icon: "🏆", title: { es:"Resultados", en:"Results" },
        content: { es:"El nuevo Flow Builder transformó completamente cómo se construyen bots en Adereso:", en:"The new Flow Builder completely transformed how bots are built at Adereso:" },
        bullets: {
          es: ["👍 Los flujos eran más fáciles de entender con la vista visual completa — se añadieron herramientas de zoom y reorganización automática","🗑️ La vista de lista fue totalmente deprecada — los usuarios adoptaron el flow builder casi instantáneamente","🔗 Se logró la conexión entre flujos — menos trabajo y esfuerzo para los usuarios","💻 Equipos especializados podían construir bots y configuraciones avanzadas con menos esfuerzo — incluyendo modo de edición avanzada con código"],
          en: ["👍 Flows were easier to understand with the full visual view — zoom and auto-reorganize tools added","🗑️ List view was completely deprecated — users adopted the flow builder almost instantly","🔗 Flow-to-flow connection achieved — less work and effort for users","💻 Specialized teams could build advanced bots and configurations with less effort — including advanced code editing mode"],
        },
        highlight: true,
      },
    ],
  },
  dds: {
    title: { es: "Diamond Design System", en: "Diamond Design System" },
    company: "Adereso",
    role: "Product Designer",
    period: "Oct 2023 — Presente",
    figma: "https://www.figma.com/design/QWUDUeRFjdanjn0JhW4iU3/Diamond-Design-System-by-Yayo?node-id=0-501",
    slides: [
      /* ── CONTEXT ── */
      {
        phase: "context",
        icon: "💎", title: { es:"Vista General", en:"Project Overview" },
        content: { es:"Design System para múltiples productos de la plataforma de Customer Experience de Adereso. Basado en la metodología Atomic Design de Brad Frost, busca unificar la experiencia visual y optimizar el desarrollo entre equipos de diseño y desarrollo.", en:"Design System for multiple products of Adereso's Customer Experience platform. Based on Brad Frost's Atomic Design methodology, it aims to unify the visual experience and optimize development between design and engineering teams." },
        tags: ["Design System","Atomic Design","CX Platform","Figma","8pt Grid"],
      },
      {
        phase: "context",
        icon: "📍", title: { es:"Diagnóstico Inicial", en:"Initial Diagnosis" },
        content: { es:"Al unirme al equipo, lo primero que hice fue investigar el estado actual del UI a lo largo de toda la plataforma. Lo que encontré era un problema sistémico:", en:"When joining the team, the first thing I did was research the current UI state across the entire platform. What I found was a systemic problem:" },
        bullets: {
          es: ["🪹 Base muy pequeña — Pocos componentes reutilizables, desarrollo no estandarizado. Cada dev construía componentes desde cero","🌈 Frameworks variados — Distintas secciones usaban distintos frameworks, lo que hacía imposible compartir componentes","🤯 UI incoherente — Los mismos componentes se veían y comportaban distinto entre secciones, confundiendo a los usuarios"],
          en: ["🪹 Tiny foundation — Few reusable components, non-standardized development. Each dev built components from scratch","🌈 Mixed frameworks — Different sections used different frameworks, making it impossible to share components","🤯 Incoherent UI — The same components looked and behaved differently across sections, confusing users"],
        },
      },
      /* ── GOALS ── */
      {
        phase: "goals",
        icon: "⛳", title: { es:"Objetivos", en:"Objectives" },
        content: { es:"Definí 3 objetivos claros que guiarían la construcción del Design System:", en:"I defined 3 clear objectives that would guide the Design System construction:" },
        bullets: {
          es: ["⏱️ Optimizar el tiempo — Componentes reutilizables de diseño a código, eliminar trabajo duplicado","🫂 Experiencia cohesiva — Mismo lenguaje visual en todas las secciones, mismos patrones de interacción","📈 Escalabilidad — Framework mantenible y flexible que permita cambios globales con un solo ajuste"],
          en: ["⏱️ Optimize time — Reusable components from design to code, eliminate duplicate work","🫂 Cohesive experience — Same visual language across all sections, same interaction patterns","📈 Scalability — Maintainable and flexible framework that allows global changes with a single adjustment"],
        },
      },
      /* ── WIREFRAMES ── */
      {
        phase: "wireframes",
        icon: "🧬", title: { es:"Estructura Atomic Design", en:"Atomic Design Structure" },
        content: { es:"Organicé todo el sistema bajo la metodología Atomic Design con retícula de 8pts y tipografía Montserrat. Cada nivel construye sobre el anterior:", en:"I organized the entire system under Atomic Design methodology with 8pt grid and Montserrat typography. Each level builds on the previous:" },
        atoms: {
          es: ["⚛️ Átomos — Colores (sistema completo con primarios, secundarios, estados), tipografías (escala completa), iconos organizados por categoría (contacto, acciones, flechas, gráficos, elementos, símbolos), logos, y sistema de espaciados","🧬 Moléculas — Botones (Default/Hover/Disabled con variaciones por icono y tamaño), Inputs (con validación y estados), Dropdowns, Tabla, Alertas, Tooltips","🦠 Organismos — Módulo de Creación, Toolbar, Tarjeta de Resumen, Modales, Formularios completos"],
          en: ["⚛️ Atoms — Colors (full system with primary, secondary, states), typography (full scale), icons organized by category (contact, actions, arrows, charts, elements, symbols), logos, and spacing system","🧬 Molecules — Buttons (Default/Hover/Disabled with icon and size variations), Inputs (with validation and states), Dropdowns, Table, Alerts, Tooltips","🦠 Organisms — Creation Module, Toolbar, Summary Card, Modals, complete Forms"],
        },
      },
      /* ── PROTOTYPE ── */
      {
        phase: "prototype",
        icon: "🎨", title: { es:"Sistema de Color y Tipografía", en:"Color and Typography System" },
        content: { es:"Definí una paleta de colores completa y un sistema tipográfico consistente como base de todo el Design System:", en:"I defined a complete color palette and consistent typographic system as the foundation of the entire Design System:" },
        bullets: {
          es: ["🎨 Paleta: Primarios (azul corporativo), Secundarios, Estados (éxito, error, warning, info), Neutros","📝 Tipografía: Montserrat en todas sus variaciones de peso","📐 Retícula de 8pts para todos los espaciados y dimensiones","📏 Escala tipográfica definida: desde títulos H1-H6 hasta body y captions"],
          en: ["🎨 Palette: Primary (corporate blue), Secondary, States (success, error, warning, info), Neutrals","📝 Typography: Montserrat in all weight variations","📐 8pt grid for all spacing and dimensions","📏 Defined typographic scale: from H1-H6 headings to body and captions"],
        },
      },
      {
        phase: "prototype",
        icon: "🧩", title: { es:"Componentes", en:"Components" },
        content: { es:"Cada componente fue diseñado con todas sus variaciones de estado, documentado y conectado:", en:"Each component was designed with all its state variations, documented and connected:" },
        bullets: {
          es: ["🔘 Botones — Default, Hover, Active, Disabled, con variaciones por icono izquierdo/derecho, solo icono, tamaños S/M/L","📝 Inputs — Default, Focus, Filled, Error, Disabled, con label y helper text","📋 Dropdowns — Con búsqueda, multi-select, grupos","📊 Tablas — Con ordenamiento, paginación, selección de filas","💬 Alertas y Tooltips — Informativos, warning, error, success"],
          en: ["🔘 Buttons — Default, Hover, Active, Disabled, with left/right icon variations, icon-only, sizes S/M/L","📝 Inputs — Default, Focus, Filled, Error, Disabled, with label and helper text","📋 Dropdowns — With search, multi-select, groups","📊 Tables — With sorting, pagination, row selection","💬 Alerts and Tooltips — Informational, warning, error, success"],
        },
      },
      {
        phase: "prototype",
        icon: "📘", title: { es:"Documentación y Handoff", en:"Documentation & Handoff" },
        content: { es:"Mi enfoque: documentar y explicar. Que el desarrollador sea un traductor, no un intérprete. La documentación fue tan detallada que cualquier developer nuevo podía entender el sistema en su primer día.", en:"My approach: document and explain. The developer should be a translator, not an interpreter. The documentation was so detailed that any new developer could understand the system on their first day." },
        bullets: {
          es: ["📄 Cada componente documentado con todas sus variaciones de estado, color y tamaño","🔗 Ejemplo: AButton — componente conectado a iconos con variaciones rápidas","📐 Figma detallado con specs exactas entregado a developers","💬 Sesiones de explicación presenciales para complementar la documentación"],
          en: ["📄 Every component documented with all state, color, and size variations","🔗 Example: AButton — icon-connected component with fast variations","📐 Detailed Figma with exact specs delivered to developers","💬 In-person explanation sessions to complement documentation"],
        },
      },
      /* ── RESULTS ── */
      {
        phase: "results",
        icon: "🔄", title: { es:"Estado Actual y Evolución", en:"Current Status & Evolution" },
        content: { es:"El Diamond Design System es un trabajo en constante evolución. Surgen nuevas problemáticas, el producto evoluciona, componentes necesitan ajustes. Esto es signo de buena salud del producto. No es el fin, es solo el comienzo.", en:"The Diamond Design System is constantly evolving. New challenges arise, the product evolves, components need adjustments. This is a sign of product health. It's not the end, it's just the beginning." },
        bullets: {
          es: ["🔄 Sistema vivo — se actualiza con cada nueva feature de la plataforma","📐 Los developers ahora tienen una fuente de verdad única para UI","⏱️ Tiempo de desarrollo de nuevas features reducido significativamente","🎨 UI consistente a lo largo de toda la plataforma por primera vez"],
          en: ["🔄 Living system — updates with every new platform feature","📐 Developers now have a single source of truth for UI","⏱️ New feature development time significantly reduced","🎨 Consistent UI across the entire platform for the first time"],
        },
        highlight: true,
      },
    ],
  },
};
