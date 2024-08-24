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
}
