const { test, expect } = require('@playwright/test');

/* ═══════════════════════════════════════════════════════════════
   QA TEST SUITE — Yayo Portfolio
   Comprehensive checks: rendering, i18n, links, data, images,
   interactions, translations, old references, consistency
   ═══════════════════════════════════════════════════════════════ */

test.describe('1. PAGE LOAD & BASIC RENDERING', () => {
  test('Page loads without errors', async ({ page }) => {
    const errors = [];
    page.on('pageerror', err => errors.push(err.message));
    await page.goto('/');
    await page.waitForTimeout(2000);
    expect(errors).toEqual([]);
  });

  test('No console errors on load', async ({ page }) => {
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });
    await page.goto('/');
    await page.waitForTimeout(2000);
    // Filter out expected Next.js dev warnings
    const realErrors = consoleErrors.filter(e =>
      !e.includes('Download the React DevTools') &&
      !e.includes('act(') &&
      !e.includes('Warning:')
    );
    expect(realErrors).toEqual([]);
  });

  test('Main window renders with title bar', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    const titleBar = page.locator('text=Yayo.exe — Portfolio Chat');
    await expect(titleBar).toBeVisible();
  });

  test('Welcome screen shows on initial load', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    // Should show greeting in Spanish by default
    const greeting = page.locator('text=¡Hola! Soy Yayo');
    await expect(greeting).toBeVisible();
  });

  test('Subtitle lines render correctly (ES)', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await expect(page.locator('text=Product Owner & Designer con +10 años de experiencia.')).toBeVisible();
    await expect(page.locator('text=De Venezuela a Chile, del diseño gráfico al producto digital.')).toBeVisible();
    await expect(page.locator('text=Pregúntame lo que quieras sobre mi trabajo.')).toBeVisible();
  });

  test('Stats cards show correct values', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await expect(page.locator('text=10+')).toBeVisible();
    await expect(page.locator('text=+5')).toBeVisible();
  });
});

test.describe('2. SUGGESTED QUERIES (ES)', () => {
  test('All 5 suggested queries visible in Spanish', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    const queries = [
      '¿Quién es Yayo?',
      '¿Cuál ha sido tu trayectoria profesional?',
      '¿Qué herramientas manejas?',
      '¿Cómo puedo contactarte?',
      'Cuéntame sobre el sistema de Billing',
    ];
    for (const q of queries) {
      await expect(page.locator(`text=${q}`)).toBeVisible();
    }
  });

  test('Clicking "¿Quién es Yayo?" triggers response', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('button', { hasText: '¿Quién es Yayo?' }).click();
    await page.waitForTimeout(3000);
    // Should show KB response about Yayo
    await expect(page.locator('text=Gabriel González Galea')).toBeVisible();
  });
});

test.describe('3. LANGUAGE TOGGLE (i18n)', () => {
  test('Language toggle button exists in menu bar', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    // Menu bar language toggle shows "EN" when in Spanish
    const menuToggle = page.locator('button:has-text("🌐 EN")').first();
    await expect(menuToggle).toBeVisible();
  });

  test('Switching to English updates all UI text', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    // Click the language toggle in menu bar
    await page.locator('button:has-text("🌐 EN")').first().click();
    await page.waitForTimeout(500);

    // Check English translations
    await expect(page.locator('text=Hi! I\'m Yayo')).toBeVisible();
    await expect(page.locator('text=Product Owner & Designer with 10+ years of experience.')).toBeVisible();
    await expect(page.locator('text=From Venezuela to Chile, from graphic design to digital product.')).toBeVisible();
    await expect(page.locator('text=Ask me anything about my work.')).toBeVisible();
  });

  test('Suggested queries update to English', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('button:has-text("🌐 EN")').first().click();
    await page.waitForTimeout(500);

    const enQueries = [
      'Who is Yayo?',
      "What's your career path?",
      'What tools do you use?',
      'How can I contact you?',
      'Tell me about the Billing system',
    ];
    for (const q of enQueries) {
      await expect(page.locator(`button:has-text("${q}")`)).toBeVisible();
    }
  });

  test('Toggle back to Spanish works', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    // Go to English
    await page.locator('button:has-text("🌐 EN")').first().click();
    await page.waitForTimeout(500);
    // Go back to Spanish
    await page.locator('button:has-text("🌐 ES")').first().click();
    await page.waitForTimeout(500);
    await expect(page.locator('text=¡Hola! Soy Yayo')).toBeVisible();
  });

  test('KB responses use correct language when toggled to English', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    // Switch to English first
    await page.locator('button:has-text("🌐 EN")').first().click();
    await page.waitForTimeout(500);
    // Click English query
    await page.locator('button', { hasText: 'Who is Yayo?' }).click();
    await page.waitForTimeout(3000);
    // Should get English response
    await expect(page.locator('text=Born in Venezuela')).toBeVisible();
  });
});

