import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  template: `
    <div class="fixed inset-0 z-50 grid place-items-center bg-obsidian/95 backdrop-blur-xl">
      <div class="relative h-24 w-24">
        <div class="absolute inset-0 rounded-full border border-cyan-300/20"></div>
        <div class="absolute inset-2 animate-spin rounded-full border-2 border-transparent border-t-cyan-300 border-r-blue-400"></div>
        <div class="absolute inset-8 rounded-full bg-cyan-300/80 blur-md"></div>
      </div>
      <p class="absolute mt-36 text-sm font-medium tracking-[0.3em] text-cyan-100/70">CARREGANDO IA</p>
    </div>
  `
})
export class LoadingScreenComponent {}
