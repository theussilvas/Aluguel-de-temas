import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { NgModule } from '@angular/core';
import { TemasComponent } from './components/temas/temas.component';


export const routes: Routes = [
    {path:'user', component:UsuariosComponent},
    {path:'temas', component:TemasComponent},
    {path: '', redirectTo: '/temas', pathMatch: 'full'} 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }