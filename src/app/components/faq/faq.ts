import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  styleUrl: './faq.scss',
  templateUrl: './faq.html',
})
export class Faq {
  public readonly faqItems: FaqItem[] = [
    {
      question: 'Qual a duração dos cursos?',
      answer: 'A duração varia de acordo com o seu nível e objetivo. Na avaliação inicial, montamos um plano personalizado para você.',
    },
    {
      question: 'Preciso ter conhecimento prévio de inglês?',
      answer: 'Não. Temos opções para todos os níveis, desde iniciantes até alunos avançados.',
    },
    {
      question: 'Como funcionam as aulas?',
      answer: 'As aulas são práticas e dinâmicas, com foco em conversação e situações reais do dia a dia.',
    },
    {
      question: 'As aulas são individuais ou em grupo?',
      answer: 'Você pode optar por aulas individuais, em pequenos grupos ou em formato de imersão, conforme o que melhor se encaixa no seu objetivo.',
    },
    {
      question: 'Posso fazer uma aula experimental?',
      answer: 'Sim. A maioria dos nossos alunos começa com uma aula demonstrativa para entender a metodologia e ver como o aprendizado funciona na prática.',
    },
    {
      question: 'Vocês oferecem suporte para quem quer estudar para prova ou trabalho?',
      answer: 'Sim. Trabalhamos com foco em objetivos específicos, como conversação, entrevista, viagens, provas internacionais e desenvolvimento profissional.',
    },
  ];

  public openIndex: number | null = null;

  openAnswer(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }

  isAnswerOpen(index: number): boolean {
    return this.openIndex === index;
  }
}