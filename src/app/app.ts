import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';

@Component({
  imports: [RouterOutlet, HeaderComponent, HeroComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('englishUp');
}
