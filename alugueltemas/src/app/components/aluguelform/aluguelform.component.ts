import { Component, OnInit } from '@angular/core';
import { TemasService } from '../../services/Temas/temas.service';
import { IAluguel, IEndereco, Itemas, IUsuarios } from '../../interfaces/interface';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/User/user.service';
import { EnderecoService } from '../../services/Endereco/endereco.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aluguelform',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './aluguelform.component.html',
  styleUrl: './aluguelform.component.css'
})
export class AluguelformComponent implements OnInit {

  constructor (private temasServices: TemasService, private clienteServices: UserService, private enderecoServices:EnderecoService){}

  temas:Itemas[] = [];
  clientes:IUsuarios[] = [];
  enderecos: IEndereco[] = [];

  dataAluguel:Date | null = null;
  horaAluguel:Date | null = null;
  horaDevolucao:Date | null = null;

  
  ngOnInit(){
      this.obter();
  }



  obter(){
    this.temasServices.obterTemas().subscribe((data:Itemas[])=>{
      this.temas = data;
    })
    this.clienteServices.obterUsers().subscribe((data:IUsuarios[])=>{
      this.clientes = data;
    })
    this.enderecoServices.obterEnderecos().subscribe((data:IEndereco[])=>{
      this.enderecos = data;
    })

  

  }

}
