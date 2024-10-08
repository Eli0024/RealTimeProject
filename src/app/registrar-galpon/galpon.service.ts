import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Galpon } from './galpon';

@Injectable({
  providedIn: 'root'
})
export class GalponService {

  private apiUrl = 'http://127.0.0.1:8000/galpones/';
  


  constructor(
    private http: HttpClient,
   
  ) { }

  getGalpones(): Observable<Galpon[]> {
    return this.http.get<Galpon[]>(this.apiUrl);
  }

  // Obtener un producto específico por ID
  getGalpon(id: number): Observable<Galpon> {
    return this.http.get<Galpon>(`${this.apiUrl}${id}/`);
  }

  // Agregar un nuevo producto
  createGalpon(galpon: Galpon): Observable<any> {
    // Obtén el token de autenticación (debería estar almacenado en localStorage o en un servicio)
    const authToken = localStorage.getItem('authToken');  // Asegúrate de que el token esté almacenado
    
    // Configura los encabezados HTTP para incluir el token de autorización
    const headers = new HttpHeaders({
      'Authorization': `Token ${authToken}`
    });

    return this.http.post<any>(this.apiUrl, galpon, { headers });
  }
  
  // Actualizar un producto existente por ID
  updateGalpon(galpon:Galpon): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${galpon.id_galpon}/`, galpon);
  }

  // Eliminar un producto por ID
  deleteGalpon(id: number): Observable<void> {

    
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}