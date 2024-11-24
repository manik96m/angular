import { Component } from '@angular/core';

@Component({
  selector: 'control-flow-app',
  imports: [],
  templateUrl: './control-flow-app.component.html',
  styleUrl: './control-flow-app.component.scss',
})
export class ControlFlowAppComponent {
  a = 10;
  b = 20;

  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  emptyItems = [];
}
