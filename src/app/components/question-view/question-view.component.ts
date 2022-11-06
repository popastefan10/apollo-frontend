import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.scss']
})
export class QuestionViewComponent implements OnInit {
  @Input() public questionId?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
