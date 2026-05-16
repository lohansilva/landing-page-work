import { Component, input, signal } from '@angular/core';
import { navItems } from '../app.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <header class="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <nav class="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 shadow-card backdrop-blur-xl sm:px-6">
        <a href="#hero" class="group flex items-center gap-3" aria-label="Ir para o início">
          <span class="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-sm font-bold text-cyan-100 shadow-glow">LS</span>
          <span class="hidden leading-tight sm:block">
            <strong class="block text-sm text-white">Lohan Silva</strong>
            <span class="text-xs text-slate-400">IA & Automação</span>
          </span>
        </a>

        <div class="hidden items-center gap-1 lg:flex">
          @for (item of items; track item.href) {
            <a
              [href]="item.href"
              class="rounded-full px-4 py-2 text-sm font-medium transition hover:bg-white/10 hover:text-white"
              [class.bg-cyan-300/10]="activeSection() === item.href.slice(1)"
              [class.text-cyan-100]="activeSection() === item.href.slice(1)"
              [class.text-slate-400]="activeSection() !== item.href.slice(1)"
            >{{ item.label }}</a>
          }
        </div>

        <a href="#formulario" class="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 md:inline-flex">Descreva seu problema</a>

        <button type="button" class="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-200 lg:hidden" (click)="toggleMenu()" aria-label="Abrir menu">
          <span class="text-xl">☰</span>
        </button>
      </nav>

      @if (menuOpen()) {
        <div class="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-slate-950/90 p-3 shadow-card backdrop-blur-xl lg:hidden">
          @for (item of items; track item.href) {
            <a [href]="item.href" (click)="closeMenu()" class="block rounded-xl px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/10">{{ item.label }}</a>
          }
        </div>
      }
    </header>
  `
})
export class NavbarComponent {
  readonly activeSection = input('hero');
  protected readonly items = navItems;
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
