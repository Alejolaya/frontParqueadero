import { TestBed } from '@angular/core/testing';

import { RegistrarSalidaService } from './registrar-salida.service';

describe('RegistrarSalidaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrarSalidaService = TestBed.get(RegistrarSalidaService);
    expect(service).toBeTruthy();
  });
});
