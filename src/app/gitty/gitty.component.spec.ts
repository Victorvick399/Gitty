import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GittyComponent } from './gitty.component';

describe('GittyComponent', () => {
  let component: GittyComponent;
  let fixture: ComponentFixture<GittyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GittyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GittyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
