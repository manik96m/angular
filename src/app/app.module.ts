import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  CardContent3Directive,
  CardHeaderDirective,
  ContentProjectionComponent,
  TabDirective,
} from './components/content-projection/content-projection.component';
import { CardComponent } from './components/card/card.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { TwoWayBindingAppComponent } from './two-way-binding/two-way-binding-app/two-way-binding-app.component';
import { ControlFlowAppComponent } from './control-flow/control-flow-app/control-flow-app.component';
import { UserProfileComponent } from './referencing-components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentProjectionComponent,
    CardComponent,
    TabsComponent,

    CardHeaderDirective,
    CardContent3Directive,
    TabDirective,
  ],
  imports: [
    BrowserModule,
    TutorialComponent,
    TwoWayBindingAppComponent,
    ControlFlowAppComponent,
    UserProfileComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
