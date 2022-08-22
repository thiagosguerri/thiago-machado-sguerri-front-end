import { TestBed } from '@angular/core/testing';

import { CadastrarLivroService } from './cadastrar-livro.service';

describe('CadastrarLivroService', () => {
  let service: CadastrarLivroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarLivroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
