import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer id="contato" class="relative z-10 border-t border-white/10 py-12">
      <div class="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#hero" class="inline-flex items-center gap-3">
            <span class="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-sm font-bold text-cyan-100">LS</span>
            <span>
              <strong class="block text-white">Lohan Silva</strong>
              <span class="text-sm text-slate-400">Construindo soluções inteligentes com IA e automação.</span>
            </span>
          </a>
        </div>
        <div class="flex flex-wrap gap-3">
          <a href="https://github.com/" target="_blank" rel="noreferrer" class="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-100">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" class="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-100">LinkedIn</a>
          <a href="mailto:contato@lohansilva.dev" class="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-100">Email</a>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
