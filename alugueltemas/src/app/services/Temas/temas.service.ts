import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itemas } from '../../interfaces/interface';
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
}
