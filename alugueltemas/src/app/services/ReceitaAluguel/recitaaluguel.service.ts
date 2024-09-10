import { Injectable, OnInit } from '@angular/core';
import { IAluguel, Itemas } from '../../interfaces/interface';
import { AluguelService } from '../Aluguel/aluguel.service';
import { TemasService } from '../Temas/temas.service';
import { forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecitaaluguelService{

  constructor(private aluguelService:AluguelService, private temasServices:TemasService) { }

  calcularReceitaTotal() {
    return forkJoin({
      alugueis: this.aluguelService.obterAlugueis(),
      temas: this.temasServices.obterTemas()
    }).pipe(
      map(({ alugueis, temas }) => this.calcularReceita(temas, alugueis))
    );
  }

  private calcularReceita(temas: Itemas[], alugueis: IAluguel[]): number {
    let mapaTemas = new Map<number, number>();
    temas.forEach(tema => mapaTemas.set(tema.id, tema.price));
    let receitaTotal = alugueis.reduce((total, aluguel) => {
      let valorTema = mapaTemas.get(aluguel.theme);
      return total + (valorTema || 0);
    }, 0);
    return receitaTotal;
  }
}
