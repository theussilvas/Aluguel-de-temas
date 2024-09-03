import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/User/user.service';
import { IUsuarios } from '../../interfaces/interface';


@Component({
  selector: 'app-qtdclientes',
  standalone: true,
  imports: [],
  templateUrl: './qtdclientes.component.html',
  styleUrl: './qtdclientes.component.css'
})
export class QtdclientesComponent implements OnInit{
  
   constructor(private clientesServices:UserService){}

   clientes:IUsuarios[]=[];
   qtd:number = 0;


  ngOnInit(){
    this.calcularClientes();
  }

   obterClientes(){
    this.clientesServices.obterUsers().subscribe((data:IUsuarios[])=>{
      this.clientes = data;
    })
   }

   calcularClientes(){
    this.obterClientes();
    this.qtd = this.clientes.length;
   }
}
