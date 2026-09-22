import { DOCUMENT } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
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
    private readonly document = inject(DOCUMENT);
    private readonly destroyRef = inject(DestroyRef);
    protected readonly faGithub = faGithub;
    protected readonly faLinkedinIn = faLinkedinIn;
    protected readonly isOpen = signal(true);

    constructor() {
        this.setBodyScrollLock(true);
        this.destroyRef.onDestroy(() => this.setBodyScrollLock(false));
    }

    protected closeModal(): void {
        this.isOpen.set(false);
        this.setBodyScrollLock(false);
    }

    protected openModal(): void {
        this.isOpen.set(true);
        this.setBodyScrollLock(true);
    }

    private setBodyScrollLock(isLocked: boolean): void {
        this.document.body.classList.toggle('modal-open', isLocked);
    }
}
