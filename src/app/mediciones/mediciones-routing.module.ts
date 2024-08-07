import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicionesComponent } from './mediciones.component';

const routes: Routes = [
  { path:'', component: MedicionesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicionesRoutingModule { }
