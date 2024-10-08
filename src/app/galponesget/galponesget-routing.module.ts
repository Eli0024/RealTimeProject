import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalponesgetComponent } from './galponesget.component';

const routes: Routes = [
  {path:'', component:GalponesgetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalponesgetRoutingModule { }
