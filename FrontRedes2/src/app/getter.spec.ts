import { TestBed } from '@angular/core/testing';

import { Getter } from './getter';

describe('Getter', () => {
  let service: Getter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Getter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
