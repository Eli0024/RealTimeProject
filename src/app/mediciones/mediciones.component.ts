import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Medicion } from './medicion';
import { MedicionesService } from './mediciones.service';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from "../header/header.component";
import * as XLSX from  'xlsx';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';


@Component({
  selector: 'app-mediciones',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HomeComponent, HeaderComponent],
  templateUrl: './mediciones.component.html',
  styleUrl: './mediciones.component.css'
})
export class MedicionesComponent implements OnInit{

  mediciones:Medicion[];
   
  constructor(private medicionesService: MedicionesService) {  }

  ngOnInit(): void {
    this.getMediciones();
    }
    getMediciones():void{
      this.medicionesService.getAll().subscribe(
        (data:any)=>{
          this.mediciones=data;
          // this.exportToExcel(this.mediciones);
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
          this.medicionesService.delete(id).subscribe({
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

    exportToExcel(data: any[]): void {
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
      const workbook: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'mediciones');
    
      // Exportar el archivo
      XLSX.writeFile(workbook, 'report.xlsx');
    }
}
