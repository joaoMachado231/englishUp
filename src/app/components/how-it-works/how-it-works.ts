import { Component } from '@angular/core';
import { CardModel } from '../../models/CardModel';
import { Card } from '../../shared/card/card';

@Component({
  imports: [Card],
  selector: 'app-how-it-works',
  styleUrl: './how-it-works.scss',
  templateUrl: './how-it-works.html',
})
export class HowItWorks {
  public readonly howItWorksCards: CardModel[] = [
    {
      iconSrc: 'assets/icons/icone-1.svg',
      title: 'Entenda seu nível',
      description: 'Fazemos uma avaliação para entender seu ponto de partida.'
    },
    {
      iconSrc: 'assets/icons/icone-2.svg',
      title: 'Plano personalizado',
      description: 'Criamos um plano de estudos focado nos seus objetivos.'
    },
    {
      iconSrc: 'assets/icons/icone-3.svg',
      title: 'Aulas dinâmicas',
      description: 'Você aprende de forma prática e interativa.'
    },
    {
      iconSrc: 'assets/icons/icone-4.svg',
      title: 'Evolução constante',
      description: 'Acompanhe seu progresso e conquiste resultados !'
    },
  ];
}
