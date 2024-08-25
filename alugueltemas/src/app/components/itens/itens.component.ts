import { Component, OnInit } from '@angular/core';
import { Iitens } from '../../interfaces/interface';
import { ItensService } from '../../services/Itens/itens.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-itens',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './itens.component.html',
  styleUrl: './itens.component.css'
})
export class ItensComponent implements OnInit{

  itens: Iitens[] = [];

  constructor( private itensServices: ItensService ){}

  ngOnInit(){
    this.obterItens();
  }

  obterItens(){
    this.itensServices.obterItens().subscribe((data:Iitens[])=>{
      this.itens = data;
    })
  }
}
