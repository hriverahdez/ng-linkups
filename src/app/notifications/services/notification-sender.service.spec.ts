import { TestBed, inject } from '@angular/core/testing';

import { NotificationSenderService } from './notification-sender.service';

describe('NotificationSenderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationSenderService]
    });
  });

  it('should be created', inject([NotificationSenderService], (service: NotificationSenderService) => {
    expect(service).toBeTruthy();
  }));
});
