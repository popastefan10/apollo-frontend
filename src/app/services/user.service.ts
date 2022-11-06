import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { User } from '../components/models/user.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: User | undefined;

  constructor(private readonly apiService: ApiService) {}

  public login(username: string, password: string): void {
    this.apiService
      .login(username, password)
      .pipe(tap((user) => (this.user = user)), tap((user) => console.log('user', user)))
      .subscribe();
  }
}
