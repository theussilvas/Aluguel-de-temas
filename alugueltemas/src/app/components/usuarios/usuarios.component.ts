import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IUsuarios } from '../../interfaces/interface';
import { UserService } from '../../services/User/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
  ],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef!: ElementRef;  // Referência ao campo de nome para foco

  user: IUsuarios[] = [];
  usuario: IUsuarios = { id: 0, name: '', email: '' };
  isEditing: boolean = false;

  constructor(private userService: UserService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.obterusuarios();
  }

  obterusuarios(): void {
    this.userService.obterUsers().subscribe((data: IUsuarios[]) => {
      this.user = data;
    });
  }

  criarUsuario(): void {
    this.userService.criarUser(this.usuario).subscribe(() => {
      this.obterusuarios();
      this.limparFormulario();
      this.snackBar.open('Usuário criado com sucesso!', 'Fechar', { duration: 2000 });
    });
  }

  editarUsuario(): void {
    this.userService.editarUser(this.usuario).subscribe(() => {
      this.obterusuarios();
      this.limparFormulario();
      this.isEditing = false;
      this.snackBar.open('Usuário atualizado com sucesso!', 'Fechar', { duration: 2000 });
    });
  }

  selecionarUsuario(usuario: IUsuarios): void {
    this.usuario = { ...usuario };
    this.isEditing = true;

    // Foco no campo de nome após a seleção
    setTimeout(() => {
      this.nameInputRef.nativeElement.focus();
    }, 0);
  }

  deletarUsuario(id: number): void {
    if (confirm('Tem certeza que deseja deletar este usuário?')) {
      this.userService.deletarUser(id).subscribe(() => {
        this.obterusuarios();
        this.limparFormulario();
        this.snackBar.open('Usuário deletado com sucesso!', 'Fechar', { duration: 2000 });
      });
    }
  }

  limparFormulario(): void {
    this.usuario = { id: 0, name: '', email: '' };
    this.isEditing = false;
  }
}
