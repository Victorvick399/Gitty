import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GittyNavbarComponent } from './gitty-navbar.component';

describe('GittyNavbarComponent', () => {
  let component: GittyNavbarComponent;
  let fixture: ComponentFixture<GittyNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GittyNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GittyNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
