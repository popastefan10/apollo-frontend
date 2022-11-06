import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.scss']
})
export class QuestionViewComponent implements OnInit {
  @Input() public questionId?: number;

  public readonly questionControl = new FormControl('');

  public readonly answerControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.questionControl.valueChanges.pipe(tap((x) => console.log('question', x))).subscribe();
  }

}
