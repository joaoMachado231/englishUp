import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  imports: [FontAwesomeModule],
  selector: 'app-header',
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public faWpp = faWhatsapp
}
