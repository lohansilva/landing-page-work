import { Component, input } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  template: `
    <button
      type="button"
      class="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-100 shadow-glow backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-cyan-300/20"
      [class.opacity-0]="!visible()"
      [class.pointer-events-none]="!visible()"
      (click)="scrollTop()"
      aria-label="Voltar ao topo"
    >↑</button>
  `
})
export class ScrollTopComponent {
  readonly visible = input(false);

  protected scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
