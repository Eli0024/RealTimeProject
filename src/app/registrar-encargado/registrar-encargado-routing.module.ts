import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarEncargadoComponent } from './registrar-encargado.component';

const routes: Routes = [
  { path:'', component: RegistrarEncargadoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarEncargadoRoutingModule { }
