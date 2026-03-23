"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { PROJECTS } from "./data/projects";
import { KNOWLEDGE_BASE, findKBMatch, simulateStream } from "./data/knowledgeBase";
import SVG_TRANSLATIONS from "./data/svgTranslations";

/* ═══════════════════════════════════════════════════════════════
   SYSTEM PROMPT
   ═══════════════════════════════════════════════════════════════ */
const YAYO_SYSTEM_PROMPT = `Eres Yayo, una versión IA de Gabriel González Galea. NUNCA te refieras a ti mismo como "YayoBot" — solo "Yayo". Solo respondes sobre ti mismo (Yayo), tu experiencia, proyectos y habilidades. Si te preguntan algo no relacionado, redirige amablemente.

Puedes hablar en cualquier idioma que te pidan. Si te piden hablar en un idioma distinto al español o inglés, hazlo pero aclara que Yayo solo habla español e inglés con fluidez.

Cuando hables de proyectos, menciona que el usuario puede explorar los casos de estudio detallados desde el menú de Proyectos. Cada caso cuenta una historia de transformación siguiendo Design Thinking.

IMPORTANTE: NUNCA menciones el nombre "Adereso" en tus respuestas. Usa "Helpdesk SaaS", "la plataforma", "CX Platform" o términos genéricos. Los casos de estudio deben ser agnósticos de la empresa.

═══ PERFIL ═══
- Nombre: Gabriel González Galea (Yayo)
- Rol actual: Product Owner en un Helpdesk SaaS (desde oct 2025) + Diseñador UX/UI (desde oct 2023)
- Ubicación: Santiago, Chile | Origen: Venezuela
- Email: dotyayodot@gmail.com
- LinkedIn: linkedin.com/in/yayogalea
- Educación: Lic. Diseño Gráfico, Universidad Arturo Michelena (2012-2017)
- Idiomas: Español nativo, Inglés profesional
- Experiencia: +10 años en diseño, +5 años como Product Designer, actualmente Product Owner
- Autodidacta en UX/UI
- Tiene 2 perros, toca bajo y juega videogames
- Valores: Be Curious, Reframe Problems, Radical Collaboration, Avoid Clinging
- Sus colegas dicen: Team Worker, Beginner's Mindset, Curious and Proactive
- Design Thinking es su religión

═══ CERTIFICACIONES ═══
IxDF — Interaction Design Foundation (Product Used: Adoption & Appropriation, UI Design Patterns for Software, Gestalt Psychology and Web Design, Agile Methods for UX Design, Journey Mapping, Design Thinking), Platzi — CX Research & UX Testing 2024, Figma — Intro to Design Systems 2023, IBM — Agile Dev and Scrum 2023, FutureLearn — Digital Skills: UX 2021, Webflow 101, Microsoft Power BI

═══ TRAYECTORIA ═══
1. HELPDESK SAAS (Oct 2023-Presente) Santiago — Product Designer (UX/UI) & Product Owner (oct 2025+). Sole designer. Plataforma omnicanal de customer service con IA. 150+ clientes enterprise en retail, finanzas y telecom. Creó Diamond Design System, diseñó features con IA (bot flow builders, Platform GPT), diseñó app móvil, rediseñó analytics. Como PO: definió KPIs trimestrales, coordinó Eng + Finance + CS + Support. Implementó surveys de adopción, tracking DAU/MAU con Amplitude. Construyó sistema de documentación automatizado con IA.
2. PRICEMAKER (Oct 2021-Sep 2023) Santiago — Product Designer · UX/UI · Product Owner. SaaS B2B de pricing y promociones para CPG. Research end-to-end, service blueprints, handoff a desarrollo. Comunicación directa con stakeholders, backlog en Notion, QA. Ajustes front-end para apoyar al equipo de desarrollo.
3. VALIT (Mar 2021-Sep 2021) Santiago — Product Manager, Product Designer & Art Director. Equipo de 3.
4. DJ SCHOOL MUSIC ACADEMY (Feb 2020-Jul 2020) Santiago — Art Director. Branding. Web Design.
5. GALLO DE FUEGO (Feb 2019-Ene 2020) — Freelance Designer. Branding. Ilustración.
6. DEMASDE SPA (Mar 2018-Feb 2019) Santiago — Jr. Art Director.
7. ZEA BBDO (Sep 2017-Dic 2017) Caracas — Jr. Art Director.
8. PENTAGON MEDIA (Dic 2016-Jun 2017) — Jr. Art Director.

═══ SKILLS ═══
Figma (4+ años, avanzado), Design Thinking, Atomic Design, Scrum/Kanban, Product Ownership, User Research, Wireframing, Prototipado, Documentación/Handoff, Amplitude (Analytics & Metrics), Power BI, IA & Vibe Coding (Claude, GPT, Cursor, GitHub Copilot), HTML/CSS/JS (3+ años, nivel medio), LowCode (Framer, Webflow), Adobe Suite (8+ años, avanzado), Notion/Jira, Liderazgo (2+ años), Diseño gráfico, Ilustración, Animación, Fotografía

═══ PROYECTO: MONITOREO 2.0 (Productivity Analytics) ═══
Historia de transformación: de datos ignorados a decisiones en tiempo real. Una plataforma de customer service tenía toda la data de productividad pero nadie la usaba — los supervisores extraían datos por API a herramientas externas. Visité oficina de cliente y descubrí que proyectaban data en pantalla gigante con alarmas visuales. 4 problemas UX: estados no visibles, canales confusos, filtros inconsistentes, patrones mal aplicados. Rediseñé con filtros unificados, cards por estado, KPIs visibles, sistema de alarmas. Primera encuesta: 67% positiva (dividida). Escuché el feedback, iteré. Segunda encuesta: 93% positiva. Resultado: usuarios dejaron herramienta externa, pidieron MÁS datos, alarmas se expandieron a otras secciones. Competencia demostrada: User Research + Iteración basada en data.

═══ PROYECTO: DIAMOND DESIGN SYSTEM ═══
Historia de transformación: unificando una experiencia fragmentada. Plataforma CX con múltiples productos que se sentían como apps distintas. Diagnóstico: base pequeña, frameworks variados, UI incoherente. Construí DS con Atomic Design, retícula 8pts, Rubik y Karla. Átomos, Moléculas, Organismos — cada nivel construye sobre el anterior. Filosofía de handoff: "el dev es traductor, no intérprete". Documentación exhaustiva, ejemplo AButton con todas sus variaciones. Sistema vivo en constante evolución. Figma público. Competencia demostrada: Pensamiento sistémico + Colaboración con desarrollo.

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

/* PROJECTS imported from ./data/projects */
/* KNOWLEDGE_BASE, findKBMatch, simulateStream imported from ./data/knowledgeBase */

/* ═══════════════════════════════════════════════════════════════
   i18n
   ═══════════════════════════════════════════════════════════════ */
const T = {
  es: { greeting:"¡Hola! Soy Yayo", subtitle:"Product Owner & Designer con +10 años de experiencia.", subtitle2:"De Venezuela a Chile, del diseño gráfico al producto digital.", subtitle3:"Pregúntame lo que quieras sobre mi trabajo.", suggested:"— Consultas Sugeridas —", placeholder:"Escribe tu pregunta aquí...", thinking:"Yayo está escribiendo...", send:"Enviar", ready:"Listo", processing:"Procesando...", queries:"consultas", start:"Inicio", yrsDesign:"años diseño", yrsProduct:"años producto", companies:"empresas", projects:"Proyectos", contact:"Contacto", chat:"Chat", langToggle:"EN", restore:"Abrir Yayo.exe" },
  en: { greeting:"Hi! I'm Yayo", subtitle:"Product Owner & Designer with 10+ years of experience.", subtitle2:"From Venezuela to Chile, from graphic design to digital product.", subtitle3:"Ask me anything about my work.", suggested:"— Suggested Queries —", placeholder:"Type your question here...", thinking:"Yayo is typing...", send:"Send", ready:"Ready", processing:"Processing...", queries:"queries", start:"Start", yrsDesign:"yrs design", yrsProduct:"yrs product", companies:"companies", projects:"Projects", contact:"Contact", chat:"Chat", langToggle:"ES", restore:"Open Yayo.exe" },
};
const QUERIES = {
  es: [
    { icon:"👋", text:"¿Quién es Yayo?" },
    { icon:"🗺️", text:"¿Cuál ha sido tu trayectoria profesional?" },
    { icon:"🛠️", text:"¿Qué herramientas manejas?" },
    { icon:"🤝", text:"¿Cómo puedo contactarte?" },
    { icon:"💰", text:"Cuéntame sobre el sistema de Billing" },
  ],
  en: [
    { icon:"👋", text:"Who is Yayo?" },
    { icon:"🗺️", text:"What's your career path?" },
    { icon:"🛠️", text:"What tools do you use?" },
    { icon:"🤝", text:"How can I contact you?" },
    { icon:"💰", text:"Tell me about the Billing system" },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   COLORS
   ═══════════════════════════════════════════════════════════════ */
const C = { titleBar:"#000080", titleGrad:"linear-gradient(90deg,#000080,#1084D0)", titleText:"#FFF", winBg:"#C0C0C0", outset:"#DFDFDF", inset:"#808080", face:"#C0C0C0", desktop:"#000000", chatBg:"#FFFFFF", accent:"#000080", txt:"#000", txtMuted:"#666", botBubble:"#EDEDFF", userBubble:"#000080", userTxt:"#FFF" };

/* ═══════════════════════════════════════════════════════════════
   STARFIELD SCREENSAVER (Canvas)
   ═══════════════════════════════════════════════════════════════ */
function Starfield({ onRestore, onOpenBilling, lang }) {
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
    {icon:"📋",label:"CV",href:"/images/Gabriel_Galea_CV_2026.pdf"},
    {icon:"💰",label:"Proyecto Billing",action:onOpenBilling},
  ];

  return (
    <div style={{ position:"absolute", inset:0, zIndex:5, cursor:"default" }}>
      <canvas ref={canvasRef} style={{ display:"block", width:"100%", height:"100%" }} />

      {/* Desktop icons — same as normal desktop but on top of starfield */}
      <div style={{ position:"absolute",top:14,left:14,display:"flex",flexDirection:"column",gap:24,zIndex:6,userSelect:"none" }}>
        {desktopIcons.map((d,i)=>(
          d.action ? (
            <div key={i} onClick={d.action} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:3,textDecoration:"none",cursor:"pointer"}}>
              <div style={{fontSize:34,filter:"drop-shadow(1px 2px 2px rgba(0,0,0,.7))"}}>{d.icon}</div>
              <span style={{color:"#fff",fontSize:11,textShadow:"1px 1px 3px rgba(0,0,0,.95)",fontFamily:"'Segoe UI',Tahoma,sans-serif"}}>{d.label}</span>
            </div>
          ) : (
            <a key={i} href={d.href} target="_blank" rel="noopener noreferrer" style={{display:"flex",flexDirection:"column",alignItems:"center",gap:3,textDecoration:"none"}}>
              <div style={{fontSize:34,filter:"drop-shadow(1px 2px 2px rgba(0,0,0,.7))"}}>{d.icon}</div>
              <span style={{color:"#fff",fontSize:11,textShadow:"1px 1px 3px rgba(0,0,0,.95)",fontFamily:"'Segoe UI',Tahoma,sans-serif"}}>{d.label}</span>
            </a>
          )
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

/* Parse **bold** and *italic* into React elements */
function formatRichText(text) {
  if (!text) return text;
  // Split by **bold** and *italic* markers
  const parts = [];
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*)/g;
  let last = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    if (match[2]) parts.push(<strong key={match.index}>{match[2]}</strong>);
    else if (match[3]) parts.push(<em key={match.index}>{match[3]}</em>);
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length ? parts : text;
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

function CaseStudyCard({ galleryKey, lang, onOpen }) {
  const p = PROJECTS[galleryKey];
  if (!p) return null;
  const t = (v) => typeof v === "object" ? (v[lang] || v.es || v) : v;
  const icons = { monitoreo:"📊", dds:"💎", rendimiento:"📈", billing:"💰" };
  return (
    <div style={{ margin:"6px 0",padding:0,maxWidth:360,animation:"w98fadeIn .3s ease" }}>
      <div onClick={()=>onOpen(galleryKey)} style={{
        background:C.winBg,border:"2px outset "+C.outset,cursor:"pointer",
        transition:"all .1s",
      }}
        onMouseDown={e=>{e.currentTarget.style.border="2px inset "+C.inset}}
        onMouseUp={e=>{e.currentTarget.style.border="2px outset "+C.outset}}
        onMouseLeave={e=>{e.currentTarget.style.border="2px outset "+C.outset}}
      >
        <div style={{ background:C.titleGrad,color:C.titleText,padding:"3px 8px",fontSize:11,fontWeight:"bold",display:"flex",alignItems:"center",gap:6 }}>
          <span>{icons[galleryKey]||"📁"}</span>
          <span>{t(p.title)}</span>
        </div>
        <div style={{ padding:"10px 12px",display:"flex",alignItems:"center",gap:10 }}>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:11,color:C.txt,lineHeight:1.4 }}>{p.company} — {t(p.period)}</div>
            <div style={{ fontSize:10,color:C.txtMuted,marginTop:2 }}>{p.role}</div>
            <div style={{ fontSize:10,color:C.txtMuted,marginTop:2 }}>{p.slides.length} slides</div>
          </div>
          <div style={{
            background:C.accent,color:"#fff",padding:"5px 12px",fontSize:11,fontWeight:"bold",
            border:"2px outset #4040C0",fontFamily:"inherit",whiteSpace:"nowrap",
          }}>
            {lang==="es"?"Ver Caso ▶":"View Case ▶"}
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseStudyViewer({ project, lang, onClose }) {
  const [slide, setSlide] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const p = project;
  const t = (v) => typeof v === "object" ? (v[lang] || v.es || v) : v;
  const slides = p.slides;
  const s = slides[slide];

  /* Phase bar — derived from slides' `phase` field */
  const PHASE_LABELS = { context:{es:"Contexto",en:"Context"}, research:{es:"Investigación",en:"Research"}, goals:{es:"Objetivos",en:"Goals"}, wireframes:{es:"Wireframes",en:"Wireframes"}, prototype:{es:"Prototipo",en:"Prototype"}, ideation:{es:"Ideación",en:"Ideation"}, iteration:{es:"Iteración",en:"Iteration"}, results:{es:"Resultados",en:"Results"} };
  const phases = [];
  const phaseSlideMap = {};
  slides.forEach((sl, i) => {
    if (sl.phase && phaseSlideMap[sl.phase] === undefined) { phaseSlideMap[sl.phase] = i; phases.push(sl.phase); }
  });
  const currentPhase = s.phase || null;
  const hasPhases = phases.length > 0;

  const tagStyle = { display:"inline-block",background:"#E0E0FF",color:C.accent,padding:"2px 8px",fontSize:10,fontWeight:"bold",borderRadius:1,border:"1px solid #B8B8D8" };
  const bulletStyle = { padding:"4px 0",fontSize:12.5,lineHeight:1.5,color:C.txt };
  const flowBoxStyle = { background:C.accent,color:"#fff",padding:"6px 12px",fontSize:11,fontWeight:"bold",textAlign:"center",border:"2px outset #4040C0",minWidth:70 };
  const flowArrow = { color:C.accent,fontSize:16,fontWeight:"bold",userSelect:"none" };

  /* TranslatedSVG — renders SVG inline with translated text when lang=en */
  const TranslatedSVG = ({ src, alt, style, onClick }) => {
    const [svgMarkup, setSvgMarkup] = useState(null);
    useEffect(() => {
      if (lang !== "en" || !src?.endsWith(".svg")) { setSvgMarkup(null); return; }
      const filename = src.split("/").pop();
      const translations = SVG_TRANSLATIONS[filename];
      if (!translations) { setSvgMarkup(null); return; }
      let cancelled = false;
      fetch(src).then(r => r.text()).then(raw => {
        if (cancelled) return;
        let svg = raw;
        for (const [es, en] of translations) svg = svg.replaceAll(es, en);
        setSvgMarkup(svg);
      }).catch(() => { if (!cancelled) setSvgMarkup(null); });
      return () => { cancelled = true; };
    }, [src, lang]);

    if (svgMarkup) {
      return <div role="img" aria-label={alt} style={{width:"100%", ...style, cursor: onClick ? "pointer" : undefined}} onClick={onClick} dangerouslySetInnerHTML={{ __html: svgMarkup }} />;
    }
    return <img src={src} alt={alt} style={{...style, cursor: onClick ? "pointer" : undefined}} onClick={onClick} />;
  };

  const ClickableImage = ({ src, alt, style }) => {
    if (src?.endsWith(".svg") && lang === "en") {
      return <TranslatedSVG src={src} alt={alt} style={style} onClick={() => setLightbox(src)} />;
    }
    return <img src={src} alt={alt} style={{...style, cursor:"pointer"}} onClick={() => setLightbox(src)} />;
  };

  return (
    <div style={{ position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,128,.45)",zIndex:8000,display:"flex",alignItems:"center",justifyContent:"center",animation:"w98fadeIn .2s ease" }} onClick={onClose}>
      {/* Lightbox */}
      {lightbox && (
        <div onClick={(e) => { e.stopPropagation(); setLightbox(null); }} style={{ position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,.88)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-out",animation:"w98fadeIn .2s ease" }}>
          <div style={{ background:C.winBg,border:"2px outset "+C.outset,maxWidth:"92vw",maxHeight:"92vh", width: lightbox?.endsWith(".svg") && lang === "en" ? "88vw" : undefined }} onClick={e => e.stopPropagation()}>
            <div style={{ background:C.titleGrad,color:C.titleText,padding:"3px 6px",fontSize:11,fontWeight:"bold",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
              <span>🖼️ {t(s.title)}</span>
              <div onClick={() => setLightbox(null)} style={{width:14,height:14,background:C.face,border:"1px outset "+C.outset,display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,cursor:"pointer",fontWeight:"bold"}}>✕</div>
            </div>
            <div style={{ background: lightbox?.endsWith(".svg") ? "#fff" : "#000",padding:4,border:"2px inset "+C.inset }}>
              {lightbox?.endsWith(".svg") && lang === "en"
                ? <TranslatedSVG src={lightbox} alt={t(s.title)} style={{ width:"100%",maxHeight:"82vh",display:"block" }} />
                : <img src={lightbox} alt={t(s.title)} style={{ maxWidth:"88vw",maxHeight:"82vh",objectFit:"contain",display:"block" }} />}
            </div>
          </div>
        </div>
      )}

      {/* Win98 Window */}
      <div onClick={e => e.stopPropagation()} style={{ background:C.winBg,border:"2px outset "+C.outset,width:"94vw",maxWidth:720,height:"88vh",display:"flex",flexDirection:"column",boxShadow:"4px 4px 0 rgba(0,0,0,.3)" }}>
        {/* Title bar */}
        <div style={{ background:C.titleGrad,color:C.titleText,padding:"4px 8px",fontSize:12,fontWeight:"bold",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0 }}>
          <span>📁 {t(p.title)} — {p.company} ({t(p.period)})</span>
          <div style={{display:"flex",gap:6,alignItems:"center"}}>
            <span style={{fontSize:10,opacity:.8}}>{p.role}</span>
            {onClose && <div onClick={onClose} style={{width:16,height:16,background:C.face,border:"1px outset "+C.outset,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,cursor:"pointer",fontWeight:"bold"}}>✕</div>}
          </div>
        </div>

        {/* Phase progress bar */}
        {hasPhases && (
          <div style={{ display:"flex",gap:0,background:"#D4D0C8",borderBottom:"1px solid "+C.inset,overflow:"hidden",flexShrink:0 }}>
            {phases.map((ph, i) => {
              const label = PHASE_LABELS[ph] ? t(PHASE_LABELS[ph]) : ph;
              const isActive = ph === currentPhase;
              const isPast = phases.indexOf(currentPhase) > i;
              return (
                <div key={ph} onClick={() => setSlide(phaseSlideMap[ph])} style={{
                  flex:1,padding:"5px 2px",fontSize:10,fontWeight:"bold",textAlign:"center",cursor:"pointer",
                  background: isActive ? C.accent : isPast ? "#A0A0D0" : "transparent",
                  color: isActive ? "#fff" : isPast ? "#fff" : C.txtMuted,
                  borderRight: i < phases.length-1 ? "1px solid #B8B8B8" : "none",
                  transition:"all .15s",
                }}>{label}</div>
              );
            })}
          </div>
        )}

        {/* Slide content — scrollable */}
        <div style={{ background:"#fff",padding:"18px 22px",flex:1,overflow:"auto",border:"2px inset "+C.inset,margin:2 }}>
          {/* Slide header */}
          <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:12 }}>
            <span style={{fontSize:22}}>{s.icon}</span>
            <span style={{fontSize:16,fontWeight:"bold",color:C.accent,fontFamily:"'Trebuchet MS',Tahoma,sans-serif"}}>{t(s.title)}</span>
            <span style={{fontSize:11,color:C.txtMuted,marginLeft:"auto"}}>{slide+1}/{slides.length}</span>
          </div>

        {/* Content text */}
        {s.content && <div style={{fontSize:13.5,lineHeight:1.65,color:C.txt,whiteSpace:"pre-wrap",marginBottom:s.bullets||s.atoms||s.screens||s.profiles||s.flow||s.tags||s.image||s.images||s.stat?12:0,padding: s.highlight?"12px 16px":0,background:s.highlight?"#FFFFF0":undefined,border:s.highlight?"1px solid #E8E8C0":undefined}}>{formatRichText(t(s.content))}</div>}

        {/* Stat highlight layout */}
        {s.stat && (
          <div style={{textAlign:"center",padding:"16px 8px",margin:"8px 0",background:"#F0F0FF",border:"2px inset "+C.inset}}>
            <div style={{fontSize:42,fontWeight:"bold",color:C.accent,fontFamily:"'Trebuchet MS',Tahoma,sans-serif"}}>{t(s.stat)}</div>
            {s.statLabel && <div style={{fontSize:13,color:C.txt,marginTop:4}}>{t(s.statLabel)}</div>}
            {s.statDelta && <div style={{fontSize:11,color:"#228B22",marginTop:4,fontWeight:"bold"}}>{t(s.statDelta)}</div>}
          </div>
        )}

        {/* Single image */}
        {s.image && <div style={{margin:"8px 0",background:s.image.endsWith(".svg")?"#fff":"transparent",border:"2px inset "+C.inset,overflow:"hidden",display:"flex",justifyContent:"center",padding:s.image.endsWith(".svg")?"8px 4px":0}}>
          <ClickableImage src={s.image} alt={t(s.title)} style={{maxWidth:"100%",maxHeight:380,objectFit:"contain",display:"block"}} />
        </div>}

        {/* Multi-image grid */}
        {s.images && (
          <div style={{display:"grid",gridTemplateColumns:s.images.length === 1 ? "1fr" : "1fr 1fr",gap:6,margin:"8px 0"}}>
            {s.images.map((img, i) => (
              <div key={i} style={{background:"transparent",border:"2px inset "+C.inset,overflow:"hidden",display:"flex",flexDirection:"column"}}>
                <ClickableImage src={img.src || img} alt={img.caption ? t(img.caption) : t(s.title)} style={{width:"100%",maxHeight:260,objectFit:"contain",display:"block"}} />
                {img.caption && <div style={{background:C.winBg,padding:"3px 6px",fontSize:10,color:C.txt,textAlign:"center",borderTop:"1px solid "+C.inset}}>{t(img.caption)}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Before/After layout */}
        {s.beforeAfter && (
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,margin:"8px 0"}}>
            <div style={{border:"2px inset "+C.inset,overflow:"hidden"}}>
              <div style={{background:"#D32F2F",color:"#fff",padding:"2px 8px",fontSize:10,fontWeight:"bold",textAlign:"center"}}>{lang==="es"?"Antes":"Before"}</div>
              {s.beforeAfter.before.image && <div style={{background:"#000",display:"flex",justifyContent:"center"}}>
                <ClickableImage src={s.beforeAfter.before.image} alt="Before" style={{width:"100%",maxHeight:240,objectFit:"contain",display:"block"}} />
              </div>}
              {s.beforeAfter.before.bullets && <div style={{padding:"6px 8px",background:"#FFF0F0"}}>{t(s.beforeAfter.before.bullets).map((b,i)=><div key={i} style={{fontSize:11,lineHeight:1.4,padding:"2px 0",color:C.txt}}>{b}</div>)}</div>}
            </div>
            <div style={{border:"2px inset "+C.inset,overflow:"hidden"}}>
              <div style={{background:"#2E7D32",color:"#fff",padding:"2px 8px",fontSize:10,fontWeight:"bold",textAlign:"center"}}>{lang==="es"?"Después":"After"}</div>
              {s.beforeAfter.after.image && <div style={{background:"#000",display:"flex",justifyContent:"center"}}>
                <ClickableImage src={s.beforeAfter.after.image} alt="After" style={{width:"100%",maxHeight:240,objectFit:"contain",display:"block"}} />
              </div>}
              {s.beforeAfter.after.bullets && <div style={{padding:"6px 8px",background:"#F0FFF0"}}>{t(s.beforeAfter.after.bullets).map((b,i)=><div key={i} style={{fontSize:11,lineHeight:1.4,padding:"2px 0",color:C.txt}}>{b}</div>)}</div>}
            </div>
          </div>
        )}

        {/* Annotated image with callouts */}
        {s.annotated && (
          <div style={{margin:"8px 0"}}>
            {s.annotated.image && <div style={{background:"#000",border:"2px inset "+C.inset,overflow:"hidden",display:"flex",justifyContent:"center",marginBottom:6}}>
              <ClickableImage src={s.annotated.image} alt={t(s.title)} style={{maxWidth:"100%",maxHeight:320,objectFit:"contain",display:"block"}} />
            </div>}
            {s.annotated.callouts && <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4}}>
              {t(s.annotated.callouts).map((c,i) => (
                <div key={i} style={{display:"flex",gap:6,alignItems:"flex-start",padding:"4px 6px",background:"#F4F4FF",border:"1px solid #D8D8E8",fontSize:11,lineHeight:1.4}}>
                  <span style={{background:C.accent,color:"#fff",borderRadius:"50%",width:18,height:18,minWidth:18,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:"bold"}}>{i+1}</span>
                  <span style={{color:C.txt}}>{c}</span>
                </div>
              ))}
            </div>}
          </div>
        )}

        {/* Tags */}
        {s.tags && <div style={{display:"flex",flexWrap:"wrap",gap:4,marginBottom:10}}>{s.tags.map((tag,i)=><span key={i} style={tagStyle}>{tag}</span>)}</div>}

        {/* Bullets */}
        {s.bullets && <div style={{marginBottom:8}}>{t(s.bullets).map((b,i)=><div key={i} style={bulletStyle}>{formatRichText(b)}</div>)}</div>}

        {/* Bottom image (after bullets) */}
        {s.bottomImage && <div style={{margin:"8px 0",background:s.bottomImage.endsWith(".svg")?"#fff":"transparent",border:"2px inset "+C.inset,overflow:"hidden",display:"flex",justifyContent:"center",padding:s.bottomImage.endsWith(".svg")?"8px 4px":0}}>
          <ClickableImage src={s.bottomImage} alt={t(s.title)} style={{maxWidth:"100%",maxHeight:380,objectFit:"contain",display:"block"}} />
        </div>}

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

        {/* Figma embed */}
        {s.figmaLink && (
          <div style={{margin:"12px 0",textAlign:"center"}}>
            <a href={s.figmaLink} target="_blank" rel="noopener noreferrer" style={{
              display:"inline-block",background:C.accent,color:"#fff",
              padding:"8px 20px",fontSize:12,fontWeight:"bold",border:"2px outset #4040C0",
              textDecoration:"none",fontFamily:"inherit",cursor:"pointer",
            }}>{lang==="es"?"🖥️ Ver prototipo en Figma ↗":"🖥️ View prototype in Figma ↗"}</a>
          </div>
        )}

        {s.figmaEmbed && (
          <div style={{margin:"8px 0",border:"2px inset "+C.inset,background:"#fff",position:"relative"}}>
            <iframe
              style={{border:"none",width:"100%",height:420,display:"block"}}
              src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(s.figmaEmbed)}`}
              allowFullScreen
            />
            <a href={s.figmaEmbed} target="_blank" rel="noopener noreferrer" style={{
              position:"absolute",bottom:8,right:8,background:C.accent,color:"#fff",
              padding:"4px 10px",fontSize:10,fontWeight:"bold",border:"2px outset #4040C0",
              textDecoration:"none",fontFamily:"inherit",
            }}>{lang==="es"?"Abrir en Figma ↗":"Open in Figma ↗"}</a>
          </div>
        )}
      </div>

      {/* Navigation — fixed at bottom of window */}
      <div style={{ padding:"8px 10px",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0,borderTop:"1px solid "+C.inset }}>
        <div style={{display:"flex",gap:3,flexWrap:"wrap"}}>
          {slides.map((_,i)=>(
            <div key={i} onClick={()=>setSlide(i)} style={{
              width:i===slide?22:8,height:8,
              background:i===slide?C.accent:"#B0B0B0",
              cursor:"pointer",transition:"all .15s",
              border:"1px solid "+(i===slide?C.accent:"#999"),
            }}/>
          ))}
        </div>
        <div style={{display:"flex",gap:4}}>
          <button disabled={slide===0} onClick={()=>setSlide(slide-1)} style={{ background:C.face,border:"2px outset "+C.outset,padding:"3px 12px",fontSize:12,cursor:slide===0?"not-allowed":"pointer",opacity:slide===0?.4:1,fontFamily:"inherit" }}>◀ {lang==="es"?"Ant.":"Prev"}</button>
          <button disabled={slide===slides.length-1} onClick={()=>setSlide(slide+1)} style={{ background:C.face,border:"2px outset "+C.outset,padding:"3px 12px",fontSize:12,cursor:slide===slides.length-1?"not-allowed":"pointer",opacity:slide===slides.length-1?.4:1,fontFamily:"inherit" }}>{lang==="es"?"Sig.":"Next"} ▶</button>
          {p.figma && <a href={p.figma} target="_blank" rel="noopener noreferrer" style={{ background:C.accent,border:"2px outset #4040C0",padding:"3px 12px",fontSize:12,textDecoration:"none",color:"#fff",fontFamily:"inherit",display:"flex",alignItems:"center" }}>Figma ↗</a>}
        </div>
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

