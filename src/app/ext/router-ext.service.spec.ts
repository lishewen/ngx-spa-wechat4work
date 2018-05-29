import { TestBed, inject } from '@angular/core/testing';

import { RouterExtService } from './router-ext.service';

describe('RouterExtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterExtService]
    });
  });

  it('should be created', inject([RouterExtService], (service: RouterExtService) => {
    expect(service).toBeTruthy();
  }));
});
