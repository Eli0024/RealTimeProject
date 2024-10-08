import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGranjaComponent } from './form-granja.component';




const routes: Routes = [

  { path:'', component: FormGranjaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormGranjaRoutingModule { }
