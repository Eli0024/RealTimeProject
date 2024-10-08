import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Authservice } from '../../auth/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-form-registro',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form-registro.component.html',
  styleUrl: './form-registro.component.css'
})
export class FormRegistroComponent {

  username = '';
  first_name = '';
  last_name = '';
  email = '';
  password = '';
  successMessage = ''; 
  errorMessage = ''; 
  is_staff: boolean = false;


  constructor(private authService: Authservice, private router: Router ) {}

  register() {
    const formData = new FormData();
    formData.append('username', this.username);
    formData.append('first_name', this.first_name);
    formData.append('last_name', this.last_name);
    formData.append('email', this.email);
    formData.append('password', this.password);
    formData.append('is_staff', String(this.is_staff));

    this.authService.register(formData).subscribe(
      (data: any) => {
        this.authService.setToken(data.token);
        this.router.navigate(['/']);
        Swal.fire("Registro Exitoso!");
      },
      (error: any) => {
        console.error('Error al registrar', error);
      }
    );
    }

  
}