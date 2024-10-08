import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Parametro } from './parametros';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {
  private apiUrl = 'http://127.0.0.1:8000/parametros/';
  private parametrosSubject = new BehaviorSubject<Parametro[]>([]);

  constructor(private http: HttpClient) {
    this.obtenerParametros();
  }

  private obtenerParametros() {
    this.http.get<Parametro[]>(this.apiUrl).subscribe(
      (data) => {
        this.parametrosSubject.next(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }


  getParametros(): Observable<Parametro[]> {
    return this.parametrosSubject.asObservable();
  }

  getAll(): Observable<Parametro[]> {
    return this.http.get<Parametro[]>(this.apiUrl);
  }

  create(parametro: Parametro): Observable<Parametro> {
    return this.http.post<Parametro>(this.apiUrl, parametro);
  }

  get(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}${id}/`);
  }
  getparam(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  update(parametro: Parametro): Observable<Parametro> {
    return this.http.put<Parametro>(`${this.apiUrl}${parametro.id_config}/`, parametro);
  }

  delete(id: number): Observable<Parametro> {
    return this.http.delete<Parametro>(`${this.apiUrl}${id}/`);
  }

}
