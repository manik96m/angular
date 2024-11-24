import { Component } from '@angular/core';
import { CustomExpandoComponent } from '../custom-expando/custom-expando.component';
import { CustomToggleComponent } from '../custom-toggle/custom-toggle.component';
import { ControlFlowAppComponent } from 'src/app/control-flow/control-flow-app/control-flow-app.component';

@Component({
  selector: 'app-user-profile',
  imports: [
    CustomExpandoComponent,
    CustomToggleComponent,
    ControlFlowAppComponent,
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {}
