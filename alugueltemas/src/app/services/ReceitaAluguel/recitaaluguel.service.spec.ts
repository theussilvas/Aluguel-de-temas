import { TestBed } from '@angular/core/testing';

import { RecitaaluguelService } from './recitaaluguel.service';

describe('RecitaaluguelService', () => {
  let service: RecitaaluguelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecitaaluguelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
