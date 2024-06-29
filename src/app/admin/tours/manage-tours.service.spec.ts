import { TestBed } from '@angular/core/testing';

import { ManageToursService } from './manage-tours.service';

describe('ManageToursService', () => {
  let service: ManageToursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageToursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
