import { Component } from '@angular/core';
import { CardModel } from '../../models/CardModel';
import { Card } from '../../shared/card/card';

@Component({
  imports: [Card],
  selector: 'app-diferential-component',
  styleUrl: './diferential.component.scss',
  templateUrl: './diferential.component.html',
})
export class DiferentialComponent {

  public cards: CardModel[] = [
    {
      iconSrc: 'assets/icons/graduation-icon.svg',
      title: 'Professores Qualificados',
      description: 'Profissionais experientes e apaixonados por ensinar.'
    },
    {
      iconSrc: 'assets/icons/methodology-icon.svg',
      title: 'Metodologia Moderna',
      description: 'Aulas dinâmicas e com foco na conversação.'
    },
    {
      iconSrc: 'assets/icons/group-icon.svg',
      title: 'Turmas Reduzidas',
      description: 'Maior atenção e melhor aprendizado.'
    },
    {
      iconSrc: 'assets/icons/chart-icon.svg',
      title: 'Resultados Comprovados',
      description: 'Alunos que evoluem de verdade.'
    },
  ]

}
