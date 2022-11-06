import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { topics } from 'src/app/mock-data/topics';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  faPlus = faPlus;

  public topics: string[] = topics

  constructor() { }

  ngOnInit(): void {
  }

}
