import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CopiaSComponent } from './copia-s/copia-s.component';


const routes: Routes = [

  {path:'', component: CopiaSComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CopiaSRoutingModule { }
