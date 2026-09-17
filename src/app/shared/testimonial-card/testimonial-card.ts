import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  styleUrl: './testimonial-card.scss',
  templateUrl: './testimonial-card.html',
})
export class TestimonialCard {
  @Input()
  public rating = 5;

  @Input()
  public text = '';

  @Input()
  public author = '';

  public readonly stars = [1, 2, 3, 4, 5];
}