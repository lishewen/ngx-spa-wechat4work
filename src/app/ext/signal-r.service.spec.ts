import { TestBed, inject } from '@angular/core/testing';

import { SignalRService } from './signal-r.service';

describe('SignalRService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignalRService]
    });
  });

  it('should be created', inject([SignalRService], (service: SignalRService) => {
    expect(service).toBeTruthy();
  }));
});
