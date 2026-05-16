#!/usr/bin/env node
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ngBin = process.platform === 'win32'
  ? join(root, 'node_modules', '.bin', 'ng.cmd')
  : join(root, 'node_modules', '.bin', 'ng');

if (existsSync(ngBin)) {
  const result = spawnSync(ngBin, ['build', ...process.argv.slice(2)], {
    cwd: root,
    stdio: 'inherit',
    shell: process.platform === 'win32'
  });
  process.exit(result.status ?? 1);
}

const outputDir = join(root, 'dist', 'lohan-ai-automation-landing', 'browser');
const faviconSource = join(root, 'public', 'favicon.svg');
const faviconTarget = join(outputDir, 'favicon.svg');
const baseHref = getArgumentValue('--base-href') ?? '/';
const formUrl = extractFormUrl();

const navItems = [
  ['Início', '#hero'],
  ['Sobre', '#sobre'],
  ['Serviços', '#servicos'],
  ['Projetos', '#projetos'],
  ['Formulário', '#formulario'],
  ['Contato', '#contato']
];

const stackItems = [
  'Python',
  'NestJS',
  'Angular',
  'PostgreSQL',
  'AWS',
  'LangChain',
  'LangGraph',
  'Docker',
  'RPA',
  'IA Generativa'
];

const serviceItems = [
  ['Automação de processos repetitivos', '⚙️', 'Elimino gargalos operacionais com fluxos robustos, auditáveis e escaláveis.'],
  ['Agentes de IA personalizados', '🤖', 'Agentes orientados ao seu negócio para executar, consultar e decidir com contexto.'],
  ['Integrações entre sistemas', '🔗', 'Conecto ERPs, CRMs, planilhas, APIs e ferramentas internas com segurança.'],
  ['Dashboards e monitoramento', '📊', 'Transformo dados operacionais em indicadores acionáveis e em tempo real.'],
  ['Assistentes com RAG', '🧠', 'Busca inteligente em documentos, bases internas e conhecimento corporativo.'],
  ['Automação de planilhas', '📈', 'Substituo rotinas manuais em Excel e Google Sheets por automações confiáveis.'],
  ['OCR e processamento de documentos', '📄', 'Extração, classificação e validação de documentos com IA aplicada.'],
  ['Sistemas web personalizados', '💻', 'Aplicações modernas para centralizar processos e acelerar equipes.'],
  ['Workflows inteligentes', '🧩', 'Orquestração de tarefas, aprovações e decisões com automação ponta a ponta.'],
  ['APIs e backend escalável', '🚀', 'Arquiteturas seguras, observáveis e preparadas para crescimento.']
];

const projectItems = [
  ['AI Automation Assistant', 'Assistente inteligente para automação de processos empresariais.', 'from-cyan-300/30 to-blue-500/20'],
  ['RAG Knowledge System', 'Sistema de busca inteligente utilizando documentos corporativos.', 'from-indigo-300/30 to-cyan-500/20'],
  ['Workflow Automation Platform', 'Plataforma para automação e orquestração de fluxos operacionais.', 'from-sky-300/30 to-violet-500/20']
];

const problemExamples = [
  'Processos manuais repetitivos',
  'Automação de Excel',
  'Integrações com ERP',
  'Fluxos internos',
  'IA para documentos',
  'Assistentes inteligentes',
  'Relatórios automáticos',
  'Processamento de dados'
];

rmSync(join(root, 'dist'), { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });

if (existsSync(faviconSource)) {
  copyFileSync(faviconSource, faviconTarget);
}

writeFileSync(join(outputDir, 'index.html'), renderPage(), 'utf8');
console.log(`Static fallback build completed at ${outputDir}`);
console.log('Angular CLI was not found in node_modules, so a dependency-free static build was generated.');

function getArgumentValue(name) {
  const args = process.argv.slice(2);
  const exact = args.indexOf(name);
  if (exact >= 0) return args[exact + 1];

  const prefixed = args.find((arg) => arg.startsWith(`${name}=`));
  return prefixed?.slice(name.length + 1);
}

