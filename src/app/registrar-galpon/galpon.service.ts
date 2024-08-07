import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Galpon } from './galpon';

@Injectable({
  providedIn: 'root'
})
export class GalponService {

  private apiUrl = 'http://127.0.0.1:8000/api/galpones/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Galpon[]> {
    return this.http.get<Galpon[]>(this.apiUrl);
  }

  create(galpon:Galpon):Observable<Galpon>{
    return this.http.post<Galpon>(this.apiUrl,galpon);
  }

  get(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}${id}/`);
  }
  
  update(galpon: Galpon): Observable<Galpon> {
    return this.http.put<Galpon>(`${this.apiUrl}${galpon.id_galpon}/`, galpon);
  }

  delete(id:number): Observable<Galpon> {
    return this.http.delete<Galpon>(`${this.apiUrl}${id}`);
  }

}
