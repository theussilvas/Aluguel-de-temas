import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
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

  // Obter dados de receita agregada por ano
  obterDadosReceitaPorAno(): Observable<{ labels: string[], data: number[] }> {
    return forkJoin([this.aluguelService.obterAlugueis(), this.temasService.obterTemas()]).pipe(
      map(([alugueis, temas]) => {
        const receitasPorAno: { [key: string]: number } = {};
        const temaPrecoMap = new Map<number, number>();

        temas.forEach(tema => temaPrecoMap.set(tema.id, tema.price));

        alugueis.forEach(aluguel => {
          const ano = new Date(aluguel.date).getFullYear();
          const temaPreco = temaPrecoMap.get(aluguel.theme) || 0;
          receitasPorAno[ano] = (receitasPorAno[ano] || 0) + temaPreco;
        });

        const labels = Object.keys(receitasPorAno);
        const data = Object.values(receitasPorAno);
        return { labels, data };
      })
    );
  }

  // Obter dados de receita por mês filtrados por ano
  obterDadosReceitaPorMes(anoSelecionado: number): Observable<{ labels: string[], data: number[] }> {
    return forkJoin([this.aluguelService.obterAlugueis(), this.temasService.obterTemas()]).pipe(
      map(([alugueis, temas]) => {
        const receitasPorMes: { [key: string]: number } = {};
        const temaPrecoMap = new Map<number, number>();

        temas.forEach(tema => temaPrecoMap.set(tema.id, tema.price));

        alugueis.forEach(aluguel => {
          const dataAluguel = new Date(aluguel.date);
          const anoAluguel = dataAluguel.getFullYear();

          if (anoAluguel === anoSelecionado) {
            const mes = dataAluguel.getMonth() + 1; // Meses de 1 a 12
            const temaPreco = temaPrecoMap.get(aluguel.theme) || 0;
            receitasPorMes[mes] = (receitasPorMes[mes] || 0) + temaPreco;
          }
        });

        const labels = Object.keys(receitasPorMes).map(mes => `Mês ${mes}`);
        const data = Object.values(receitasPorMes);
        return { labels, data };
      })
    );
  }
}
