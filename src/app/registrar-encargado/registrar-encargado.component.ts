import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Encargado } from './encargado';
import { EncargadoService } from './encargado.service';

@Component({
  selector: 'app-registrar-encargado',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './registrar-encargado.component.html',
  styleUrl: './registrar-encargado.component.css'
})
export class RegistrarEncargadoComponent  implements OnInit {

  encargados:Encargado[];
   
  constructor(private encargadoService: EncargadoService) {  }

  ngOnInit(): void {
    this.encargadoService.getAll().subscribe(
      e =>this.encargados=e
);      
    }
  
    delete(encargado:Encargado):void{
      console.log("Hello from delete");
      this.encargadoService.delete(encargado.id_encargado).subscribe(
        res=>this.encargadoService.getAll().subscribe(
          response=>this.encargados=response
        )
      );
    }

    filter: any = { searchTerm: '' }; 

filterEncargados() {
  return this.encargados.filter(encargado =>
    encargado.nombre.toLowerCase().includes(this.filter.searchTerm.toLowerCase()) ||
    encargado.apellido.toLowerCase().includes(this.filter.searchTerm.toLowerCase()) 
  );
}
}

