import { TestBed } from '@angular/core/testing';

import { GittyHttpService } from './gitty-http.service';

describe('GittyHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GittyHttpService = TestBed.get(GittyHttpService);
    expect(service).toBeTruthy();
  });
});
