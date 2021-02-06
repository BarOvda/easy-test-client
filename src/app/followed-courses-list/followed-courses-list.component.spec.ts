import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowedCoursesListComponent } from './followed-courses-list.component';

describe('FollowedCoursesListComponent', () => {
  let component: FollowedCoursesListComponent;
  let fixture: ComponentFixture<FollowedCoursesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowedCoursesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowedCoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
