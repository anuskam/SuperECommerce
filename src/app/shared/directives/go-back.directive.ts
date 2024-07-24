import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Location } from '@angular/common';

@Directive({
  selector: '[appGoBack]',
})
export class GoBackDirective implements OnInit {
  private location = inject(Location);
  private renderer = inject(Renderer2);
  private el = inject(ElementRef);

  ngOnInit(): void {
    this.setStyles();
  }

  @HostListener('click') onClick() {
    this.location.back();
  }

  private setStyles() {
    const fontFamily = getComputedStyle(document.documentElement)
      .getPropertyValue('--font-family')
      .trim();
    this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '8px 12px');
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '8px');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    this.renderer.setStyle(this.el.nativeElement, 'font-family', fontFamily);
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '14px');
    this.renderer.setStyle(
      this.el.nativeElement,
      'text-transform',
      'uppercase',
    );
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
  }
}
