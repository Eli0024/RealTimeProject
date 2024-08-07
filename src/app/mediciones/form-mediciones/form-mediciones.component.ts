import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Medicion } from '../medicion';
import { MedicionesService } from '../mediciones.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-mediciones',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form-mediciones.component.html',
  styleUrl: './form-mediciones.component.css'
})
export class FormMedicionesComponent implements OnInit{

  mediciones: Medicion[] = [];
  medicion: Medicion = new Medicion();
  errorMessage: string = '';

  constructor(private medicionesService: MedicionesService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
   }

  cargar():void{

    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.medicionesService.get(id).subscribe(
            medicion => this.medicion = medicion
          );
        }
      }
    );
  }

  create(): void {
    console.log('Datos enviados:', this.medicion); 
    this.medicionesService.create(this.medicion).subscribe(
      () => this.router.navigate(['/mediciones']),
      (error) => console.error('Error:', error)
    );
  }


  update(): void {
    this.medicionesService.update(this.medicion).subscribe(
      () => this.router.navigate(['/mediciones']),
    );
  }
}