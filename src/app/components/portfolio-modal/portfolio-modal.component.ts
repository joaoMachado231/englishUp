import { Component, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { WppButton } from '../../shared/wpp-button/wpp-button';

@Component({
    imports: [FontAwesomeModule, WppButton],
    selector: 'app-portfolio-modal',
    styleUrl: './portfolio-modal.component.scss',
    templateUrl: './portfolio-modal.component.html',
})
export class PortfolioModalComponent {
    protected readonly faGithub = faGithub;
    protected readonly faLinkedinIn = faLinkedinIn;
    protected readonly isOpen = signal(true);

    protected closeModal(): void {
        this.isOpen.set(false);
    }

    protected openModal(): void {
        this.isOpen.set(true);
    }
}
