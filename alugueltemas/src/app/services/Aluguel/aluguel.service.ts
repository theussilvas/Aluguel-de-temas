import { Injectable } from '@angular/core';
import { IAluguel } from '../../interfaces/interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AluguelService {

  private apiUrl = "http://http://3.128.249.166:8000/api/rents/";

  alugueis: IAluguel[] = [];

  constructor( private http: HttpClient) { }

  obterAlugueis(){
    return this.http.get<IAluguel[]>(this.apiUrl);
  }
}
