import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicion } from './medicion';

@Injectable({
  providedIn: 'root'
})
export class MedicionesService {

  private apiUrl = 'http://127.0.0.1:8000/mediciones/';


  constructor(private http: HttpClient) { }

  getAll(): Observable<Medicion[]> {
    return this.http.get<Medicion[]>(this.apiUrl);
  }

  create(medicion:Medicion):Observable<Medicion>{
    return this.http.post<Medicion>(this.apiUrl,medicion);
  }

  get(id:number): Observable<Medicion> {
    return this.http.get<Medicion>(`${this.apiUrl}${id}`);
  }

  update(medicion: Medicion): Observable<Medicion> {
    return this.http.put<Medicion>(`${this.apiUrl}${medicion.id_medicion}/`,medicion);
  }

  delete(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }

}

