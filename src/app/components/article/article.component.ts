import { Component, OnInit } from '@angular/core';
import { MOCK_ARTICLES } from 'src/app/mock-data/articles';
import { Article, Section } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  sections: Section[] = [
      {title: "Capitolul 1", content: ["Lorem ipsum sit dolor et", "Lorem ipsum sit dolor et", "Lorem ipsum sit dolor et"]},
      {title: "Capitolul 2", content: ["Lorem ipsum sit dolor et", "Lorem ipsum sit dolor et", "Lorem ipsum sit dolor et"]},
      {title: "Capitolul 3", content: ["Lorem ipsum sit dolor et", "Lorem ipsum sit dolor et", "Lorem ipsum sit dolor et"]},
  ]
  public article = MOCK_ARTICLES;

  constructor() { }

  ngOnInit(): void {
  }

}
