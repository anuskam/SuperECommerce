import { Directive, HostListener, inject } from '@angular/core';
import { Location } from '@angular/common';

@Directive({
  selector: '[appGoBack]',
})
export class GoBackDirective {
  private location = inject(Location);

  @HostListener('click') onClick() {
    this.location.back();
  }
}
