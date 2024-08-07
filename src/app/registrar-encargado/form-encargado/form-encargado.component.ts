import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Encargado } from '../encargado';
import { EncargadoService } from '../encargado.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-encargado',
  standalone: true,
  imports: [FormsModule,CommonModule,],
  templateUrl: './form-encargado.component.html',
  styleUrl: './form-encargado.component.css'
})
export class FormEncargadoComponent implements OnInit{

 
  encargado: Encargado = new Encargado();
 

  constructor(private encargadoService: EncargadoService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
   }

  cargar():void{

    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.encargadoService.get(id).subscribe(
            encargado => this.encargado = encargado
          );
        }
      }
    );
  }

  create(): void {
    console.log('Datos enviados:', this.encargado); 
    this.encargadoService.create(this.encargado).subscribe(
      () => this.router.navigate(['/registrar-encargado']),
    );
  }

  update(): void {
    this.encargadoService.update(this.encargado).subscribe(
      () => this.router.navigate(['/registrar-encargado']),
    );
  }
}