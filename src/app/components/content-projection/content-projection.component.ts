import { Component, Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: 'app-cardheader'
}) 
export class CardHeaderDirective {}

@Directive({
  selector: '[cardContent3]'
}) 
export class CardContent3Directive {}

@Directive({
  selector: '[tab]'
}) 
export class TabDirective {
  @Input('tab') name = '';

  constructor(public templateRef: TemplateRef<any>) {}
}

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss']
})
export class ContentProjectionComponent {

}
