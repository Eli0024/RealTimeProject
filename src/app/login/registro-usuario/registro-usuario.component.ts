import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css'
})
export class RegistroUsuarioComponent implements OnInit{

  usuarios: Usuario[] = [];

   
  constructor(private usuarioService: UsuarioService) {  }

  ngOnInit(): void {
    this.usuarioService.getAll().subscribe(
      e =>this.usuarios=e
);      
    }
  
    delete(usuario:Usuario):void{
      console.log("Hello from delete");
      this.usuarioService.delete(usuario.id_usuario).subscribe(
        res=>this.usuarioService.getAll().subscribe(
          response=>this.usuarios=response
        )
      );
    }

    filter: any = { searchTerm: '' }; 

filterUsuarios() {
  return this.usuarios.filter(usuario =>
    usuario.nombre.toLowerCase().includes(this.filter.searchTerm.toLowerCase()) ||
    usuario.apellido.toLowerCase().includes(this.filter.searchTerm.toLowerCase())
  );
  
}
}

