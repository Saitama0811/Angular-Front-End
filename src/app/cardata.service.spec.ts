import { TestBed } from '@angular/core/testing';

import { CardataService } from './cardata.service';

describe('CardataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardataService = TestBed.get(CardataService);
    expect(service).toBeTruthy();
  });
});