function extractFormUrl() {
  const source = readFileSync(join(root, 'src', 'app', 'sections', 'lead-form-section.component.ts'), 'utf8');
  const match = source.match(/src="(https:\/\/docs\.google\.com\/forms\/d\/e\/[^"]+)"/);

  if (!match) {
    throw new Error('Google Forms iframe URL was not found in lead-form-section.component.ts');
  }

  return match[1];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderPage() {
  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <title>IA, Automação e Sistemas Inteligentes | Lohan Silva</title>
    <base href="${escapeHtml(baseHref)}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Lohan Silva cria soluções com IA, automação, agentes inteligentes, integrações e sistemas web para empresas brasileiras.">
    <meta name="theme-color" content="#05070b">
    <meta property="og:title" content="IA, Automação e Sistemas Inteligentes | Lohan Silva">
    <meta property="og:description" content="Automatize processos, reduza tarefas manuais e crie soluções inteligentes utilizando IA, agentes e automações personalizadas.">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="pt_BR">
    <link rel="icon" type="image/svg+xml" href="favicon.svg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
            colors: { obsidian: '#05070b', graphite: '#0b1020', cyanGlow: '#35d9ff', blueGlow: '#4f7cff' },
            boxShadow: {
              glow: '0 0 55px rgba(53, 217, 255, 0.22)',
              card: '0 24px 80px rgba(0, 0, 0, 0.38)'
            },
            backgroundImage: {
              'tech-grid': 'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)'
            }
          }
        }
      };
    </script>
    <style>
      :root { color-scheme: dark; scroll-behavior: smooth; }
      * { box-sizing: border-box; }
      body { margin: 0; min-height: 100vh; overflow-x: hidden; background: #05070b; color: #eef2ff; font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
      body::selection { background: rgba(53, 217, 255, 0.25); color: #fff; }
      .section-shell { margin-inline: auto; width: 100%; max-width: 80rem; padding-inline: 1.25rem; }
      @media (min-width: 640px) { .section-shell { padding-inline: 1.5rem; } }
      @media (min-width: 1024px) { .section-shell { padding-inline: 2rem; } }
      .kicker { display: inline-flex; align-items: center; gap: .5rem; border-radius: 9999px; border: 1px solid rgb(103 232 249 / .2); background: rgb(103 232 249 / .1); padding: .25rem .75rem; font-size: .75rem; font-weight: 600; text-transform: uppercase; letter-spacing: .28em; color: rgb(165 243 252); }
      .glass-card { border: 1px solid rgb(255 255 255 / .1); background: rgb(255 255 255 / .045); box-shadow: 0 24px 80px rgba(0,0,0,.38); backdrop-filter: blur(24px); transition: .3s; }
      .glass-card:hover { transform: translateY(-.25rem); border-color: rgb(103 232 249 / .3); background: rgb(255 255 255 / .07); box-shadow: 0 0 55px rgba(53,217,255,.22); }
      .gradient-text { background: linear-gradient(90deg, #fff, #cffafe, #bfdbfe); -webkit-background-clip: text; background-clip: text; color: transparent; }
      .reveal { animation: reveal .8s ease both; }
      .float-slow { animation: float 8s ease-in-out infinite; }
      .particle { animation: particle 12s linear infinite; }
      @keyframes reveal { from { opacity: 0; transform: translateY(18px) scale(.98); filter: blur(10px); } to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); } }
      @keyframes float { 0%, 100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,-18px,0); } }
      @keyframes particle { from { transform: translate3d(0,0,0); opacity: .15; } 50% { opacity: .55; } to { transform: translate3d(45px,-90px,0); opacity: 0; } }
      @media (prefers-reduced-motion: reduce) { *, *::before, *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; } }
    </style>
  </head>
  <body>
    <main class="relative min-h-screen overflow-hidden bg-obsidian text-slate-100">
      <div class="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(53,217,255,0.16),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(79,124,255,0.18),transparent_30%),linear-gradient(180deg,#05070b_0%,#090d18_50%,#05070b_100%)]"></div>
      <div class="pointer-events-none fixed inset-0 z-0 bg-tech-grid bg-[size:44px_44px] opacity-[0.16] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]"></div>
      ${renderNavbar()}
      ${renderHero()}
      ${renderAbout()}
      ${renderServices()}
      ${renderProjects()}
      ${renderForm()}
      ${renderFooter()}
      ${renderScrollTop()}
    </main>
    <script>
      const menuButton = document.querySelector('[data-menu-button]');
      const mobileMenu = document.querySelector('[data-mobile-menu]');
      const scrollTop = document.querySelector('[data-scroll-top]');
      menuButton?.addEventListener('click', () => mobileMenu?.classList.toggle('hidden'));
      mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => mobileMenu.classList.add('hidden')));
      window.addEventListener('scroll', () => {
        if (window.scrollY > 640) scrollTop?.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
        else scrollTop?.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      });
    </script>
  </body>