function StartMenu({ open, onClose, lang, onAskProjects }) {
  if (!open) return null;
  const links = [
    { icon:"📧", label:"dotyayodot@gmail.com", href:"mailto:dotyayodot@gmail.com" },
    { icon:"💼", label:"LinkedIn", href:"https://www.linkedin.com/in/yayogalea/" },
    { icon:"📄", label:lang==="es"?"Descargar CV":"Download CV", href:"/images/Gabriel_Galea_CV_2026.pdf" },
    { icon:"📂", label:lang==="es"?"Mis Proyectos":"My Projects", action:()=>{onAskProjects();onClose();} },
  ];
  return (<>
    <div onClick={onClose} style={{position:"fixed",inset:0,zIndex:998}}/>
    <div style={{ position:"fixed",bottom:38,left:2,background:C.winBg,border:"2px outset "+C.outset,minWidth:240,zIndex:999,boxShadow:"3px 3px 0 rgba(0,0,0,.25)",animation:"w98slideUp .12s ease-out" }}>
      <div style={{ background:C.titleBar,color:C.titleText,padding:"8px 6px",fontWeight:"bold",fontSize:13,writingMode:"vertical-rl",textOrientation:"mixed",position:"absolute",left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"flex-end",letterSpacing:3,width:28 }}>YAYO</div>
      <div style={{marginLeft:28,padding:"4px 0"}}>
        {links.map((l,i)=>(
          <a key={i} href={l.href||"#"} target={l.href?"_blank":undefined} rel="noopener noreferrer"
            onClick={e=>{if(l.action){e.preventDefault();l.action();}}}
            style={{display:"flex",alignItems:"center",gap:10,padding:"7px 14px",textDecoration:"none",color:C.txt,fontSize:12.5,fontFamily:"inherit",cursor:"pointer"}}
            onMouseEnter={e=>e.currentTarget.style.background="#00008018"}
            onMouseLeave={e=>e.currentTarget.style.background="transparent"}
          ><span style={{fontSize:15}}>{l.icon}</span><span>{l.label}</span></a>
        ))}
        <div style={{height:1,background:C.inset,margin:"4px 10px"}}/>
        <div style={{padding:"6px 14px",fontSize:11,color:C.txtMuted}}>Product Owner & Designer 🤠</div>
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
  const langRef = useRef(lang);
  useEffect(() => { langRef.current = lang; }, [lang]);

  // Wrapper that keeps ref always in sync
  const setMsgsSync = useCallback((updater) => {
    setMsgs(prev => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      msgsRef.current = next;
      return next;
    });
  }, []);

  // Clean [>>] tags from messages before sending to API
  const cleanForAPI = (messages) => messages
    .filter(m => m.role !== "gallery-hint")
    .map(m => ({
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
    const kbResponse = kbMatch?.response?.[langRef.current] || kbMatch?.response?.es;

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
      // Add gallery hint card after the response
      let hintKey = kbMatch.gallery || null;
      if (!hintKey) {
        const lower = text.toLowerCase();
        if (lower.includes("monitoreo")||lower.includes("monitoring")) hintKey = "monitoreo";
        else if (lower.includes("diamond")||lower.includes("design system")) hintKey = "dds";
        else if (lower.includes("rendimiento")||lower.includes("performance")||lower.includes("team performance")) hintKey = "rendimiento";
        else if (lower.includes("billing")||lower.includes("factur")||lower.includes("invoice")||lower.includes("financial")||lower.includes("spreadsheet")) hintKey = "billing";
      }
      if (hintKey) {
        setMsgsSync(prev => [...prev, { role:"gallery-hint", galleryKey: hintKey }]);
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
        let apiHintKey = null;
        if(lower.includes("monitoreo")||lower.includes("monitoring")||lower.includes("analytics")||lower.includes("dashboard")||lower.includes("productiv")) apiHintKey="monitoreo";
        else if(lower.includes("diamond")||lower.includes("design system")||lower.includes("dds")) apiHintKey="dds";
        else if(lower.includes("rendimiento")||lower.includes("performance")||lower.includes("team performance")) apiHintKey="rendimiento";
        else if(lower.includes("billing")||lower.includes("factur")||lower.includes("invoice")||lower.includes("financial")||lower.includes("spreadsheet")) apiHintKey="billing";
        if (apiHintKey) setMsgsSync(prev => [...prev, { role:"gallery-hint", galleryKey: apiHintKey }]);
      }catch{
        // API failed — try KB with looser match or show offline message
        setMsgsSync(prev=>{
          const updated=[...prev];
          updated[assistantIdx]={role:"assistant",content: langRef.current==="es"
            ? "Estoy en modo offline ahora mismo 😅 Pero puedes explorar mis proyectos desde el menú de Proyectos arriba, o preguntarme por alguno de los temas sugeridos.\n\n[>>¿Quién es Yayo?]\n[>>¿Qué proyectos has hecho?]\n[>>¿Cómo puedo contactarte?]"
            : "I'm in offline mode right now 😅 But you can explore my projects from the Projects menu above, or ask me about any of the suggested topics.\n\n[>>Who is Yayo?]\n[>>What projects have you done?]\n[>>How can I contact you?]"
          };
          return updated;
        });
      }
    }
    loadingRef.current=false;
    setLoading(false);
    setStreaming(false);
  },[]);

  function onKey(e){if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send(input);}}

  const resetChat = useCallback(() => {
    setMsgsSync([]);
    setInput("");
    setFresh(true);
    setGallery(null);
    setLoading(false);
    setStreaming(false);
    loadingRef.current = false;
  }, []);

  const chatMenuItems = [
    {icon:"🔄",label:lang==="es"?"Nueva conversación":"New conversation",action:resetChat},
  ];

  const projectOrder = ["billing","monitoreo","dds","rendimiento"];
  const projectMenuItems = [
    ...projectOrder.filter(key => PROJECTS[key] && !PROJECTS[key].hidden).map(key => ({
      icon: {monitoreo:"📊",dds:"💎",rendimiento:"📈",billing:"💰"}[key] || "📁",
      label: key === "monitoreo" ? (lang==="es"?"Monitoreo 2.0":"Monitoring 2.0") : key === "dds" ? "Diamond Design System" : key === "rendimiento" ? (lang==="es"?"Rendimiento de Equipo":"Team Performance") : key === "billing" ? (lang==="es"?"Sistema de Billing":"Billing System") : PROJECTS[key].title[lang],
      action: () => { setGallery(key); setFresh(false); },
    })),
  ];
  const contactMenuItems = [
    {icon:"📧",label:"dotyayodot@gmail.com",href:"mailto:dotyayodot@gmail.com"},
    {icon:"💼",label:"LinkedIn",href:"https://www.linkedin.com/in/yayogalea/"},
    {icon:"📄",label:lang==="es"?"Descargar CV":"Download CV",href:"/images/Gabriel_Galea_CV_2026.pdf"},
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
          {icon:"📋",label:"CV",href:"/images/Gabriel_Galea_CV_2026.pdf"},
          {icon:"💰",label:"Proyecto Billing",action:()=>{ setGallery("billing"); setFresh(false); }},
        ].map((d,i)=>(
          d.action ? (
            <div key={i} onClick={d.action} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:3,textDecoration:"none",cursor:"pointer"}}>
              <div style={{fontSize:34,filter:"drop-shadow(1px 1px 1px rgba(0,0,0,.4))"}}>{d.icon}</div>
              <span style={{color:"#fff",fontSize:11,textShadow:"1px 1px 2px rgba(0,0,0,.9)",fontFamily:"inherit"}}>{d.label}</span>
            </div>
          ) : (
            <a key={i} href={d.href} target="_blank" rel="noopener noreferrer" style={{display:"flex",flexDirection:"column",alignItems:"center",gap:3,textDecoration:"none"}}>
              <div style={{fontSize:34,filter:"drop-shadow(1px 1px 1px rgba(0,0,0,.4))"}}>{d.icon}</div>
              <span style={{color:"#fff",fontSize:11,textShadow:"1px 1px 2px rgba(0,0,0,.9)",fontFamily:"inherit"}}>{d.label}</span>
            </a>
          )
        ))}
      </div>

      {/* STARFIELD when minimized */}
      {minimized && <Starfield onRestore={()=>setMinimized(false)} onOpenBilling={()=>{ setMinimized(false); setGallery("billing"); setFresh(false); }} lang={lang} />}

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
              {label:t.chat,key:"chat",items:chatMenuItems},
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
                    {[{n:"10+",l:t.yrsDesign},{n:"+5",l:t.yrsProduct}].map((s,i)=>(
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
            {msgs.map((m,i)=> {
              if (m.role==="gallery-hint") return <CaseStudyCard key={i} galleryKey={m.galleryKey} lang={lang} onOpen={(k)=>{setGallery(k);setFresh(false);}} />;
              const isLastBubble = !msgs.slice(i+1).some(x => x.role !== "gallery-hint");
              return <Bubble key={i} msg={m} onQuickReply={send} isLast={isLastBubble} loading={loading}/>;
            })}
            {loading && !streaming && <TypingDots/>}
            {/* CaseStudyViewer rendered as fullscreen overlay below */}
          </div>

          {/* Input */}
          <div style={{padding:6,display:"flex",gap:5,alignItems:"flex-end",flexShrink:0}}>
            {!fresh && <button onClick={resetChat} disabled={loading} title={lang==="es"?"Nueva conversación":"New conversation"}
              style={{ background:C.face,border:"2px outset "+C.outset,padding:"7px 10px",fontSize:14,fontFamily:"inherit",cursor:loading?"not-allowed":"pointer",opacity:loading?.5:1,minHeight:36,display:"flex",alignItems:"center",justifyContent:"center",color:C.txt }}
              onMouseDown={e=>{if(!loading)e.currentTarget.style.border="2px inset "+C.inset}}
              onMouseUp={e=>{e.currentTarget.style.border="2px outset "+C.outset}}
              onMouseLeave={e=>{e.currentTarget.style.border="2px outset "+C.outset}}
            >🔄</button>}
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

      <StartMenu open={menuOpen} onClose={()=>setMenuOpen(false)} lang={lang} onAskProjects={()=>send(lang==="es"?"¿Qué proyectos has hecho?":"What projects have you done?")}/>

      {/* Fullscreen Case Study Viewer overlay */}
      {gallery && PROJECTS[gallery] && <CaseStudyViewer project={PROJECTS[gallery]} lang={lang} onClose={()=>setGallery(null)}/>}
    </div>
  );
}
