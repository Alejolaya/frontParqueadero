import { TestBed } from '@angular/core/testing';

import { RegistrarIngresoService } from './registrar-ingreso.service';

describe('RegistrarIngresoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrarIngresoService = TestBed.get(RegistrarIngresoService);
    expect(service).toBeTruthy();
  });
});