</html>
`;
}

function renderNavbar() {
  return `<header class="fixed inset-x-0 top-0 z-40 px-4 pt-4">
    <nav class="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 shadow-card backdrop-blur-xl sm:px-6">
      <a href="#hero" class="group flex items-center gap-3" aria-label="Ir para o início"><span class="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-sm font-bold text-cyan-100 shadow-glow">LS</span><span class="hidden leading-tight sm:block"><strong class="block text-sm text-white">Lohan Silva</strong><span class="text-xs text-slate-400">IA & Automação</span></span></a>
      <div class="hidden items-center gap-1 lg:flex">${navItems.map(([label, href]) => `<a href="${href}" class="rounded-full px-4 py-2 text-sm font-medium text-slate-400 transition hover:bg-white/10 hover:text-white">${escapeHtml(label)}</a>`).join('')}</div>
      <a href="#formulario" class="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 md:inline-flex">Descreva seu problema</a>
      <button type="button" data-menu-button class="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-200 lg:hidden" aria-label="Abrir menu"><span class="text-xl">☰</span></button>
    </nav>
    <div data-mobile-menu class="hidden mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-slate-950/90 p-3 shadow-card backdrop-blur-xl lg:hidden">${navItems.map(([label, href]) => `<a href="${href}" class="block rounded-xl px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/10">${escapeHtml(label)}</a>`).join('')}</div>
  </header>`;
}

function renderHero() {
  return `<section id="hero" class="relative z-10 flex min-h-screen items-center overflow-hidden pb-20 pt-36">
    <div class="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl"></div>
    <div class="particle absolute left-[12%] top-[30%] h-1.5 w-1.5 rounded-full bg-cyan-200"></div>
    <div class="particle absolute right-[18%] top-[42%] h-1 w-1 rounded-full bg-blue-200 [animation-delay:2s]"></div>
    <div class="particle absolute left-[68%] top-[20%] h-1.5 w-1.5 rounded-full bg-white [animation-delay:4s]"></div>
    <div class="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
      <div class="reveal max-w-4xl"><span class="kicker">IA aplicada em negócios</span><h1 class="mt-6 max-w-5xl text-5xl font-extrabold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">IA, Automação e <span class="gradient-text">Sistemas Inteligentes</span></h1><p class="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">Ajudo empresas a automatizar processos, reduzir tarefas manuais e criar soluções inteligentes utilizando IA, agentes e automações personalizadas.</p><div class="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#formulario" class="rounded-full bg-cyan-200 px-6 py-3 text-center text-sm font-bold text-slate-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-white">Descreva seu problema</a><a href="#projetos" class="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-200/40 hover:bg-white/10">Ver projetos</a></div></div>
      <div class="reveal float-slow relative mx-auto w-full max-w-xl [animation-delay:180ms]"><div class="glass-card rounded-[2rem] p-4"><div class="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5"><div class="flex items-center gap-2 border-b border-white/10 pb-4"><span class="h-3 w-3 rounded-full bg-red-400/80"></span><span class="h-3 w-3 rounded-full bg-yellow-400/80"></span><span class="h-3 w-3 rounded-full bg-green-400/80"></span><span class="ml-auto rounded-full bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">agent.workflow.ts</span></div><div class="space-y-4 pt-5 font-mono text-sm text-slate-300"><p><span class="text-blue-300">const</span> agent = <span class="text-cyan-200">createAutomation</span>({</p><p class="pl-5 text-slate-400">process: <span class="text-emerald-200">'operação recorrente'</span>,</p><p class="pl-5 text-slate-400">tools: [<span class="text-emerald-200">'RAG'</span>, <span class="text-emerald-200">'OCR'</span>, <span class="text-emerald-200">'API'</span>],</p><p class="pl-5 text-slate-400">result: <span class="text-emerald-200">'menos trabalho manual'</span></p><p>});</p></div><div class="mt-6 grid grid-cols-3 gap-3 text-center"><div class="rounded-2xl bg-white/[0.04] p-4"><strong class="block text-2xl text-white">10x</strong><span class="text-xs text-slate-400">mais fluxo</span></div><div class="rounded-2xl bg-white/[0.04] p-4"><strong class="block text-2xl text-white">24/7</strong><span class="text-xs text-slate-400">operação</span></div><div class="rounded-2xl bg-white/[0.04] p-4"><strong class="block text-2xl text-white">IA</strong><span class="text-xs text-slate-400">com contexto</span></div></div></div></div></div>
    </div>
  </section>`;
}

function renderAbout() {
  return `<section id="sobre" class="relative z-10 py-24"><div class="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start"><div><span class="kicker">Sobre mim</span><h2 class="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">Sobre mim</h2></div><div class="glass-card rounded-[2rem] p-6 sm:p-8"><div class="space-y-5 text-base leading-8 text-slate-300 sm:text-lg"><p>Sou Lohan Silva, desenvolvedor Full Stack especializado em IA, Hyperautomation e sistemas inteligentes.</p><p>Atuo no desenvolvimento de soluções utilizando automação de processos, agentes de IA, integrações e aplicações web modernas.</p><p>Tenho experiência com automações corporativas, backend, arquitetura de sistemas, IA aplicada e desenvolvimento de soluções escaláveis.</p></div><div class="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">${stackItems.map((item) => `<div class="group rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-center text-sm font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100 hover:shadow-glow">${escapeHtml(item)}</div>`).join('')}</div></div></div></section>`;
}

function renderServices() {
  return `<section id="servicos" class="relative z-10 py-24"><div class="section-shell"><div class="mx-auto max-w-3xl text-center"><span class="kicker">Soluções</span><h2 class="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">Serviços</h2><p class="mt-4 text-lg leading-8 text-slate-400">Soluções práticas para automatizar operações, conectar sistemas e usar IA de forma aplicada ao negócio.</p></div><div class="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">${serviceItems.map(([title, icon, description]) => `<article class="glass-card rounded-[2rem] p-5"><div class="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-2xl shadow-glow">${icon}</div><h3 class="text-lg font-bold leading-6 text-white">${escapeHtml(title)}</h3><p class="mt-3 text-sm leading-6 text-slate-400">${escapeHtml(description)}</p></article>`).join('')}</div></div></section>`;
}

function renderProjects() {
  return `<section id="projetos" class="relative z-10 py-24"><div class="section-shell"><div class="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><span class="kicker">Portfólio técnico</span><h2 class="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">Projetos</h2></div><p class="max-w-xl text-base leading-7 text-slate-400">Área preparada para estudos de caso reais, métricas de impacto e demonstrações futuras.</p></div><div class="mt-12 grid gap-6 lg:grid-cols-3">${projectItems.map(([title, description, accent]) => `<article class="glass-card group overflow-hidden rounded-[2rem]"><div class="relative h-52 overflow-hidden bg-gradient-to-br ${accent}"><div class="absolute inset-6 rounded-[1.5rem] border border-white/10 bg-slate-950/35 backdrop-blur-md"></div><div class="absolute left-8 right-8 top-10 h-3 rounded-full bg-white/15"></div><div class="absolute left-8 top-20 h-20 w-20 rounded-3xl bg-cyan-200/20 blur-xl transition group-hover:scale-125"></div><div class="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-3"><span class="h-16 rounded-2xl bg-white/10"></span><span class="h-16 rounded-2xl bg-white/15"></span><span class="h-16 rounded-2xl bg-white/10"></span></div></div><div class="p-6"><h3 class="text-xl font-bold text-white">${escapeHtml(title)}</h3><p class="mt-3 min-h-14 text-sm leading-6 text-slate-400">${escapeHtml(description)}</p><button class="mt-6 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/10">Ver detalhes</button></div></article>`).join('')}</div></div></section>`;
}

