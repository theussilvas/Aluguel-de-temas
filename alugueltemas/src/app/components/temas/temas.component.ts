import { Component, NgModule, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { TemasService } from '../../services/Temas/temas.service';
import { Iitens, Itemas } from '../../interfaces/interface';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { ItensService } from '../../services/Itens/itens.service';
import { AppRoutingModule } from '../../app.routes';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViewChild, ElementRef } from '@angular/core';

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
    MatSelectModule,
  ],
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {

  tema: Itemas = { id: 0, name: '', color: '', price: 0, itens: [] };
  temas: Itemas[] = [];
  itens: Iitens[] = [];
  isEditing: boolean = false;

  @ViewChild('nameInput') nameInput!: ElementRef;


  constructor(private temasService: TemasService, private itensService: ItensService, private snackBar: MatSnackBar ) {}

  ngOnInit(): void {
    this.listarTemas();
    this.listarItens();
  }

  listarItens(): void {
    this.itensService.obterItens().subscribe((itens: Iitens[]) => {
      this.itens = itens;  // Armazena os itens no componente
    });
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
      this.snackBar.open('Tema criado com sucesso!', 'Fechar', { duration: 3000 });
    });
  }

  editarTema(): void {
    this.temasService.editarTema(this.tema).subscribe(() => {
      this.listarTemas(); // Atualiza a lista de temas após a edição
      this.limparFormulario();
      this.isEditing = false;
      this.snackBar.open('Tema editado com sucesso!', 'Fechar', { duration: 3000 });
    });
  }

  deletarTema(id: number): void {
    if (confirm('Tem certeza que deseja deletar este tema?')) {
      this.temasService.deletarTema(id).subscribe(() => {
        this.listarTemas(); // Atualiza a lista de temas após a deleção
        this.snackBar.open('Tema deletado com sucesso!', 'Fechar', { duration: 3000 });
      });
    }
  }

  selecionarTema(tema: Itemas): void {
    this.tema = { ...tema }; // Copia o tema selecionado para edição
    this.isEditing = true;
    setTimeout(() => this.nameInput.nativeElement.focus(), 0); // Aplica o foco
  }

  limparFormulario(): void {
    this.tema = { id: 0, name: '', color: '', price: 0, itens: [] };
    this.isEditing = false;
  }
  obterItensTema(tema: Itemas): Iitens[] {
    return this.itens.filter(item => tema.itens.includes(item.id)); // Associa os IDs dos itens aos detalhes dos itens
  }
}
