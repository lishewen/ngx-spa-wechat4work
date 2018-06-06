import { TestBed, inject } from '@angular/core/testing';

import { BusInfoService } from './bus-info.service';

describe('BusInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusInfoService]
    });
  });

  it('should be created', inject([BusInfoService], (service: BusInfoService) => {
    expect(service).toBeTruthy();
  }));
});
