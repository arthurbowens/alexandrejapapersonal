import { Component, HostBinding, signal } from '@angular/core';

const WHATSAPP_NUMBER = '5553981026289';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly menuOpen = signal(false);

  protected readonly navLinks = [
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Método', href: '#metodo' },
    { label: 'Sobre', href: '#sobre' },
  ];

  @HostBinding('class.menu-open')
  protected get isMenuOpen(): boolean {
    return this.menuOpen();
  }

  protected readonly whatsapp = (message: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  protected readonly messages = {
    nav: 'Olá Alexandre! Quero falar com você sobre treino personalizado.',
    hero: 'Olá Japa! Vi seu site e quero começar meu plano de treino e dieta. Como faço pra começar?',
    benefits:
      'Quero saber como seu acompanhamento pode me ajudar a ganhar massa e performance.',
    plan: 'Quero começar meu plano de treino e dieta com o Alexandre Japa agora!',
    steps: 'Estou pronto(a) para dar o primeiro passo. Como funciona para começar?',
    final:
      'Estou decidido(a)! Quero transformar meu corpo com o Japa. Vamos começar?',
    float: 'Oi Japa! Vim pelo site e quero mais informações sobre o acompanhamento.',
  };

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
