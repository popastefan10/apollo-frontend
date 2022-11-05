import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { MOCK_ARTICLES } from 'src/app/mock-data/articles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles = MOCK_ARTICLES;
  faFileLines = faFileLines;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  goToArticle(articleId: number) {
    this.router.navigate(['article', articleId]);
  }
}
