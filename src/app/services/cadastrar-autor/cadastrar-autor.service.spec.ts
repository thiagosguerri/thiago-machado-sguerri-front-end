import { TestBed } from '@angular/core/testing';

import { CadastrarAutorService } from './cadastrar-autor.service';

describe('CadastrarAutorService', () => {
  let service: CadastrarAutorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarAutorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
