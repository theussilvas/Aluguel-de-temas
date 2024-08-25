import { Component, OnInit } from '@angular/core';
import { IAluguel, Itemas } from '../../interfaces/interface';
import { AluguelService } from '../../services/Aluguel/aluguel.service';
import { TemasService } from '../../services/Temas/temas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temas-mais-alugados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temas-mais-alugados.component.html',
  styleUrl: './temas-mais-alugados.component.css'
})

export class TemasMaisAlugadosComponent implements OnInit {

  alugueis: IAluguel[] = [];
  temasMaisAlugados: { tema: Itemas, totalAlugueis: number }[] = [];

  constructor(private aluguelService: AluguelService, private temasService: TemasService) { }

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    this.aluguelService.obterAlugueis().subscribe((alugueis: IAluguel[]) => {
      this.alugueis = alugueis;
      this.processarTemasMaisAlugados();
    });
  }

  processarTemasMaisAlugados(): void {
    const temaAluguelContagem: { [key: number]: number } = {};

    // Contar o número de aluguéis por tema
    this.alugueis.forEach(aluguel => {
      if (temaAluguelContagem[aluguel.theme]) {
        temaAluguelContagem[aluguel.theme]++;
      } else {
        temaAluguelContagem[aluguel.theme] = 1;
      }
    });

    // Obter os IDs dos temas ordenados pelo número de aluguéis
    const temasIdsOrdenados = Object.keys(temaAluguelContagem)
      .map(id => +id)
      .sort((a, b) => temaAluguelContagem[b] - temaAluguelContagem[a]);

    // Buscar os dados dos temas e associar com a contagem de aluguéis
    this.temasService.obterTemas().subscribe((temas: Itemas[]) => {
      this.temasMaisAlugados = temas
        .filter(tema => temasIdsOrdenados.includes(tema.id))
        .map(tema => ({
          tema,
          totalAlugueis: temaAluguelContagem[tema.id]
        }));
    });
  }
}