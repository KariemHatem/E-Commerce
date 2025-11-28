import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeHeader } from './custome-header';

describe('CustomeHeader', () => {
  let component: CustomeHeader;
  let fixture: ComponentFixture<CustomeHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomeHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomeHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
