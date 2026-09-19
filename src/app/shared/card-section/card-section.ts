import { Component, Input } from '@angular/core';
import { CardModel } from '../../models/CardModel';
import { Card } from '../card/card';

@Component({
    imports: [Card],
    selector: 'app-card-section',
    styleUrl: './card-section.scss',
    templateUrl: './card-section.html',
})
export class CardSection {
    @Input() cards: CardModel[] = [];
    @Input() compact = false;
    @Input() hasShadow = false;
    @Input() surface: 'background' | 'white' = 'background';
    @Input() title = '';
    @Input() description = '';
}