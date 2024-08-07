import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConexionComponent } from './conexion/conexion.component';

const routes: Routes = [
  { path:'', component: ConexionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConexionRoutingModule { }
