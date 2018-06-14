import { TestBed, inject } from '@angular/core/testing';

import { BusEventService } from './bus-event.service';

describe('BusEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusEventService]
    });
  });

  it('should be created', inject([BusEventService], (service: BusEventService) => {
    expect(service).toBeTruthy();
  }));
});
