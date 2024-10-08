import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarGalponComponent } from './registrar-galpon.component';

const routes: Routes = [
  { path:'', component: RegistrarGalponComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarGalponRoutingModule { }
