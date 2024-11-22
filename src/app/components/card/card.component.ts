import { Component, ContentChild, TemplateRef } from '@angular/core';
import { CardContent3Directive } from '../content-projection/content-projection.component';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    standalone: false
})
export class CardComponent {
  // Selector: Template Reference variable
  @ContentChild('cardContent2') cardContent2?: TemplateRef<any>;
  // Selector: Directive, reading Template Ref
  @ContentChild(CardContent3Directive, { read: TemplateRef }) cardContent3?: TemplateRef<any>;
}
