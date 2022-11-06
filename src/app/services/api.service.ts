import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) { }

  // public login(userName: string = 'admin', password: string = '1234'): Observable<string> {
  //   return this.http.post<string>('/api/login', { userName, password });
  // }

  public getRoot(): Observable<string> {
    return this.http.get<string>('/api/topics');
  }
}
