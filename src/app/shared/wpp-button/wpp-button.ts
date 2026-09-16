import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  imports: [FontAwesomeModule],
  selector: 'app-wpp-button',
  styleUrl: './wpp-button.scss',
  templateUrl: './wpp-button.html',
})
export class WppButton {
  @Input()
  public buttonLAbbel: string = '';

  public faWpp = faWhatsapp

  openWhatsApp() {
    console.log('Opening WhatsApp...');
  }
}
