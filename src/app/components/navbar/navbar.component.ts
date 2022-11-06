import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faArrowRight = faArrowRight;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  goToDashboard() {
    this.router.navigate(['dashboard']);
  }
  
  goToSignIn() {
    this.router.navigate(['signin']);
  }
}
