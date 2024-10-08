import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Granja } from './granja';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://127.0.0.1:8000/granjas/'; 
 
  constructor(private http: HttpClient) {}

 
  getAllGranjas(): Observable<Granja[]> {
    return this.http.get<Granja[]>(this.apiUrl);
  }

  getGranja(id: number): Observable<Granja> {
    return this.http.get<Granja>(`${this.apiUrl}${id}/`);
  }

  create(granja: Granja): Observable<Granja> {
    return this.http.post<Granja>(this.apiUrl, granja);
  }

  update(granja: Granja): Observable<Granja> {
    return this.http.put<Granja>(`${this.apiUrl}${granja.id_granja}/`, granja);
  }

  deleteGranja(id: number): Observable<Granja> {
    return this.http.delete<Granja>(`${this.apiUrl}${id}`);
  }
}
