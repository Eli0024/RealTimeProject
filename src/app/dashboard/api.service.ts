import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Authservice } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    
    private apiUrl = 'http://localhost:8000/user-role/';

    constructor(private http: HttpClient, private authService: Authservice) { }
  
    getUserRole() {
      const token = this.authService.getToken(); // Método para obtener el token de autenticación
  
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}` // Ajusta según el tipo de token que estés usando
      });
  
      return this.http.get<{ role: string }>(this.apiUrl, { headers });
    }
  }