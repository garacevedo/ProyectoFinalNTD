import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiuri = '/api/users';
  apiuri_signup= '/api/signup';
  apiuri_login= '/api/login';

  HttpOption = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
  };


  // REGISTRO E INICIO DE SESIÓN
  userSignUp(data: any): Observable<any> {
    return this.http.get<any>(this.apiuri_signup);
  }

  userLogin(data: any): Observable<any> {
    return this.http.post<any>(this.apiuri_login, data);
  }


  // INICIODEL CRUD DE USER
  getUsersData(): Observable<any> {
    return this.http.get<any>(this.apiuri);
  }

  newUser(data: any): Observable<any> {
    return this.http.post<any>(
      this.apiuri,
      data,
      { headers: this.HttpOption });
  }
  updateUser(id: any, data: any): Observable<any> {
    console.log(data)
    return this.http.put<any>(
      this.apiuri + '/' + id,
      data,
      { headers: this.HttpOption });
  }

  deleteUser(id:any){
    return this.http.delete<any>(
      this.apiuri + "/" + id,
      { headers: this.HttpOption}
    )
  }

}
