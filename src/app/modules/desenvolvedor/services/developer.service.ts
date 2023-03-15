import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Developer } from '../developer.model';


@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  baseUrl = "http://localhost:3000/developer";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Developer[]> {
    return this.http.get<Developer[]>(this.baseUrl + '/list');
  }

  get(id: any): Observable<Developer> {
    return this.http.get<Developer>(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  /* deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  findByTitle(title: any): Observable<Developer[]> {
    return this.http.get<Developer[]>(`${this.baseUrl}?title=${title}`);
  } */

}
