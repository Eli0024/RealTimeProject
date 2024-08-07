import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarGComponent } from './registrar-g.component';

const routes: Routes = [
  { path:'', component: RegistrarGComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarGRoutingModule { }
