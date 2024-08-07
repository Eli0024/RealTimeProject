import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Granja } from './granja';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api/granjas/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Granja[]> {
    return this.http.get<Granja[]>(this.apiUrl);
  }

  create(granja: Granja): Observable<Granja> {
    return this.http.post<Granja>(this.apiUrl, granja);
  }

  get(id: number): Observable<Granja> {
    return this.http.get<Granja>(`${this.apiUrl}${id}`);
  }

  update(granja: Granja): Observable<Granja> {
    return this.http.put<Granja>(`${this.apiUrl}${granja.id_granja}/`, granja);
  }

   delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
