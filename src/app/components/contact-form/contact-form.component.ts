import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { CommonModule } from '@angular/common'; // Importa CommonModule

declare var bootstrap: any;

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {


  form: FormGroup = this.fb.group({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    Necesidad: '',
    Necesidad_especifica: '',
    Asesoria_o_Capacitacion: '',
    Intereses: '',
    Intereses_especificos: '',
    Espectativas: ''
  });

  constructor(private fb: FormBuilder) {

  }


  async sendEmail() {
    emailjs.init('OHoMz0Xqr1ltR7BPw')
     await emailjs.send("service_mtebr8g","template_h34rbsw", {
      nombre: this.form.value.nombre,
      empresa: this.form.value.empresa,
      email: this.form.value.email,
      telefono: this.form.value.telefono,
      Necesidad: this.form.value.Necesidad,
      Necesidad_especifica: this.form.value.Necesidad_especifica,
      Asesoria_o_Capacitacion: this.form.value.Asesoria_o_Capacitacion,
      Intereses: this.form.value.Intereses,
      Intereses_especificos: this.form.value.Intereses_especificos,
      Espectativas: this.form.value.Espectativas
    })
      .then(
        (resp) => {
          this.form.reset();
          this.showSuccessModal(); // Mostrar modal de éxito
          // Aquí puedes manejar el éxito, por ejemplo, mostrar un mensaje de confirmación
        },
        (error) => {
          console.log('FAILED...', error.text);
          // Aquí puedes manejar el error, como mostrar un mensaje de error
        }
      );

  }
    // Método para mostrar el modal
    private showSuccessModal(): void {
      const modalElement = document.getElementById('successModal');
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }

}
