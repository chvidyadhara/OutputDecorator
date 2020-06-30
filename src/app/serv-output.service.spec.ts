import { TestBed } from '@angular/core/testing';

import { ServOutputService } from './serv-output.service';

describe('ServOutputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServOutputService = TestBed.get(ServOutputService);
    expect(service).toBeTruthy();
  });
});