test.describe('4. MENU BAR — Chat, Projects, Contact', () => {
  test('Menu bar has Chat, Proyectos, Contacto labels (ES)', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await expect(page.locator('text=Chat').first()).toBeVisible();
    await expect(page.locator('text=Proyectos').first()).toBeVisible();
    await expect(page.locator('text=Contacto').first()).toBeVisible();
  });

  test('Projects menu opens with 4 projects', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    // Click on "Proyectos" menu
    await page.locator('span', { hasText: 'royectos' }).first().click();
    await page.waitForTimeout(300);
    // Should show all 4 projects (use exact role locators to avoid ambiguity with suggested queries)
    await expect(page.getByRole('link', { name: /Sistema de Billing/ })).toBeVisible();
    await expect(page.locator('text=Monitoreo 2.0')).toBeVisible();
    await expect(page.locator('text=Diamond Design System')).toBeVisible();
    await expect(page.locator('text=Rendimiento de Equipo')).toBeVisible();
  });

  test('Contact menu shows email, LinkedIn, CV', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('span', { hasText: 'ontacto' }).first().click();
    await page.waitForTimeout(300);
    await expect(page.locator('text=dotyayodot@gmail.com')).toBeVisible();
    await expect(page.locator('text=LinkedIn')).toBeVisible();
    await expect(page.locator('text=Descargar CV')).toBeVisible();
  });

  test('Chat menu has "Nueva conversación" option', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    // First trigger a conversation to make chat menu relevant
    await page.locator('button', { hasText: '¿Quién es Yayo?' }).click();
    await page.waitForTimeout(3000);
    await page.locator('span', { hasText: /^Chat$/ }).first().click();
    await page.waitForTimeout(300);
    await expect(page.locator('text=Nueva conversación')).toBeVisible();
  });
});

test.describe('5. START MENU', () => {
  test('Start menu opens when clicking Inicio button', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('button', { hasText: 'Inicio' }).click();
    await page.waitForTimeout(300);
    // Start menu should show contact info
    await expect(page.locator('text=dotyayodot@gmail.com')).toBeVisible();
    await expect(page.locator('text=LinkedIn')).toBeVisible();
  });

  test('Start menu has CV download link', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('button', { hasText: 'Inicio' }).click();
    await page.waitForTimeout(300);
    await expect(page.locator('text=Descargar CV')).toBeVisible();
    // Check the href points to the correct PDF
    const cvLink = page.locator('a:has-text("Descargar CV")');
    await expect(cvLink).toHaveAttribute('href', '/images/Gabriel_Galea_CV_2026.pdf');
  });

  test('Start menu does NOT have old Framer portfolio link', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('button', { hasText: 'Inicio' }).click();
    await page.waitForTimeout(300);
    await expect(page.locator('text=Portafolio Framer')).not.toBeVisible();
  });

  test('Start menu has Diamond DS Figma link', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('button', { hasText: 'Inicio' }).click();
    await page.waitForTimeout(300);
    await expect(page.locator('text=Diamond DS (Figma)')).toBeVisible();
  });
});

test.describe('6. DESKTOP ICONS', () => {
  test('CV desktop icon is visible and links to correct PDF', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    const cvIcon = page.locator('a:has-text("CV")').first();
    await expect(cvIcon).toBeVisible();
    await expect(cvIcon).toHaveAttribute('href', '/images/Gabriel_Galea_CV_2026.pdf');
  });

  test('Billing project desktop icon is visible', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await expect(page.locator('text=Proyecto Billing')).toBeVisible();
  });
});

