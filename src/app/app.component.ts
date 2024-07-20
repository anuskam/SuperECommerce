import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { LoadService } from './core/services/load.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'super-ecommerce';
  isLoading: boolean = false;
  loadService = inject(LoadService);
  private cdRef = inject(ChangeDetectorRef);
  patata: string = 'patata';

  // Inicializamos el valor de isLoading con el valor inicial del servicio
  ngOnInit(): void {
    this.isLoading = this.loadService.isLoading;
  }

  /* Esto verifica si el valor de isLoading ha cambiado después de cambiar de vista. Si ha
  cambiado, actualiza el valor y llama a detectChanges en el ChangeDetectorRef para forzar que
  se detecten los cambios */
  ngAfterViewChecked(): void {
    if (this.isLoading !== this.loadService.isLoading) {
      this.isLoading = this.loadService.isLoading;
      this.cdRef.detectChanges();
    }
  }
}
