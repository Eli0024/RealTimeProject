import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://127.0.0.1:8000/register/'; 
 
  constructor(private http: HttpClient, private cookies: CookieService) {}
  
  lista_usuarios(){
    return this.http.get<any>("http://127.0.0.1:8000/lista/usuarios/") 
  }

  eliminar_usuarios(id: number):Observable<any>{
    return this.http.delete(`http://127.0.0.1:8000/eliminar/usuario/${id}/`)
  }
  actualizar_usuarios(id: number, form: any):Observable<any>{
    return this.http.put(`http://127.0.0.1:8000/modificarusuario/${id}/`,form)
  }
  

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  get(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}${id}/`);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, User);
  }

  update(User: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}${User.id}/`, User);
  }

  delete(id: number): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}${id}`);
  }
}
