import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiferentialComponent } from './components/diferential/diferential.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';

@Component({
  imports: [RouterOutlet, HeaderComponent, HeroComponent, DiferentialComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('englishUp');
}
