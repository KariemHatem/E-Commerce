import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudctDetails } from './proudct-details';

describe('ProudctDetails', () => {
  let component: ProudctDetails;
  let fixture: ComponentFixture<ProudctDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProudctDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProudctDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
