import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveAnimationComponent } from './leave-animation.component';

describe('LeaveAnimationComponent', () => {
  let component: LeaveAnimationComponent;
  let fixture: ComponentFixture<LeaveAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
