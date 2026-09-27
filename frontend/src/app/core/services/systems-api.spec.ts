import { TestBed } from '@angular/core/testing';

import { SystemsApi } from './systems-api';

describe('SystemsApi', () => {
  let service: SystemsApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemsApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
