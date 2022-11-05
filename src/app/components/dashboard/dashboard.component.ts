import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public topics: string[] = [
    'Operating Systems',
    'Probabilities',
    'Machine Learning',
    'Cloud Computing',
    'Blockchain'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
