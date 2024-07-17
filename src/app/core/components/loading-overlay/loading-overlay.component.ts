import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrl: './loading-overlay.component.scss',
})
export class LoadingOverlayComponent {
  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  /* ngOnInit(): void {
    if (!this.url) throw new Error('URL property is required');
  } */

  onLoad() {
    this.hasLoaded = true;
  }
}
