import { Component } from '@angular/core';
import { problemExamples } from '../app.data';

@Component({
  selector: 'app-lead-form-section',
  standalone: true,
  template: `
    <section id="formulario" class="relative z-10 py-24">
      <div class="section-shell">
        <div class="mx-auto max-w-3xl text-center">
          <span class="kicker">Diagnóstico inicial</span>
          <h2 class="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">Descreva seu problema</h2>
          <p class="mt-4 text-lg leading-8 text-slate-400">Explique seu processo, desafio operacional ou tarefa repetitiva. Vou analisar como automação ou IA podem ajudar.</p>
        </div>

        <div class="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          @for (example of examples; track example) {
            <div class="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-100">{{ example }}</div>
          }
        </div>

        <div class="glass-card mx-auto mt-10 max-w-4xl overflow-hidden rounded-[2rem] p-3 sm:p-4">
          <div class="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-2">
            <iframe
              title="Formulário para descrever problema operacional"
              src="https://docs.google.com/forms/d/e/1FAIpQLSd_PLACEHOLDER/viewform?embedded=true"
              class="h-[760px] w-full rounded-[1.25rem] bg-white"
              loading="lazy"
            >Carregando…</iframe>
          </div>
          <p class="px-2 pb-2 pt-4 text-center text-xs text-slate-500">Substitua o URL do iframe pelo Google Forms definitivo quando o formulário estiver publicado.</p>
        </div>
      </div>
    </section>
  `
})
export class LeadFormSectionComponent {
  protected readonly examples = problemExamples;
}
