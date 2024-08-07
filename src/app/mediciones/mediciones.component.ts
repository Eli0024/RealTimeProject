import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Medicion } from './medicion';
import { MedicionesService } from './mediciones.service';

@Component({
  selector: 'app-mediciones',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './mediciones.component.html',
  styleUrl: './mediciones.component.css'
})
export class MedicionesComponent implements OnInit{

  mediciones:Medicion[];
   
  constructor(private medicionesService: MedicionesService) {  }

  ngOnInit(): void {
    this.medicionesService.getAll().subscribe(
      e =>this.mediciones=e
);      
    }
  
    delete(medicion:Medicion):void{
      console.log("Hello from delete");
      this.medicionesService.delete(medicion.id_medicion).subscribe(
        res=>this.medicionesService.getAll().subscribe(
          response=>this.mediciones=response
        )
      );
    }




}