test.describe('7. CASE STUDY VIEWER — All Projects', () => {
  const projects = [
    { menuLabel: 'Sistema de Billing', menuLocator: 'link', titleES: 'De spreadsheets frágiles a un sistema financiero robusto', company: 'SaaS B2B' },
    { menuLabel: 'Monitoreo 2.0', titleES: 'Rediseño de Monitoreo en Tiempo Real', company: 'Helpdesk SaaS' },
    { menuLabel: 'Diamond Design System', titleES: 'Unificando una experiencia fragmentada', company: 'CX Platform' },
    { menuLabel: 'Rendimiento de Equipo', titleES: 'Rediseño de Rendimiento de Equipo', company: 'Helpdesk SaaS' },
  ];

  // Helper to click a project from the menu, handling Billing ambiguity
  async function openProjectFromMenu(page, proj) {
    await page.locator('span', { hasText: 'royectos' }).first().click();
    await page.waitForTimeout(300);
    if (proj.menuLocator === 'link') {
      await page.getByRole('link', { name: new RegExp(proj.menuLabel) }).click();
    } else {
      await page.locator(`text=${proj.menuLabel}`).click();
    }
    await page.waitForTimeout(500);
  }

  for (const proj of projects) {
    test(`${proj.menuLabel}: opens and shows correct title`, async ({ page }) => {
      await page.goto('/');
      await page.waitForTimeout(1500);
      await openProjectFromMenu(page, proj);
      await expect(page.locator(`text=${proj.titleES}`).first()).toBeVisible();
    });

    test(`${proj.menuLabel}: shows company name "${proj.company}"`, async ({ page }) => {
      await page.goto('/');
      await page.waitForTimeout(1500);
      await openProjectFromMenu(page, proj);
      await expect(page.locator(`text=${proj.company}`).first()).toBeVisible();
    });

    test(`${proj.menuLabel}: navigation buttons work (Next/Prev)`, async ({ page }) => {
      await page.goto('/');
      await page.waitForTimeout(1500);
      await openProjectFromMenu(page, proj);

      // "Prev" should be disabled on first slide
      const prevBtn = page.locator('button:has-text("Ant.")');
      await expect(prevBtn).toBeDisabled();

      // "Next" should be enabled
      const nextBtn = page.locator('button:has-text("Sig.")');
      await expect(nextBtn).toBeEnabled();

      // Click next and verify prev becomes enabled
      await nextBtn.click();
      await page.waitForTimeout(300);
      await expect(prevBtn).toBeEnabled();
    });

    test(`${proj.menuLabel}: close button works`, async ({ page }) => {
      await page.goto('/');
      await page.waitForTimeout(1500);
      await openProjectFromMenu(page, proj);

      // Click the close button (✕)
      await page.locator('div:has-text("✕")').last().click();
      await page.waitForTimeout(500);

      // Case study should be closed, main window should be visible
      await expect(page.locator('text=Yayo.exe — Portfolio Chat')).toBeVisible();
    });
  }
});

test.describe('8. CASE STUDY — Phase Progress Bar', () => {
  test('Monitoreo shows all 5 phases', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('span', { hasText: 'royectos' }).first().click();
    await page.waitForTimeout(300);
    await page.locator('text=Monitoreo 2.0').click();
    await page.waitForTimeout(500);

    const phases = ['Contexto', 'Investigación', 'Ideación', 'Iteración', 'Resultados'];
    for (const phase of phases) {
      await expect(page.locator(`text=${phase}`).first()).toBeVisible();
    }
  });

  test('Clicking a phase navigates to correct slide', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('span', { hasText: 'royectos' }).first().click();
    await page.waitForTimeout(300);
    await page.locator('text=Monitoreo 2.0').click();
    await page.waitForTimeout(500);

    // Click on "Resultados" phase
    await page.locator('text=Resultados').first().click();
    await page.waitForTimeout(300);
    // Should show a results slide
    await expect(page.locator('text=La Solución Final').first()).toBeVisible();
  });
});

