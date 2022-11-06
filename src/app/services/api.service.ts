import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../components/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) { }

  public login(username: string = 'admin', password: string = '1234'): Observable<User> {
    return this.http.post<User>('/api/login', { username, password });
  }

  public getRoot(): Observable<string> {
    return this.http.get<string>('/api/topics');
  }
}
