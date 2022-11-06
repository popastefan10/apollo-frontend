import { Component, OnInit } from '@angular/core';
import { MOCK_ARTICLES } from 'src/app/mock-data/articles';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  public faPlus = faPlus;

  public article = MOCK_ARTICLES[0];

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const articleId = this.activatedRoute.snapshot.params['articleId'];
    this.article =
      MOCK_ARTICLES[Math.max(0, Math.min(articleId - 1, MOCK_ARTICLES.length))];
  }

  goToAssessment(articleId: number) {
    this.router.navigate(['/assessment', articleId]);
  }
}
