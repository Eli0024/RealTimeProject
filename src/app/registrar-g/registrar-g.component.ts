import { Component, OnInit } from '@angular/core';
import { Granja } from './granja';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrar-g',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './registrar-g.component.html',
  styleUrls: ['./registrar-g.component.css'] // Corregido el nombre del atributo
})
export class RegistrarGComponent implements OnInit 
{
  titulo: string = "Lista de Registros";
  granjas: Granja[] = [];
  filter: any = { searchTerm: '' };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadGranjas();
  }

  loadGranjas(): void {
    this.apiService.getAll().subscribe(
      (data) => {
        this.granjas = data;
      },
      (error) => {
        console.error('Error:', error);
        this.granjas = []; // Asegúrate de que granjas no sea undefined en caso de error
      }
    );
  }

  delete(granja: Granja): void {
    if (confirm('¿Estás seguro de que quieres eliminar esta granja?')) {
      console.log('ID de la granja a eliminar:', granja.id_granja); // Verifica el ID
      this.apiService.delete(granja.id_granja).subscribe(
        () => {
          this.loadGranjas(); // Recarga la lista después de eliminar
        },
        (error) => {
          console.error('Error al eliminar:', error);
        }
      );
    }
  }
  

  filterGranjas(): Granja[] {
    if (this.granjas && this.granjas.length) {
      return this.granjas.filter(granja =>
        granja.nombre_granja.toLowerCase().includes(this.filter.searchTerm.toLowerCase()) ||
        granja.direccion.toLowerCase().includes(this.filter.searchTerm.toLowerCase()) ||
        granja.email.toLowerCase().includes(this.filter.searchTerm.toLowerCase())
      );
    }
    return [];
  }
}
