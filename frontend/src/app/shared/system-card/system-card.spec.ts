import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemCard } from './system-card';

describe('SystemCard', () => {
  let component: SystemCard;
  let fixture: ComponentFixture<SystemCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemCard],
    }).compileComponents();

    fixture = TestBed.createComponent(SystemCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
