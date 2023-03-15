import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nivel } from '../nivel.model';

@Injectable({
  providedIn: 'root'
})
export class NivelService {

  baseUrl = "http://localhost:3000/level";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Nivel[]> {
    return this.http.get<Nivel[]>(this.baseUrl + '/list');
  }

  get(id: any): Observable<Nivel> {
    return this.http.get<Nivel>(`${this.baseUrl}/${id}`);
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

}
