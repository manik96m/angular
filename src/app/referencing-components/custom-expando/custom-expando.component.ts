import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { CustomToggleComponent } from '../custom-toggle/custom-toggle.component';

@Component({
  selector: 'app-custom-expando',
  imports: [],
  templateUrl: './custom-expando.component.html',
  styleUrl: './custom-expando.component.scss',
})
export class CustomExpandoComponent implements AfterContentInit {
  @ContentChild(CustomToggleComponent)
  customToggle!: CustomToggleComponent;
  @ContentChildren(CustomToggleComponent)
  customToggles!: QueryList<CustomToggleComponent>;

  ngAfterContentInit() {
    console.log('toggle: ', this.customToggle);
    console.log('toggles: ', this.customToggles);
  }
}
