import { TestBed } from '@angular/core/testing';

import { TableExampleService } from './table-example.service';

describe('TableExampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableExampleService = TestBed.get(TableExampleService);
    expect(service).toBeTruthy();
  });
});
