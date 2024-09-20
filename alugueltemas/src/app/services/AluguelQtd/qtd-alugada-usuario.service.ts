import { Injectable } from '@angular/core';
import { IAluguel, IUsuarios } from '../../interfaces/interface';
import { AluguelService } from '../Aluguel/aluguel.service';
import { UserService } from '../User/user.service';

@Injectable({
  providedIn: 'root'
})
export class QtdAlugadaUsuarioService {

  constructor(private aluguelService: AluguelService, private usuarioService:UserService) { }

  usuarios:IUsuarios[]=[];
  alugueis:IAluguel[] =[];

  quantidadeAlugueisCliente(){
    this.obter();
    return this.usuarios.map(client =>{
      let quantidadeAlugueis = this.alugueis.filter(aluguel =>aluguel.client === client.id).length;
      return{
        nome:client.name,
        quantidadeAlugueis
      };
    }).filter(cliente => cliente.quantidadeAlugueis>0);
  }

  obter(){
  this.aluguelService.obterAlugueis().subscribe((data:IAluguel[])=>{
    this.alugueis = data;
  })
  this.usuarioService.obterUsers().subscribe((data:IUsuarios[])=>{
    this.usuarios = data;
  })}
} 

 