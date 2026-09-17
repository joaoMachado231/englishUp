import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from './components/courses/courses';
import { DiferentialComponent } from './components/diferential/diferential.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { Testimonials } from './components/testimonials/testimonials';

@Component({
  imports: [RouterOutlet, HeaderComponent, HeroComponent, DiferentialComponent, CoursesComponent, Testimonials],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('englishUp');
}
