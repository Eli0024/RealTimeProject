import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GalponService } from './galpon.service';
import { Galpon } from './galpon';

@Component({
  selector: 'app-registrar-galpon',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './registrar-galpon.component.html',
  styleUrl: './registrar-galpon.component.css'
})
export class RegistrarGalponComponent implements OnInit {

  galpon:Galpon[] = [];
 
  constructor(private galponService: GalponService) {  }

  ngOnInit(): void {
    this.galponService.getAll().subscribe(
      e =>this.galpon=e
);      
    }
  
    delete(galpon:Galpon):void{
      console.log("Hello from delete");
      this.galponService.delete(galpon.id_galpon).subscribe(
        res=>this.galponService.getAll().subscribe(
          response=>this.galpon=response
        )
      );
    }

    filter: any = { searchTerm: '' }; 

filterGalpon() {
  return this.galpon.filter(granja =>
    granja.nombre.toLowerCase().includes(this.filter.searchTerm.toLowerCase()) ||
    granja.capacidad.toLowerCase().includes(this.filter.searchTerm.toLowerCase()) ||
    granja.ubicacion.toLowerCase().includes(this.filter.searchTerm.toLowerCase())
  );
}
}

