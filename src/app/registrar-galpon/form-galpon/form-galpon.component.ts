import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Galpon } from '../galpon';
import { GalponService } from '../galpon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-galpon',
  standalone: true,
  imports: [FormsModule,CommonModule,],
  templateUrl: './form-galpon.component.html',
  styleUrl: './form-galpon.component.css'
})
export class FormGalponComponent implements OnInit{

 
  galpon: Galpon = new Galpon();



  constructor(private galponService: GalponService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
   }

  cargar():void{

    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.galponService.get(id).subscribe(
            galpon => this.galpon = galpon
          );
        }
      }
    );
  }

  create(): void {
    console.log('Datos enviados:', this.galpon); 
    this.galponService.create(this.galpon).subscribe(
      () => this.router.navigate(['/registrar-galpon']),
    );
  }

  update(): void {
    this.galponService.update(this.galpon).subscribe(
      () => this.router.navigate(['/registrar-galpon']),
    );
  }
}
