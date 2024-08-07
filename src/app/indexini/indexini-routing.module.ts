import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexiniComponent } from './indexini.component';

const routes: Routes = [
  { path:'', component: IndexiniComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexiniRoutingModule { }
