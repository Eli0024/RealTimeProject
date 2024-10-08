import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Galpon } from '../galpon';
import { GalponService } from '../galpon.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { HeaderComponent } from "../../header/header.component";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';


@Component({
  selector: 'app-form-galpon',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, HomeComponent, HeaderComponent],
  templateUrl: './form-galpon.component.html',
  styleUrl: './form-galpon.component.css'
})
export class FormGalponComponent implements OnInit{

  galpones: Galpon[] = [];
  galpon: Galpon = new Galpon();
  filter: any = { searchTerm: ''};
  errorMessage: string = '';

  constructor(
    private galponService: GalponService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.galponService.getGalpon(id).subscribe(galpon => {
          this.galpon = galpon;
          // Enviar el nombre del galpón al servicio compartido
          //this.galponService.setGalponNombre(galpon.nombre);
        });
      }
    });
  }

  save(): void {
    if (this.galpon.id_galpon) {
      this.update();
    } else {
      this.create();
    }
  }

  create(): void {
    this.galponService.createGalpon(this.galpon).subscribe(
      () => 
        //this.galponService.setGalponNombre(this.galpon.nombre);
        this.router.navigate(['/registrar-galpon']),
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
    this.galponService.updateGalpon(this.galpon).subscribe(
      () => 
        //this.galponService.setGalponNombre(this.galpon.nombre);
        this.router.navigate(['/registrar-galpon']),
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
  

