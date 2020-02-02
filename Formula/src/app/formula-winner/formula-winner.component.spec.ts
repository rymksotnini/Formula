import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaWinnerComponent } from './formula-winner.component';

describe('FormulaWinnerComponent', () => {
  let component: FormulaWinnerComponent;
  let fixture: ComponentFixture<FormulaWinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaWinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
