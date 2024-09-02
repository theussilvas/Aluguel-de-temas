import { Component, NgModule, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { TemasService } from '../../services/Temas/temas.service';
import { Itemas } from '../../interfaces/interface';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-temas',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    CommonModule,
    MatSlideToggleModule,
    MatListModule,
    FormsModule
  ],
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {

  tema: Itemas = { id: 0, name: '', color: '', price: 0, itens: [] };
  temas: Itemas[] = [];

  constructor(private temasService: TemasService) {}

  ngOnInit(): void {
    this.listarTemas();
  }

  listarTemas(): void {
    this.temasService.obterTemas().subscribe((temas: Itemas[]) => {
      this.temas = temas;
    });
  }

  onSubmit(): void {
    if (this.tema.id === 0) {
      this.criarTema();
    } else {
      this.editarTema();
    }
  }

  criarTema(): void {
    this.temasService.criarTema(this.tema).subscribe(() => {
      this.listarTemas(); // Atualiza a lista de temas após a criação
      this.limparFormulario();
    });
  }

  editarTema(): void {
    this.temasService.editarTema(this.tema).subscribe(() => {
      this.listarTemas(); // Atualiza a lista de temas após a edição
      this.limparFormulario();
    });
  }

  deletarTema(id: number): void {
    if (confirm('Tem certeza que deseja deletar este tema?')) {
      this.temasService.deletarTema(id).subscribe(() => {
        this.listarTemas(); // Atualiza a lista de temas após a deleção
      });
    }
  }

  selecionarTema(tema: Itemas): void {
    this.tema = { ...tema }; // Copia o tema selecionado para edição
  }

  limparFormulario(): void {
    this.tema = { id: 0, name: '', color: '', price: 0, itens: [] };
  }
}
