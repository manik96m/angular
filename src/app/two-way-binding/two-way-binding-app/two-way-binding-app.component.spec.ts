import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindingAppComponent } from './two-way-binding-app.component';

describe('TwoWayBindingAppComponent', () => {
  let component: TwoWayBindingAppComponent;
  let fixture: ComponentFixture<TwoWayBindingAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayBindingAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayBindingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
