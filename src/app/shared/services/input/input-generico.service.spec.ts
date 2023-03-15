import { TestBed } from '@angular/core/testing';

import { InputGenericoService } from './input-generico.service';

describe('InputGenericoService', () => {
  let service: InputGenericoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputGenericoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
