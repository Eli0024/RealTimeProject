import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parametro } from './parametros';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {

  private apiUrl = 'http://127.0.0.1:8000/api/parametros/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Parametro[]> {
    return this.http.get<Parametro[]>(this.apiUrl);
  }

  create(parametro:Parametro):Observable<Parametro>{
    return this.http.post<Parametro>(this.apiUrl,parametro);
  }

  get(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}${id}/`);
  }

  update(parametro: Parametro): Observable<Parametro> {
    return this.http.put<Parametro>(`${this.apiUrl}${parametro.id_config}/`, parametro);
  }

  delete(id:number): Observable<Parametro> {
    return this.http.delete<Parametro>(`${this.apiUrl}${id}`);
  }

}
