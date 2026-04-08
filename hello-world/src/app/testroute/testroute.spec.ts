import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testroute } from './testroute';

describe('Testroute', () => {
  let component: Testroute;
  let fixture: ComponentFixture<Testroute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testroute],
    }).compileComponents();

    fixture = TestBed.createComponent(Testroute);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
