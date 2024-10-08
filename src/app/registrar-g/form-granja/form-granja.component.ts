import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ApiService } from '../api.service';
import { Granja } from '../granja';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../home/home.component';
import { HeaderComponent } from "../../header/header.component";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-form-granja',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, HomeComponent, HeaderComponent],
  templateUrl: './form-granja.component.html',
  styleUrls: ['./form-granja.component.css'],
})
export class FormGranjaComponent implements OnInit {
  
  granjas: Granja[] = [];
  filter: any = { searchTerm: '' };
  granja: Granja = new Granja();
  errorMessage: string = '';

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.apiService.getGranja(id).subscribe(
            granja => this.granja = granja
          );
        }
      }
    );
  }

  create(): void {
    this.apiService.create(this.granja).subscribe(
      () => this.router.navigate(['/registrar-g']),
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
    this.apiService.update(this.granja).subscribe(
      () => this.router.navigate(['/registrar-g']),
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
