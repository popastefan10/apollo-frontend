import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, filter, Observable, tap } from 'rxjs';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-assessment-view',
  templateUrl: './assessment-view.component.html',
  styleUrls: ['./assessment-view.component.scss'],
})
export class AssessmentViewComponent implements OnInit {
  faPlus = faPlus;
  faEllipsisVertical = faEllipsisVertical;
  questions: Question[][] = [
    [
      {
        id: 1,
        title: 'What is the area of the earth given the fact that?',
        active: false,
      },
    ],
    [
      {
        id: 2,
        title: 'What color is the sun?',
        active: true,
      },
    ],
  ];

  public activeQuestion: Question | undefined = this.questions[0][0];

  private activeQuestionIdSubject: BehaviorSubject<number> =
    new BehaviorSubject(0);

  public activeQuestionId$: Observable<number> =
    this.activeQuestionIdSubject.pipe(filter((id) => !!id));

  constructor() {}

  private nextId(): number {
    return (
      this.questions.reduce(
        (prev, crt) =>
          Math.max(
            prev,
            crt.reduce((prev, crt) => Math.max(prev, crt.id), 0)
          ),
        0
      ) + 1
    );
  }

  private findQuestion(questionId: number): Question | undefined {
    for (let i = 0; i < this.questions.length; i++) {
      const maybeQ: Question | undefined = this.questions[i].find(
        (q) => q.id === questionId
      );
      if (!!maybeQ) return maybeQ;
    }

    return undefined;
  }

  ngOnInit(): void {
    if (this.questions.length > 0) {
      this.activeQuestionIdSubject.next(this.questions[0][0].id);
      this.activeQuestion = this.questions[0][0];
    }
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
      title: '',
      active: true,
      helperQuestions: [],
    };
    this.activeQuestion = newQuestion;
    this.questions.push([newQuestion]);
  }

  addHelperQuestion(questionId: number) {
    const newId = this.nextId();
    this.activeQuestionIdSubject.next(newId);

    const newHelperQuestion: Question = {
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

  public updateSelectedQuestion(q: string): void {
    if (!!this.activeQuestion) this.activeQuestion.title = q;
  }
}
