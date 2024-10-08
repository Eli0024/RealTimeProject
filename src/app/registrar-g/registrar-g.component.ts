import { Component, OnInit } from '@angular/core';
import { Granja } from './granja';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from "../header/header.component";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-registrar-g',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HomeComponent, HeaderComponent],
  templateUrl: './registrar-g.component.html',
  styleUrls: ['./registrar-g.component.css'] // Corregido el nombre del atributo
})
export class RegistrarGComponent implements OnInit 
{
  titulo: string = "Lista de Registros";
  granjas: Granja[] = [];
  filter: any = { searchTerm: '' };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadGranjas();
  }

  loadGranjas(): void {
    this.apiService.getAllGranjas().subscribe(
      (data) => {
        this.granjas = data;
      },
      (error) => {
        console.error('Error:', error);
        this.granjas = []; 
      }
    );
  }

  delete(id: number) {
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
        this.apiService.deleteGranja(id).subscribe({
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
  

  filterGranjas(): Granja[] {
    if (this.granjas && this.granjas.length) {
      return this.granjas.filter(granja =>
        granja.nombre_granja.toLowerCase().includes(this.filter.searchTerm.toLowerCase()) ||
        granja.direccion.toLowerCase().includes(this.filter.searchTerm.toLowerCase()) ||
        granja.email.toLowerCase().includes(this.filter.searchTerm.toLowerCase())
      );
    }
    return [];
  }
}
