import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardContent3Directive, CardHeaderDirective, ContentProjectionComponent, TabDirective } from './components/content-projection/content-projection.component';
import { CardComponent } from './components/card/card.component';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentProjectionComponent,
    CardComponent,
    TabsComponent,

    CardHeaderDirective,
    CardContent3Directive,
    TabDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
