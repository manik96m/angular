import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowAppComponent } from './control-flow-app.component';

describe('ControlFlowAppComponent', () => {
  let component: ControlFlowAppComponent;
  let fixture: ComponentFixture<ControlFlowAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFlowAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
