import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { NgModule } from '@angular/core';
import { TemasComponent } from './components/temas/temas.component';
import { AlugueisComponent } from './components/alugueis/alugueis.component';
import { EnderecosComponent } from './components/enderecos/enderecos.component';
import { ItensComponent } from './components/itens/itens.component';
import { TemasMaisAlugadosComponent } from './components/temas-mais-alugados/temas-mais-alugados.component';
import { UsuariosMaisAlugueisComponent } from './components/usuarios-mais-alugam/usuarios-mais-alugam.component';
import { QuantidadeTemasComponent } from './components/temas-cadastrados/temas-cadastrados.component';


export const routes: Routes = [
    {path:'user', component:UsuariosComponent},
    {path:'usuarios-mais-alugam', component:UsuariosMaisAlugueisComponent},
    {path:'temas', component:TemasComponent},
    {path:'temas-cadastrados', component:QuantidadeTemasComponent},
    {path:'TemasMaisAlugados', component:TemasMaisAlugadosComponent},
    {path:'alugueis', component:AlugueisComponent},
    {path:'enderecos', component:EnderecosComponent},
    {path:'itens', component:ItensComponent},
    {path: '', redirectTo: '/temas', pathMatch: 'full'} 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }