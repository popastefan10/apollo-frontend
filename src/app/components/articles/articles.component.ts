import { Component, OnInit } from '@angular/core';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles = ["Introduction to Computer Science", "Mathematics basics", "Geometry and algebra"];
  faFileLines = faFileLines;

  constructor() { }

  ngOnInit(): void {
  }

}
