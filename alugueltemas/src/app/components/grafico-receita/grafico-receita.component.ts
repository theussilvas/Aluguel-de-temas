import { Component, OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { GraficoService } from '../../services/Grafico/grafico-receita.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

Chart.register(...registerables);

@Component({
  selector: 'app-grafico-receita',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './grafico-receita.component.html',
  styleUrls: ['./grafico-receita.component.css']
})
export class GraficoReceitaComponent implements OnInit, AfterViewInit, OnDestroy {
  public lineChartData: { labels: string[]; data: number[] } = { labels: [], data: [] };
  public lineChartDataMensal: { labels: string[]; data: number[] } = { labels: [], data: [] };
  private chartAnual?: Chart;
  private chartMensal?: Chart;
  private isBrowser: boolean;

  anosDisponiveis: number[] = [2022, 2023, 2024]; 
  anoSelecionado: number = new Date().getFullYear();

  constructor(
    private graficoService: GraficoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.carregarDadosReceitaAnual();
    this.carregarDadosReceitaMensal();
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.configurarGraficoAnual();
      this.configurarGraficoMensal();
    }
  }

  ngOnDestroy(): void {
    if (this.chartAnual) {
      this.chartAnual.destroy();
    }
    if (this.chartMensal) {
      this.chartMensal.destroy();
    }
  }

  carregarDadosReceitaAnual(): void {
    this.graficoService.obterDadosReceitaPorAno().subscribe(dados => {
      this.lineChartData.labels = dados.labels;
      this.lineChartData.data = dados.data;
      setTimeout(() => {
        if (this.isBrowser) {
          this.configurarGraficoAnual();
        }
      }, 0);
    });
  }

  carregarDadosReceitaMensal(): void {
    this.graficoService.obterDadosReceitaPorMes(this.anoSelecionado).subscribe(dados => {
      this.lineChartDataMensal.labels = dados.labels;
      this.lineChartDataMensal.data = dados.data;
      setTimeout(() => {
        if (this.isBrowser) {
          this.configurarGraficoMensal();
        }
      }, 0);
    });
  }

  configurarGraficoAnual(): void {
  const canvas = document.getElementById('lineChartAnual') as HTMLCanvasElement;
  if (!canvas) {
    console.error('Canvas element not found');
    return;
  }
  
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('Failed to get the context of the canvas');
    return;
  }

  if (this.chartAnual) {
    this.chartAnual.destroy();  // Destroi o gráfico anterior se existir
  }

  this.chartAnual = new Chart(ctx, {
    type: 'bar',  // Define o gráfico como de barras
    data: {
      labels: this.lineChartData.labels,  // Rótulos (anos)
      datasets: [{
        label: 'Receita por Ano',
        data: this.lineChartData.data,    // Dados de receita por ano
        backgroundColor: '#42A5F5',       // Cor das barras
        borderColor: '#1E88E5',           // Cor da borda das barras
        borderWidth: 1                    // Espessura da borda
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,  // Exibe a legenda
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Ano',  // Título para o eixo X
          }
        },
        y: {
          title: {
            display: true,
            text: 'Receita (R$)',  // Título para o eixo Y
          },
          beginAtZero: true  // Começa do zero para melhor visualização das colunas
        }
      }
    }
  });
}


  configurarGraficoMensal(): void {
    if (this.chartMensal) {
      this.chartMensal.destroy();
    }

    this.chartMensal = new Chart('lineChartMensal', {
      type: 'line',
      data: {
        labels: this.lineChartDataMensal.labels,
        datasets: [{
          label: 'Receita Mensal',
          data: this.lineChartDataMensal.data,
          borderColor: '#42A5F5',
          fill: false
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Mês'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Receita (R$)'
            }
          }
        }
      }
    });
  }

  onFiltroAnoChange(): void {
    this.carregarDadosReceitaMensal(); // Atualiza o gráfico mensal quando o ano muda
  }
}
