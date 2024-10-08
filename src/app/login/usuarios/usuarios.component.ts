import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HomeComponent } from "../../home/home.component";
import { HeaderComponent } from "../../header/header.component";
import { CookieService } from 'ngx-cookie-service';
import { Authservice } from '../../auth/auth.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HomeComponent, HeaderComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit 
{
  titulo: string = "Lista de Registros";
  users: User[] = [];
  loading: boolean = true; 
  error: string | null = null;
  filter: any = { searchTerm: '' };
  is_staff: boolean = true;

  constructor(
    private usersService: UsersService,
    private router: Router,
    public cookies: CookieService,
    public ahutservice: Authservice
  ) { }

  ngOnInit(): void {
    this.getUserList();
  }
  eliminar_Usuarios(id: number){
    console.log(id);
      
    Swal.fire({
      title: "¿Desea eliminar este registro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, ¡elimínalo!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.usersService.eliminar_usuarios(id).subscribe({
          next: () => {
            Swal.fire({
              title: "¡Eliminado!",
              text: "El registro ha sido eliminado.",
              icon: "success"
            });
            this.ngOnInit(); // Actualiza la vista
          },
          error: (err) => {
            console.error('Error:', err);
            Swal.fire({
              title: "Error",
              text: "Hubo un problema al eliminar el registro.",
              icon: "error"
            });
          }
        });
      }
    });
  }



  editarUsuarioId(id: any){
    this.router.navigate(['/update/login', id])
  }

  filterUsers(): User[] {
    if (this.users && this.users.length) {
      return this.users.filter(user =>
        user.first_name.toLowerCase().includes(this.filter.searchTerm.toLowerCase()) ||
        user.last_name.toLowerCase().includes(this.filter.searchTerm.toLowerCase()) 
      );
    }
    return [];
  }
  getUserList(): void {
    this.usersService.lista_usuarios().subscribe(
      (data: any) => {
        this.users = data;
      },
      (error: any) => {
        console.error('Error al obtener el perfil:', error);
        this.error = 'No se pudo obtener la información del perfil.';
        this.loading = false; 
      }
    );
  }
}

