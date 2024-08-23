import { Component, OnInit } from '@angular/core';
import { IUsuarios } from '../interfaces/interface';
import { UserService } from '../services/User/user.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent  implements OnInit{

    user:IUsuarios[] =[];

    constructor(private userSevice:UserService){}

    ngOnInit(){
      this.obterusuarios();
    }

    obterusuarios(){
      this.userSevice.obterUsers().subscribe((data:IUsuarios[])=>{
        this.user = data;
      })
    }
}
