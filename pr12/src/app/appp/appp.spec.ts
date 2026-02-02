import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appp } from './appp';

describe('Appp', () => {
  let component: Appp;
  let fixture: ComponentFixture<Appp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
