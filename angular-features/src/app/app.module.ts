import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardContent3Directive, CardHeaderDirective, ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentProjectionComponent,
    CardComponent,
    CardHeaderDirective,
    CardContent3Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