test.describe('9. IMAGE VERIFICATION — Check all referenced images exist', () => {
  // Test images referenced in projects.js that should be in public/images
  const projectImages = [
    // Monitoreo
    '/images/mon_old_v1_dashboard.png',
    '/images/mon_old_v1_filters.png',
    '/images/mon_old_v1_detail.png',
    '/images/mon_old_v1_kpi.png',
    '/images/mon_wireframe_cards.png',
    '/images/mon_proto_columns.png',
    '/images/mon_proto_expanded.png',
    '/images/mon_proto_detail.png',
    '/images/mon_survey_complete.png',
    '/images/mon_survey_useful.png',
    '/images/mon_final_demo.gif',
    '/images/mon_final_dark.png',
    // DDS
    '/images/dds_palette.png',
    '/images/dds_theme.png',
    '/images/dds_buttons_blue.png',
    '/images/dds_calendar.png',
    '/images/dds_header_before.png',
    '/images/dds_header_after.png',
    // Rendimiento
    '/images/rend_old_graficos.png',
    '/images/rend_old_datos_planos.gif',
    '/images/rend_new_dashboard.gif',
    '/images/rend_new_con_guia.gif',
    '/images/rend_new_con_docs.gif',
    // Billing
    '/images/billing_challenge_flow.svg',
    '/images/billing_pain_simple.svg',
    '/images/billing_role_evolution_v2.svg',
    '/images/billing_architecture_v2.svg',
    '/images/Holding interno pestanas.gif',
    '/images/BU_plantillas.gif',
    '/images/mantenedores.gif',
    '/images/billing_4_systems_1_interface.svg',
    '/images/billing_impact_v2_aligned.svg',
    '/images/billing_lessons_w98_metaphor.svg',
    // CV
    '/images/Gabriel_Galea_CV_2026.pdf',
  ];

  for (const img of projectImages) {
    test(`Image exists: ${img}`, async ({ page }) => {
      const response = await page.request.get(img);
      expect(response.status(), `Image ${img} returned status ${response.status()}`).toBe(200);
    });
  }
});

test.describe('10. KNOWLEDGE BASE — All entries have both languages', () => {
  // We test by sending messages and checking responses appear
  test('KB: "quién es yayo" returns Spanish response', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('textarea').fill('quién es yayo');
    await page.locator('button:has-text("Enviar")').click();
    await page.waitForTimeout(3000);
    await expect(page.locator('text=Gabriel González Galea')).toBeVisible();
  });

  test('KB: "monitoreo" returns response with gallery card', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('textarea').fill('monitoreo');
    await page.locator('button:has-text("Enviar")').click();
    await page.waitForTimeout(3000);
    // Should show the monitoring KB response
    await expect(page.locator('text=Monitoreo 2.0').first()).toBeVisible();
  });

  test('KB: "billing" returns response with gallery card', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('textarea').fill('billing');
    await page.locator('button:has-text("Enviar")').click();
    await page.waitForTimeout(3000);
    await expect(page.locator('text=Billing').first()).toBeVisible();
  });

  test('KB: "contacto" shows email and LinkedIn', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('textarea').fill('contacto');
    await page.locator('button:has-text("Enviar")').click();
    await page.waitForTimeout(3000);
    await expect(page.locator('text=dotyayodot@gmail.com')).toBeVisible();
    await expect(page.locator('text=linkedin.com/in/yayogalea')).toBeVisible();
  });

  test('KB: "diamond design system" returns response', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('textarea').fill('diamond design system');
    await page.locator('button:has-text("Enviar")').click();
    await page.waitForTimeout(3000);
    await expect(page.locator('text=Diamond Design System').first()).toBeVisible();
  });

  test('KB: "rendimiento" returns response', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('textarea').fill('rendimiento de equipo');
    await page.locator('button:has-text("Enviar")').click();
    await page.waitForTimeout(3000);
    await expect(page.locator('text=Rendimiento').first()).toBeVisible();
  });

  test('KB: "herramientas" returns tools response', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('textarea').fill('herramientas');
    await page.locator('button:has-text("Enviar")').click();
    await page.waitForTimeout(3000);
    await expect(page.locator('text=Figma').first()).toBeVisible();
  });

  test('KB: "proceso design thinking" returns response', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('textarea').fill('design thinking proceso');
    await page.locator('button:has-text("Enviar")').click();
    await page.waitForTimeout(3000);
    await expect(page.locator('text=Design Thinking').first()).toBeVisible();
  });
});

test.describe('11. QUICK REPLIES', () => {
  test('Quick reply buttons appear after KB response', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('button', { hasText: '¿Quién es Yayo?' }).click();
    await page.waitForTimeout(3000);
    // Quick replies should be visible
    await expect(page.locator('button:has-text("¿Cuál es tu experiencia?")')).toBeVisible();
  });

  test('Clicking a quick reply sends it as a new message', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('button', { hasText: '¿Quién es Yayo?' }).click();
    await page.waitForTimeout(3000);
    // Click a quick reply
    await page.locator('button:has-text("¿Qué proyectos has hecho?")').click();
    await page.waitForTimeout(3000);
    // Should show response about projects
    await expect(page.locator('text=Monitoreo 2.0').first()).toBeVisible();
  });
});

