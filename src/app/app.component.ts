import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { TwoWayBindingAppComponent } from './two-way-binding/two-way-binding-app/two-way-binding-app.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild(TutorialComponent, { static: true }) tutorial!: TutorialComponent;
  @ViewChild(TwoWayBindingAppComponent)
  twoWayComponent!: TwoWayBindingAppComponent;
  @ViewChild('buttony') buttons!: ElementRef;
  message = 'Random message';
  title = 'Message title';
  twoWay = 1;

  save(event: any) {
    console.log('event: ', event.target);
    alert('Save clicked');
  }

  tutorialStart() {
    alert('Tutorial Started');
  }

  ngOnInit() {
    console.log('init tutorial: ', this.tutorial);
  }

  ngAfterViewInit() {
    console.log('tutorial: ', this.tutorial);
    console.log('twoWayComponent: ', this.twoWayComponent);
    console.log('buttons: ', this.buttons);
  }
}
