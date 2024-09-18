import { Component, OnInit } from '@angular/core';
import { AluguelService } from '../../services/Aluguel/aluguel.service';
import { IAluguel } from '../../interfaces/interface';
import { CommonModule } from '@angular/common';
import { AluguelformComponent } from '../aluguelform/aluguelform.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-alugueis',
  standalone: true,
  imports: [CommonModule,AluguelformComponent, FormsModule,],
  templateUrl: './alugueis.component.html',
  styleUrl: './alugueis.component.css'
})
export class AlugueisComponent implements OnInit{
  
  alugueis:IAluguel[]=[];

  constructor(private alugueisServices:AluguelService){}

  addAluguel = false;

  toggleFormAluguel(){
    this.addAluguel = !this.addAluguel;
  }


  ngOnInit(){
    this.obterAlugueis();
  }

  obterAlugueis(){
    this.alugueisServices.obterAlugueis().subscribe((data:IAluguel[])=>{
      this.alugueis = data;
    })
  }

}
