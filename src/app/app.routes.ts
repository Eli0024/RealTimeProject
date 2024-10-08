import { Routes } from '@angular/router';
import { UpdateloginComponent } from './login/updatelogin/updatelogin.component';
import { EditperfilComponent } from './perfil/editperfil/editperfil.component';
import { gurarrutasGuard } from './gurarrutas.guard';
import { GalponesgetComponent } from './galponesget/galponesget.component';


export const routes: Routes = [

    { path:  'dashboard',loadChildren:() => import('./dashboard/dashboard.module').then (m => m.DashboardModule), canActivate: [gurarrutasGuard]},
    { path: 'form-granja', loadChildren:() => import('./registrar-g/form-granja/form-granja.module').then (m => m.FormGranjaModule),canActivate: [gurarrutasGuard]},
    { path: 'form-granja/:id', loadChildren:() => import('./registrar-g/form-granja/form-granja.module').then (m => m.FormGranjaModule),canActivate: [gurarrutasGuard]},
    { path: 'form-encargado', loadChildren:() => import('./registrar-encargado/form-encargado/form-encargado.module').then (m => m.FormEncargadoModule),canActivate: [gurarrutasGuard]},
    { path: 'form-encargado/:id', loadChildren:() => import('./registrar-encargado/form-encargado/form-encargado.module').then (m => m.FormEncargadoModule),canActivate: [gurarrutasGuard]},
    { path: 'form-galpon', loadChildren:() => import('./registrar-galpon/form-galpon/form-galpon.module').then (m => m.FormGalponModule),canActivate: [gurarrutasGuard]},
    { path: 'form-galpon/:id', loadChildren:() => import('./registrar-galpon/form-galpon/form-galpon.module').then (m => m.FormGalponModule),canActivate: [gurarrutasGuard]},
    { path: 'form-mediciones', loadChildren:() => import('./mediciones/form-mediciones/form-mediciones.module').then (m => m.FormMedicionesModule),canActivate: [gurarrutasGuard]},
    { path: 'form-mediciones/:id', loadChildren:() => import('./mediciones/form-mediciones/form-mediciones.module').then (m => m.FormMedicionesModule),canActivate: [gurarrutasGuard]},
    { path: 'form-parametros', loadChildren:() => import('./establecer/form-parametros/form-parametros.module').then (m => m.FormParametrosModule),canActivate: [gurarrutasGuard]},
    { path: 'form-parametros/:id_config', loadChildren:() => import('./establecer/form-parametros/form-parametros.module').then (m => m.FormParametrosModule),canActivate: [gurarrutasGuard]},
    { path: 'form-registro', loadChildren:() => import('./login/form-registro/form-registro.module').then (m => m.FormRegistroModule),canActivate: [gurarrutasGuard]},
    { path: 'form-registro/:id', loadChildren:() => import('./login/form-registro/form-registro.module').then (m => m.FormRegistroModule),canActivate: [gurarrutasGuard]},
    { path: 'exporda', loadChildren:() => import('./exporda/exporda.module').then (m => m.ExpordaModule),canActivate: [gurarrutasGuard]},
    { path: 'alerta', loadChildren:() => import('./alerta/alerta.module').then (m => m.AlertaModule),canActivate: [gurarrutasGuard]},
    { path: 'establecer', loadChildren:() => import('./establecer/establecer.module').then (m => m.EstablecerModule),canActivate: [gurarrutasGuard]},
    { path: 'notifi', loadChildren:() => import('./notifi/notifi.module').then (m => m.NotifiModule),canActivate: [gurarrutasGuard]},
    { path: 'perfil', loadChildren:() => import('./perfil/perfil.module').then (m => m.PerfilModule),canActivate: [gurarrutasGuard]},
    { path: 'registrar-g', loadChildren:() => import('./registrar-g/registrar-g.module').then (m => m.RegistrarGModule),canActivate: [gurarrutasGuard]},
    { path: 'registrar-galpon', loadChildren:() => import('./registrar-galpon/registrar-galpon.module').then (m => m.RegistrarGalponModule),canActivate: [gurarrutasGuard]},
    { path: 'mediciones', loadChildren:() => import('./mediciones/mediciones.module').then (m => m.MedicionesModule),canActivate: [gurarrutasGuard]},
    { path: 'registrar-encargado', loadChildren:() => import('./registrar-encargado/registrar-encargado.module').then (m => m.RegistrarEncargadoModule),canActivate: [gurarrutasGuard]},
    { path: 'salir', loadChildren:() => import('./salir/salir.module').then (m => m.SalirModule)},
    { path: '', loadChildren:() => import('./login/login/login.module').then (m => m.LoginModule)},
    { path: 'register', loadChildren:() => import('./login/form-registro/form-registro.module').then (m => m.FormRegistroModule)},
    { path: 'usuarios', loadChildren:() => import('./login/usuarios/usuarios.module').then (m => m.UsuariosModule),canActivate: [gurarrutasGuard]},
    { path: 'home', loadChildren:() => import('./home/home.module').then (m => m.HomeModule), canActivate: [gurarrutasGuard]},
    { path: 'update/login/:id',component: UpdateloginComponent, canActivate: [gurarrutasGuard]},
    { path:'galpones', component: GalponesgetComponent, canActivate: [gurarrutasGuard]}
    // { path: 'update/perfil/',component: EditperfilComponent}

];

