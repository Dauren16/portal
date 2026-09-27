import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Softwares } from './softwares';

describe('Softwares', () => {
  let component: Softwares;
  let fixture: ComponentFixture<Softwares>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Softwares],
    }).compileComponents();

    fixture = TestBed.createComponent(Softwares);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
