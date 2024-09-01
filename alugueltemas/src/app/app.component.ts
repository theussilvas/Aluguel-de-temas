import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import { TemasComponent } from "./components/temas/temas.component";
import { HeaderComponent } from "./header/header.component";
import { GraficoReceitaComponent } from './components/grafico-receita/grafico-receita.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsuariosComponent, TemasComponent, HeaderComponent, GraficoReceitaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'alugueltemas';
}
