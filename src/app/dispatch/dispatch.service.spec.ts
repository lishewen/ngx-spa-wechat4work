import { TestBed, inject } from '@angular/core/testing';

import { DispatchService } from './dispatch.service';

describe('DispatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DispatchService]
    });
  });

  it('should be created', inject([DispatchService], (service: DispatchService) => {
    expect(service).toBeTruthy();
  }));
});
