import { TestBed } from '@angular/core/testing';

import { JalaliDatepickerService } from './jalali-datepicker.service';

describe('JalaliDatepickerService', () => {
  let service: JalaliDatepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JalaliDatepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
