import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  isOverlayButtonDisabled: boolean = false;
  textContent: string = "Enviar Correo"
  triggerSubmit() {
    // Deshabilita el botón de overlay para evitar múltiples clics
    this.isOverlayButtonDisabled = true;

    alert('Alerta');

    // Selecciona el botón de enviar correo y dispara su evento de clic
    const submitButton = document.getElementById('submitButton') as HTMLButtonElement;
    if (submitButton) {
      submitButton.click();
    }
  }
}
