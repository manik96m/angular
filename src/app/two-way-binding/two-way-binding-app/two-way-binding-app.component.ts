import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'two-way-binding-app',
  imports: [CounterComponent],
  templateUrl: './two-way-binding-app.component.html',
  styleUrl: './two-way-binding-app.component.scss',
})
export class TwoWayBindingAppComponent {
  initialCount = 18;
}
