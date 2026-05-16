import { Component } from '@angular/core';
import { projectItems } from '../app.data';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  template: `
    <section id="projetos" class="relative z-10 py-24">
      <div class="section-shell">
        <div class="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span class="kicker">Portfólio técnico</span>
            <h2 class="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">Projetos</h2>
          </div>
          <p class="max-w-xl text-base leading-7 text-slate-400">Área preparada para estudos de caso reais, métricas de impacto e demonstrações futuras.</p>
        </div>

        <div class="mt-12 grid gap-6 lg:grid-cols-3">
          @for (project of projects; track project.title) {
            <article class="glass-card group overflow-hidden rounded-[2rem]">
              <div class="relative h-52 overflow-hidden bg-gradient-to-br {{ project.accent }}">
                <div class="absolute inset-6 rounded-[1.5rem] border border-white/10 bg-slate-950/35 backdrop-blur-md"></div>
                <div class="absolute left-8 right-8 top-10 h-3 rounded-full bg-white/15"></div>
                <div class="absolute left-8 top-20 h-20 w-20 rounded-3xl bg-cyan-200/20 blur-xl transition group-hover:scale-125"></div>
                <div class="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-3">
                  <span class="h-16 rounded-2xl bg-white/10"></span>
                  <span class="h-16 rounded-2xl bg-white/15"></span>
                  <span class="h-16 rounded-2xl bg-white/10"></span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-white">{{ project.title }}</h3>
                <p class="mt-3 min-h-14 text-sm leading-6 text-slate-400">{{ project.description }}</p>
                <button class="mt-6 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/10">Ver detalhes</button>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `
})
export class ProjectsSectionComponent {
  protected readonly projects = projectItems;
}
