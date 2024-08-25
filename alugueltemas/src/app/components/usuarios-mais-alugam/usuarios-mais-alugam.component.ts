import { Component, OnInit } from '@angular/core';
import { IAluguel, IUsuarios } from '../../interfaces/interface';
import { AluguelService } from '../../services/Aluguel/aluguel.service';
import { UserService } from '../../services/User/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios-mais-alugam',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios-mais-alugam.component.html',
  styleUrl: './usuarios-mais-alugam.component.css'
})
export class UsuariosMaisAlugueisComponent implements OnInit {

  alugueis: IAluguel[] = [];
  usuariosMaisAlugueis: { usuario: IUsuarios, totalAlugueis: number }[] = [];

  constructor(private aluguelService: AluguelService, private usuariosService: UserService) { }

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    this.aluguelService.obterAlugueis().subscribe((alugueis: IAluguel[]) => {
      this.alugueis = alugueis;
      this.processarUsuariosMaisAlugueis();
    });
  }

  processarUsuariosMaisAlugueis(): void {
    const usuarioAluguelContagem: { [key: number]: number } = {};

    // Contar o número de aluguéis por usuário
    this.alugueis.forEach(aluguel => {
      if (usuarioAluguelContagem[aluguel.client]) {
        usuarioAluguelContagem[aluguel.client]++;
      } else {
        usuarioAluguelContagem[aluguel.client] = 1;
      }
    });

    // Obter os IDs dos usuários e ordenar pelo número de aluguéis (ordem decrescente)
    const usuariosIdsOrdenados = Object.keys(usuarioAluguelContagem)
      .map(id => +id)
      .sort((a, b) => usuarioAluguelContagem[b] - usuarioAluguelContagem[a]);

    // Buscar os dados dos usuários e associar com a contagem de aluguéis
    this.usuariosService.obterUsers().subscribe((usuarios: IUsuarios[]) => {
      this.usuariosMaisAlugueis = usuarios
        .filter(usuario => usuariosIdsOrdenados.includes(usuario.id))
        .map(usuario => ({
          usuario,
          totalAlugueis: usuarioAluguelContagem[usuario.id]
        }))
        .sort((a, b) => b.totalAlugueis - a.totalAlugueis); // Ordenar decrescentemente
    });
  }
}
