import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormParametrosComponent } from './form-parametros.component';

const routes: Routes = [
  { path:'', component: FormParametrosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormParametrosRoutingModule { }
