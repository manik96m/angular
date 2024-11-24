import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomExpandoComponent } from './custom-expando.component';

describe('CustomExpandoComponent', () => {
  let component: CustomExpandoComponent;
  let fixture: ComponentFixture<CustomExpandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomExpandoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomExpandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
