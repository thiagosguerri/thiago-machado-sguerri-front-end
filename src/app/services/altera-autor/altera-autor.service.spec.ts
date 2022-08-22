import { TestBed } from '@angular/core/testing';

import { AlteraAutorService } from './altera-autor.service';

describe('AlteraAutorService', () => {
  let service: AlteraAutorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlteraAutorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
