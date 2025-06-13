import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-registro',
  imports: [RouterLink,FormsModule, RouterModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  usuario = {
    nombre: '',
    apellidos: '',
    email: '',
    password: ''
  };
  onSubmit() {
    console.log('Formulario enviado', this.usuario);
    // Aquí puedes agregar la lógica para manejar el envío del formulario
  }
}
