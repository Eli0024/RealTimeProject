import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../../home/home.component';
import { HeaderComponent } from '../../header/header.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { Authservice } from '../../auth/auth.service';
import { UsersService } from '../../login/users.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-editperfil',
  standalone: true,
  imports: [HomeComponent,
    HeaderComponent,
    FormsModule, RouterOutlet, RouterModule, ReactiveFormsModule],
  templateUrl: './editperfil.component.html',
  styleUrl: './editperfil.component.css'
})
export class EditperfilComponent implements OnInit {
  perfil: any = [];
  imagen: File | null = null;
  editarUsuario: FormGroup;

  constructor(public usthservice: UsersService,
    public router: Router,
    public formBuilder: FormBuilder,
    public activrouter: ActivatedRoute) {
    this.editarUsuario = this.formBuilder.group({
      username: [''],
      first_name: [''],
      last_name: [''],
      email: [''],
      password: [''],

    })
  }
  ngOnInit(): void {
    this.getperfil();
  }


  currentImage = './assets/img/índice.png';

  getperfil() {
    const userid = this.activrouter.snapshot.paramMap.get('id');
    if (userid) {
      this.usthservice.lista_usuarios().subscribe(data => {
        this.perfil = data.find((user: { id: number; }) => user.id === +userid);
        this.editarUsuario.patchValue({
          username: this.perfil.username,
          first_name: this.perfil.first_name,
          last_name: this.perfil.last_name,
          email: this.perfil.email,
          password: this.perfil.password,
        });
      });
    }
  }
  onSubmit(): void {
    const usuarioId = this.activrouter.snapshot.paramMap.get('id');
    if (usuarioId) {
      const formData = new FormData();
      formData.append('username', this.editarUsuario.get('username')?.value);
      formData.append('first_name', this.editarUsuario.get('first_name')?.value);
      formData.append('last_name', this.editarUsuario.get('last_name')?.value);
      formData.append('email', this.editarUsuario.get('email')?.value);
      formData.append('password', this.editarUsuario.get('password')?.value);
      if (this.imagen) {
        formData.append('imagen', this.imagen);
      }
      this.usthservice.actualizar_usuarios(+usuarioId, formData).subscribe(() => {
        console.log('actualizado');
        this.router.navigate(['/perfil'])
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Perfil Actualizado",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
  onFile(event: any): void {
    this.imagen = event.target.files[0]
  }
  imagenUrl(item: any): string {
    return `http://localhost:8000${item.imagen}`;
  }
}
