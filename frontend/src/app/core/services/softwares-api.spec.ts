import { TestBed } from '@angular/core/testing';

import { SoftwaresApi } from './softwares-api';

describe('SoftwaresApi', () => {
  let service: SoftwaresApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftwaresApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
