import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  apiuri = '/api/curriculum';
 
  HttpOption = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
  };

  // INICIODEL CRUD DE USER
  getCurriculumsData(): Observable<any> {
    return this.http.get<any>(this.apiuri);
  }

  newCurriculum(data: any): Observable<any> {
    return this.http.post<any>(
      this.apiuri,
      data,
      { headers: this.HttpOption });
  }
  updateCurriculum(id: any, data: any): Observable<any> {
    console.log(data)
    return this.http.put<any>(
      this.apiuri + '/' + id,
      data,
      { headers: this.HttpOption });
  }

  deleteCurriculum(id: any) {
    return this.http.delete<any>(
      this.apiuri + "/" + id,
      { headers: this.HttpOption }
    )
  }



}
