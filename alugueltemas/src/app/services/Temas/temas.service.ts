import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAluguel, Itemas } from '../../interfaces/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemasService {

  private apiUrl = "http://3.128.249.166:8000/api/themes/";

  temas:Itemas[] = [];

  constructor( private http: HttpClient) { }

  obterTemas(): Observable<Itemas[]>{
    return this.http.get<Itemas[]>(this.apiUrl);
  }
  criarTema(tema: Itemas): Observable<Itemas> {
    return this.http.post<Itemas>(this.apiUrl, tema);
  }

  editarTema(tema: Itemas): Observable<Itemas> {
    return this.http.put<Itemas>(`${this.apiUrl}${tema.id}/`, tema);
  }

  deletarTema(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }


  temasPeriodo(temas:Itemas[],alugueis:IAluguel[], mes:number, ano:number, dia:number){
    
    const alugueisFiltrados = alugueis.filter(aluguel => {
      const dataAluguel = new Date(aluguel.date);
      return dataAluguel.getMonth() === mes - 1 && dataAluguel.getFullYear() === ano && dataAluguel.getDay() === dia;
    });

    const contagemPorTema = alugueisFiltrados.reduce((acc, aluguel) => {
      const tema = temas.find(t => t.id === aluguel.theme);
      if (tema) {
        acc[tema.name] = (acc[tema.name] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);
  
    return Object.entries(contagemPorTema).map(([nome, quantidade]) => ({
      nome,
      quantidade
    }));

  }
}
