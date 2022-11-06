import { Component, OnInit } from '@angular/core';
import { topics } from 'src/app/mock-data/topics';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public topics: string[] = topics

  constructor(private readonly apiService: ApiService) { }

  ngOnInit(): void {
    // this.apiService.login().subscribe((x) => console.log('login', x));
    this.apiService.getRoot().subscribe(() => console.log('root'));
  }

}
