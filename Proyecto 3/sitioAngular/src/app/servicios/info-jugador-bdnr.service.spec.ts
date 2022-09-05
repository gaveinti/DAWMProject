import { TestBed } from '@angular/core/testing';

import { InfoJugadorBDNRService } from './info-jugador-bdnr.service';

describe('InfoJugadorBDNRService', () => {
  let service: InfoJugadorBDNRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoJugadorBDNRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
