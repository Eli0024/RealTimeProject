import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Granja } from '../granja';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-granja',
  standalone: true,
  imports: [FormsModule, CommonModule],
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
          this.apiService.get(id).subscribe(
            granja => this.granja = granja
          );
        }
      }
    );
  }

  create(): void {
    console.log('Datos enviados:', this.granja); 
    this.apiService.create(this.granja).subscribe(
      () => this.router.navigate(['/registrar-g']),
      (error) => console.error('Error:', error)
    );
  }

  update(): void {
    this.apiService.update(this.granja).subscribe(
      () => this.router.navigate(['/registrar-g']),
    );
  }
}
