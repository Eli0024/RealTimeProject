import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Parametro } from './parametros';
import { ParametrosService } from './parametros.service';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from "../header/header.component";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';


@Component({
  selector: 'app-establecer',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HomeComponent, HeaderComponent],
  templateUrl: './establecer.component.html',
  styleUrl: './establecer.component.css'
})
export class EstablecerComponent implements OnInit{
  
  parametros:Parametro[]=[];
   
  constructor(private parametrosService: ParametrosService) {  }

  ngOnInit(): void {
    this.getParametros();   
    }
    getParametros():void{
      this.parametrosService.getAll().subscribe(
        (data:any)=>{
          this.parametros = data;
        }
      )
    }

    eliminar(id: number) {
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
          this.parametrosService.delete(id).subscribe({
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
  

    filter: any = { searchTerm: '' }; 

filterParametros() {
  return this.parametros.filter(parametro =>
    parametro.tipo_aves.toLowerCase().includes(this.filter.searchTerm.toLowerCase()) 
  );
}



}
