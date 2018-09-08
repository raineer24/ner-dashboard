import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffmembersComponent } from './staffmembers.component';

describe('StaffmembersComponent', () => {
  let component: StaffmembersComponent;
  let fixture: ComponentFixture<StaffmembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffmembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
