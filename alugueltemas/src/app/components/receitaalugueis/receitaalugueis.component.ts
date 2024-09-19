import { Component, OnInit } from '@angular/core';
import { IAluguel, Itemas } from '../../interfaces/interface';
import { RecitaaluguelService } from '../../services/ReceitaAluguel/recitaaluguel.service';

@Component({
  selector: 'app-receitaalugueis',
  standalone: true,
  imports: [],
  templateUrl: './receitaalugueis.component.html',
  styleUrl: './receitaalugueis.component.css'
})
export class ReceitaalugueisComponent implements OnInit{

  constructor  (private receitaServices:RecitaaluguelService){}

  receitaTotal:number = 0;

  ngOnInit() {
      this.obterReceita();
  }

  obterReceita(){
    this.receitaServices.calcularReceitaTotal().subscribe(receita =>{
      this.receitaTotal = receita;
    })
  }
}
