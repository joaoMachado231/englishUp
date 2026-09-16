import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Diferential } from './diferential';

describe('Diferential', () => {
  let component: Diferential;
  let fixture: ComponentFixture<Diferential>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Diferential],
    }).compileComponents();

    fixture = TestBed.createComponent(Diferential);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
