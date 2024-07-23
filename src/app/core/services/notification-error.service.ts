import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationErrorService {
  showMessage(message: string): void {
    alert(message);
  }
}
