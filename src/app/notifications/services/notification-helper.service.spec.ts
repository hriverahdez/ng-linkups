import { TestBed, inject } from '@angular/core/testing';

import { NotificationIconHelperService } from './notification-icon-helper.service';

describe('NotificationIconHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationIconHelperService]
    });
  });

  it('should be created', inject([NotificationIconHelperService], (service: NotificationIconHelperService) => {
    expect(service).toBeTruthy();
  }));
});
