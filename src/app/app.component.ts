import { Component, HostListener, signal } from '@angular/core';
import { AboutSectionComponent } from './sections/about-section.component';
import { FooterComponent } from './sections/footer.component';
import { HeroSectionComponent } from './sections/hero-section.component';
import { LeadFormSectionComponent } from './sections/lead-form-section.component';
import { ProjectsSectionComponent } from './sections/projects-section.component';
import { ServicesSectionComponent } from './sections/services-section.component';
import { LoadingScreenComponent } from './components/loading-screen.component';
import { NavbarComponent } from './components/navbar.component';
import { ScrollTopComponent } from './components/scroll-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AboutSectionComponent,
    FooterComponent,
    HeroSectionComponent,
    LeadFormSectionComponent,
    LoadingScreenComponent,
    NavbarComponent,
    ProjectsSectionComponent,
    ScrollTopComponent,
    ServicesSectionComponent
  ],
  template: `
    @if (loading()) {
      <app-loading-screen />
    }

    <main class="relative min-h-screen overflow-hidden bg-obsidian text-slate-100">
      <div class="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(53,217,255,0.16),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(79,124,255,0.18),transparent_30%),linear-gradient(180deg,#05070b_0%,#090d18_50%,#05070b_100%)]"></div>
      <div class="pointer-events-none fixed inset-0 z-0 bg-tech-grid bg-[size:44px_44px] opacity-[0.16] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]"></div>

      <app-navbar [activeSection]="activeSection()" />
      <app-hero-section />
      <app-about-section />
      <app-services-section />
      <app-projects-section />
      <app-lead-form-section />
      <app-footer />
      <app-scroll-top [visible]="showScrollTop()" />
    </main>
  `
})
export class AppComponent {
  protected readonly activeSection = signal('hero');
  protected readonly showScrollTop = signal(false);
  protected readonly loading = signal(true);

  constructor() {
    window.setTimeout(() => this.loading.set(false), 900);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const sections = ['hero', 'sobre', 'servicos', 'projetos', 'formulario', 'contato'];
    let current = 'hero';

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element && element.getBoundingClientRect().top <= 120) {
        current = section;
      }
    }

    this.activeSection.set(current);
    this.showScrollTop.set(window.scrollY > 640);
  }
}
