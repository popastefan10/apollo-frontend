import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { UserService } from '../services/user.service';

interface SignIn {
  username: string;
  password: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  @ViewChild('signInBtn') signInBtn?: ElementRef<HTMLInputElement>;
  signInModel: SignIn = { username: '', password: '' };
  submitted = false;

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly renderer: Renderer2
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.userService.login(this.signInModel.username, this.signInModel.password);

    this.router.navigate(['dashboard']);
    this.submitted = true;
  }
}
