import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  private router = inject(Router);

  login(): void {
    this.router.navigate(['login']);
  }

  signin(): void {
    this.router.navigate(['signin']);
  }
}
