import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryContantComponent } from './directory-contant.component';

describe('DirectoryContantComponent', () => {
  let component: DirectoryContantComponent;
  let fixture: ComponentFixture<DirectoryContantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectoryContantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryContantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
