import { TestBed } from '@angular/core/testing';

import { GraficoReceitaService } from './grafico-receita.service';

describe('GraficoReceitaService', () => {
  let service: GraficoReceitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraficoReceitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
