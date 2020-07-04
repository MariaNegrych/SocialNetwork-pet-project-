import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiUserComponent } from './hi-user.component';

describe('HiUserComponent', () => {
  let component: HiUserComponent;
  let fixture: ComponentFixture<HiUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
