import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../models/question.model';
import { faEllipsisVertical, faQuestionCircle as questionCircleSolid } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle as questionCircleRegular } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss'],
})
export class QuestionItemComponent implements OnInit {
  @Output() public addHelper: EventEmitter<void> = new EventEmitter();
  @Output() public deleteQuestion: EventEmitter<void> = new EventEmitter();
  @Input() public questionTitle?: string;
  @Input() public isHelper?: boolean;
  @Input() public active?: boolean;

  public readonly faEllipsisVertical = faEllipsisVertical;

  public readonly questionCircleSolid = questionCircleSolid;

  public readonly questionCircleRegular = questionCircleRegular;

  constructor() {}

  ngOnInit(): void {}

  public addHelperQuestion(): void {
    this.addHelper.emit();
  }

  public deleteQ(): void {
    this.deleteQuestion.emit();
  }
}
