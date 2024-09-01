import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { GraficoService } from '../../services/Grafico/grafico-receita.service';

Chart.register(...registerables);

@Component({
  selector: 'app-grafico-receita',
  standalone: true,
  imports: [],
  templateUrl: './grafico-receita.component.html',
  styleUrls: ['./grafico-receita.component.css']
})
export class GraficoReceitaComponent implements OnInit, AfterViewInit, OnDestroy {
  public lineChartData: { labels: string[]; data: number[] } = { labels: [], data: [] };
  private chart?: Chart; // Propriedade para armazenar a instância do gráfico

  constructor(private graficoService: GraficoService) {}

  ngOnInit(): void {
    this.carregarDadosReceita();
  }

  ngAfterViewInit(): void {
    this.configurarGrafico();
  }

  ngOnDestroy(): void {
    // Destrua o gráfico ao destruir o componente
    if (this.chart) {
      this.chart.destroy();
    }
  }

  carregarDadosReceita(): void {
    this.graficoService.obterDadosReceitaPorPeriodo().subscribe(dados => {
      this.lineChartData.labels = dados.labels;
      this.lineChartData.data = dados.data;
      this.configurarGrafico(); // Atualiza o gráfico com os dados carregados
    });
  }

  configurarGrafico(): void {
    // Se um gráfico já existe, destrua-o antes de criar um novo
    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: this.lineChartData.labels,
        datasets: [{
          label: 'Receita',
          data: this.lineChartData.data,
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
              text: 'Período'
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
}
