import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpordaComponent } from './exporda/exporda.component';


const routes: Routes = [
  { path: '', component: ExpordaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpordaRoutingModule { }
