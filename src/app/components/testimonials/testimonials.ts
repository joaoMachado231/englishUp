import { Component, computed, signal } from '@angular/core';
import { TestimonialModel } from '../../models/TestimonialModel';
import { TestimonialCard } from '../../shared/testimonial-card/testimonial-card';

@Component({
  imports: [TestimonialCard],
  selector: 'app-testimonials',
  styleUrl: './testimonials.scss',
  templateUrl: './testimonials.html',
})
export class Testimonials {
  private readonly pageSize = 3;
  public readonly currentPage = signal(0);

  public testimonials: TestimonialModel[] = [
    {
      rating: 5,
      text: 'A EnglishUp mudou minha vida! Hoje consigo me comunicar em viagens e no trabalho.',
      author: 'Juliana M.',
    },
    {
      rating: 5,
      text: 'Professores incríveis e aulas muito dinâmicas. Aprendi muito mais rápido do que imaginava!',
      author: 'Lucas R.',
    },
    {
      rating: 5,
      text: 'Ambiente acolhedor e metodologia que realmente funciona. Super recomendo!',
      author: 'Fernanda T.',
    },
    {
      rating: 5,
      text: 'As aulas são práticas, leves e me deram confiança para falar inglês.',
      author: 'Rafael S.',
    },
    {
      rating: 4,
      text: 'Finalmente encontrei uma metodologia que cabe na minha rotina.',
      author: 'Camila R.',
    },
    {
      rating: 5,
      text: 'Hoje me sinto muito mais seguro para conversar com pessoas de outros países.',
      author: 'Pedro A.',
    },
    {
      rating: 4,
      text: 'A rotina de estudos ficou leve e os resultados apareceram em pouco tempo.',
      author: 'Marina C.',
    },
    {
      rating: 5,
      text: 'A EnglishUp me ajudou a conquistar novas oportunidades profissionais.',
      author: 'Bruno L.',
    },
  ];

  public readonly pageCount = computed(() => Math.ceil(this.testimonials.length / this.pageSize));

  public readonly pages = computed(() => Array.from({ length: this.pageCount() }, (_, index) => index));
  
  public readonly visibleTestimonials = computed(() => {
    const start = this.currentPage() * this.pageSize;
    return this.testimonials.slice(start, start + this.pageSize);
  });

  public selectPage(page: number): void {
    this.currentPage.set(page);
  }
}
