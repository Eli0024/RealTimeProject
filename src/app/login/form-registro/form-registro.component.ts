import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-registro',
  standalone: true,
  imports: [FormsModule,CommonModule,],
  templateUrl: './form-registro.component.html',
  styleUrl: './form-registro.component.css'
})
export class FormRegistroComponent implements OnInit{

  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
   }

  cargar():void{

    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.usuarioService.get(id).subscribe(
            usuario => this.usuario = usuario
          );
        }
      }
    );
  }

  create(): void {
    console.log(this.usuario); 
    this.usuarioService.create(this.usuario).subscribe(
      () => this.router.navigate(['/registro-usuario'])
    );
  }

  update(): void {
    this.usuarioService.update(this.usuario).subscribe(
      () => this.router.navigate(['/registro-usuario']),
    );
  }
}

