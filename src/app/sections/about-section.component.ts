import { Component } from '@angular/core';
import { stackItems } from '../app.data';

@Component({
  selector: 'app-about-section',
  standalone: true,
  template: `
    <section id="sobre" class="relative z-10 py-24">
      <div class="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <span class="kicker">Sobre mim</span>
          <h2 class="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">Sobre mim</h2>
        </div>
        <div class="glass-card rounded-[2rem] p-6 sm:p-8">
          <div class="space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
            <p>Sou Lohan Silva, desenvolvedor Full Stack especializado em IA, Hyperautomation e sistemas inteligentes.</p>
            <p>Atuo no desenvolvimento de soluções utilizando automação de processos, agentes de IA, integrações e aplicações web modernas.</p>
            <p>Tenho experiência com automações corporativas, backend, arquitetura de sistemas, IA aplicada e desenvolvimento de soluções escaláveis.</p>
          </div>
          <div class="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            @for (item of stack; track item) {
              <div class="group rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-center text-sm font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100 hover:shadow-glow">
                {{ item }}
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutSectionComponent {
  protected readonly stack = stackItems;
}
