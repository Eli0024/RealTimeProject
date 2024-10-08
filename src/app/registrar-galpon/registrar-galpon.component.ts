import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GalponService } from './galpon.service';
import { Galpon } from './galpon';
import { Authservice } from '../auth/auth.service';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from "../header/header.component";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-registrar-galpon',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, RouterOutlet, HomeComponent, HeaderComponent],
  templateUrl: './registrar-galpon.component.html',
  styleUrl: './registrar-galpon.component.css'
})
export class RegistrarGalponComponent implements OnInit {

  galpones:Galpon[] = [];
  filter: { searchTerm: string } = { searchTerm: '' };
  isStaff = false;
 
  constructor(private galponService: GalponService, private authService: Authservice, private router: Router,) {  }

  ngOnInit(): void {
    this.getGalpon();
    }
  
    addProduct() {
      this.router.navigate(['form-galpon'])
    }
    getGalpon(): void{
      this.galponService.getGalpones().subscribe(
        (data:any)=>{
          this.galpones = data;
        }
      )
    }

    deleteGalpon(id: number) {
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
          this.galponService.deleteGalpon(id).subscribe({
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
  

filterGalpon() {
  return this.galpones.filter(galpon =>
    galpon.nombre.toLowerCase().includes(this.filter.searchTerm.toLowerCase()) ||
    galpon.ubicacion.toLowerCase().includes(this.filter.searchTerm.toLowerCase())
  );
}
}


