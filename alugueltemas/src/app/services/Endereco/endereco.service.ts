import { Injectable } from '@angular/core';
import { IEndereco } from '../../interfaces/interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private apiUrl = "http://http://3.128.249.166:8000/api/Address/";

  endereco: IEndereco[] = [];

  constructor(  private http: HttpClient ) { }

  obterEnderecos(){
    return this.http.get<IEndereco[]>(this.apiUrl);
  }
}
