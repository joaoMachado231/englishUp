import { Component } from '@angular/core';
import { CardModel } from '../../models/CardModel';
import { Card } from '../../shared/card/card';

@Component({
  imports: [Card],
  selector: 'app-courses',
  styleUrl: './courses.scss',
  templateUrl: './courses.html',
})
export class CoursesComponent {
  public cards: CardModel[] = [
      {
        iconSrc: 'assets/icons/graduation-icon.svg',
        title: 'Inglês Geral',
        description: 'Do básico ao avançado para o dia a dia.'
      },
      {
        iconSrc: 'assets/icons/methodology-icon.svg',
        title: 'Inglês para viagens',
        description: 'Aprenda o essencial para viajar com segurança.'
      },
      {
        iconSrc: 'assets/icons/group-icon.svg',
        title: 'Inglês para Negócios',
        description: 'Comunicação profissional para sua carreira.'
      },
      {
        iconSrc: 'assets/icons/chart-icon.svg',
        title: 'Preparatório Exames Internacionais',
        description: 'Prepare-se para os principais exames como TOEFL, IELTS e mais.'
      },
    ]
}
