import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, first, map, Observable, startWith, Subject, tap } from 'rxjs';

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.scss'],
})
export class QuestionViewComponent implements OnInit {
  @Output() public readonly updateQuestion: EventEmitter<string> = new EventEmitter();
  @Input() public questionId: number = 0;

  public readonly questionControl = new FormControl('');

  public readonly answerControl = new FormControl('');

  public questionContent$: Observable<string> =
    this.questionControl.valueChanges.pipe(map((question) => question ?? ''));

  public answerContent$: Observable<string> =
    this.answerControl.valueChanges.pipe(map((question) => question ?? ''));

  public canSave$: Observable<boolean> = combineLatest([
    this.questionContent$.pipe(startWith('')),
    this.answerContent$.pipe(startWith('')),
  ]).pipe(
    map(
      ([questionContent, answerContent]) =>
        questionContent.length > 0 && answerContent.length > 0
    )
  );

  constructor() {}

  ngOnInit(): void {}

  public save(): void {
    this.updateQuestion.emit(this.questionControl.value ?? '');
  }
}
