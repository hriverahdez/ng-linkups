import { TestBed, inject } from '@angular/core/testing';

import { SubnetsService } from './subnets.service';

describe('SubnetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubnetsService]
    });
  });

  it('should be created', inject([SubnetsService], (service: SubnetsService) => {
    expect(service).toBeTruthy();
  }));
});
