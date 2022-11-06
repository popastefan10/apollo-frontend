import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { User } from '../components/models/user.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: User | undefined;
  username = '';
  isSignedIn = false;

  constructor(private readonly apiService: ApiService) {}

  public login(username: string, password: string): void {
    this.apiService
      .login(username, password)
      .pipe(tap((user) => (this.user = user)), tap((user) => console.log('this.user', this.user)))
      .subscribe(() => {
        if(this.user){
          this.username = this.user.username;
          this.isSignedIn = true;
        }
      });
  }
}
