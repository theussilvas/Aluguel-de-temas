import { Component, OnInit } from '@angular/core';
import { TemasService } from '../../services/Temas/temas.service';
import { Itemas } from '../../interfaces/interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temas-cadastrados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temas-cadastrados.component.html',
  styleUrl: './temas-cadastrados.component.css'
})
export class QuantidadeTemasComponent implements OnInit {

  quantidadeTemas: number = 0;

  constructor(private temasService: TemasService) { }

  ngOnInit(): void {
    this.carregarQuantidadeTemas();
  }

  carregarQuantidadeTemas(): void {
    this.temasService.obterTemas().subscribe((temas: Itemas[]) => {
      this.quantidadeTemas = temas.length;
    });
  }
}