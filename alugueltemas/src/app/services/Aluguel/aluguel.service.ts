import { Injectable } from '@angular/core';
import { IAluguel, IFormAluguel } from '../../interfaces/interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AluguelService {

  private apiUrl = "http://3.128.249.166:8000/api/rents/";

  alugueis: IAluguel[] = [];

  constructor( private http: HttpClient) { }

  obterAlugueis(){
    return this.http.get<IAluguel[]>(this.apiUrl);
  }

  salvarAluguel(novoAluguel:IFormAluguel):Observable<IAluguel>{
    return this.http.post<IAluguel>(this.apiUrl,novoAluguel)
  }

  updateAluguel(id: number, aluguelAtulizado:IFormAluguel):Observable<IAluguel>{
    return this.http.put<IAluguel>(`${this.apiUrl}${id}`,aluguelAtulizado)
  }

  deleteAluguel(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }

  
}
