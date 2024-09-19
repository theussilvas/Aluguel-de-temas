import { Component, OnInit } from '@angular/core';
import { IAluguel, IClientesComAlugueis, IUsuarios } from '../../interfaces/interface';
import { QtdAlugadaUsuarioService } from '../../services/AluguelQtd/qtd-alugada-usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuariosmaiortemas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuariosmaiortemas.component.html',
  styleUrl: './usuariosmaiortemas.component.css'
})
export class UsuariosmaiortemasComponent implements OnInit {

  clientesComAlugueis:IClientesComAlugueis[] = [];
  
  constructor(private clienteAluguelService : QtdAlugadaUsuarioService){}

  ngOnInit(){
    this.clientesComAlugueis = this.clienteAluguelService.quantidadeAlugueisCliente();
  }

}
