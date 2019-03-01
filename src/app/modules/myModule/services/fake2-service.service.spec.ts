import { TestBed } from '@angular/core/testing';

import { Fake2ServiceService } from './fake2-service.service';

describe('Fake2ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Fake2ServiceService = TestBed.get(Fake2ServiceService);
    expect(service).toBeTruthy();
  });
});
