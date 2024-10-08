import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Parametro } from '../parametros';
import { ParametrosService } from '../parametros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { HeaderComponent } from "../../header/header.component";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-form-parametros',
  standalone: true,
  imports: [FormsModule, CommonModule, HomeComponent, HeaderComponent],
  templateUrl: './form-parametros.component.html',
  styleUrl: './form-parametros.component.css'
})
export class FormParametrosComponent implements OnInit{

 
 parametro: Parametro = new Parametro();
 

  constructor(private parametrosService: ParametrosService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
   }

  cargar():void{

    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id_config'];
        if(id){
          this.parametrosService.get(id).subscribe(
            parametro => this.parametro = parametro
          );
        }
      }
    );
  }

  create(): void {
    this.parametrosService.create(this.parametro).subscribe(
      () => this.router.navigate(['/establecer']),
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
    this.parametrosService.update(this.parametro).subscribe(
      () => this.router.navigate(['/establecer']),
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