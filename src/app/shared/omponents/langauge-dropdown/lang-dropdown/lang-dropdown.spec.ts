import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangDropdown } from './lang-dropdown';

describe('LangDropdown', () => {
  let component: LangDropdown;
  let fixture: ComponentFixture<LangDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangDropdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangDropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
