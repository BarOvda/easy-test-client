import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamDirectoryComponent } from './exam-directory.component';

describe('ExamDirectoryComponent', () => {
  let component: ExamDirectoryComponent;
  let fixture: ComponentFixture<ExamDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamDirectoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
