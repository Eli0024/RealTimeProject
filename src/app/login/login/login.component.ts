import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Authservice } from '../../auth/auth.service';
import { FormRegistroComponent } from '../form-registro/form-registro.component';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, FormRegistroComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = '';
  password = '';
  errorMessage = ''; 

  constructor(private authService: Authservice, private router: Router) {}

  // login(username: string, password: string) {
  //   this.authService.login(username, password).subscribe({
  //     next: response => {
  //       localStorage.setItem('token', response.token);
  //       localStorage.setItem('is_staff', response.is_staff.toString());
  //       this.router.navigate(['dashboard']);
  //     },
  //     error: error => {
  //       this.errorMessage = 'Error al iniciar sesión';
  //     }
  //   });
  // }
  login() {
    const user = { username: this.username, password: this.password};
    this.authService.login(user).subscribe(data => {
      this.authService.setToken(data.token)
     
      this.router.navigate(['/dashboard']);
    },
    error => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario o Contraseña Incorrecta!",
      });
    }
  );
  }
  onSubmit() {
    this.login();
  }
}
