import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  /* isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const nav = document.querySelector('.header__nav') as HTMLElement;
    if (nav) {
      if (this.isMenuOpen) {
        nav.classList.add('open');
      } else {
        nav.classList.remove('open');
      }
    }
  } */
  toggleMenu() {
    const x = document.getElementById('myLinks');
    if (x) {
      if (x.style.display === 'block') {
        x.style.display = 'none';
      } else {
        x.style.display = 'block';
      }
    }
  }
}
