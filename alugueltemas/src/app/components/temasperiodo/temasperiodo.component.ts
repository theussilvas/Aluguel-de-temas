import { Component, OnInit } from '@angular/core';
import { IAluguel, Itemas } from '../../interfaces/interface';
import { TemasService } from '../../services/Temas/temas.service';
import { AluguelService } from '../../services/Aluguel/aluguel.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-temasperiodo',
  standalone: true,
  imports: [CommonModule, FormsModule, CalendarModule],
  templateUrl: './temasperiodo.component.html',
  styleUrl: './temasperiodo.component.css'
})
export class TemasperiodoComponent implements OnInit{

  temas:Itemas[] = [];
  alugueis:IAluguel[] = [];
  mesSelecionado:number = 1;
  anoSelecionado:number = new Date().getFullYear();
  resultado: { [key: string]: number } = {};
  dataSelecionada:string = '';
  date2: Date | undefined;

  constructor(private temasServices:TemasService, private alugueisServices: AluguelService){}
  

  ngOnInit(){
      this.iniciar()
  }

  iniciar(){
    this.getTemas();
    this.getAlugueis();
  }

  getTemas(){
    this.temasServices.obterTemas().subscribe((data:Itemas[])=>{
      this.temas = data;
    })
  }
  getAlugueis(){
    this.alugueisServices.obterAlugueis().subscribe((data:IAluguel[])=>{
      this.alugueis = data;
    })
  }

  temasPeriodo(){
    if (this.dataSelecionada){
      const data = new Date(this.dataSelecionada);
      this.mesSelecionado = data.getMonth() + 1; 
      this.anoSelecionado = data.getFullYear(); 
      
    }
    this.resultado = this.temasServices.temasPeriodo(this.temas,this.alugueis,this.mesSelecionado,this.anoSelecionado)
  }

}