function renderForm() {
  return `<section id="formulario" class="relative z-10 py-24"><div class="section-shell"><div class="mx-auto max-w-3xl text-center"><span class="kicker">Diagnóstico inicial</span><h2 class="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">Descreva seu problema</h2><p class="mt-4 text-lg leading-8 text-slate-400">Explique seu processo, desafio operacional ou tarefa repetitiva. Vou analisar como automação ou IA podem ajudar.</p></div><div class="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">${problemExamples.map((example) => `<div class="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-100">${escapeHtml(example)}</div>`).join('')}</div><div class="glass-card mx-auto mt-10 max-w-4xl overflow-hidden rounded-[2rem] p-3 sm:p-4"><div class="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-2"><iframe title="Formulário para descrever problema operacional" src="${escapeHtml(formUrl)}" class="h-[1403px] w-full rounded-[1.25rem] bg-white" loading="lazy">Carregando…</iframe></div></div></div></section>`;
}

function renderFooter() {
  return `<footer id="contato" class="relative z-10 border-t border-white/10 py-12"><div class="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between"><div><a href="#hero" class="inline-flex items-center gap-3"><span class="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-sm font-bold text-cyan-100">LS</span><span><strong class="block text-white">Lohan Silva</strong><span class="text-sm text-slate-400">Construindo soluções inteligentes com IA e automação.</span></span></a></div><div class="flex flex-wrap gap-3"><a href="https://github.com/" target="_blank" rel="noreferrer" class="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-100">GitHub</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" class="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-100">LinkedIn</a><a href="mailto:contato@lohansilva.dev" class="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-100">Email</a></div></div></footer>`;
}

function renderScrollTop() {
  return `<a href="#hero" data-scroll-top aria-label="Voltar ao topo" class="pointer-events-none fixed bottom-6 right-6 z-50 grid h-12 w-12 translate-y-4 place-items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-100 opacity-0 shadow-glow backdrop-blur-xl transition"><span class="text-xl">↑</span></a>`;
}
