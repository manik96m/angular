import { Component, Directive } from '@angular/core';

@Directive({
  selector: 'app-cardheader'
}) 
export class CardHeaderDirective {}

@Directive({
  selector: '[cardContent3]'
}) 
export class CardContent3Directive {}


@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss']
})
export class ContentProjectionComponent {

}
