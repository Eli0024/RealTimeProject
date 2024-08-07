import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGalponComponent } from './form-galpon.component';

const routes: Routes = [

  { path:'', component: FormGalponComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormGalponRoutingModule { }
