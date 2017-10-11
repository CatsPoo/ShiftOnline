import { TestBed, inject } from '@angular/core/testing';

import { BulletsService } from './bullets.service';

describe('BulletsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BulletsService]
    });
  });

  it('should be created', inject([BulletsService], (service: BulletsService) => {
    expect(service).toBeTruthy();
  }));
});
