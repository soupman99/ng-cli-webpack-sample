import { TestBed } from '@angular/core/testing';

import { FakeSErviceService } from './fake-service.service';

describe('FakeSErviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakeSErviceService = TestBed.get(FakeSErviceService);
    expect(service).toBeTruthy();
  });
});
