# 🤠 Yayo Portfolio — AI Chat

Portfolio interactivo estilo Windows 98 con chat AI que responde sobre la experiencia y proyectos de Yayo.

## Requisitos

- [Node.js](https://nodejs.org/) 18+ instalado
- Una [API key de Anthropic](https://console.anthropic.com/)
- Cuenta en [GitHub](https://github.com) (gratis)
- Cuenta en [Vercel](https://vercel.com) (gratis)

## Paso a paso para publicar

### 1. Descargar el proyecto

Descarga esta carpeta completa a tu computador.

### 2. Instalar dependencias

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

### 3. Configurar la API Key

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
cp .env.example .env.local
```

Edita `.env.local` y reemplaza con tu API key real:

```
ANTHROPIC_API_KEY=sk-ant-tu-api-key-real
```

### 4. Probar localmente

```bash
npm run dev
```

Abre http://localhost:3000 — deberías ver el portafolio funcionando.

### 5. Subir a GitHub

```bash
git init
git add .
git commit -m "Yayo Portfolio v1"
```

Ve a https://github.com/new y crea un repositorio nuevo (puede ser privado).

```bash
git remote add origin https://github.com/TU_USUARIO/yayo-portfolio.git
git branch -M main
git push -u origin main
```

### 6. Hacer deploy en Vercel

1. Ve a https://vercel.com y haz login con tu cuenta de GitHub
2. Click en **"Add New" → "Project"**
3. Importa tu repositorio `yayo-portfolio`
4. **IMPORTANTE**: Antes de hacer deploy, ve a **"Environment Variables"** y agrega:
   - Key: `ANTHROPIC_API_KEY`
   - Value: `sk-ant-tu-api-key-real`
5. Click en **"Deploy"**
6. Espera ~1 minuto y tendrás tu URL pública tipo `yayo-portfolio.vercel.app`

### 7. Dominio personalizado (opcional)

En el dashboard de Vercel → Settings → Domains, puedes agregar un dominio propio (ej: `yayo.design`).

## Costos estimados

| Servicio | Costo |
|----------|-------|
| Vercel hosting | **Gratis** (tier hobby) |
| Anthropic API | **~$3-5/mes** (uso normal de portafolio) |
| Dominio personalizado | **~$10-15/año** (opcional) |

## Estructura del proyecto

```
yayo-portfolio/
├── app/
│   ├── api/chat/route.js    ← Proxy a Anthropic (API key segura)
│   ├── layout.js            ← Layout HTML + metadata
│   └── page.jsx             ← Componente principal del portafolio
├── public/images/           ← Capturas de los casos de estudio
├── .env.example             ← Template de variables de entorno
├── .gitignore
├── next.config.js
├── package.json
└── README.md
```

## Agregar imágenes

Coloca las capturas en `public/images/` con estos nombres:
- `mon_old_dashboard.png` — Dashboard anterior del Monitoreo
- `mon_problems_12.png` — Problemas identificados 1 y 2
- `mon_wireframe_2.png` — Wireframe del nuevo diseño
- `mon_prototype_columns.png` — Prototipo con columnas
- `mon_survey_67.png` — Resultado encuesta 1 (67%)
- `mon_survey_93.png` — Resultado encuesta 2 (93%)

Para reemplazar con capturas de mejor resolución, simplemente sobreescribe los archivos manteniendo los mismos nombres.

## Agregar más casos de uso

Edita `app/page.jsx` y agrega objetos al `PROJECTS` con la estructura de slides. También actualiza el `YAYO_SYSTEM_PROMPT` para que la IA conozca el nuevo proyecto.
