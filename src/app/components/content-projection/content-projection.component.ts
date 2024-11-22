import { Component, Directive, Input, TemplateRef } from '@angular/core';

@Directive({
    selector: 'app-cardheader',
    standalone: false
}) 
export class CardHeaderDirective {}

@Directive({
    selector: '[cardContent3]',
    standalone: false
}) 
export class CardContent3Directive {}

@Directive({
    selector: '[tab]',
    standalone: false
}) 
export class TabDirective {
  @Input('tab') name = '';

  constructor(public templateRef: TemplateRef<any>) {}
}

@Component({
    selector: 'app-content-projection',
    templateUrl: './content-projection.component.html',
    styleUrls: ['./content-projection.component.scss'],
    standalone: false
})
export class ContentProjectionComponent {

}
