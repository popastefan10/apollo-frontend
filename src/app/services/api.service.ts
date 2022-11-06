import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../components/models/user.model';
import { QToDTO } from '../components/models/question.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  public login(
    username: string = 'admin',
    password: string = '1234'
  ): Observable<User> {
    return this.http.post<User>('/api/login', { username, password });
  }

  public getRoot(): Observable<string> {
    return this.http.get<string>('/api/topics');
  }

  public sendQuestions(questions: any[][], articleId: number) {
    console.log('sendQuestions', questions);
    const questionsDTO = questions.map((questionSet: any[]) =>
      questionSet.map((q: any) => QToDTO(q, 1))
    );
    return this.http.post('api/questions/new', {
      article_id: articleId,
      questions: questionsDTO,
    });
  }

  public getQuestions(articleId: number): Observable<any> {
    return this.http.get<any>(`/api/questions/${articleId}`);
  }
}
