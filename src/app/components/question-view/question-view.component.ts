import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  combineLatest,
  filter,
  first,
  map,
  Observable,
  startWith,
  Subject,
  tap,
} from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.scss'],
})
export class QuestionViewComponent implements OnInit, OnChanges {
  @Output() public readonly updateQuestion: EventEmitter<{
    question: string;
    answer: string;
  }> = new EventEmitter();
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

  constructor(private readonly apiService: ApiService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('questionId' in changes) {
      const questionId = changes['questionId'].currentValue;
      console.log(questionId);

      this.apiService
        .getQuestion(questionId)
        .pipe(
          filter((q) => !!q),
          tap((q: { question: string; answer: string }) => {
            this.questionControl.setValue(q.question);
            this.answerControl.setValue(q.answer);
          })
        )
        .subscribe();
    }
  }

  public save(): void {
    if (
      this.questionControl.value?.length &&
      this.answerControl.value?.length
    ) {
      this.updateQuestion.emit({
        question: this.questionControl.value ?? '',
        answer: this.answerControl.value ?? '',
      });
    }
  }
}
