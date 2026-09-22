import { Component } from '@angular/core';
import { WppButton } from '../../shared/wpp-button/wpp-button';

@Component({
  imports: [WppButton],
  selector: 'app-hero',
  styleUrl: './hero.component.scss',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  scrollToCourses(): void {
    document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' });
  }
}
