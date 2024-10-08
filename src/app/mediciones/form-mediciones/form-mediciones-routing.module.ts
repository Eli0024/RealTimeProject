import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormMedicionesComponent } from './form-mediciones.component';

const routes: Routes = [
  { path:'', component: FormMedicionesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormMedicionesRoutingModule { }
