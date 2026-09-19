import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { HowItWorks } from './components/how-it-works/how-it-works';
import { Testimonials } from './components/testimonials/testimonials';
import { CardModel } from './models/CardModel';
import { CardSection } from './shared/card-section/card-section';

@Component({
  imports: [HeaderComponent, HeroComponent, Testimonials, CardSection, HowItWorks],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  public readonly differentialCards: CardModel[] = [
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
  ];

  public readonly courseCards: CardModel[] = [
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
  ];

  protected readonly title = signal('englishUp');
}
