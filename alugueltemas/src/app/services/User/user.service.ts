import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuarios } from '../../interfaces/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = "http://3.128.249.166:8000/api/clients/";

  constructor(private http: HttpClient) { }

  user:IUsuarios[] = [];

  obterUsers(): Observable<IUsuarios[]>{
    return this.http.get<IUsuarios[]>(this.apiUrl);

  }
  
}
