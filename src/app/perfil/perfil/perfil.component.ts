import { Component } from '@angular/core';
import { HomeComponent } from '../../home/home.component';
import { HeaderComponent } from '../../header/header.component';
import { Authservice } from '../../auth/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [HomeComponent, HeaderComponent, RouterOutlet, RouterLink],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {


  user: any = {}; 
  loading: boolean = true; 
  error: string | null = null;
  is_staff: boolean = false 
  router: any;

  constructor(public userService: Authservice, public roouter: Router) {}
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

  editarperfilId(id: any){
    this.roouter.navigate(['perfil/update/perfil',id])
  }
  imagenUrl(item: any): string {
    return `http://localhost:8000${item.imagen}`;
  }
}


