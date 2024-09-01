import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AluguelService } from '../Aluguel/aluguel.service';
import { TemasService } from '../Temas/temas.service';

@Injectable({
  providedIn: 'root',
})
export class GraficoService {
  constructor(
    private aluguelService: AluguelService,
    private temasService: TemasService
  ) {}

  obterDadosReceitaPorPeriodo(): Observable<{ labels: string[], data: number[] }> {
    return this.aluguelService.obterAlugueis().pipe(
      map(alugueis => {
        const receitasPorPeriodo: { [key: string]: number } = {};

        const temaPrecoMap = new Map<number, number>();
        this.temasService.obterTemas().subscribe(temas => {
          temas.forEach(tema => temaPrecoMap.set(tema.id, tema.price));
        });

        alugueis.forEach(aluguel => {
          const temaPreco = temaPrecoMap.get(aluguel.theme) || 0;
          const periodo = `${new Date(aluguel.date).getMonth() + 1}/${new Date(aluguel.date).getFullYear()}`;
          receitasPorPeriodo[periodo] = (receitasPorPeriodo[periodo] || 0) + temaPreco;
        });

        const labels = Object.keys(receitasPorPeriodo);
        const data = Object.values(receitasPorPeriodo);
        return { labels, data };
      })
    );
  }
}
