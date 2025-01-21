import { Component } from '@angular/core';

// Importación de componente a incrustrar
import { FormComponent } from '../../../components/form/form.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
