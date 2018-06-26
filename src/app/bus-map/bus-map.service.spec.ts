import { TestBed, inject } from '@angular/core/testing';

import { BusMapService } from './bus-map.service';

describe('BusMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusMapService]
    });
  });

  it('should be created', inject([BusMapService], (service: BusMapService) => {
    expect(service).toBeTruthy();
  }));
});