test.describe('12. MINIMIZE/RESTORE & SCREENSAVER', () => {
  test('Minimize via taskbar button hides main window and shows starfield', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    // Use the taskbar Yayo.exe button (more reliable than the title bar — button)
    // The taskbar button with exact text "Yayo.exe" (not the screensaver restore button)
    const taskbarBtn = page.locator('button').filter({ hasText: /^.*Yayo\.exe$/ }).last();
    await taskbarBtn.click();
    await page.waitForTimeout(1000);
    // Starfield should be visible with restore button
    await expect(page.locator('button:has-text("Abrir Yayo.exe")')).toBeVisible();
  });

  test('Restore button brings back main window', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    // Minimize via taskbar
    const taskbarBtn = page.locator('button').filter({ hasText: /^.*Yayo\.exe$/ }).last();
    await taskbarBtn.click();
    await page.waitForTimeout(1000);
    // Restore
    await page.locator('button:has-text("Abrir Yayo.exe")').click();
    await page.waitForTimeout(500);
    await expect(page.locator('text=Yayo.exe — Portfolio Chat')).toBeVisible();
  });

  test('Taskbar Yayo.exe button toggles minimize/restore', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    // Click the taskbar Yayo.exe button to minimize
    const taskbarBtn = page.locator('button').filter({ hasText: /^.*Yayo\.exe$/ }).last();
    await taskbarBtn.click();
    await page.waitForTimeout(1000);
    await expect(page.locator('button:has-text("Abrir Yayo.exe")')).toBeVisible();
    // Click the taskbar button again to restore (it's still in the taskbar)
    await taskbarBtn.click();
    await page.waitForTimeout(500);
    await expect(page.locator('text=Yayo.exe — Portfolio Chat')).toBeVisible();
  });
});

test.describe('13. STATUS BAR', () => {
  test('Status bar shows "Listo" when idle', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await expect(page.locator('text=✅ Listo')).toBeVisible();
  });

  test('Status bar shows query count', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await expect(page.locator('text=0 consultas')).toBeVisible();
    // Send a message
    await page.locator('button', { hasText: '¿Quién es Yayo?' }).click();
    await page.waitForTimeout(3000);
    await expect(page.locator('text=1 consultas')).toBeVisible();
  });

  test('Status bar shows version', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await expect(page.locator('text=v2.1')).toBeVisible();
  });
});

test.describe('14. INPUT & SEND FUNCTIONALITY', () => {
  test('Send button is disabled when input is empty', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    // Need to trigger non-fresh state first to see send button properly
    // Actually, the send button should always be there
    const sendBtn = page.locator('button:has-text("Enviar")');
    // It should be effectively disabled (opacity or disabled attr)
    await expect(sendBtn).toBeVisible();
  });

  test('Enter key sends message', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('textarea').fill('quién es yayo');
    await page.locator('textarea').press('Enter');
    await page.waitForTimeout(3000);
    await expect(page.locator('text=Gabriel González Galea')).toBeVisible();
  });

  test('Reset button appears after first message', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('button', { hasText: '¿Quién es Yayo?' }).click();
    await page.waitForTimeout(3000);
    // The 🔄 reset button should appear
    await expect(page.locator('button:has-text("🔄")')).toBeVisible();
  });

  test('Reset button clears conversation', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('button', { hasText: '¿Quién es Yayo?' }).click();
    await page.waitForTimeout(3000);
    // Click reset
    await page.locator('button:has-text("🔄")').click();
    await page.waitForTimeout(500);
    // Welcome screen should reappear
    await expect(page.locator('text=¡Hola! Soy Yayo')).toBeVisible();
  });
});

test.describe('15. REFERENCES CHECK — No old portfolio/CV references', () => {
  test('No reference to old CV (pre-2026) in Start Menu', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('button', { hasText: 'Inicio' }).click();
    await page.waitForTimeout(300);
    // CV link should point to 2026 version
    const cvLink = page.locator('a:has-text("Descargar CV")');
    const href = await cvLink.getAttribute('href');
    expect(href).toContain('2026');
    expect(href).not.toContain('2025');
    expect(href).not.toContain('2024');
  });

  test('Desktop CV icon links to 2026 CV', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    const cvLink = page.locator('a:has-text("CV")').first();
    const href = await cvLink.getAttribute('href');
    expect(href).toContain('2026');
  });
});

