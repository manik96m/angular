import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  imports: [],
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.scss',
  inputs: ['message', 'title', 'userName', 'password'],
})
export class TutorialComponent {
  @Input() message = '';
  @Input() title = '';
  @Input({ required: true, alias: 'userName' }) user = '';

  @Input() set password(name: string) {
    this.passwordValue = name;
  }

  get password() {
    return this.passwordValue;
  }

  passwordValue = '';

  @Output() tutorialStart = new EventEmitter();

  @Input() twoWay = 0;

  @Output() twoWayChange = new EventEmitter<number>();

  twoWayValueChange() {
    this.twoWayChange.emit(this.twoWay + 1);
  }

  start() {
    this.tutorialStart.emit();
  }
}
