import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOutgoingComponent } from './all-outgoing.component';

describe('AllOutgoingComponent', () => {
  let component: AllOutgoingComponent;
  let fixture: ComponentFixture<AllOutgoingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllOutgoingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOutgoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
