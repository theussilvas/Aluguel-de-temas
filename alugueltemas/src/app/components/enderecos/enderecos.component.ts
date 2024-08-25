import { Component, OnInit } from '@angular/core';
import { IEndereco } from '../../interfaces/interface';
import { EnderecoService } from '../../services/Endereco/endereco.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enderecos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enderecos.component.html',
  styleUrl: './enderecos.component.css'
})
export class EnderecosComponent implements OnInit{
  
  enderecos:IEndereco[]=[];

  constructor(private enderecosServices:EnderecoService){}

  ngOnInit(){
    this.obterEnderecos();
  }

  obterEnderecos(){
    this.enderecosServices.obterEnderecos().subscribe((data:IEndereco[])=>{
      this.enderecos = data;
    })
  }

}
