import { Component, signal } from '@angular/core';

// Componentes nativos de Angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Componentes de Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// Modelo de Usuarios
import { User } from '../../../models/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  // Input contraseña -> ícono para ver o no contraseña
  hide = signal(true);

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  // Corresponde al 'mat-hint' que nos permite visualizar cantidad de caracteres ingresados
  protected readonly value = signal('');

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }

  // Modelo de usuario
  user: User = {
    id: "", // Inicializamos los campos vacíos (tipo string)
    username: "",
    password: ""
  }

  // Función para registro de usuarios
  async registrar() {
    // Recopilación de los datos ingresados
    const credenciales = {
      username: this.user.username,
      password: this.user.password
    }

    // Constante de prueba -> alerta
    const res = alert("Hola " + credenciales.username);
  }
}
