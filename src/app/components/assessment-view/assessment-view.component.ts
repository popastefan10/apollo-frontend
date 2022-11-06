import { Component, OnInit, ViewChild } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

export interface Question {
  id: number;
  title: string;
  active: boolean;
  helperQuestions: HelperQuestion[];
}

export interface HelperQuestion {
  id: number;
  title: string;
  active: boolean;
}

@Component({
  selector: 'app-assessment-view',
  templateUrl: './assessment-view.component.html',
  styleUrls: ['./assessment-view.component.scss'],
})
export class AssessmentViewComponent implements OnInit {
  faPlus = faPlus;
  faEllipsisVertical = faEllipsisVertical;
  questions: Question[] = [
    {
      id: 1,
      title: 'What is the area of the earth given the fact that?',
      active: false,
      helperQuestions: [],
    },
    {
      id: 2,
      title: 'What color is the sun?',
      active: true,
      helperQuestions: [],
    },
  ];

  public activeQuestionId?: number;

  constructor() {}

  private nextId(): number {
    return (
      this.questions.reduce(
        (prev, crt) =>
          Math.max(
            prev,
            crt.id,
            crt.helperQuestions.reduce((prev, crt) => Math.max(prev, crt.id), 0)
          ),
        0
      ) + 1
    );
  }

  ngOnInit(): void {
    if (this.questions.length > 0) {
      this.activeQuestionId = this.questions[0].id;
    }
  }

  selectQuestion(questionId: number) {
    // make other questions not active
    this.activeQuestionId = questionId;
  }

  addQuestion() {
    // make other questions not active
    const newId = this.nextId();
    this.activeQuestionId = newId;

    // add new question
    let newQuestion = {
      id: this.activeQuestionId,
      title: '',
      active: true,
      helperQuestions: [],
    };
    this.questions.push(newQuestion);
  }

  addHelperQuestion(questionId: number) {
    const newId = this.nextId();

    const newHelperQuestion: HelperQuestion = {
      id: newId,
      title: 'new helper',
      active: true,
    };
    this.questions
      .find((q) => q.id === questionId)
      ?.helperQuestions.push(newHelperQuestion);
  }

  deleteQuestion(questionId: number) {
    this.questions = this.questions.filter(
      (question) => question.id !== questionId
    );

    this.questions.forEach((q) =>
      q.helperQuestions = q.helperQuestions.filter((helper) => helper.id !== questionId)
    );
  }
}
