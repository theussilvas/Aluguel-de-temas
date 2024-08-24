import { Component, OnInit } from '@angular/core';
import { Itemas } from '../../interfaces/interface';
import { TemasService } from '../../services/Temas/temas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temas.component.html',
  styleUrl: './temas.component.css'
})
export class TemasComponent implements OnInit{

   temas:Itemas[]=[];

   constructor(private temasServices:TemasService){}


   ngOnInit(){
    this.obterTemas();
   }

   obterTemas(){
    this.temasServices.obterTemas().subscribe((data:Itemas[])=>{
      this.temas = data;
    })
   }
}
