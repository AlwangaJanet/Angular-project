import { TestBed } from '@angular/core/testing';

import { ManageHotelsService } from './manage-hotels.service';

describe('ManageHotelsService', () => {
  let service: ManageHotelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageHotelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
