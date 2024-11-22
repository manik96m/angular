import { AfterViewInit, Component, ContentChild, ContentChildren, QueryList, TemplateRef } from '@angular/core';
import { TabDirective } from '../content-projection/content-projection.component';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
    standalone: false
})
export class TabsComponent {
  @ContentChildren(TabDirective) tabDirectives?: QueryList<TabDirective>;
  selectedTabTemplate?: TemplateRef<any>;

  selectTab(templateRef: TemplateRef<any>) {
    this.selectedTabTemplate = templateRef;
  }
}
