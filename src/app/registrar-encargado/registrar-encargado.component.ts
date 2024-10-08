import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Encargado } from './encargado';
import { EncargadoService } from './encargado.service';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from "../header/header.component";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-registrar-encargado',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HomeComponent, HeaderComponent],
  templateUrl: './registrar-encargado.component.html',
  styleUrl: './registrar-encargado.component.css'
})
export class RegistrarEncargadoComponent  implements OnInit {

  encargados:Encargado[];
   
  constructor(private encargadoService: EncargadoService) {  }

  ngOnInit(): void {
    this.getencargados(); 
    }

    getencargados():void{
      this.encargadoService.getAll().subscribe(
        (data:any)=>{
          this.encargados=data;
        }
      )
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
          this.encargadoService.delete(id).subscribe({
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
  


//     filter: any = { searchTerm: '' }; 

// filterEncargados() {
//   return this.encargados.filter(encargado =>
//     encargado.nombre.toLowerCase().includes(this.filter.searchTerm.toLowerCase()) ||
//     encargado.apellido.toLowerCase().includes(this.filter.searchTerm.toLowerCase()) 
//   );
// }
}

