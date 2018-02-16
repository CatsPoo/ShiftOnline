import { TestBed, inject } from '@angular/core/testing';

import { HanhayotService } from './hanhayot.service';

describe('BulletsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HanhayotService]
    });
  });

  it('should be created', inject([HanhayotService], (service: HanhayotService) => {
    expect(service).toBeTruthy();
  }));
});
