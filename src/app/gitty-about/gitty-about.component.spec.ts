import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GittyAboutComponent } from './gitty-about.component';

describe('GittyAboutComponent', () => {
  let component: GittyAboutComponent;
  let fixture: ComponentFixture<GittyAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GittyAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GittyAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
