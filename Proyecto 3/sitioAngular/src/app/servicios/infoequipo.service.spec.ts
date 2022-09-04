import { TestBed } from '@angular/core/testing';

import { InfoequipoService } from './infoequipo.service';

describe('InfoequipoService', () => {
  let service: InfoequipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoequipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
