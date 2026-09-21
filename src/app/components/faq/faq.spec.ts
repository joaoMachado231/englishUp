import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Faq } from './faq';

describe('Faq', () => {
    let component: Faq;
    let fixture: ComponentFixture<Faq>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Faq],
        }).compileComponents();

        fixture = TestBed.createComponent(Faq);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should keep only one faq item open at a time', () => {
        component.toggleFaq(0);
        expect(component.openIndex).toBe(0);

        component.toggleFaq(2);
        expect(component.openIndex).toBe(2);

        component.toggleFaq(2);
        expect(component.openIndex).toBeNull();
    });
});
