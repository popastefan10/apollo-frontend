import { Component, OnInit, ViewChild } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

interface Question {
  id: number,
  title: string,
  active: boolean,
  helperQuestions: string[]
}

@Component({
  selector: 'app-assessment-view',
  templateUrl: './assessment-view.component.html',
  styleUrls: ['./assessment-view.component.scss']
})
export class AssessmentViewComponent implements OnInit {
  faPlus = faPlus;
  faEllipsisVertical = faEllipsisVertical;
  questions: Question[] = [{id: 1, title: "What is the area of the earth given the fact that?", active: false, helperQuestions: []}, {id: 2, title: "What color is the sun?", active: true, helperQuestions: []}]
  constructor() { }

  ngOnInit(): void {
  }

  selectQuestion(questionId: number) {
    // make other questions not active
    this.questions.forEach(question => {
      question.active = false;
    })
    this.questions.map(question => {
      if(question.id === questionId)
        question.active = true;
      return question;
    })
  }

  addQuestion() {
    // make other questions not active
    this.questions.forEach(question => {
      question.active = false;
    })

    // add new question
    let newQuestion = {id: this.questions.length + 1, title: "", active: true, helperQuestions: []};
    this.questions.push(newQuestion)
  }

  addHelperQuestion(questionId: number) {
    console.log(questionId);
  }

  deleteQuestion(questionId: number) {
    this.questions = this.questions.filter(question => question.id !== questionId);
  }
}
