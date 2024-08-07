import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-indexini',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './indexini.component.html',
  styleUrl: './indexini.component.css'
})
export class IndexiniComponent {

  temperaturaActual: number = 0;
  humedadActual: number = 0;
  datosActivos:boolean =true;
  

  ngOnInit() {
    // Simular datos en tiempo real o asignar valores aquí
    this.simularDatosEnTiempoReal();
  }

  simularDatosEnTiempoReal() {
    setInterval(() => {
      const now = new Date().getTime();
      this.temperaturaActual = Math.random() * 30; // Temperatura aleatoria
      this.humedadActual = Math.random() * 100; // Humedad aleatoria
    }, 1000); // Actualizar cada segundo

    
  }
  
}