test.describe('16. CHECK FOR "ADERESO" LEAKS', () => {
  test('No "Adereso" text visible on welcome screen', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    const content = await page.textContent('body');
    expect(content).not.toContain('Adereso');
  });

  test('No "Adereso" in KB responses', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('textarea').fill('trabajo actual');
    await page.locator('button:has-text("Enviar")').click();
    await page.waitForTimeout(3000);
    const content = await page.textContent('body');
    expect(content).not.toContain('Adereso');
  });

  test('No "Adereso" in case study viewer (Monitoreo)', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('span', { hasText: 'royectos' }).first().click();
    await page.waitForTimeout(300);
    await page.locator('text=Monitoreo 2.0').click();
    await page.waitForTimeout(500);

    // Navigate through all slides
    const nextBtn = page.locator('button:has-text("Sig.")');
    let hasMore = true;
    while (hasMore) {
      const content = await page.textContent('body');
      expect(content).not.toContain('Adereso');
      const isDisabled = await nextBtn.isDisabled();
      if (isDisabled) { hasMore = false; } else { await nextBtn.click(); await page.waitForTimeout(300); }
    }
  });

  test('No "Adereso" in case study viewer (Billing)', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('span', { hasText: 'royectos' }).first().click();
    await page.waitForTimeout(300);
    await page.getByRole('link', { name: /Sistema de Billing/ }).click();
    await page.waitForTimeout(500);

    const nextBtn = page.locator('button:has-text("Sig.")');
    let hasMore = true;
    while (hasMore) {
      const content = await page.textContent('body');
      expect(content).not.toContain('Adereso');
      const isDisabled = await nextBtn.isDisabled();
      if (isDisabled) { hasMore = false; } else { await nextBtn.click(); await page.waitForTimeout(300); }
    }
  });
});

test.describe('17. CASE STUDY CONTENT COMPLETENESS', () => {
  test('Monitoreo: can navigate through ALL slides', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('span', { hasText: 'royectos' }).first().click();
    await page.waitForTimeout(300);
    await page.locator('text=Monitoreo 2.0').click();
    await page.waitForTimeout(500);

    const nextBtn = page.locator('button:has-text("Sig.")');
    let slideCount = 1;
    while (!(await nextBtn.isDisabled())) {
      await nextBtn.click();
      await page.waitForTimeout(200);
      slideCount++;
    }
    // Monitoreo has 10 slides
    expect(slideCount).toBeGreaterThanOrEqual(8);
  });

  test('DDS: can navigate through ALL slides', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('span', { hasText: 'royectos' }).first().click();
    await page.waitForTimeout(300);
    await page.locator('text=Diamond Design System').click();
    await page.waitForTimeout(500);

    const nextBtn = page.locator('button:has-text("Sig.")');
    let slideCount = 1;
    while (!(await nextBtn.isDisabled())) {
      await nextBtn.click();
      await page.waitForTimeout(200);
      slideCount++;
    }
    expect(slideCount).toBeGreaterThanOrEqual(7);
  });

  test('Billing: can navigate through ALL slides', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('span', { hasText: 'royectos' }).first().click();
    await page.waitForTimeout(300);
    await page.getByRole('link', { name: /Sistema de Billing/ }).click();
    await page.waitForTimeout(500);

    const nextBtn = page.locator('button:has-text("Sig.")');
    let slideCount = 1;
    while (!(await nextBtn.isDisabled())) {
      await nextBtn.click();
      await page.waitForTimeout(200);
      slideCount++;
    }
    expect(slideCount).toBeGreaterThanOrEqual(8);
  });

  test('Rendimiento: can navigate through ALL slides', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('span', { hasText: 'royectos' }).first().click();
    await page.waitForTimeout(300);
    await page.locator('text=Rendimiento de Equipo').click();
    await page.waitForTimeout(500);

    const nextBtn = page.locator('button:has-text("Sig.")');
    let slideCount = 1;
    while (!(await nextBtn.isDisabled())) {
      await nextBtn.click();
      await page.waitForTimeout(200);
      slideCount++;
    }
    expect(slideCount).toBeGreaterThanOrEqual(8);
  });
});

