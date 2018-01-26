import { TestBed, inject } from '@angular/core/testing';

import { IpHelperService } from './ip-helper.service';

describe('IpHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IpHelperService]
    });
  });

  it('should be created', inject([IpHelperService], (service: IpHelperService) => {
    expect(service).toBeTruthy();
  }));
});
