import { TestBed } from '@angular/core/testing';

import { UsertaskServiceService } from './usertask-service.service';

describe('UsertaskServiceService', () => {
  let service: UsertaskServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsertaskServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
