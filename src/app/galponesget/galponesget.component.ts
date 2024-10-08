import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Authservice } from '../auth/auth.service';
import { GalponService } from '../registrar-galpon/galpon.service';
import { Galpon } from '../registrar-galpon/galpon';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from "../home/home.component";
import { HeaderComponent } from "../header/header.component";
import { ApiService } from '../registrar-g/api.service';
import { Granja } from '../registrar-g/granja';  


@Component({
  selector: 'app-galponesget',
  standalone: true,
  imports: [RouterLink, CommonModule, DashboardComponent, HomeComponent, HeaderComponent],
  templateUrl: './galponesget.component.html',
  styleUrl: './galponesget.component.css'
})
export class GalponesgetComponent {

  temperaturaActual: number = 0;
  humedadActual: number = 0;
  datosActivos:boolean =true;
  isStaff: boolean = false;
  galpones: Galpon[] = [];
  user: any = {};
  is_staff: boolean=false;
  error: string | null = null;
  loading: boolean =true;
  granja: Granja[]=[];

  
  constructor(
    private authService: Authservice,
    private galponService: GalponService,
    private granjaSerice: ApiService
  ) {}
  

  ngOnInit() {
    // Simular datos en tiempo real o asignar valores aquí
    this.simularDatosEnTiempoReal();
    this.isStaff = this.authService.isStaff();
    this.loadGalpones();
    this.getUserLogged();
    this.loadGranjas();
  }

  simularDatosEnTiempoReal() {
    setInterval(() => {
      const now = new Date().getTime();
      this.temperaturaActual = Math.random() * 30; // Temperatura aleatoria
      this.humedadActual = Math.random() * 100; // Humedad aleatoria
    }, 1000); // Actualizar cada segundo
    
  }

  loadGalpones(): void {
    this.galponService.getGalpones().subscribe(galpones => {
      this.galpones = galpones;
    });
   
  }
  getUserLogged(): void {
    this.authService.profile().subscribe(
      (user: any) => {
        this.user = user;
        this.is_staff = user.isstaff
    },
    (error: any) => {
      console.error('Error al obtener el perfil:', error);
      this.error = 'No se pudo obtener la información del perfil.';
      this.loading = false; 
    }
  )};

 
  loadGranjas(): void {
    this.granjaSerice.getAllGranjas().subscribe(
      (data) => {
        this.granja = data;
      },
      (error) => {
        console.error('Error:', error);
        this.granja = []; 
      }
    );
  }
  
}
