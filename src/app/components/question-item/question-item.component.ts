import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../models/question.model';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss'],
})
export class QuestionItemComponent implements OnInit {
  @Output() public addHelper: EventEmitter<void> = new EventEmitter();
  @Output() public deleteQuestion: EventEmitter<void> = new EventEmitter();
  @Input() public question?: Question;
  @Input() public isHelper?: boolean;
  @Input() public active?: boolean;

  public readonly faEllipsisVertical = faEllipsisVertical;

  constructor() {}

  ngOnInit(): void {}

  public addHelperQuestion(): void {
    this.addHelper.emit();
  }

  public deleteQ(): void {
    this.deleteQuestion.emit();
  }
}
