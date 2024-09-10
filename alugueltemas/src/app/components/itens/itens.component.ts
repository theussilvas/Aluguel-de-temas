import { Component, OnInit } from '@angular/core';
import { Iitens } from '../../interfaces/interface';
import { ItensService } from '../../services/Itens/itens.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-itens',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
  ],
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {

  item: Iitens = { id: 0, name: '', description: '' };
  itens: Iitens[] = [];
  isEditing: boolean = false;

  constructor(private itensService: ItensService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.obterItens();
  }

  obterItens(): void {
    this.itensService.obterItens().subscribe((data: Iitens[]) => {
      this.itens = data;
    });
  }

  criarItem(): void {
    this.itensService.criarItem(this.item).subscribe(() => {
      this.obterItens(); // Atualiza a lista de itens após a criação
      this.limparFormulario(); // Limpa o formulário após a criação
      this.snackBar.open('Item criado com sucesso!', 'Fechar', { duration: 2000 });
    });
  }

  editarItem(): void {
    this.itensService.editarItem(this.item).subscribe(() => {
      this.obterItens(); // Atualiza a lista de itens após a edição
      this.limparFormulario(); // Limpa o formulário após a edição
      this.snackBar.open('Item atualizado com sucesso!', 'Fechar', { duration: 2000 });
    });
  }

  selecionarItem(item: Iitens): void {
    this.item = { ...item }; // Copia o item selecionado para edição
    this.isEditing = true; // Muda o estado para edição
  }

  limparFormulario(): void {
    this.item = { id: 0, name: '', description: '' };
    this.isEditing = false; // Reseta o estado de edição
  }

  deletarItem(id: number): void {
    if (confirm('Tem certeza que deseja deletar este item?')) {
      this.itensService.deletarItem(id).subscribe(() => {
        this.obterItens(); // Atualiza a lista de itens após a exclusão
        this.snackBar.open('Item deletado com sucesso!', 'Fechar', { duration: 2000 });
      });
    }
  }
}
