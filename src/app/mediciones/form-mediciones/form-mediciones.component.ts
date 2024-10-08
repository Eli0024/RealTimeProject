import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Medicion } from '../medicion';
import { MedicionesService } from '../mediciones.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { HeaderComponent } from "../../header/header.component";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';


@Component({
  selector: 'app-form-mediciones',
  standalone: true,
  imports: [FormsModule, CommonModule, HomeComponent, HeaderComponent],
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
     
    this.medicionesService.create(this.medicion).subscribe(
      () => { 
        this.router.navigate(['/mediciones']);
        
      },
      (error) => console.error('Error:', error)
    );
  }


  update(): void {
    this.medicionesService.update(this.medicion).subscribe(
      () => this.router.navigate(['/mediciones']),
    );
  }
}