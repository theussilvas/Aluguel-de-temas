import { TestBed } from '@angular/core/testing';

import { QtdAlugadaUsuarioService } from './qtd-alugada-usuario.service';

describe('QtdAlugadaUsuarioService', () => {
  let service: QtdAlugadaUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QtdAlugadaUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
