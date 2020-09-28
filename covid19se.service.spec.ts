import { TestBed } from '@angular/core/testing';

import { Covid19seService } from './covid19se.service';

describe('Covid19seService', () => {
  let service: Covid19seService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Covid19seService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
