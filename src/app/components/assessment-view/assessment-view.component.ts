import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, filter, map, Observable, tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
// import { Question } from '../models/question.model';

@Component({
  selector: 'app-assessment-view',
  templateUrl: './assessment-view.component.html',
  styleUrls: ['./assessment-view.component.scss'],
})
export class AssessmentViewComponent implements OnInit {
  faPlus = faPlus;
  faEllipsisVertical = faEllipsisVertical;
  // questions: Question[][] = [
  //   [
  //     {
  //       id: 1,
  //       title: 'What is the area of the earth given the fact that?',
  //       active: false,
  //     },
  //   ],
  //   [
  //     {
  //       id: 2,
  //       title: 'What color is the sun?',
  //       active: true,
  //     },
  //   ],
  // ];
  // questions: Question[][] = [];
  questions: any[][] = [];

  public activeQuestion: any | undefined = this.questions[0]?.[0];

  private activeQuestionIdSubject = new BehaviorSubject(0);

  public activeQuestionId$: Observable<number> =
    this.activeQuestionIdSubject.pipe(filter((id) => !!id));

  constructor(
    private readonly apiService: ApiService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  private nextId(): number {
    return (
      this.questions.reduce(
        (prev, crt) =>
          Math.max(
            prev,
            crt.reduce((prev, crt) => Math.max(prev, crt.id ?? 0), 0)
          ),
        0
      ) + 1
    );
  }

  private findQuestion(questionId: number): any | undefined {
    for (let i = 0; i < this.questions.length; i++) {
      const maybeQ: any | undefined = this.questions[i].find(
        (q) => q.id === questionId
      );
      if (!!maybeQ) return maybeQ;
    }

    return undefined;
  }

  ngOnInit(): void {
    if (this.questions.length > 0) {
      this.activeQuestionIdSubject.next(this.questions[0][0].id ?? 0);
      this.activeQuestion = this.questions[0][0];
    }

    const articleId = this.activatedRoute.snapshot.params['articleId'];
    this.getQuestions(articleId);
  }

  public getQuestions(articleId: number): void {
    this.apiService
      .getQuestions(articleId)
      .pipe(
        map((qs) => qs.questions),
        map((qs: any[][]) =>
          qs.map((qSet: any[]) =>
            qSet.map((q) => {
              return {
                id: q.question_id,
                question: q.question,
                answer: q.answer,
              };
            })
          )
        ),
        tap((questions) => (this.questions = questions as any[][]))
      )
      .subscribe();
  }

  selectQuestion(questionId: number) {
    // make other questions not active
    this.activeQuestionIdSubject.next(questionId);
    this.activeQuestion = this.findQuestion(questionId);
  }

  addQuestion() {
    // make other questions not active
    const newId = this.nextId();
    this.activeQuestionIdSubject.next(newId);

    // add new question
    let newQuestion = {
      id: newId,
      question: '',
      answer: '',
      active: true,
      helperQuestions: [],
    };

    this.activeQuestion = newQuestion;
    this.questions.push([newQuestion]);
  }

  addHelperQuestion(questionId: number) {
    const newId = this.nextId();
    this.activeQuestionIdSubject.next(newId);

    const newHelperQuestion: any = {
      id: newId,
      title: 'new helper',
      active: true,
    };
    this.activeQuestion = newHelperQuestion;
    this.questions
      .find((qset) => qset[0].id === questionId)
      ?.push(newHelperQuestion);
  }

  deleteQuestion(questionId: number) {
    // console.log('del', questionId);
    // this.questions.forEach((questionSet) =>
    //   questionSet.splice(questionSet.findIndex((q) => q.id === questionId), 1)
    // );
  }

  public updateSelectedQuestion(q: { question: string, answer: string }): void {
    const articleId = this.activatedRoute.snapshot.params['articleId'];
    if (!!this.activeQuestion) this.activeQuestion.title = q.question;

    for (let i = 0; i < this.questions.length; i++)
      for (let j = 0; j < this.questions[i].length; j++)
        if (this.questions[i][j].id === this.activeQuestionIdSubject.value) {
          this.questions[i][j].question = q.question;
          this.questions[i][j].answer = q.answer;
          this.questions[i][j].id = null;
          console.log('before sendQuestions', this.questions);
          this.apiService.sendQuestions(this.questions, articleId).subscribe();
          setTimeout(() => this.getQuestions(articleId), 500);

          return;
        }
  }
}
