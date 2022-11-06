import { Component, OnInit } from '@angular/core';

interface SignIn {
  username: string,
  password: string
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInModel: SignIn = {username: "", password: ""};
  submitted = false;

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
  }
}
