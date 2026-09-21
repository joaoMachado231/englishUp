import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
    imports: [FontAwesomeModule],
    selector: 'app-footer',
    styleUrl: './footer.component.scss',
    templateUrl: './footer.component.html',
})
export class FooterComponent {
    protected readonly faFacebookF = faFacebookF;
    protected readonly faInstagram = faInstagram;
}