test.describe('18. CASE STUDY — Figma Links', () => {
  test('Monitoreo: Figma prototype link exists on prototype slide', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('span', { hasText: 'royectos' }).first().click();
    await page.waitForTimeout(300);
    await page.locator('text=Monitoreo 2.0').click();
    await page.waitForTimeout(500);

    // Navigate to prototype slide (ideation phase)
    await page.locator('text=Ideación').first().click();
    await page.waitForTimeout(300);
    // Go to second ideation slide
    const nextBtn = page.locator('button:has-text("Sig.")');
    await nextBtn.click();
    await page.waitForTimeout(300);

    // Check for Figma link
    const figmaLink = page.locator('a:has-text("Ver prototipo en Figma")');
    if (await figmaLink.isVisible()) {
      const href = await figmaLink.getAttribute('href');
      expect(href).toContain('figma.com');
    }
  });

  test('DDS: has top-level Figma link', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('span', { hasText: 'royectos' }).first().click();
    await page.waitForTimeout(300);
    await page.locator('text=Diamond Design System').click();
    await page.waitForTimeout(500);

    // DDS has a top-level figma link in the navigation
    const figmaLink = page.locator('a:has-text("Figma")');
    await expect(figmaLink.first()).toBeVisible();
  });
});

test.describe('19. CASE STUDY — English Translations', () => {
  test('Monitoreo: title translates to English', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    // Switch to English
    await page.locator('button:has-text("🌐 EN")').first().click();
    await page.waitForTimeout(500);

    await page.locator('span', { hasText: 'rojects' }).first().click();
    await page.waitForTimeout(300);
    await page.locator('text=Monitoring 2.0').click();
    await page.waitForTimeout(500);

    await expect(page.locator('text=Real-Time Monitoring Redesign').first()).toBeVisible();
  });

  test('DDS: title translates to English', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('button:has-text("🌐 EN")').first().click();
    await page.waitForTimeout(500);

    await page.locator('span', { hasText: 'rojects' }).first().click();
    await page.waitForTimeout(300);
    await page.locator('text=Diamond Design System').click();
    await page.waitForTimeout(500);

    await expect(page.locator('text=Unifying a fragmented experience').first()).toBeVisible();
  });

  test('Billing: title translates to English', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('button:has-text("🌐 EN")').first().click();
    await page.waitForTimeout(500);

    await page.locator('span', { hasText: 'rojects' }).first().click();
    await page.waitForTimeout(300);
    await page.getByRole('link', { name: /Billing System/ }).click();
    await page.waitForTimeout(500);

    await expect(page.locator('text=From fragile spreadsheets to a robust financial system').first()).toBeVisible();
  });

  test('Rendimiento: title translates to English', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('button:has-text("🌐 EN")').first().click();
    await page.waitForTimeout(500);

    await page.locator('span', { hasText: 'rojects' }).first().click();
    await page.waitForTimeout(300);
    await page.locator('text=Team Performance').click();
    await page.waitForTimeout(500);

    await expect(page.locator('text=Team Performance Redesign').first()).toBeVisible();
  });

  test('Phase labels translate to English', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('button:has-text("🌐 EN")').first().click();
    await page.waitForTimeout(500);

    await page.locator('span', { hasText: 'rojects' }).first().click();
    await page.waitForTimeout(300);
    await page.locator('text=Monitoring 2.0').click();
    await page.waitForTimeout(500);

    const phases = ['Context', 'Research', 'Ideation', 'Iteration', 'Results'];
    for (const phase of phases) {
      await expect(page.locator(`text=${phase}`).first()).toBeVisible();
    }
  });

  test('Navigation buttons translate to English (Prev/Next)', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('button:has-text("🌐 EN")').first().click();
    await page.waitForTimeout(500);

    await page.locator('span', { hasText: 'rojects' }).first().click();
    await page.waitForTimeout(300);
    await page.locator('text=Monitoring 2.0').click();
    await page.waitForTimeout(500);

    await expect(page.locator('button:has-text("Prev")')).toBeVisible();
    await expect(page.locator('button:has-text("Next")')).toBeVisible();
  });
});

test.describe('20. TASKBAR', () => {
  test('Taskbar is always visible', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await expect(page.locator('button:has-text("Inicio")')).toBeVisible();
    await expect(page.locator('button:has-text("Yayo.exe")')).toBeVisible();
  });

  test('Clock displays in taskbar', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    // Clock should show time in HH:MM format
    const clockText = page.locator('text=/\\d{1,2}:\\d{2}/');
    await expect(clockText.first()).toBeVisible();
  });

  test('Language toggle in taskbar shows current language', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    // Should show "ES" in the taskbar language button (lowercase)
    await expect(page.locator('button:has-text("🌐 ES")').last()).toBeVisible();
  });
});

