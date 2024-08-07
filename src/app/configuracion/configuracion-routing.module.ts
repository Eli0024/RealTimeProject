import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { ConfiguracionComponent } from './configuracion.component';
import { RegistrarGComponent } from '../registrar-g/registrar-g.component';
import { CopiaSComponent } from '../copia-s/copia-s/copia-s.component';
import { EstablecerComponent } from '../establecer/establecer.component';
import { HistorialComponent } from '../historial/historial/historial.component';
import { ExpordaComponent } from '../exporda/exporda/exporda.component';
import { RegistrarEncargadoComponent } from '../registrar-encargado/registrar-encargado.component';
import { RegistrarGalponComponent } from '../registrar-galpon/registrar-galpon.component';
import { MedicionesComponent } from '../mediciones/mediciones.component';
import { RegistroUsuarioComponent } from '../login/registro-usuario/registro-usuario.component';

const routes: Routes = [
  {path:'', component: ConfiguracionComponent},
  { path:'registrar-g', component: RegistrarGComponent},
  { path: 'copia-S', component: CopiaSComponent},
  { path: 'establecer',component: EstablecerComponent },
  { path: 'historial',component: HistorialComponent },
  { path: 'exporda', component:ExpordaComponent },
  { path: 'registrar-encargado', component:RegistrarEncargadoComponent},
  { path: 'registrar-galpon', component:RegistrarGalponComponent },
  { path: 'mediciones', component:MedicionesComponent },
  { path: 'registro-usuario', component:RegistroUsuarioComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,RouterLink]
})
export class ConfiguracionRoutingModule { }
