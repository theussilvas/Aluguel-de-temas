import { Injectable } from '@angular/core';
import { Iitens } from '../../interfaces/interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItensService {

  private apiUrl = "http://http://3.128.249.166:8000/api/itens/";

  itens: Iitens[] = [];

  constructor( private http: HttpClient) { }

  obterItens(){
    return this.http.get<Iitens[]>(this.apiUrl);
  }
}
