import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { UsersService } from '../users.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../user';
import { CookieService } from 'ngx-cookie-service';
import { Authservice } from '../../auth/auth.service';

@Component({
  selector: 'app-updatelogin',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterModule, RouterOutlet],
  templateUrl: './updatelogin.component.html',
  styleUrl: './updatelogin.component.css'
})
export class UpdateloginComponent {
  users: any = [];
  userForm: FormGroup;

  constructor(
    private router: Router,
    private userservice: UsersService,
    private formBuilder: FormBuilder,
    public activerouter: ActivatedRoute,
    private cookies: CookieService,
    public authservice: Authservice,

  ) {
    this.userForm = this.formBuilder.group({
      username: [''],
      first_name: [''],
      last_name: [''],
      email: [''],
      password: [''],
      is_staff: [false],
    });
  }

  ngOnInit(): void {
    this, this.authservice.isAdmin().subscribe(isAdmin => {
      if (!isAdmin) {
        alert('No Tienes permisos para modificar usuarios')
        this.router.navigate(['/usuarios']);


      } else {
        const userid = this.activerouter.snapshot.paramMap.get('id');
        if (userid) {
          this.userservice.lista_usuarios().subscribe(data => {
            this.users = data.find((user: { id: number; }) => user.id === +userid);
            this.userForm.patchValue({
              username: this.users.username,
              first_name: this.users.first_name,
              last_name: this.users.last_name,
              email: this.users.email,
              password: this.users.password,
              is_staff: this.users.is_staff,
            });
          });
        }
        
      }
    })

  }

  onSubmit(): void {
    const usuarioId = this.activerouter.snapshot.paramMap.get('id');
    if (usuarioId) {
      const formData = new FormData();
      formData.append('username', this.userForm.get('username')?.value);
      formData.append('first_name', this.userForm.get('first_name')?.value);
      formData.append('last_name', this.userForm.get('last_name')?.value);
      formData.append('email', this.userForm.get('email')?.value);
      formData.append('password', this.userForm.get('password')?.value);
      formData.append('is_staff', this.userForm.get('is_staff')?.value);
      this.userservice.actualizar_usuarios(+usuarioId, formData).subscribe(() => {
        console.log('actualizado');
        this.router.navigate(['/usuarios'])
      });
      alert('Usuario actualizado con exito')
    }
  }
}
