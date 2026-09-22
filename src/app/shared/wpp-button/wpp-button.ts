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

  openWhatsApp(): void {
    const phoneNumber = '5519997614074';
    const message = 'Olá! Vi sua landing page de portfólio e gostaria de conversar sobre a criação de uma página personalizada para o meu negócio. Poderia me enviar mais informações e um orçamento?';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }
}
