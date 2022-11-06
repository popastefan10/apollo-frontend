import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faArrowRight = faArrowRight;
  isSignedIn = false;
  username = ''

  constructor(
    private readonly router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    setInterval(() => {
      this.isSignedIn = this.userService.isSignedIn;
      if(this.isSignedIn)
        this.username = this.userService.username;
    }, 100)
  }

  goToDashboard() {
    this.router.navigate(['dashboard']);
  }

  goToSignIn() {
    this.router.navigate(['signin']);
  }
}
