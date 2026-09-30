import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastCard } from './toast-card';

describe('ToastCard', () => {
  let component: ToastCard;
  let fixture: ComponentFixture<ToastCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ToastCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
