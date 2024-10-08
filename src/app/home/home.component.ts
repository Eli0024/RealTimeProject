import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PerfilComponent } from '../perfil/perfil/perfil.component';
import { Authservice } from '../auth/auth.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, DashboardComponent, PerfilComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  user: any = {}; 
  loading: boolean = true; 
  error: string | null = null;
  is_staff: boolean = false 
  router: any;

  constructor(public userService: Authservice, public roouter: Router, public autservice: Authservice) {}
  ngOnInit(): void {
    this.getUserLogged();
  }
  getUserLogged(): void {
    this.userService.profile().subscribe(
      (user: any) => {
        this.user = user;
        this.is_staff = user.isstaff
      },
      (error: any) => {
        console.error('Error al obtener el perfil:', error);
        this.error = 'No se pudo obtener la información del perfil.';
        this.loading = false; 
      }
    );
  }
  currentImage = './assets/img/índice.png';

  logutsesion() {
    this.autservice.loogouttoken();
    this.router.navigate(['/']);
  }

  imagenUrl(item: any): string {
    return `http://localhost:8000${item.imagen}`;
  }

}
