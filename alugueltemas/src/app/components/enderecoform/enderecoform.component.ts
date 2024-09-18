import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../../services/Endereco/endereco.service';
import { IEndereco } from '../../interfaces/interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enderecoform',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './enderecoform.component.html',
  styleUrl: './enderecoform.component.css'
})
export class EnderecoformComponent implements OnInit{

  constructor( private enderecoServices:EnderecoService){}

  enderecos:IEndereco[] = [];
  enderecoSelecionado:any = null;


  ngOnInit(): void {
      this.obter();
  }
  obter(){
    this.enderecoServices.obterEnderecos().subscribe((data:IEndereco[])=>{
      this.enderecos = data;
    })
  }

}
