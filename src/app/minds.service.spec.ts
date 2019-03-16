import { TestBed } from '@angular/core/testing';

import { MindsService } from './minds.service';

describe('MindsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MindsService = TestBed.get(MindsService);
    expect(service).toBeTruthy();
  });
});
