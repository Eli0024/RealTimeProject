import { Component,  OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Authservice } from '../auth/auth.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(private router: Router, public userService: Authservice) {}

    ngOnInit() {  
      this.getUserLogged();
  }


  user: any = {}; 
  loading: boolean = true; 
  error: string | null = null;
  is_staff: boolean = false 
  
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
    this.router.navigate(['perfil/update/perfil',id])
  }
  imagenUrl(item: any): string {
    return `http://localhost:8000${item.imagen}`;
  }

}

