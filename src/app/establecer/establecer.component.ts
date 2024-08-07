import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Parametro } from './parametros';
import { ParametrosService } from './parametros.service';


@Component({
  selector: 'app-establecer',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './establecer.component.html',
  styleUrl: './establecer.component.css'
})
export class EstablecerComponent implements OnInit{
  
  parametros:Parametro[]=[];
   
  constructor(private parametrosService: ParametrosService) {  }

  ngOnInit(): void {
    this.parametrosService.getAll().subscribe(
      e =>this.parametros=e
);      
    }

  
    delete(parametro:Parametro):void{
      console.log("Hello from delete");
      this.parametrosService.delete(parametro.id_config).subscribe(
        res=>this.parametrosService.getAll().subscribe(
          response=>this.parametros=response
        )
      );
    }

    filter: any = { searchTerm: '' }; 

filterParametros() {
  return this.parametros.filter(parametro =>
    parametro.tipo_aves.toLowerCase().includes(this.filter.searchTerm.toLowerCase()) 
  );
}
}