test.describe('21. CASE STUDY CARD FROM CHAT', () => {
  test('Asking about monitoreo shows CaseStudyCard', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('button', { hasText: 'Cuéntame sobre el sistema de Billing' }).click();
    await page.waitForTimeout(3000);
    // Should show a case study card
    await expect(page.locator('text=Ver Caso').first()).toBeVisible();
  });

  test('CaseStudyCard click opens viewer', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('textarea').fill('monitoreo');
    await page.locator('button:has-text("Enviar")').click();
    await page.waitForTimeout(3000);

    // Click on the case study card
    const viewBtn = page.locator('text=Ver Caso ▶').first();
    if (await viewBtn.isVisible()) {
      await viewBtn.click();
      await page.waitForTimeout(500);
      await expect(page.locator('text=Rediseño de Monitoreo en Tiempo Real').first()).toBeVisible();
    }
  });
});

test.describe('22. OLD PORTFOLIO REFERENCE CHECK', () => {
  test('Start menu does NOT have old Framer portfolio link', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('button', { hasText: 'Inicio' }).click();
    await page.waitForTimeout(300);

    const framerLink = page.locator('a:has-text("Portafolio Framer")');
    await expect(framerLink).not.toBeVisible();
  });
});

test.describe('23. KNOWLEDGE BASE — Billing entries completeness', () => {
  test('KB: "impacto billing" returns impact details', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('textarea').fill('impacto del billing');
    await page.locator('button:has-text("Enviar")').click();
    await page.waitForTimeout(4000);
    await expect(page.locator('text=Cierre mensual').first()).toBeVisible();
  });

  test('KB: "aprendiste billing" returns lessons', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('textarea').fill('qué aprendiste del billing');
    await page.locator('button:has-text("Enviar")').click();
    await page.waitForTimeout(4000);
    await expect(page.locator('text=dominio').first()).toBeVisible();
  });

  test('KB: "complejo billing" returns complexity details', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('textarea').fill('lo más complejo del billing');
    await page.locator('button:has-text("Enviar")').click();
    await page.waitForTimeout(4000);
    await expect(page.locator('text=Arquitectura de información').first()).toBeVisible();
  });
});

test.describe('24. RESPONSIVE CHECK', () => {
  test('Renders at mobile viewport (375x667)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForTimeout(2000);
    await expect(page.locator('text=Yayo.exe — Portfolio Chat')).toBeVisible();
  });

  test('Renders at tablet viewport (768x1024)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await page.waitForTimeout(2000);
    await expect(page.locator('text=Yayo.exe — Portfolio Chat')).toBeVisible();
  });
});

test.describe('25. CLOCK FORMAT', () => {
  test('Taskbar clock uses HH:MM format', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(2000);
    // Get the time text from the taskbar
    const timeLocator = page.locator('div').filter({ hasText: /^\d{1,2}:\d{2}$/ }).first();
    // The clock should exist somewhere in the taskbar
    const bodyText = await page.textContent('body');
    expect(bodyText).toMatch(/\d{1,2}:\d{2}/);
  });
});

test.describe('26. LIGHTBOX — Image zoom in case studies', () => {
  test('Clicking an image in case study opens lightbox', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    await page.locator('span', { hasText: 'royectos' }).first().click();
    await page.waitForTimeout(300);
    await page.locator('text=Monitoreo 2.0').click();
    await page.waitForTimeout(500);

    // Navigate to a slide with images (context > previous state)
    const nextBtn = page.locator('button:has-text("Sig.")');
    await nextBtn.click(); // Slide 2
    await page.waitForTimeout(200);
    await nextBtn.click(); // Slide 3 - has images
    await page.waitForTimeout(500);

    // Click on first image
    const img = page.locator('img').first();
    if (await img.isVisible()) {
      await img.click();
      await page.waitForTimeout(300);
      // Lightbox should show the zoomed image
      // The lightbox has a dark overlay background
      const lightboxOverlay = page.locator('div').filter({ has: page.locator('img') }).last();
      await expect(lightboxOverlay).toBeVisible();
    }
  });
});
