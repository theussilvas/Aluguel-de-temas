import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TemasService } from '../../services/Temas/temas.service';
import { IAluguel, IEndereco, IFormAluguel, Itemas, IUsuarios } from '../../interfaces/interface';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/User/user.service';
import { EnderecoService } from '../../services/Endereco/endereco.service';
import { FormsModule } from '@angular/forms';
import { AluguelService } from '../../services/Aluguel/aluguel.service';
import e, { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-aluguelform',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './aluguelform.component.html',
  styleUrl: './aluguelform.component.css'
})
export class AluguelformComponent implements OnInit {
  temas: Itemas[] = [];
  clientes: IUsuarios[] = [];
  enderecos: IEndereco[] = [];
  
  @Input() aluguel: IAluguel | null = null;
  @Output() formClosed = new EventEmitter<void>();

  isUpdate: boolean = false; // Flag para definir se é uma atualização
  
  novoAluguel: IFormAluguel = {
    date: '',
    end_hours: '',
    start_hours: '',
    client: 0,
    theme: 0,
    address: 0,
    id: 0,
  };

  constructor(
    private aluguelService: AluguelService,
    private temasServices: TemasService,
    private clienteServices: UserService,
    private enderecoServices: EnderecoService
  ) {}

  ngOnInit() {
    this.obterDadosIniciais(); // Método para obter temas, clientes e endereços
  }

  salvarAluguel() {
    if (this.isUpdate) {
      this.atualizarAluguel(); // Se for atualização, chama o método de update
    } else {
      this.aluguelService.salvarAluguel(this.novoAluguel).subscribe(
        (response) => {
          console.log("Aluguel salvo", response);
          this.limparFormulario(); // Limpa o formulário após o salvamento
        },
        (error) => {
          console.error("Erro ao salvar", error);
        }
      );
    }
  }

  atualizarAluguel() {
    const id = this.novoAluguel.id;
    if (id) {
      this.aluguelService.updateAluguel(id, this.novoAluguel).subscribe(
        (response) => {
          console.log("Aluguel atualizado", response);
          this.isUpdate = false; // Reseta a flag após a atualização
          this.limparFormulario(); // Limpa o formulário após a atualização
        },
        (error) => {
          console.error("Erro ao atualizar", error);
        }
      );
    }
  }

  carregarAluguel(aluguel: IFormAluguel) {
    this.novoAluguel = { ...aluguel }; // Preenche o formulário com os dados do aluguel selecionado
    this.isUpdate = true; // Define o formulário para modo de atualização
  }

  obterDadosIniciais() {
    this.temasServices.obterTemas().subscribe((data: Itemas[]) => {
      this.temas = data;
    });

    this.clienteServices.obterUsers().subscribe((data: IUsuarios[]) => {
      this.clientes = data;
    });

    this.enderecoServices.obterEnderecos().subscribe((data: IEndereco[]) => {
      this.enderecos = data;
    });
  }

  limparFormulario() {
    this.novoAluguel = {
      date: '',
      end_hours: '',
      start_hours: '',
      client: 0,
      theme: 0,
      address: 0,
      id: 0,
    };
    this.isUpdate = false;
  }

}
