import { TestBed } from '@angular/core/testing';

import { AlteraLivroService } from './altera-livro.service';

describe('AlteraLivroService', () => {
  let service: AlteraLivroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlteraLivroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
