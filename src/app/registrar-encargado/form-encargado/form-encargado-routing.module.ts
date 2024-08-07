import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEncargadoComponent } from './form-encargado.component';

const routes: Routes = [
  { path:'', component: FormEncargadoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormEncargadoRoutingModule { }
