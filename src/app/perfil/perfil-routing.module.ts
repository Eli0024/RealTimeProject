import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { EditperfilComponent } from './editperfil/editperfil.component';

const routes: Routes = [
  { path: '', component: PerfilComponent},
  { path: 'update/perfil/:id', component: EditperfilComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
