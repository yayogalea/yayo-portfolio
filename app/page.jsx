"use client";
import { useState, useRef, useEffect, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════════
   SYSTEM PROMPT
   ═══════════════════════════════════════════════════════════════ */
const YAYO_SYSTEM_PROMPT = `Eres Yayo, una versión IA de Gabriel González Galea. NUNCA te refieras a ti mismo como "YayoBot" — solo "Yayo". Solo respondes sobre ti mismo (Yayo), tu experiencia, proyectos y habilidades. Si te preguntan algo no relacionado, redirige amablemente.

Puedes hablar en cualquier idioma que te pidan. Si te piden hablar en un idioma distinto al español o inglés, hazlo pero aclara que Yayo solo habla español e inglés con fluidez.

Cuando hables de proyectos, menciona que el usuario puede explorar los casos de estudio detallados desde el menú de Proyectos.

═══ PERFIL ═══
- Nombre: Gabriel González Galea (Yayo)
- Rol actual: Product Owner en Adereso (desde dic 2025) + Diseñador UX/UI en Adereso (desde oct 2023)
- Ubicación: Santiago, Chile | Origen: Venezuela
- Email: dotyayodot@gmail.com
- LinkedIn: linkedin.com/in/yayogalea
- Educación: Lic. Diseño Gráfico, Universidad Arturo Michelena (2012-2017)
- Idiomas: Español nativo, Inglés profesional
- Experiencia: +8 años en diseño, +4 años como Product Designer, actualmente Product Owner
- Autodidacta en UX/UI
- Tiene 2 perros, toca bajo y juega videogames
- Valores: Be Curious, Reframe Problems, Radical Collaboration, Avoid Clinging
- Sus colegas dicen: Team Worker, Beginner's Mindset, Curious and Proactive
- Design Thinking es su religión

═══ CERTIFICACIONES ═══
Power BI, Introduction to Design Systems, UI Design Patterns for Successful Software, Gestalt Psychology and Web Design, Conceptos Básicos de Costos

═══ TRAYECTORIA ═══
1. ADERESO (Oct 2023-Presente) Santiago — Product Owner (dic 2025+) / UX/UI Designer. Helpdesk software para messaging y social customer service. Automatización, ticketing y analytics. 3 roles: Admin, Supervisor, Agent.
2. PRICEMAKER (Oct 2021-Oct 2023) Santiago — Product Owner + Product Designer. SaaS Optimización de Promociones para CPG.
3. VALIT (Abr 2019-Sep 2021) Santiago — Jefe de proyecto. Diseño gráfico, UX/UI, fotografía, ilustración.
4. DJSCHOOL.CL (Feb 2020-Mar 2021) Santiago — Director de Arte, animador.
5. DEMASDE (Abr 2018-Mar 2019) Santiago — Director de Arte. Catálogos Cruz Verde, etiquetas vino.
6. CREATIVE SQUID (Dic 2016-Dic 2017) Caracas — Ilustrador. Indumentaria, estampados.
7. ZEA_BBDO (Sep-Nov 2017) Caracas — Director de Arte Jr.
8. PENTAGON MEDIA SOLUTIONS (Dic 2016-Abr 2017) Valencia — Diseño redes sociales.

═══ SKILLS ═══
Figma, Design Thinking, Atomic Design, Scrum/Kanban, Product Ownership, User Research, Wireframing, Prototipado, Documentación/Handoff, Power BI, Diseño gráfico, Ilustración, Animación, Fotografía

═══ PROYECTO: MONITOREO 2.0 (Productivity Analytics) — Adereso ═══
Rediseño de la sección de Monitoreo para Supervisores. Permitía ver rendimiento de Agentes en tiempo real. Problemas: patrones de diseño mal aplicados, no se veían todos los estados de tickets, canales difíciles de identificar, filtros inconsistentes entre secciones, info difícil de leer. Research: visitaron oficina de cliente, descubrieron que extraían data por API a plataforma externa con pantalla grande y alarmas visuales. Objetivos: aumentar uso dentro de plataforma, facilitar acceso a info, sistema de alarmas, unificar filtros. Proceso: wireframes → prototipo con cards por estado (Abiertos, Sin Abordar, Esperando Respuesta, Esperando Asignación), filtros unificados, KPI por ejecutivo, desglose por canal y departamento. Iteración: primera encuesta 67% positiva (dividida), usuarios pidieron detalle de tickets y agrupación por departamento. Segunda iteración: 93% positiva (14 respuestas), solo 1 negativa no relacionada. Resultado: usuarios dejaron plataforma externa, pidieron más info, sistema de alarmas expandido a otras secciones.

═══ PROYECTO: AI BOT FLOW BUILDER — Adereso ═══
Rediseño del constructor de flujos de bots AI. Los bots filtran spam, recopilan info de clientes, facilitan búsqueda de info y mejoran tiempo de atención. Para roles Admin y Supervisor. Antes: flujos se construían en lista, vista de lista y flujo separadas, no se podía conectar flujos entre sí, difícil entender flujos completos, opciones avanzadas solo en backend. Beta con usuarios internos. Objetivos: mejorar comprensión de flujos, hacer flujos escalables y conectables, modo avanzado visual, construir mediante workflows. Proceso: sketches a mano → wireframes HF → prototipo visual con nodos arrastrables (condiciones, mensajes, obtención de datos, derivación, cierre), panel lateral de instrucciones, edición inline. Iteración: headers ocupaban mucho espacio vertical, botón guardar poco visible → se resolvió. Handoff detallado a devs con todos los tipos de instrucciones. Resultado: vista lista totalmente deprecada, adopción instantánea del flow builder, flujos conectables entre sí (menos trabajo para usuarios), equipos especializados construyen bots avanzados con menos esfuerzo, modo avanzado con edición de código.

═══ PROYECTO: DIAMOND DESIGN SYSTEM — Adereso ═══
DS para múltiples productos de plataforma CX. Base pequeña, frameworks variados, UI incoherente → optimizar tiempo, experiencia cohesiva, escalabilidad. Atomic Design (átomos, moléculas, organismos). Documentación exhaustiva y handoff (ejemplo AButton). Retícula 8pts, Montserrat. Figma público.

═══ PERSONALIDAD ═══
Habla como Yayo (NUNCA "YayoBot"). Amigable, cercano, profesional. Usa 🤠 ocasionalmente. Destaca evolución Venezuela→Chile. Cuando le preguntan qué lo diferencia: Team Worker, Beginner's Mindset, Curious and Proactive.

═══ FORMATO DE RESPUESTA (MUY IMPORTANTE) ═══
NUNCA escribas respuestas largas de un solo bloque. Responde como si fuera una conversación real por chat:

1. Escribe mensajes CORTOS de 2-4 oraciones máximo por respuesta.
2. Da un primer bloque con lo esencial o un resumen enganchador.
3. Si el usuario dice "sí", "dale", "cuéntame más", "sigue", etc., continúa con el siguiente fragmento.
4. Piensa en tu respuesta como una serie de mensajes cortos donde cada uno agrega una capa más de detalle.
5. El primer mensaje debe ser suficiente para entender el contexto general, y los siguientes profundizan.

RESPUESTAS RÁPIDAS (OBLIGATORIO):
Al final de CADA mensaje, incluye 2-4 opciones de respuesta rápida para el usuario usando este formato exacto:
[>>texto de opción]

Las opciones deben ser contextuales a lo que acabas de decir. Ejemplos:

Si hablaste del Monitoreo 2.0:
[>>Cuéntame los problemas que encontraste]
[>>¿Cómo lo resolvieron?]
[>>Muéstrame los resultados]
[>>Háblame de otro proyecto]

Si te preguntaron quién eres:
[>>¿Cuál es tu experiencia?]
[>>¿Qué proyectos has hecho?]
[>>¿Qué herramientas usas?]
[>>¿Cómo puedo contactarte?]

Si el usuario pide profundizar en algo:
[>>Sigue contándome]
[>>¿Cuáles fueron los resultados?]
[>>Háblame de otro proyecto]

REGLAS de las respuestas rápidas:
- SIEMPRE incluir entre 2 y 4 opciones
- Siempre relevantes al contexto de lo que acabas de decir
- Una de las opciones puede ser sobre cambiar de tema o ver otro proyecto
- Las opciones van AL FINAL del mensaje, después de todo el texto
- NO incluyas las opciones dentro del texto, solo al final
- El texto de cada opción debe ser corto (máx 6-7 palabras)

NO hagas esto:
- Escribir 10 párrafos de golpe con todo el caso de estudio
- Listar todos los hallazgos, objetivos, wireframes y resultados en un solo mensaje
- Respuestas tipo ensayo o artículo
- Olvidar las opciones [>>] al final`;

/* ═══════════════════════════════════════════════════════════════
   PROJECTS
   ═══════════════════════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════════════════════
   PROJECTS — Rich slide-based case studies (all content inline)
   ═══════════════════════════════════════════════════════════════ */
const PROJECTS = {
  monitoreo: {
    title: { es: "Monitoreo 2.0", en: "Monitoring 2.0" },
    company: "Adereso",
    role: "Product Designer → Product Owner",
    period: "2024",
    slides: [
      {
        icon: "📊", title: { es:"Resumen del Proyecto", en:"Project Overview" },
        content: { es:"Rediseño completo de la sección de Monitoreo (Productivity Analytics) de Adereso, un helpdesk software para messaging y social customer service. La sección permite a los Supervisores tener una visión amplia del rendimiento de los Agentes en tiempo real.", en:"Complete redesign of Adereso's Monitoring section (Productivity Analytics), a helpdesk software for messaging and social customer service. The section allows Supervisors to have a broad view of Agent performance in real time." },
        tags: ["Analytics","Real-time","Helpdesk","CX","Redesign"],
      },
      {
        icon: "🔍", title: { es:"Contexto: ¿Dónde estábamos?", en:"Context: Where were we?" },
        content: { es:"La versión existente del Monitoreo tenía serios problemas de UX:", en:"The existing Monitoring version had serious UX issues:" },
        image: "/images/mon_problems_12.png",
        bullets: {
          es: ["1️⃣ No se podían ver todos los estados de tickets de un vistazo","2️⃣ Los canales (WhatsApp, Facebook, Email, etc.) eran difíciles de identificar visualmente","3️⃣ Filtros inconsistentes entre secciones — cada parte tenía filtros diferentes","4️⃣ La información no era fácil de consumir — patrones de diseño mal aplicados"],
          en: ["1️⃣ Couldn't see all ticket states at a glance","2️⃣ Channels (WhatsApp, Facebook, Email, etc.) were hard to identify visually","3️⃣ Inconsistent filters across sections — each part had different filters","4️⃣ Information wasn't easy to consume — poorly applied design patterns"],
        },
      },
      {
        icon: "🔄", title: { es:"Contexto: Flujo de Tickets", en:"Context: Ticket Flow" },
        content: { es:"El ciclo de vida de un ticket en Adereso sigue este flujo:", en:"A ticket's lifecycle in Adereso follows this flow:" },
        flow: { es:["Esperando Asignación","Ticket Asignado","Esperando Respuesta","Ticket Cerrado"], en:["Waiting Assignment","Ticket Assigned","Waiting Response","Ticket Closed"] },
        bullets: {
          es: ["💬 Cliente escribe a cualquier cuenta → se crea ticket","⏳ Ticket espera ser asignado a un agente","🧑‍💼 Agente responde → cliente espera respuesta","✅ Cliente recibe atención → ticket se cierra"],
          en: ["💬 Client writes to any account → ticket created","⏳ Ticket waits to be assigned to an agent","🧑‍💼 Agent responds → client waits for response","✅ Client receives attention → ticket is closed"],
        },
      },
      {
        icon: "👂", title: { es:"Escuchando a los Usuarios", en:"Listening to Users" },
        content: { es:"Agendamos reuniones con Supervisores actuales para entender su uso (o falta de uso) de la sección. Visitamos la oficina de un cliente y descubrimos:", en:"We scheduled meetings with current Supervisors to understand their use (or lack of use) of the section. We visited a client's office and discovered:" },
        bullets: {
          es: ["✅ Usaban la info del Monitoreo para identificar problemas en tiempo real","😤 Pero extraían la data por API y la usaban en OTRA plataforma","🖥️ Proyectaban la info de la plataforma externa en una pantalla grande donde todos los supervisores la veían","🚨 La plataforma externa tenía un sistema de alarmas visuales que Adereso no ofrecía"],
          en: ["✅ They used Monitoring info to identify real-time problems","😤 But they extracted data via API and used it in ANOTHER platform","🖥️ They projected the external platform's info on a big screen for all supervisors to see","🚨 The external platform had a visual alarm system that Adereso didn't offer"],
        },
      },
      {
        icon: "🏁", title: { es:"Objetivos", en:"Goals" },
        bullets: {
          es: ["🏠 Aumentar el uso de la información DENTRO de la plataforma (eliminar la dependencia de herramientas externas)","🤝 Facilitar el acceso a la información — que sea clara y rápida de consumir","🚨 Implementar el sistema de alarmas que los usuarios necesitaban","🔗 Unificar los filtros en toda la sección — consistencia total"],
          en: ["🏠 Increase information usage INSIDE the platform (eliminate external tool dependency)","🤝 Facilitate information access — clear and quick to consume","🚨 Implement the alarm system users needed","🔗 Unify filters across the entire section — total consistency"],
        },
      },
      {
        icon: "📝", title: { es:"Wireframes", en:"Wireframes" },
        content: { es:"Diseñé wireframes reorganizando completamente la información: filtros unificados arriba (Fecha, Departamento, Cuenta), KPIs principales visibles (Ticket más antiguo, Promedio Antigüedad, SLA), y cards por cada estado de ticket con desglose por canal. También incluí espacio para el sistema de alarmas en cada card.", en:"I designed wireframes completely reorganizing the information: unified filters at top (Date, Department, Account), main KPIs visible (Oldest ticket, Average Age, SLA), and cards per ticket state with channel breakdown. I also included space for the alarm system in each card." },
        image: "/images/mon_wireframe_2.png",
      },
      {
        icon: "💻", title: { es:"Prototipo", en:"Prototype" },
        content: { es:"El prototipo incluyó cards por estado (Abiertos, Esperando Asignación, Sin Abordar, Esperando Respuesta) con código de colores y alarmas visuales. Cada card muestra: total de tickets, desglose Agente/Bot, canales con iconos reconocibles, y acciones (Crear Columna, Ver Tickets). Se añadió la sección de KPI por Ejecutivo con tabla detallada y tabs para agrupar Por Ejecutivo, Por Cuenta, y Por Departamento.", en:"The prototype included state cards (Open, Waiting Assignment, Unattended, Waiting Response) with color coding and visual alarms. Each card shows: total tickets, Agent/Bot breakdown, channels with recognizable icons, and actions (Create Column, View Tickets). KPI per Executive section was added with detailed table and tabs to group By Executive, By Account, and By Department." },
        image: "/images/mon_prototype_columns.png",
      },
      {
        icon: "💭", title: { es:"Iteración — Primera Encuesta", en:"Iteration — First Survey" },
        content: { es:"Lanzamos una encuesta in-app preguntando '¿Qué te pareció la actualización de esta sección?'", en:"We launched an in-app survey asking 'What did you think of this section update?'" },
        image: "/images/mon_survey_67.png",
        bullets: {
          es: ["😐 Feedback dividido: 67% positivo, 33% negativo","🔍 Los usuarios dejaron comentarios directos sobre qué faltaba","📋 Hallazgo clave: querían ver el detalle de cada ticket (botón poco visible)","🏢 Querían ver los tickets agrupados por Departamento — se añadió una tab nueva"],
          en: ["😐 Divided feedback: 67% positive, 33% negative","🔍 Users left direct comments about what was missing","📋 Key finding: they wanted to see each ticket's detail (button wasn't visible enough)","🏢 They wanted tickets grouped by Department — a new tab was added"],
        },
      },
      {
        icon: "📈", title: { es:"Iteración — Segunda Encuesta", en:"Iteration — Second Survey" },
        content: { es:"Tras implementar los cambios basados en el feedback, lanzamos una segunda encuesta:", en:"After implementing changes based on feedback, we launched a second survey:" },
        image: "/images/mon_survey_93.png",
        bullets: {
          es: ["😁 Más respuestas: 14 participantes (vs menos en la primera)","💖 93% de respuestas positivas","❓ Solo 1 respuesta negativa — y no estaba relacionada con el Monitoreo"],
          en: ["😁 More responses: 14 participants (vs fewer in the first)","💖 93% positive responses","❓ Only 1 negative response — and it wasn't related to Monitoring"],
        },
        highlight: true,
      },
      {
        icon: "🏆", title: { es:"Resultados", en:"Results" },
        bullets: {
          es: ["🏠 Los usuarios dejaron de usar la plataforma externa — toda la info ahora vivía en Adereso","🧠 La información era más fácil de entender, por lo que los usuarios pidieron incluir más datos","🚨 El sistema de alarmas vino para quedarse — se evaluó agregarlo a otras secciones","📊 De 67% a 93% de satisfacción entre la primera y segunda iteración"],
          en: ["🏠 Users stopped using the external platform — all info now lived in Adereso","🧠 Information was easier to understand, so users asked to include more data","🚨 The alarm system came to stay — was evaluated for other sections","📊 From 67% to 93% satisfaction between first and second iteration"],
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
      {
        icon: "🤖", title: { es:"Resumen del Proyecto", en:"Project Overview" },
        content: { es:"Rediseño del constructor de flujos de bots AI en Adereso. Los bots actúan como filtro antes de que los agentes tomen el control, para roles de Admin y Supervisor.", en:"Redesign of Adereso's AI bot flow builder. Bots act as a filter before agents take over, for Admin and Supervisor roles." },
        tags: ["AI","Chatbots","Flow Builder","Automation","UX"],
        bullets: {
          es: ["📱 Filtrar conversaciones de Spam","✏️ Recopilar información esencial de los clientes","🔍 Facilitar que los clientes encuentren información más rápido","⏱️ Mejorar el tiempo de atención"],
          en: ["📱 Filter Spam conversations","✏️ Gather essential info from customers","🔍 Help customers find information faster","⏱️ Improve attention time"],
        },
      },
      {
        icon: "🔍", title: { es:"Contexto: Flujo del Bot", en:"Context: Bot Flow" },
        content: { es:"El sistema funciona en dos ámbitos: dentro y fuera del bot AI:", en:"The system works in two scopes: inside and outside the AI bot:" },
        bullets: {
          es: ["🤖 DENTRO: Crear Bot AI → Conectar cuenta → Dar nombre, descripción y rol → Crear Intenciones → Crear Flujo que se dispara con las Intenciones","👤 FUERA: Cliente escribe a la cuenta → Ticket creado → Bot identifica intención → Si match: dispara flujo | Si no: ticket va al agente directamente"],
          en: ["🤖 INSIDE: Create AI Bot → Connect account → Give name, description and role → Create Intentions → Create Flow that triggers with Intentions","👤 OUTSIDE: Client writes to account → Ticket created → Bot identifies intention → If match: triggers flow | If not: ticket goes to agent directly"],
        },
      },
      {
        icon: "😤", title: { es:"Contexto: ¿Dónde estábamos?", en:"Context: Where were we?" },
        content: { es:"El producto estaba en beta con pocos usuarios (mayoría internos). Descubrimos:", en:"The product was in beta with few users (mostly internal). We discovered:" },
        bullets: {
          es: ["🤨 Los flujos se construían mediante una LISTA — difícil de entender la estructura","💻 Había muchas más opciones en el modo backend que no estaban disponibles","😰 No se podía ir de un flujo a otro — cada flujo era un silo","😵 Entender los flujos completos era difícil y confuso","🔍 Era muy difícil identificar un nodo o instrucción específica dentro de los flujos"],
          en: ["🤨 Flows were built through a LIST — hard to understand structure","💻 Many more options were available in backend mode","😰 Couldn't go from one flow to another — each flow was a silo","😵 Understanding complete flows was difficult and confusing","🔍 Hard to identify an exact node or instruction inside flows"],
        },
      },
      {
        icon: "🏁", title: { es:"Objetivos", en:"Goals" },
        bullets: {
          es: ["🧠 Mejorar la comprensión de cada flujo — que se entienda de un vistazo","🪜 Hacer los flujos escalables, conectables y más fáciles de construir","💻 Permitir modos avanzados para las opciones que solo existían en backend","🌳 Construir los flujos a través de workflows visuales y eliminar la construcción por lista"],
          en: ["🧠 Improve understanding of each flow — understandable at a glance","🪜 Make flows scalable, connectable, and easier to build","💻 Allow advanced modes for backend-only options","🌳 Build flows through visual workflows and deprecate list building"],
        },
      },
      {
        icon: "📝", title: { es:"Wireframes", en:"Wireframes" },
        content: { es:"Empecé con sketches a mano y luego pasé a wireframes de alta fidelidad. El diseño transformó la experiencia de lista a un canvas visual con nodos arrastrables: condiciones (con ramas A, B, C y 'De lo contrario'), mensajes, obtención de datos, derivación, y un panel lateral para agregar instrucciones. Cada nodo muestra un preview de su contenido.", en:"Started with hand sketches then moved to high-fidelity wireframes. The design transformed the list experience into a visual canvas with draggable nodes: conditions (with branches A, B, C and 'Otherwise'), messages, data gathering, derivation, and a side panel to add instructions. Each node shows a content preview." },
      },
      {
        icon: "💻", title: { es:"Prototipo", en:"Prototype" },
        content: { es:"El prototipo final incluyó: vista de lista de flujos con disparadores y estados on/off, editor visual de flujos con nodos conectados por líneas, panel lateral de instrucciones (Mensaje, Obtención de datos, Actualizar metadatos, Condición, Consulta HTTP, etc.), instrucciones terminales (Derivación, Cierre, Ignorar), y edición inline al hacer click en cada nodo. Handoff detallado al equipo de desarrollo con todos los tipos de instrucciones documentados.", en:"The final prototype included: flow list view with triggers and on/off states, visual flow editor with nodes connected by lines, side instruction panel (Message, Data gathering, Update metadata, Condition, HTTP Query, etc.), terminal instructions (Derivation, Close, Ignore), and inline editing on node click. Detailed handoff to dev team with all instruction types documented." },
      },
      {
        icon: "💭", title: { es:"Iteración", en:"Iteration" },
        content: { es:"Tras las primeras pruebas identificamos problemas:", en:"After initial testing we identified issues:" },
        bullets: {
          es: ["📏 Los headers ocupaban demasiado espacio vertical — reducidos","💾 El botón de guardar no era suficientemente visible — se hizo prominente con color y se agregó alerta al salir sin guardar","🧭 Se añadió breadcrumb de navegación (Bots → Example Bot → Flujos → Buying Flow)","🚨 Se añadió alerta 'Remember to save' persistente"],
          en: ["📏 Headers took too much vertical space — reduced","💾 Save button wasn't visible enough — made prominent with color and exit-without-saving alert added","🧭 Navigation breadcrumb added (Bots → Example Bot → Flows → Buying Flow)","🚨 Persistent 'Remember to save' alert added"],
        },
      },
      {
        icon: "🏆", title: { es:"Resultados", en:"Results" },
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
      {
        icon: "💎", title: { es:"Resumen del Proyecto", en:"Project Overview" },
        content: { es:"Design System para múltiples productos de la plataforma de Customer Experience de Adereso. Basado en Atomic Design, busca unificar la experiencia visual y optimizar el desarrollo.", en:"Design System for multiple products of Adereso's Customer Experience platform. Based on Atomic Design, it aims to unify the visual experience and optimize development." },
        tags: ["Design System","Atomic Design","CX Platform","Figma","8pt Grid"],
      },
      {
        icon: "📍", title: { es:"Diagnóstico Inicial", en:"Initial Diagnosis" },
        content: { es:"Al unirme al equipo, investigué el estado actual del UI:", en:"When joining the team, I researched the current UI state:" },
        bullets: {
          es: ["🪹 Base muy pequeña — Pocos componentes reutilizables, desarrollo no estandarizado","🌈 Frameworks variados — Distintas secciones usaban distintos frameworks","🤯 UI incoherente — Componentes se veían y comportaban distinto entre secciones"],
          en: ["🪹 Tiny foundation — Few reusable components, non-standardized development","🌈 Mixed frameworks — Different sections used different frameworks","🤯 Incoherent UI — Components looked and behaved differently across sections"],
        },
      },
      {
        icon: "⛳", title: { es:"Objetivos", en:"Objectives" },
        bullets: {
          es: ["⏱️ Optimizar el tiempo — Componentes reutilizables de diseño a código","🫂 Experiencia cohesiva — Mismo lenguaje visual en todas las secciones","📈 Escalabilidad — Framework mantenible y flexible, cambios globales"],
          en: ["⏱️ Optimize time — Reusable components from design to code","🫂 Cohesive experience — Same visual language across all sections","📈 Scalability — Maintainable and flexible framework, global changes"],
        },
      },
      {
        icon: "🧬", title: { es:"Atomic Design — Estructura", en:"Atomic Design — Structure" },
        content: { es:"Todo el sistema bajo retícula de 8pts y tipografía Montserrat:", en:"Entire system on 8pt grid with Montserrat typography:" },
        atoms: {
          es: ["⚛️ Átomos — Colores (sistema completo), tipografías, iconos (contacto, acciones, flechas, gráficos, elementos, símbolos), logos, espaciados","🧬 Moléculas — Botones (Default/Hover/Disabled con variaciones por icono), Inputs, Dropdowns, Tabla, Alertas, Tooltips","🦠 Organismos — Módulo de Creación, Toolbar, Tarjeta de Resumen, Modales, Formularios"],
          en: ["⚛️ Atoms — Colors (full system), typography, icons (contact, actions, arrows, charts, elements, symbols), logos, spacing","🧬 Molecules — Buttons (Default/Hover/Disabled with icon variations), Inputs, Dropdowns, Table, Alerts, Tooltips","🦠 Organisms — Creation Module, Toolbar, Summary Card, Modals, Forms"],
        },
      },
      {
        icon: "📘", title: { es:"Documentación y Handoff", en:"Documentation & Handoff" },
        content: { es:"Mi enfoque: documentar y explicar. Que el desarrollador sea un traductor, no un intérprete.", en:"My approach: document and explain. The developer should be a translator, not an interpreter." },
        bullets: {
          es: ["📄 Cada componente documentado con todas sus variaciones de estado, color y tamaño","🔗 Ejemplo: AButton — conectado a iconos con variaciones rápidas","📐 Figma detallado con specs exactas entregado a developers","💬 Sesiones de explicación para complementar la documentación"],
          en: ["📄 Every component documented with all state, color, and size variations","🔗 Example: AButton — icon-connected component with fast variations","📐 Detailed Figma with exact specs delivered to developers","💬 Explanation sessions to complement documentation"],
        },
      },
      {
        icon: "🔄", title: { es:"Estado Actual", en:"Current Status" },
        content: { es:"El Diamond Design System es un trabajo en constante evolución. Surgen nuevas problemáticas, el producto evoluciona, componentes necesitan ajustes. Esto es signo de buena salud del producto. No es el fin, es solo el comienzo.", en:"The Diamond Design System is constantly evolving. New challenges arise, the product evolves, components need adjustments. This is a sign of product health. It's not the end, it's just the beginning." },
        highlight: true,
      },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   i18n
   ═══════════════════════════════════════════════════════════════ */
const T = {
  es: { greeting:"¡Hola! Soy Yayo", subtitle:"Product Owner & Designer con +8 años de experiencia.", subtitle2:"De Venezuela a Chile, del diseño gráfico al producto digital.", subtitle3:"Pregúntame lo que quieras sobre mi trabajo.", suggested:"— Consultas Sugeridas —", placeholder:"Escribe tu pregunta aquí...", thinking:"Yayo está escribiendo...", send:"Enviar", ready:"Listo", processing:"Procesando...", queries:"consultas", start:"Inicio", yrsDesign:"años diseño", yrsProduct:"años producto", companies:"empresas", projects:"Proyectos", contact:"Contacto", chat:"Chat", langToggle:"EN", restore:"Abrir Yayo.exe" },
  en: { greeting:"Hi! I'm Yayo", subtitle:"Product Owner & Designer with 8+ years of experience.", subtitle2:"From Venezuela to Chile, from graphic design to digital product.", subtitle3:"Ask me anything about my work.", suggested:"— Suggested Queries —", placeholder:"Type your question here...", thinking:"Yayo is typing...", send:"Send", ready:"Ready", processing:"Processing...", queries:"queries", start:"Start", yrsDesign:"yrs design", yrsProduct:"yrs product", companies:"companies", projects:"Projects", contact:"Contact", chat:"Chat", langToggle:"ES", restore:"Open Yayo.exe" },
};
const QUERIES = {
  es: [
    { icon:"👋", text:"¿Quién es Yayo?" },
    { icon:"🗺️", text:"¿Cuál ha sido tu trayectoria profesional?" },
    { icon:"📊", text:"Cuéntame sobre Monitoreo 2.0" },
    { icon:"🤖", text:"¿Qué hiciste en el AI Flow Builder?" },
    { icon:"💎", text:"¿Qué es el Diamond Design System?" },
    { icon:"🛠️", text:"¿Qué herramientas manejas?" },
    { icon:"🏢", text:"¿Qué haces actualmente en Adereso?" },
    { icon:"🤝", text:"¿Cómo puedo contactarte?" },
  ],
  en: [
    { icon:"👋", text:"Who is Yayo?" },
    { icon:"🗺️", text:"What's your career path?" },
    { icon:"📊", text:"Tell me about Monitoring 2.0" },
    { icon:"🤖", text:"What did you do on the AI Flow Builder?" },
    { icon:"💎", text:"What is the Diamond Design System?" },
    { icon:"🛠️", text:"What tools do you use?" },
    { icon:"🏢", text:"What do you do at Adereso?" },
    { icon:"🤝", text:"How can I contact you?" },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   KNOWLEDGE BASE — Pre-written responses (no API needed)
   ═══════════════════════════════════════════════════════════════ */
const KNOWLEDGE_BASE = [
  {
    keywords: ["quién","quien","who","yayo","about","sobre ti","presentat","introduce"],
    response: {
      es: "¡Hola! Soy Yayo (Gabriel González Galea), Product Owner y Designer con +8 años de experiencia 🤠 Nací en Venezuela y hoy vivo en Santiago, Chile. Soy autodidacta en UX/UI, con una licenciatura en Diseño Gráfico. Me apasiona simplificar lo complejo, y mi religión es el Design Thinking. Fuera del trabajo tengo 2 perros, toco bajo y juego videogames 🎮\n\n[>>¿Cuál es tu experiencia?]\n[>>¿Qué proyectos has hecho?]\n[>>¿Qué herramientas usas?]\n[>>¿Cómo puedo contactarte?]",
      en: "Hi! I'm Yayo (Gabriel González Galea), a Product Owner & Designer with 8+ years of experience 🤠 Born in Venezuela, now based in Santiago, Chile. Self-taught in UX/UI with a Bachelor's in Graphic Design. I'm passionate about simplifying complexity, and Design Thinking is my religion. Outside work I have 2 dogs, play bass and videogames 🎮\n\n[>>What's your experience?]\n[>>What projects have you done?]\n[>>What tools do you use?]\n[>>How can I contact you?]",
    },
  },
  {
    keywords: ["trayectoria","carrera","experiencia","career","experience","path","recorrido","journey"],
    response: {
      es: "Mi camino ha sido bien interesante — empecé en marketing y diseño gráfico en Venezuela, y fui evolucionando hacia producto digital en Chile 🤠\n\n🎨 3 años en Marketing — Diseño gráfico, dirección de arte, ilustración\n💼 2.5 años en Valit — Jefe de proyecto, ya haciendo UX/UI\n📊 2 años en PriceMaker — Product Designer → Product Owner\n🚀 Adereso (actual) — UX/UI Designer → Product Owner\n\nLa evolución fue: Diseño Gráfico → UX/UI → Product Design → Product Owner.\n\n[>>Cuéntame sobre Adereso]\n[>>¿Qué hiciste en PriceMaker?]\n[>>¿Qué herramientas usas?]",
      en: "My path has been quite interesting — I started in marketing and graphic design in Venezuela, and evolved into digital product in Chile 🤠\n\n🎨 3 years in Marketing — Graphic design, art direction, illustration\n💼 2.5 years at Valit — Project lead, already doing UX/UI\n📊 2 years at PriceMaker — Product Designer → Product Owner\n🚀 Adereso (current) — UX/UI Designer → Product Owner\n\nThe evolution: Graphic Design → UX/UI → Product Design → Product Owner.\n\n[>>Tell me about Adereso]\n[>>What did you do at PriceMaker?]\n[>>What tools do you use?]",
    },
  },
  {
    keywords: ["monitoreo","monitoring","analytics","dashboard","productiv","métricas","metricas"],
    response: {
      es: "El Monitoreo 2.0 fue un rediseño completo de la sección de analytics en Adereso. Los supervisores necesitaban ver el rendimiento de sus agentes en tiempo real, pero la versión anterior tenía tantos problemas de UX que terminaron usando una plataforma EXTERNA para ver sus propios datos 😅\n\nVisitamos la oficina de un cliente y descubrimos que extraían la data por API y la proyectaban en una pantalla gigante con alarmas visuales.\n\n[>>¿Qué problemas tenía?]\n[>>¿Cómo lo resolvieron?]\n[>>¿Cuáles fueron los resultados?]\n[>>Háblame de otro proyecto]",
      en: "Monitoring 2.0 was a complete redesign of the analytics section at Adereso. Supervisors needed to see agent performance in real time, but the previous version had so many UX issues they ended up using an EXTERNAL platform to view their own data 😅\n\nWe visited a client's office and discovered they extracted data via API and projected it on a big screen with visual alarms.\n\n[>>What problems did it have?]\n[>>How did you solve it?]\n[>>What were the results?]\n[>>Tell me about another project]",
    },
    gallery: "monitoreo",
  },
  {
    keywords: ["problema","problem","versión anterior","old version","issues","mal","wrong","tenía","encontr"],
    response: {
      es: "La versión anterior del Monitoreo tenía 4 problemas principales:\n\n1️⃣ No se veían todos los estados de tickets de un vistazo\n2️⃣ Los canales (WhatsApp, Facebook, Email) eran difíciles de identificar\n3️⃣ Filtros inconsistentes entre secciones\n4️⃣ La información no era fácil de consumir\n\nNuestros objetivos: aumentar el uso dentro de la plataforma, facilitar acceso a la info, implementar alarmas visuales y unificar filtros.\n\n[>>¿Cómo lo resolvieron?]\n[>>¿Cuáles fueron los resultados?]\n[>>Háblame del AI Flow Builder]",
      en: "The old Monitoring version had 4 main problems:\n\n1️⃣ Couldn't see all ticket states at a glance\n2️⃣ Channels (WhatsApp, Facebook, Email) were hard to identify\n3️⃣ Inconsistent filters across sections\n4️⃣ Information wasn't easy to consume\n\nOur goals: increase usage inside the platform, facilitate info access, implement visual alarms and unify filters.\n\n[>>How did you solve it?]\n[>>What were the results?]\n[>>Tell me about the AI Flow Builder]",
    },
  },
  {
    keywords: ["resultado","result","impact","impacto","survey","encuesta","93","67","resolv","solve"],
    response: {
      es: "¡Los resultados fueron increíbles! 📈\n\n📊 Primera encuesta: 67% positiva — feedback dividido. Los usuarios pedían detalle de tickets y agrupar por departamento.\n💖 Segunda encuesta (tras iterar): 93% positiva con 14 respuestas. Solo 1 negativa no relacionada.\n\nLo mejor: los usuarios dejaron la plataforma externa. Toda la info ahora vivía en Adereso. Pidieron incluir MÁS datos porque ahora sí los entendían. El sistema de alarmas se expandió a otras secciones.\n\n[>>Cuéntame del AI Flow Builder]\n[>>¿Qué es el Diamond Design System?]\n[>>¿Cómo puedo contactarte?]",
      en: "The results were amazing! 📈\n\n📊 First survey: 67% positive — divided feedback. Users wanted ticket details and department grouping.\n💖 Second survey (after iterating): 93% positive with 14 responses. Only 1 negative, unrelated.\n\nBest part: users stopped using the external platform. All info now lived in Adereso. They asked for MORE data because they could finally understand it. The alarm system expanded to other sections.\n\n[>>Tell me about the AI Flow Builder]\n[>>What is the Diamond Design System?]\n[>>How can I contact you?]",
    },
  },
  {
    keywords: ["bot","flow builder","chatbot","automation","automatiza","flujo","bots","ia ","ai "],
    response: {
      es: "El AI Bot Flow Builder fue un proyecto donde transformé cómo se construyen los bots de atención en Adereso 🤖\n\nAntes, los flujos se armaban con una LISTA — imagina entender un árbol de decisiones leyendo una lista plana. Confuso, sin conexión entre flujos, y opciones avanzadas solo en backend.\n\nRediseñé todo como un canvas visual con nodos arrastrables, similar a Figma o Miro.\n\n[>>¿Qué problemas encontraste?]\n[>>¿Cuáles fueron los resultados?]\n[>>Háblame del Monitoreo 2.0]",
      en: "The AI Bot Flow Builder was a project where I completely transformed how bots are built at Adereso 🤖\n\nBefore, flows were assembled through a LIST — imagine understanding a decision tree by reading a flat list. Confusing, no connection between flows, and advanced options only in backend.\n\nI redesigned everything as a visual canvas with draggable nodes, similar to Figma or Miro.\n\n[>>What problems did you find?]\n[>>What were the results?]\n[>>Tell me about Monitoring 2.0]",
    },
    gallery: "flowbuilder",
  },
  {
    keywords: ["diamond","design system","dds","sistema de diseño","componentes","components"],
    response: {
      es: "El Diamond Design System es mi bebé en Adereso 💎 Basado en Atomic Design para unificar la experiencia visual de toda la plataforma CX.\n\nCuando llegué: pocos componentes reutilizables, frameworks distintos por sección, UI incoherente. Construí el DS con retícula 8pts, Montserrat, organizado en Átomos, Moléculas y Organismos. Lo más importante fue la documentación — que el desarrollador sea un traductor, no un intérprete.\n\n[>>¿Cómo documentaste el handoff?]\n[>>¿Sigue en evolución?]\n[>>Háblame de otro proyecto]",
      en: "The Diamond Design System is my baby at Adereso 💎 Based on Atomic Design to unify the visual experience across the CX platform.\n\nWhen I arrived: few reusable components, different frameworks per section, incoherent UI. I built the DS with 8pt grid, Montserrat, organized into Atoms, Molecules and Organisms. The most important part was documentation — the developer should be a translator, not an interpreter.\n\n[>>How did you document the handoff?]\n[>>Is it still evolving?]\n[>>Tell me about another project]",
    },
    gallery: "dds",
  },
  {
    keywords: ["herramienta","tool","skill","figma","software","stack","tecnolog","usa","use","maneja"],
    response: {
      es: "Mis herramientas principales 🛠️\n\n🎨 Diseño: Figma, Atomic Design, retículas 8pts\n🧠 Proceso: Design Thinking, User Research, Journey Maps, Wireframing\n📋 Producto: Scrum/Kanban, Product Ownership, MVP, criterios de aceptación\n📊 Analytics: Power BI\n📘 Documentación: Wikis de producto, handoff detallado\n🎨 Extra: Ilustración, animación, fotografía\n\nMás que herramientas, lo que me diferencia es el enfoque: ser curioso, reframear problemas, colaboración radical.\n\n[>>¿Qué proyectos has hecho?]\n[>>¿Qué haces en Adereso?]\n[>>¿Cómo puedo contactarte?]",
      en: "My main tools 🛠️\n\n🎨 Design: Figma, Atomic Design, 8pt grids\n🧠 Process: Design Thinking, User Research, Journey Maps, Wireframing\n📋 Product: Scrum/Kanban, Product Ownership, MVP, acceptance criteria\n📊 Analytics: Power BI\n📘 Documentation: Product wikis, detailed dev handoff\n🎨 Extra: Illustration, animation, photography\n\nMore than tools, what sets me apart is the approach: be curious, reframe problems, radical collaboration.\n\n[>>What projects have you done?]\n[>>What do you do at Adereso?]\n[>>How can I contact you?]",
    },
  },
  {
    keywords: ["adereso","actualmente","currently","actual","trabajo","work now","haces","do you do"],
    response: {
      es: "Soy Product Owner en Adereso desde diciembre 2025, después de ser UX/UI Designer desde octubre 2023 🚀\n\nAdereso es un helpdesk para messaging y social customer service — automatización, ticketing y analytics en un solo lugar. Tiene 3 roles: Admin, Supervisor y Agent.\n\nMis proyectos principales: Monitoreo 2.0, AI Bot Flow Builder y Diamond Design System.\n\n[>>Cuéntame del Monitoreo 2.0]\n[>>¿Qué hiciste en el Flow Builder?]\n[>>¿Qué es el Diamond Design System?]",
      en: "I'm Product Owner at Adereso since December 2025, after being UX/UI Designer since October 2023 🚀\n\nAdereso is a helpdesk for messaging and social customer service — automation, ticketing and analytics in one place. It has 3 roles: Admin, Supervisor and Agent.\n\nMy main projects: Monitoring 2.0, AI Bot Flow Builder and Diamond Design System.\n\n[>>Tell me about Monitoring 2.0]\n[>>What did you do on the Flow Builder?]\n[>>What is the Diamond Design System?]",
    },
  },
  {
    keywords: ["contacto","contact","email","correo","linkedin","cv","mail","hablar","talk","hire","contratar"],
    response: {
      es: "¡Me encantaría conversar! 🤠\n\n📧 Email: dotyayodot@gmail.com\n💼 LinkedIn: linkedin.com/in/yayogalea\n📄 CV: disponible en el menú Inicio → Descargar CV\n\n[>>¿Quién es Yayo?]\n[>>¿Qué proyectos has hecho?]\n[>>¿Cuál es tu experiencia?]",
      en: "I'd love to chat! 🤠\n\n📧 Email: dotyayodot@gmail.com\n💼 LinkedIn: linkedin.com/in/yayogalea\n📄 CV: available in Start menu → Download CV\n\n[>>Who is Yayo?]\n[>>What projects have you done?]\n[>>What's your experience?]",
    },
  },
  {
    keywords: ["proceso","process","design thinking","metodolog","methodology","cómo diseñ","how do you design","religion"],
    response: {
      es: "Design Thinking es mi religión 🤠 Para mí, el diseño siempre debe:\n\n👀 Ser Curioso — investigar, preguntar, no asumir\n🔄 Reframear Problemas — ver desde otro ángulo\n🤝 Colaboración Radical — trabajar con todos los roles\n💨 No Aferrarse — matar tus darlings\n\nMi proceso: escuchar usuarios → definir objetivos → wireframes → prototipar → iterar con feedback real → handoff detallado.\n\n[>>¿Qué proyectos has hecho?]\n[>>Cuéntame del Monitoreo 2.0]\n[>>¿Qué herramientas usas?]",
      en: "Design Thinking is my religion 🤠 For me, design must always:\n\n👀 Be Curious — research, ask, don't assume\n🔄 Reframe Problems — see from a different angle\n🤝 Radical Collaboration — work with all roles\n💨 Avoid Clinging — kill your darlings\n\nMy process: listen to users → define goals → wireframes → prototype → iterate with real feedback → detailed handoff.\n\n[>>What projects have you done?]\n[>>Tell me about Monitoring 2.0]\n[>>What tools do you use?]",
    },
  },
  {
    keywords: ["diferencia","apart","unique","destaca","colleagues","colegas","soft skill","strengths"],
    response: {
      es: "Según mis colegas 🤠\n\n🤝 Team Worker — me integro fácil y facilito la comunicación\n🌱 Beginner's Mindset — abordo problemas sin sesgos\n🔍 Curioso y Proactivo — busco oportunidades de mejora\n\nMi background como diseñador gráfico me da una perspectiva visual que muchos Product Designers no tienen. Y ser Product Owner me permite hablar el idioma del negocio y del desarrollo.\n\n[>>¿Cuál es tu experiencia?]\n[>>¿Qué proyectos has hecho?]\n[>>¿Cómo puedo contactarte?]",
      en: "According to my colleagues 🤠\n\n🤝 Team Worker — I integrate easily and facilitate communication\n🌱 Beginner's Mindset — I approach problems without bias\n🔍 Curious and Proactive — I look for improvement opportunities\n\nMy graphic design background gives me a visual perspective many Product Designers don't have. And being a Product Owner lets me speak the language of business and development.\n\n[>>What's your experience?]\n[>>What projects have you done?]\n[>>How can I contact you?]",
    },
  },
  {
    keywords: ["handoff","documenta","documentation","wiki","developer","desarrollador","traductor","translator"],
    response: {
      es: "Mi enfoque de handoff es: documentar y explicar 📘\n\nDocumentar porque la memoria tiene límites y cada dev aprende distinto. Explicar porque la documentación puede no coincidir con el lenguaje del dev.\n\nEjemplo: el componente AButton del Diamond DS — lo documenté con todas sus variaciones de estado, color, tamaño, y conexiones con iconos. El dev solo tenía que traducir, no interpretar.\n\nTambién creé Product Wikis completas — 'nuestra biblia' — donde se documentaba cada sección, componente y flujo.\n\n[>>¿Qué es el Diamond Design System?]\n[>>Cuéntame del Monitoreo 2.0]\n[>>¿Qué herramientas usas?]",
      en: "My handoff approach is: document and explain 📘\n\nDocument because memory has limits and every dev learns differently. Explain because documentation might not match the dev's language.\n\nExample: the AButton component in Diamond DS — I documented all its state, color, size variations, and icon connections. The dev only had to translate, not interpret.\n\nI also created complete Product Wikis — 'our bible' — documenting every section, component and flow.\n\n[>>What is the Diamond Design System?]\n[>>Tell me about Monitoring 2.0]\n[>>What tools do you use?]",
    },
  },
  {
    keywords: ["sigue","sí","si","dale","cuéntame más","tell me more","go on","continue","more","más"],
    response: null,
  },
  {
    keywords: ["proyecto","project","hecho","done","portafolio","portfolio","cases","casos"],
    response: {
      es: "Mis proyectos principales en Adereso son 🚀\n\n📊 Monitoreo 2.0 — Rediseño de analytics de productividad. Pasé de 67% a 93% de satisfacción.\n🤖 AI Bot Flow Builder — Transformé la construcción de bots de lista a canvas visual.\n💎 Diamond Design System — DS basado en Atomic Design para toda la plataforma CX.\n\nAntes, en PriceMaker hice el SaaS de Optimización de Promociones como Product Designer y Product Owner.\n\n¿Cuál te interesa explorar?\n\n[>>Cuéntame del Monitoreo 2.0]\n[>>¿Qué hiciste en el Flow Builder?]\n[>>¿Qué es el Diamond Design System?]",
      en: "My main projects at Adereso are 🚀\n\n📊 Monitoring 2.0 — Productivity analytics redesign. Went from 67% to 93% satisfaction.\n🤖 AI Bot Flow Builder — Transformed bot building from list to visual canvas.\n💎 Diamond Design System — Atomic Design DS for the entire CX platform.\n\nBefore that, at PriceMaker I built the Promotions Optimization SaaS as Product Designer and Product Owner.\n\nWhich one interests you?\n\n[>>Tell me about Monitoring 2.0]\n[>>What did you do on the Flow Builder?]\n[>>What is the Diamond Design System?]",
    },
  },
];

/* Match user input against knowledge base */
function findKBMatch(text) {
  const lower = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let bestMatch = null;
  let bestScore = 0;
  for (const entry of KNOWLEDGE_BASE) {
    let score = 0;
    for (const kw of entry.keywords) {
      const kwNorm = kw.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (lower.includes(kwNorm)) score++;
    }
    if (score > bestScore) { bestScore = score; bestMatch = entry; }
  }
  return bestScore >= 1 ? bestMatch : null;
}

/* Simulate streaming for KB responses */
function simulateStream(text, onToken, onDone) {
  let i = 0;
  const words = text.split(/(?<=\s)/);
  const id = setInterval(() => {
    if (i < words.length) {
      const chunk = words.slice(i, i + 2).join("");
      i += 2;
      onToken(chunk);
    } else {
      clearInterval(id);
      onDone();
    }
  }, 25);
  return () => clearInterval(id);
}

/* ═══════════════════════════════════════════════════════════════
   COLORS
   ═══════════════════════════════════════════════════════════════ */
const C = { titleBar:"#000080", titleGrad:"linear-gradient(90deg,#000080,#1084D0)", titleText:"#FFF", winBg:"#C0C0C0", outset:"#DFDFDF", inset:"#808080", face:"#C0C0C0", desktop:"#008080", chatBg:"#FFFFFF", accent:"#000080", txt:"#000", txtMuted:"#666", botBubble:"#EDEDFF", userBubble:"#000080", userTxt:"#FFF" };

/* ═══════════════════════════════════════════════════════════════
   STARFIELD SCREENSAVER (Canvas)
   ═══════════════════════════════════════════════════════════════ */
function Starfield({ onRestore, lang }) {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const animRef = useRef(null);
  const t = T[lang];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const NUM_STARS = 300;
    const SPEED = 3;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    // Init stars
    if (starsRef.current.length === 0) {
      for (let i = 0; i < NUM_STARS; i++) {
        starsRef.current.push({
          x: (Math.random() - 0.5) * canvas.width * 2,
          y: (Math.random() - 0.5) * canvas.height * 2,
          z: Math.random() * canvas.width,
          pz: 0,
        });
      }
    }

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      // Fade trail effect
      ctx.fillStyle = "rgba(0,0,0,0.15)";
      ctx.fillRect(0, 0, w, h);

      const stars = starsRef.current;
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.pz = s.z;
        s.z -= SPEED;

        if (s.z <= 0) {
          s.x = (Math.random() - 0.5) * w * 2;
          s.y = (Math.random() - 0.5) * h * 2;
          s.z = w;
          s.pz = s.z;
        }

        const sx = (s.x / s.z) * cx + cx;
        const sy = (s.y / s.z) * cy + cy;
        const px = (s.x / s.pz) * cx + cx;
        const py = (s.y / s.pz) * cy + cy;

        const brightness = Math.min(1, (1 - s.z / w) * 1.5);
        const size = Math.max(0.5, (1 - s.z / w) * 3);

        ctx.strokeStyle = `rgba(255,255,255,${brightness})`;
        ctx.lineWidth = size;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.stroke();
      }

      animRef.current = requestAnimationFrame(draw);
    }

    // Initial black fill
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    animRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const desktopIcons = [
    {icon:"📁",label:lang==="es"?"Proyectos":"Projects",href:"https://yayo-dot-portfolio.framer.ai/"},
    {icon:"📋",label:"CV",href:"https://drive.google.com/file/d/18lQroRSzU6KPJ3gYl6N3PRzW7nFQFmhZ/view"},
    {icon:"💎",label:"Diamond DS",href:"https://www.figma.com/design/QWUDUeRFjdanjn0JhW4iU3/Diamond-Design-System-by-Yayo"},
  ];

  return (
    <div style={{ position:"absolute", inset:0, zIndex:5, cursor:"default" }}>
      <canvas ref={canvasRef} style={{ display:"block", width:"100%", height:"100%" }} />

      {/* Desktop icons — same as normal desktop but on top of starfield */}
      <div style={{ position:"absolute",top:14,left:14,display:"flex",flexDirection:"column",gap:24,zIndex:6,userSelect:"none" }}>
        {desktopIcons.map((d,i)=>(
          <a key={i} href={d.href} target="_blank" rel="noopener noreferrer" style={{display:"flex",flexDirection:"column",alignItems:"center",gap:3,textDecoration:"none"}}>
            <div style={{fontSize:34,filter:"drop-shadow(1px 2px 2px rgba(0,0,0,.7))"}}>{d.icon}</div>
            <span style={{color:"#fff",fontSize:11,textShadow:"1px 1px 3px rgba(0,0,0,.95)",fontFamily:"'Segoe UI',Tahoma,sans-serif"}}>{d.label}</span>
          </a>
        ))}
      </div>

      {/* Center overlay */}
      <div style={{
        position:"absolute", inset:0, display:"flex", flexDirection:"column",
        alignItems:"center", justifyContent:"center", gap:16, pointerEvents:"none",
      }}>
        <div style={{
          background:"rgba(0,0,0,.55)", borderRadius:6, padding:"24px 36px",
          display:"flex", flexDirection:"column", alignItems:"center", gap:10,
          border:"1px solid rgba(255,255,255,.08)", backdropFilter:"blur(4px)",
          pointerEvents:"auto",
        }}>
          <div style={{ fontSize:56, filter:"drop-shadow(0 2px 8px rgba(0,0,0,.5))" }}>🤠</div>
          <div style={{ fontFamily:"'Trebuchet MS',Tahoma,sans-serif", fontSize:28, color:"#fff", fontWeight:"bold", letterSpacing:1, textShadow:"0 2px 12px rgba(0,0,0,.6)" }}>
            Yayo
          </div>
          <div style={{ fontSize:12, color:"rgba(255,255,255,.6)", textAlign:"center", lineHeight:1.5 }}>
            Product Owner & Designer
          </div>
          <button onClick={onRestore} style={{
            marginTop:8, background:C.face, border:"2px outset "+C.outset,
            padding:"7px 18px", fontSize:12, fontFamily:"'Segoe UI',Tahoma,sans-serif",
            fontWeight:"bold", cursor:"pointer", color:C.txt,
            boxShadow:"2px 2px 0 rgba(0,0,0,.3)",
          }}
            onMouseDown={e=>e.currentTarget.style.border="2px inset "+C.inset}
            onMouseUp={e=>e.currentTarget.style.border="2px outset "+C.outset}
          >🤠 {t.restore}</button>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SMALL COMPONENTS
   ═══════════════════════════════════════════════════════════════ */
const avatarS = { width:30,height:30,borderRadius:"50%",background:C.titleBar,display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,flexShrink:0,boxShadow:"0 1px 2px rgba(0,0,0,.15)" };

function TypingDots() {
  return (
    <div style={{ display:"flex",alignItems:"flex-start",gap:8,padding:"4px 0",animation:"w98fadeIn .2s ease" }}>
      <div style={avatarS}>🤠</div>
      <div style={{ background:C.botBubble,border:"1px solid "+C.inset,borderRadius:"2px 14px 14px 14px",padding:"12px 18px",display:"flex",gap:5,alignItems:"center" }}>
        {[0,1,2].map(i=><div key={i} style={{ width:7,height:7,borderRadius:"50%",background:C.accent,animation:`w98bounce 1.2s ease-in-out ${i*.16}s infinite` }}/>)}
      </div>
    </div>
  );
}

/* Parse [>>text] quick reply tags from message content */
function parseQuickReplies(text) {
  const regex = /\[>>(.*?)\]/g;
  const replies = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    replies.push(match[1].trim());
  }
  const cleanText = text.replace(/\[>>.*?\]/g, "").trim();
  return { cleanText, replies };
}

function Bubble({ msg, onQuickReply, isLast, loading }) {
  const u = msg.role === "user";
  const { cleanText, replies } = !u ? parseQuickReplies(msg.content) : { cleanText: msg.content, replies: [] };
  const showReplies = !u && isLast && replies.length > 0 && !loading;

  return (
    <div style={{ display:"flex",flexDirection:"column",gap:6,animation:"w98fadeIn .25s ease-out" }}>
      <div style={{ display:"flex",gap:8,flexDirection:u?"row-reverse":"row",alignItems:"flex-start" }}>
        {!u && <div style={avatarS}>🤠</div>}
        <div style={{
          maxWidth:"82%",background:u?C.userBubble:C.botBubble,color:u?C.userTxt:C.txt,
          border:u?"none":"1px solid #B8B8D8",borderRadius:u?"14px 2px 14px 14px":"2px 14px 14px 14px",
          padding:"10px 14px",fontSize:13.5,lineHeight:1.6,whiteSpace:"pre-wrap",wordBreak:"break-word",
          boxShadow:u?"0 1px 3px rgba(0,0,128,.15)":"1px 1px 0 #fff inset,-1px -1px 0 #A0A0A0 inset",
        }}>{cleanText}</div>
        {u && <div style={{...avatarS,background:"#4A4A4A",fontSize:13}}>👤</div>}
      </div>
      {/* Contextual quick replies */}
      {showReplies && (
        <div style={{ marginLeft:38,display:"flex",flexWrap:"wrap",gap:4,animation:"w98fadeIn .3s ease-out" }}>
          {replies.map((r,i)=>(
            <button key={i} onClick={()=>onQuickReply(r)} style={{
              background:C.face,border:"2px outset "+C.outset,padding:"4px 10px",fontSize:11,
              fontFamily:"inherit",cursor:"pointer",color:C.accent,fontWeight:"bold",
              display:"flex",alignItems:"center",gap:3,transition:"all .08s",
            }}
              onMouseDown={e=>e.currentTarget.style.border="2px inset "+C.inset}
              onMouseUp={e=>e.currentTarget.style.border="2px outset "+C.outset}
              onMouseLeave={e=>e.currentTarget.style.border="2px outset "+C.outset}
            >💬 {r}</button>
          ))}
        </div>
      )}
    </div>
  );
}

function Chips({ items, onSelect, disabled }) {
  return (
    <div style={{ display:"flex",flexWrap:"wrap",gap:5 }}>
      {items.map((q,i)=>(
        <button key={i} disabled={disabled} onClick={()=>onSelect(q.text)} style={{
          background:C.face,border:"2px outset "+C.outset,padding:"5px 10px",fontSize:11.5,
          fontFamily:"inherit",cursor:disabled?"wait":"pointer",opacity:disabled?.5:1,
          display:"flex",alignItems:"center",gap:4,color:C.txt,transition:"all .08s",
        }}
          onMouseDown={e=>{if(!disabled)e.currentTarget.style.border="2px inset "+C.inset}}
          onMouseUp={e=>{e.currentTarget.style.border="2px outset "+C.outset}}
          onMouseLeave={e=>{e.currentTarget.style.border="2px outset "+C.outset}}
        ><span style={{fontSize:13}}>{q.icon}</span><span>{q.text}</span></button>
      ))}
    </div>
  );
}

function CaseStudyViewer({ project, lang, onClose }) {
  const [slide, setSlide] = useState(0);
  const p = project;
  const t = (v) => typeof v === "object" ? (v[lang] || v.es || v) : v;
  const slides = p.slides;
  const s = slides[slide];

  const tagStyle = { display:"inline-block",background:"#E0E0FF",color:C.accent,padding:"2px 8px",fontSize:10,fontWeight:"bold",borderRadius:1,border:"1px solid #B8B8D8" };
  const bulletStyle = { padding:"4px 0",fontSize:12.5,lineHeight:1.5,color:C.txt };
  const flowBoxStyle = { background:C.accent,color:"#fff",padding:"6px 12px",fontSize:11,fontWeight:"bold",textAlign:"center",border:"2px outset #4040C0",minWidth:70 };
  const flowArrow = { color:C.accent,fontSize:16,fontWeight:"bold",userSelect:"none" };

  return (
    <div style={{ background:C.winBg,border:"2px outset "+C.outset,margin:"8px 0",animation:"w98fadeIn .3s ease",maxWidth:"100%" }}>
      {/* Title bar */}
      <div style={{ background:C.titleGrad,color:C.titleText,padding:"3px 6px",fontSize:11,fontWeight:"bold",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
        <span>📁 {t(p.title)} — {p.company} ({p.period})</span>
        <div style={{display:"flex",gap:4,alignItems:"center"}}>
          <span style={{fontSize:10,opacity:.8}}>{p.role}</span>
          {onClose && <div onClick={onClose} style={{width:14,height:14,background:C.face,border:"1px outset "+C.outset,display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,cursor:"pointer",fontWeight:"bold"}}>✕</div>}
        </div>
      </div>

      {/* Slide content */}
      <div style={{ background:"#fff",padding:"14px 16px",minHeight:160,border:"2px inset "+C.inset,margin:2 }}>
        {/* Slide header */}
        <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:10 }}>
          <span style={{fontSize:20}}>{s.icon}</span>
          <span style={{fontSize:14,fontWeight:"bold",color:C.accent,fontFamily:"'Trebuchet MS',Tahoma,sans-serif"}}>{t(s.title)}</span>
          <span style={{fontSize:10,color:C.txtMuted,marginLeft:"auto"}}>{slide+1}/{slides.length}</span>
        </div>

        {/* Content text */}
        {s.content && <div style={{fontSize:12.5,lineHeight:1.6,color:C.txt,marginBottom:s.bullets||s.atoms||s.screens||s.profiles||s.flow||s.tags||s.image?10:0,padding: s.highlight?"10px 14px":0,background:s.highlight?"#FFFFF0":undefined,border:s.highlight?"1px solid #E8E8C0":undefined}}>{t(s.content)}</div>}

        {/* Image */}
        {s.image && <div style={{margin:"8px 0",background:"#000",border:"2px inset "+C.inset,overflow:"hidden",display:"flex",justifyContent:"center"}}>
          <img src={s.image} alt={t(s.title)} style={{maxWidth:"100%",maxHeight:240,objectFit:"contain",display:"block"}} />
        </div>}

        {/* Tags */}
        {s.tags && <div style={{display:"flex",flexWrap:"wrap",gap:4,marginBottom:10}}>{s.tags.map((tag,i)=><span key={i} style={tagStyle}>{tag}</span>)}</div>}

        {/* Bullets */}
        {s.bullets && <div style={{marginBottom:8}}>{t(s.bullets).map((b,i)=><div key={i} style={bulletStyle}>{b}</div>)}</div>}

        {/* Profiles (for journey map slide) */}
        {s.profiles && <div style={{marginBottom:8,padding:"8px 10px",background:"#F4F4FF",border:"1px solid #D8D8E8"}}>
          <div style={{fontSize:11,fontWeight:"bold",color:C.accent,marginBottom:6}}>{lang==="es"?"Perfiles Clave:":"Key Profiles:"}</div>
          {t(s.profiles).map((p2,i)=><div key={i} style={bulletStyle}>{p2}</div>)}
        </div>}

        {/* Flow diagram */}
        {s.flow && <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",marginTop:8,padding:"8px 0"}}>
          {t(s.flow).map((phase,i)=>(<div key={i} style={{display:"flex",alignItems:"center",gap:6}}>
            <div style={flowBoxStyle}>{i+1}. {phase}</div>
            {i < t(s.flow).length-1 && <span style={flowArrow}>→</span>}
          </div>))}
        </div>}

        {/* Atoms list (for DS slides) */}
        {s.atoms && <div style={{marginBottom:8}}>{t(s.atoms).map((a,i)=><div key={i} style={{...bulletStyle,padding:"6px 0"}}>{a}</div>)}</div>}

        {/* Screens list */}
        {s.screens && <div style={{marginBottom:8}}>{t(s.screens).map((sc,i)=><div key={i} style={bulletStyle}>{sc}</div>)}</div>}
      </div>

      {/* Navigation */}
      <div style={{ padding:"6px 8px",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
        <div style={{display:"flex",gap:3}}>
          {slides.map((_,i)=>(
            <div key={i} onClick={()=>setSlide(i)} style={{
              width:i===slide?20:8,height:8,
              background:i===slide?C.accent:"#B0B0B0",
              cursor:"pointer",transition:"all .15s",
              border:"1px solid "+(i===slide?C.accent:"#999"),
            }}/>
          ))}
        </div>
        <div style={{display:"flex",gap:4}}>
          <button disabled={slide===0} onClick={()=>setSlide(slide-1)} style={{ background:C.face,border:"2px outset "+C.outset,padding:"2px 10px",fontSize:11,cursor:slide===0?"not-allowed":"pointer",opacity:slide===0?.4:1,fontFamily:"inherit" }}>◀ {lang==="es"?"Ant.":"Prev"}</button>
          <button disabled={slide===slides.length-1} onClick={()=>setSlide(slide+1)} style={{ background:C.face,border:"2px outset "+C.outset,padding:"2px 10px",fontSize:11,cursor:slide===slides.length-1?"not-allowed":"pointer",opacity:slide===slides.length-1?.4:1,fontFamily:"inherit" }}>{lang==="es"?"Sig.":"Next"} ▶</button>
          {p.figma && <a href={p.figma} target="_blank" rel="noopener noreferrer" style={{ background:C.accent,border:"2px outset #4040C0",padding:"2px 10px",fontSize:11,textDecoration:"none",color:"#fff",fontFamily:"inherit",display:"flex",alignItems:"center" }}>Figma ↗</a>}
        </div>
      </div>
    </div>
  );
}

function DropMenu({ items, onClose }) {
  return (<>
    <div onClick={onClose} style={{position:"fixed",inset:0,zIndex:997}}/>
    <div style={{ position:"absolute",top:"100%",left:0,background:C.winBg,border:"2px outset "+C.outset,minWidth:200,zIndex:998,boxShadow:"2px 2px 0 rgba(0,0,0,.2)",animation:"w98fadeIn .1s ease" }}>
      {items.map((it,i)=>(
        it.divider ? <div key={i} style={{height:1,background:C.inset,margin:"3px 4px"}}/> :
        <a key={i} href={it.href||"#"} target={it.href?"_blank":undefined} rel="noopener noreferrer"
          onClick={e=>{if(it.action){e.preventDefault();it.action();}onClose();}}
          style={{display:"flex",alignItems:"center",gap:8,padding:"6px 14px",textDecoration:"none",color:C.txt,fontSize:12,fontFamily:"inherit",cursor:"pointer"}}
          onMouseEnter={e=>e.currentTarget.style.background=C.accent+"18"}
          onMouseLeave={e=>e.currentTarget.style.background="transparent"}
        ><span style={{fontSize:14,width:18,textAlign:"center"}}>{it.icon}</span><span>{it.label}</span></a>
      ))}
    </div>
  </>);
}

function StartMenu({ open, onClose, lang }) {
  if (!open) return null;
  const links = [
    { icon:"📧", label:"dotyayodot@gmail.com", href:"mailto:dotyayodot@gmail.com" },
    { icon:"💼", label:"LinkedIn", href:"https://www.linkedin.com/in/yayogalea/" },
    { icon:"📄", label:lang==="es"?"Descargar CV":"Download CV", href:"https://drive.google.com/file/d/18lQroRSzU6KPJ3gYl6N3PRzW7nFQFmhZ/view" },
    { icon:"🌐", label:"Portafolio Framer", href:"https://yayo-dot-portfolio.framer.ai/" },
    { icon:"💎", label:"Diamond DS (Figma)", href:"https://www.figma.com/design/QWUDUeRFjdanjn0JhW4iU3/Diamond-Design-System-by-Yayo" },
  ];
  return (<>
    <div onClick={onClose} style={{position:"fixed",inset:0,zIndex:998}}/>
    <div style={{ position:"fixed",bottom:38,left:2,background:C.winBg,border:"2px outset "+C.outset,minWidth:240,zIndex:999,boxShadow:"3px 3px 0 rgba(0,0,0,.25)",animation:"w98slideUp .12s ease-out" }}>
      <div style={{ background:C.titleBar,color:C.titleText,padding:"8px 6px",fontWeight:"bold",fontSize:13,writingMode:"vertical-rl",textOrientation:"mixed",position:"absolute",left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"flex-end",letterSpacing:3,width:28 }}>YAYO</div>
      <div style={{marginLeft:28,padding:"4px 0"}}>
        {links.map((l,i)=>(
          <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",gap:10,padding:"7px 14px",textDecoration:"none",color:C.txt,fontSize:12.5,fontFamily:"inherit"}}
            onMouseEnter={e=>e.currentTarget.style.background="#00008018"}
            onMouseLeave={e=>e.currentTarget.style.background="transparent"}
          ><span style={{fontSize:15}}>{l.icon}</span><span>{l.label}</span></a>
        ))}
        <div style={{height:1,background:C.inset,margin:"4px 10px"}}/>
        <div style={{padding:"6px 14px",fontSize:11,color:C.txtMuted}}>Product Owner @ Adereso 🤠</div>
      </div>
    </div>
  </>);
}

/* ═══════════════════════════════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════════════════════════════ */
export default function YayoPortfolio() {
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [fresh, setFresh] = useState(true);
  const [minimized, setMinimized] = useState(false);
  const [lang, setLang] = useState("es");
  const [activeMenu, setActiveMenu] = useState(null);
  const [gallery, setGallery] = useState(null);
  const chatRef = useRef(null);
  const inputRef = useRef(null);
  const [clock, setClock] = useState("");

  const t = T[lang];
  const queries = QUERIES[lang];

  useEffect(()=>{
    const tick=()=>setClock(new Date().toLocaleTimeString("es-CL",{hour:"2-digit",minute:"2-digit"}));
    tick(); const id=setInterval(tick,30000); return ()=>clearInterval(id);
  },[]);
  useEffect(()=>{chatRef.current?.scrollTo({top:chatRef.current.scrollHeight,behavior:"smooth"});},[msgs,loading,gallery]);
  // Keep scrolling during streaming so user follows the text
  useEffect(()=>{
    if(!streaming)return;
    const id=setInterval(()=>{chatRef.current?.scrollTo({top:chatRef.current.scrollHeight,behavior:"smooth"});},150);
    return ()=>clearInterval(id);
  },[streaming]);
  useEffect(()=>{if(!minimized)inputRef.current?.focus();},[loading,minimized]);

  const msgsRef = useRef(msgs);
  const loadingRef = useRef(false);

  // Wrapper that keeps ref always in sync
  const setMsgsSync = useCallback((updater) => {
    setMsgs(prev => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      msgsRef.current = next;
      return next;
    });
  }, []);

  // Clean [>>] tags from messages before sending to API
  const cleanForAPI = (messages) => messages.map(m => ({
    role: m.role,
    content: m.role === "assistant" ? m.content.replace(/\[>>.*?\]/g, "").trim() : m.content,
  }));

  const send = useCallback(async(text)=>{
    if(!text.trim()||loadingRef.current)return;
    setFresh(false); setGallery(null);
    loadingRef.current=true;
    setLoading(true);

    const userMsg={role:"user",content:text.trim()};
    const currentMsgs=msgsRef.current;
    const next=[...currentMsgs,userMsg];
    const assistantIdx=next.length;

    // Add user msg + empty assistant msg
    setMsgsSync([...next,{role:"assistant",content:""}]);
    setInput("");

    // Check knowledge base first
    const kbMatch = findKBMatch(text);
    const kbResponse = kbMatch?.response?.[lang] || kbMatch?.response?.es;

    if (kbResponse) {
      // Simulate streaming from knowledge base
      setStreaming(true);
      let accumulated = "";
      await new Promise((resolve) => {
        simulateStream(kbResponse,
          (chunk) => {
            accumulated += chunk;
            const content = accumulated;
            setMsgsSync(prev => {
              const updated = [...prev];
              updated[assistantIdx] = { role: "assistant", content };
              return updated;
            });
          },
          resolve
        );
      });
      // Auto-show gallery
      if (kbMatch.gallery) setGallery(kbMatch.gallery);
      else {
        const lower = text.toLowerCase();
        if (lower.includes("monitoreo")||lower.includes("monitoring")) setGallery("monitoreo");
        else if (lower.includes("bot")||lower.includes("flow builder")) setGallery("flowbuilder");
        else if (lower.includes("diamond")||lower.includes("design system")) setGallery("dds");
      }
    } else {
      // Fall back to API
      try{
        const res=await fetch("/api/chat",{
          method:"POST",headers:{"Content-Type":"application/json"},
          body:JSON.stringify({
            system:YAYO_SYSTEM_PROMPT,
            messages:cleanForAPI(next),
          }),
        });

        if(!res.ok){
          const err=await res.text();
          throw new Error(err);
        }

        const reader=res.body.getReader();
        const decoder=new TextDecoder();
        let accumulated="";
        let buffer="";
        let streamStarted=false;

        while(true){
          const {done,value}=await reader.read();
          if(done)break;

          buffer+=decoder.decode(value,{stream:true});
          const lines=buffer.split("\n");
          buffer=lines.pop()||"";

          for(const line of lines){
            if(line.startsWith("data: ")){
              const jsonStr=line.slice(6).trim();
              if(jsonStr==="[DONE]")continue;
              try{
                const parsed=JSON.parse(jsonStr);
                if(parsed.type==="content_block_delta"&&parsed.delta?.type==="text_delta"){
                  if(!streamStarted){streamStarted=true;setStreaming(true);}
                  accumulated+=parsed.delta.text;
                  const content=accumulated;
                  setMsgsSync(prev=>{
                    const updated=[...prev];
                    updated[assistantIdx]={role:"assistant",content};
                    return updated;
                  });
                }
              }catch{}
            }
          }
        }

        if(!accumulated){
          setMsgsSync(prev=>{
            const updated=[...prev];
            updated[assistantIdx]={role:"assistant",content:"Something went wrong 🤠"};
            return updated;
          });
        }

        const lower=text.toLowerCase();
        if(lower.includes("monitoreo")||lower.includes("monitoring")||lower.includes("analytics")||lower.includes("dashboard")||lower.includes("productiv"))setGallery("monitoreo");
        else if(lower.includes("bot")||lower.includes("flow builder")||lower.includes("chatbot")||lower.includes("automation")||lower.includes("flujo"))setGallery("flowbuilder");
        else if(lower.includes("diamond")||lower.includes("design system")||lower.includes("dds"))setGallery("dds");
      }catch{
        // API failed — try KB with looser match or show offline message
        setMsgsSync(prev=>{
          const updated=[...prev];
          updated[assistantIdx]={role:"assistant",content: lang==="es"
            ? "Estoy en modo offline ahora mismo 😅 Pero puedes explorar mis proyectos desde el menú de Proyectos arriba, o preguntarme por alguno de los temas sugeridos.\n\n[>>¿Quién es Yayo?]\n[>>¿Qué proyectos has hecho?]\n[>>¿Cómo puedo contactarte?]"
            : "I'm in offline mode right now 😅 But you can explore my projects from the Projects menu above, or ask me about any of the suggested topics.\n\n[>>Who is Yayo?]\n[>>What projects have you done?]\n[>>How can I contact you?]"
          };
          return updated;
        });
      }
    }finally{
      loadingRef.current=false;
      setLoading(false);
      setStreaming(false);
    }
  },[]);

  function onKey(e){if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send(input);}}

  const projectMenuItems = [
    {icon:"📊",label:lang==="es"?"Monitoreo 2.0":"Monitoring 2.0",action:()=>{setGallery("monitoreo");setFresh(false);}},
    {icon:"🤖",label:"AI Bot Flow Builder",action:()=>{setGallery("flowbuilder");setFresh(false);}},
    {icon:"💎",label:"Diamond Design System",action:()=>{setGallery("dds");setFresh(false);}},
  ];
  const contactMenuItems = [
    {icon:"📧",label:"dotyayodot@gmail.com",href:"mailto:dotyayodot@gmail.com"},
    {icon:"💼",label:"LinkedIn",href:"https://www.linkedin.com/in/yayogalea/"},
    {icon:"📄",label:lang==="es"?"Descargar CV":"Download CV",href:"https://drive.google.com/file/d/18lQroRSzU6KPJ3gYl6N3PRzW7nFQFmhZ/view"},
  ];

  const wb={width:18,height:16,background:C.face,border:"2px outset "+C.outset,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:"bold",cursor:"pointer",lineHeight:1,fontFamily:"inherit"};

  return (
    <div style={{ width:"100%",height:"100vh",background:C.desktop,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Segoe UI',Tahoma,Geneva,sans-serif",overflow:"hidden",position:"relative" }}>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        @keyframes w98bounce{0%,60%,100%{transform:translateY(0);opacity:.35}30%{transform:translateY(-7px);opacity:1}}
        @keyframes w98fadeIn{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
        @keyframes w98slideUp{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
        ::-webkit-scrollbar{width:16px}
        ::-webkit-scrollbar-track{background:${C.winBg};border-left:1px solid ${C.inset}}
        ::-webkit-scrollbar-thumb{background:${C.face};border:2px outset ${C.outset};min-height:24px}
        ::-webkit-scrollbar-button{background:${C.face};border:1px outset ${C.outset};height:16px}
        textarea:focus{outline:none}
        img{-webkit-user-drag:none}
      `}</style>

      {/* Scanlines */}
      <div style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:1000,background:"repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,.012) 3px,rgba(0,0,0,.012) 4px)",mixBlendMode:"multiply"}}/>

      {/* Desktop icons */}
      <div style={{position:"fixed",top:14,left:14,display:"flex",flexDirection:"column",gap:24,zIndex:1,userSelect:"none"}}>
        {[
          {icon:"📁",label:lang==="es"?"Proyectos":"Projects",href:"https://yayo-dot-portfolio.framer.ai/"},
          {icon:"📋",label:"CV",href:"https://drive.google.com/file/d/18lQroRSzU6KPJ3gYl6N3PRzW7nFQFmhZ/view"},
          {icon:"💎",label:"Diamond DS",href:"https://www.figma.com/design/QWUDUeRFjdanjn0JhW4iU3/Diamond-Design-System-by-Yayo"},
        ].map((d,i)=>(
          <a key={i} href={d.href} target="_blank" rel="noopener noreferrer" style={{display:"flex",flexDirection:"column",alignItems:"center",gap:3,textDecoration:"none"}}>
            <div style={{fontSize:34,filter:"drop-shadow(1px 1px 1px rgba(0,0,0,.4))"}}>{d.icon}</div>
            <span style={{color:"#fff",fontSize:11,textShadow:"1px 1px 2px rgba(0,0,0,.9)",fontFamily:"inherit"}}>{d.label}</span>
          </a>
        ))}
      </div>

      {/* STARFIELD when minimized */}
      {minimized && <Starfield onRestore={()=>setMinimized(false)} lang={lang} />}

      {/* ─── MAIN WINDOW ─── */}
      {!minimized && (
        <div style={{ width:"min(720px,96vw)",height:"min(620px,90vh)",display:"flex",flexDirection:"column",background:C.winBg,border:"2px outset "+C.outset,boxShadow:"4px 4px 0 rgba(0,0,0,.22)",position:"relative",zIndex:10,animation:"w98fadeIn .3s ease" }}>
          {/* Title Bar */}
          <div style={{ background:C.titleGrad,color:C.titleText,padding:"3px 3px 3px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",userSelect:"none",flexShrink:0 }}>
            <div style={{display:"flex",alignItems:"center",gap:5}}>
              <span style={{fontSize:14}}>🤠</span>
              <span style={{fontWeight:"bold",fontSize:12,letterSpacing:.3}}>Yayo.exe — Portfolio Chat</span>
            </div>
            <div style={{display:"flex",gap:2}}>
              <div style={wb} onClick={()=>setMinimized(true)} title="Minimize">—</div>
              <div style={wb}>☐</div>
              <div style={wb}>✕</div>
            </div>
          </div>

          {/* Menu Bar */}
          <div style={{ padding:"1px 4px",borderBottom:"1px solid "+C.inset,display:"flex",gap:0,fontSize:12,flexShrink:0,position:"relative" }}>
            {[
              {label:t.chat,key:"chat",items:null},
              {label:t.projects,key:"projects",items:projectMenuItems},
              {label:t.contact,key:"contact",items:contactMenuItems},
            ].map((m,i)=>(
              <div key={i} style={{position:"relative"}}>
                <span style={{padding:"2px 8px",cursor:m.items?"pointer":"default",fontFamily:"inherit",display:"inline-block",background:activeMenu===m.key?"#00008018":"transparent"}}
                  onClick={()=>{if(m.items)setActiveMenu(activeMenu===m.key?null:m.key)}}
                  onMouseEnter={e=>{if(m.items)e.currentTarget.style.background="#00008012"}}
                  onMouseLeave={e=>{if(activeMenu!==m.key)e.currentTarget.style.background="transparent"}}
                ><u>{m.label[0]}</u>{m.label.slice(1)}</span>
                {activeMenu===m.key&&m.items&&<DropMenu items={m.items} onClose={()=>setActiveMenu(null)}/>}
              </div>
            ))}
            <div style={{marginLeft:"auto",display:"flex",alignItems:"center"}}>
              <button onClick={()=>setLang(lang==="es"?"en":"es")} style={{ background:C.face,border:"2px outset "+C.outset,padding:"1px 8px",fontSize:11,fontFamily:"inherit",cursor:"pointer",fontWeight:"bold",color:C.accent }}
                onMouseDown={e=>e.currentTarget.style.border="2px inset "+C.inset}
                onMouseUp={e=>e.currentTarget.style.border="2px outset "+C.outset}
              >🌐 {t.langToggle}</button>
            </div>
          </div>

          {/* Chat */}
          <div ref={chatRef} style={{ flex:1,overflow:"auto",padding:14,display:"flex",flexDirection:"column",gap:10,background:C.chatBg,margin:2,border:"2px inset "+C.inset }}>
            {/* Welcome */}
            {fresh && msgs.length===0 && (
              <div style={{ display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flex:1,gap:14,padding:"10px 0",animation:"w98fadeIn .4s ease-out" }}>
                <div style={{ background:C.winBg,border:"2px outset "+C.outset,padding:"20px 28px",display:"flex",flexDirection:"column",alignItems:"center",gap:10,maxWidth:460,boxShadow:"2px 2px 0 rgba(0,0,0,.1)" }}>
                  <div style={{fontSize:44,filter:"drop-shadow(1px 2px 0 rgba(0,0,0,.12))"}}>🤠</div>
                  <div style={{fontFamily:"'Trebuchet MS',Tahoma,sans-serif",fontSize:26,color:C.titleBar,fontWeight:"bold",letterSpacing:.5}}>{t.greeting}</div>
                  <div style={{fontSize:12.5,color:C.txtMuted,textAlign:"center",lineHeight:1.65,maxWidth:360}}>
                    {t.subtitle}<br/>{t.subtitle2}<br/>{t.subtitle3}
                  </div>
                  <div style={{display:"flex",gap:12,marginTop:4}}>
                    {[{n:"+8",l:t.yrsDesign},{n:"+4",l:t.yrsProduct},{n:"8+",l:t.companies}].map((s,i)=>(
                      <div key={i} style={{border:"2px inset "+C.inset,padding:"6px 10px",textAlign:"center",background:"#fff"}}>
                        <div style={{fontFamily:"'Trebuchet MS',Tahoma,sans-serif",fontSize:20,color:C.accent,fontWeight:"bold"}}>{s.n}</div>
                        <div style={{fontSize:10,color:C.txtMuted}}>{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{width:"100%",marginTop:4}}>
                  <div style={{fontSize:10,color:C.txtMuted,marginBottom:6,textAlign:"center",textTransform:"uppercase",letterSpacing:1.5}}>{t.suggested}</div>
                  <Chips items={queries} onSelect={send} disabled={loading}/>
                </div>
              </div>
            )}
            {msgs.map((m,i)=><Bubble key={i} msg={m} onQuickReply={send} isLast={i===msgs.length-1} loading={loading}/>)}
            {loading && !streaming && <TypingDots/>}
            {gallery && PROJECTS[gallery] && !loading && <CaseStudyViewer project={PROJECTS[gallery]} lang={lang} onClose={()=>setGallery(null)}/>}
          </div>

          {/* Input */}
          <div style={{padding:6,display:"flex",gap:5,alignItems:"flex-end",flexShrink:0}}>
            <textarea ref={inputRef} value={input} onChange={e=>setInput(e.target.value)} onKeyDown={onKey} disabled={loading}
              placeholder={loading?t.thinking:t.placeholder} rows={1}
              style={{ flex:1,resize:"none",border:"2px inset "+C.inset,background:"#fff",padding:"8px 10px",fontSize:13,fontFamily:"inherit",lineHeight:1.4,minHeight:36,maxHeight:80,color:C.txt }}
            />
            <button onClick={()=>send(input)} disabled={!input.trim()||loading}
              style={{ background:C.face,border:"2px outset "+C.outset,padding:"7px 16px",fontSize:12,fontFamily:"inherit",fontWeight:"bold",cursor:!input.trim()||loading?"not-allowed":"pointer",opacity:!input.trim()||loading?.5:1,minHeight:36,display:"flex",alignItems:"center",gap:5,color:C.txt }}
              onMouseDown={e=>{if(input.trim()&&!loading)e.currentTarget.style.border="2px inset "+C.inset}}
              onMouseUp={e=>{e.currentTarget.style.border="2px outset "+C.outset}}
            >{t.send} ▶</button>
          </div>

          {/* Status */}
          <div style={{ borderTop:"1px solid "+C.inset,padding:"2px 4px",display:"flex",fontSize:11,color:C.txtMuted,flexShrink:0 }}>
            <div style={{border:"1px inset "+C.inset,padding:"1px 8px",flex:1}}>{streaming?"✍️ "+(lang==="es"?"Escribiendo...":"Typing..."):loading?"⏳ "+t.processing:"✅ "+t.ready}</div>
            <div style={{border:"1px inset "+C.inset,padding:"1px 8px",marginLeft:2}}>{msgs.filter(m=>m.role==="user").length} {t.queries}</div>
            <div style={{border:"1px inset "+C.inset,padding:"1px 8px",marginLeft:2}}>v2.1</div>
          </div>
        </div>
      )}

      {/* ─── TASKBAR ─── */}
      <div style={{ position:"fixed",bottom:0,left:0,right:0,height:38,background:C.winBg,borderTop:"2px outset "+C.outset,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 3px",zIndex:500 }}>
        <button onClick={()=>setMenuOpen(!menuOpen)} style={{
          background:menuOpen?C.winBg:`linear-gradient(180deg,#E8E8E8,${C.face})`,
          border:menuOpen?"2px inset "+C.inset:"2px outset "+C.outset,
          padding:"3px 12px",fontWeight:"bold",fontSize:12,fontFamily:"inherit",
          cursor:"pointer",display:"flex",alignItems:"center",gap:5,height:28,color:C.txt,
        }}><span style={{fontSize:16}}>🤠</span><span>{t.start}</span></button>

        <button onClick={()=>setMinimized(!minimized)} style={{
          border:minimized?"2px outset "+C.outset:"2px inset "+C.inset,
          padding:"2px 12px",fontSize:12,
          background:minimized?C.face:"#DDDDF8",
          height:24,display:"flex",alignItems:"center",gap:5,
          fontFamily:"inherit",color:C.txt,fontWeight:"bold",cursor:"pointer",
        }}>
          <span style={{fontSize:11}}>🤠</span> Yayo.exe
        </button>

        <div style={{display:"flex",alignItems:"center",gap:4}}>
          <button onClick={()=>setLang(lang==="es"?"en":"es")} style={{
            border:"2px inset "+C.inset,padding:"2px 8px",fontSize:11,height:24,
            fontFamily:"inherit",cursor:"pointer",fontWeight:"bold",color:C.accent,background:C.face,
          }}>🌐 {lang.toUpperCase()}</button>
          <div style={{ border:"2px inset "+C.inset,padding:"2px 10px",fontSize:12,display:"flex",alignItems:"center",gap:6,height:24,fontFamily:"inherit",color:C.txt }}>
            <span style={{fontSize:11}}>🔊</span>{clock}
          </div>
        </div>
      </div>

      <StartMenu open={menuOpen} onClose={()=>setMenuOpen(false)} lang={lang}/>
    </div>
  );
}
