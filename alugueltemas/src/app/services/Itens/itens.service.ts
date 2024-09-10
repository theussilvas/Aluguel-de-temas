import { Injectable } from '@angular/core';
import { Iitens } from '../../interfaces/interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItensService {

  private apiUrl = "http://3.128.249.166:8000/api/itens/";

  constructor(private http: HttpClient) { }

  obterItens(): Observable<Iitens[]> {
    return this.http.get<Iitens[]>(this.apiUrl);
  }

  criarItem(item: Iitens): Observable<Iitens> {
    return this.http.post<Iitens>(this.apiUrl, item);
  }

  editarItem(item: Iitens): Observable<Iitens> {
    return this.http.put<Iitens>(`${this.apiUrl}${item.id}/`, item);
  }

  deletarItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
