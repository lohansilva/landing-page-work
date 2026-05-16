import { Component } from '@angular/core';
import { serviceItems } from '../app.data';

@Component({
  selector: 'app-services-section',
  standalone: true,
  template: `
    <section id="servicos" class="relative z-10 py-24">
      <div class="section-shell">
        <div class="mx-auto max-w-3xl text-center">
          <span class="kicker">Como posso ajudar</span>
          <h2 class="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">Como posso ajudar</h2>
          <p class="mt-4 text-lg leading-8 text-slate-400">Do diagnóstico à implantação: desenho automações inteligentes para reduzir esforço manual e aumentar previsibilidade operacional.</p>
        </div>

        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          @for (service of services; track service.title) {
            <article class="glass-card group rounded-3xl p-5">
              <div class="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-2xl transition group-hover:scale-110 group-hover:bg-cyan-300/20">{{ service.icon }}</div>
              <h3 class="text-base font-bold leading-snug text-white">{{ service.title }}</h3>
              <p class="mt-3 text-sm leading-6 text-slate-400">{{ service.description }}</p>
            </article>
          }
        </div>
      </div>
    </section>
  `
})
export class ServicesSectionComponent {
  protected readonly services = serviceItems;
}
