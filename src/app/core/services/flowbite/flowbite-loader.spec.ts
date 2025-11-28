import { TestBed } from '@angular/core/testing';

import { FlowbiteLoader } from './flowbite-loader';

describe('FlowbiteLoader', () => {
  let service: FlowbiteLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowbiteLoader);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
