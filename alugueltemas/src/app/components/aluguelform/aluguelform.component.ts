import { Component, OnInit } from '@angular/core';
import { TemasService } from '../../services/Temas/temas.service';
import { IAluguel, IEndereco, IFormAluguel, Itemas, IUsuarios } from '../../interfaces/interface';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/User/user.service';
import { EnderecoService } from '../../services/Endereco/endereco.service';
import { FormsModule } from '@angular/forms';
import { AluguelService } from '../../services/Aluguel/aluguel.service';

@Component({
  selector: 'app-aluguelform',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './aluguelform.component.html',
  styleUrl: './aluguelform.component.css'
})
export class AluguelformComponent implements OnInit {
  constructor (private aluguelService:AluguelService,private temasServices: TemasService, private clienteServices: UserService, private enderecoServices:EnderecoService){}

  temas:Itemas[] = [];
  clientes:IUsuarios[] = [];
  enderecos: IEndereco[] = [];

 

  novoAluguel:IFormAluguel ={
    date: '',
    end_hours:'',
    start_hours:'',
    client: 0,
    theme: 0,
    address: 0
  }

  ngOnInit(){
      this.obter();
  
  }


  salvarAluguel(){
    console.log(this.novoAluguel);
    this.aluguelService.salvarAluguel(this.novoAluguel).subscribe(response =>{
      console.log("Aluguel salvo", response)
    }, error =>{
      console.error("Erro ao salvar", error);
    });
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
