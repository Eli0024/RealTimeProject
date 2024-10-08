import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Encargado } from '../encargado';
import { EncargadoService } from '../encargado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { HeaderComponent } from "../../header/header.component";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-form-encargado',
  standalone: true,
  imports: [FormsModule, CommonModule, HomeComponent, HeaderComponent],
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
    this.encargadoService.create(this.encargado).subscribe(
      () => this.router.navigate(['/registrar-encargado']),
      Swal.fire({
        title: "Registro Exitoso",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      })
    );
  }

  update(): void {
    this.encargadoService.update(this.encargado).subscribe(
      () => this.router.navigate(['/registrar-encargado']),
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registro Actualizado",
        showConfirmButton: false,
        timer: 1500
      })  
    );
  }
}