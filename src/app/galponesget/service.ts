import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Galpon } from '../registrar-galpon/galpon';

@Injectable({
  providedIn: 'root'
})
export class IndexiniService {

  
  private apiUrl = 'http://127.0.0.1:8000/api/galpones/';


  constructor(private http: HttpClient) { }

  getAll(): Observable<Galpon[]> {
    return this.http.get<Galpon[]>(this.apiUrl);
  }

  get(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}${id}/`);
  }
  }
