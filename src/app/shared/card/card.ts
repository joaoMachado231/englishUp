import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-card',
  styleUrl: './card.scss',
  templateUrl: './card.html',
})
export class Card {

  @Input()
  public iconSrc: string = '';
  
  @Input()
  public title: string = '';

  @Input()
  public description: string = '';

  @Input()
  public hasShadow: boolean = false;
}
