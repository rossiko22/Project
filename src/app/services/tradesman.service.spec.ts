import { TestBed } from '@angular/core/testing';

import { TradesmanService } from './tradesman.service';

describe('TradesmanService', () => {
  let service: TradesmanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradesmanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
