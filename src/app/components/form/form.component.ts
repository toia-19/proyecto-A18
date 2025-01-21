import { Component, signal } from '@angular/core';

// Componentes nativos de Angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Componentes de Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// Modelo de Usuarios
import { User } from '../../models/user';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  // Input contraseña
  hide = signal(true);

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

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
}
