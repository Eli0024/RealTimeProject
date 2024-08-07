import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Parametro } from '../parametros';
import { ParametrosService } from '../parametros.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-parametros',
  standalone: true,
  imports: [FormsModule,CommonModule,],
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
    console.log('Datos enviados:',this.parametro); 
    this.parametrosService.create(this.parametro).subscribe(
      () => this.router.navigate(['/establecer']),
      
    );
  }
  update(): void {
    this.parametrosService.update(this.parametro).subscribe(
      () => this.router.navigate(['/establecer']),
    );
  }
}
