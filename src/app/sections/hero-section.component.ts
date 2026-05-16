import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  template: `
    <section id="hero" class="relative z-10 flex min-h-screen items-center overflow-hidden pb-20 pt-36">
      <div class="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl"></div>
      <div class="particle absolute left-[12%] top-[30%] h-1.5 w-1.5 rounded-full bg-cyan-200"></div>
      <div class="particle absolute right-[18%] top-[42%] h-1 w-1 rounded-full bg-blue-200 [animation-delay:2s]"></div>
      <div class="particle absolute left-[68%] top-[20%] h-1.5 w-1.5 rounded-full bg-white [animation-delay:4s]"></div>

      <div class="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div class="reveal max-w-4xl">
          <span class="kicker">IA aplicada em negócios</span>
          <h1 class="mt-6 max-w-5xl text-5xl font-extrabold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
            IA, Automação e <span class="gradient-text">Sistemas Inteligentes</span>
          </h1>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Ajudo empresas a automatizar processos, reduzir tarefas manuais e criar soluções inteligentes utilizando IA, agentes e automações personalizadas.
          </p>
          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#formulario" class="rounded-full bg-cyan-200 px-6 py-3 text-center text-sm font-bold text-slate-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-white">Descreva seu problema</a>
            <a href="#projetos" class="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-200/40 hover:bg-white/10">Ver projetos</a>
          </div>
        </div>

        <div class="reveal float-slow relative mx-auto w-full max-w-xl [animation-delay:180ms]">
          <div class="glass-card rounded-[2rem] p-4">
            <div class="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
              <div class="flex items-center gap-2 border-b border-white/10 pb-4">
                <span class="h-3 w-3 rounded-full bg-red-400/80"></span>
                <span class="h-3 w-3 rounded-full bg-yellow-400/80"></span>
                <span class="h-3 w-3 rounded-full bg-green-400/80"></span>
                <span class="ml-auto rounded-full bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">agent.workflow.ts</span>
              </div>
              <div class="space-y-4 pt-5 font-mono text-sm text-slate-300">
                <p><span class="text-blue-300">const</span> agent = <span class="text-cyan-200">createAutomation</span>(&#123;</p>
                <p class="pl-5 text-slate-400">process: <span class="text-emerald-200">'operação recorrente'</span>,</p>
                <p class="pl-5 text-slate-400">tools: [<span class="text-emerald-200">'RAG'</span>, <span class="text-emerald-200">'OCR'</span>, <span class="text-emerald-200">'API'</span>],</p>
                <p class="pl-5 text-slate-400">result: <span class="text-emerald-200">'menos trabalho manual'</span></p>
                <p>&#125;);</p>
              </div>
              <div class="mt-6 grid grid-cols-3 gap-3 text-center">
                <div class="rounded-2xl bg-white/[0.04] p-4"><strong class="block text-2xl text-white">10x</strong><span class="text-xs text-slate-400">mais fluxo</span></div>
                <div class="rounded-2xl bg-white/[0.04] p-4"><strong class="block text-2xl text-white">24/7</strong><span class="text-xs text-slate-400">operação</span></div>
                <div class="rounded-2xl bg-white/[0.04] p-4"><strong class="block text-2xl text-white">IA</strong><span class="text-xs text-slate-400">com contexto</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroSectionComponent {}
