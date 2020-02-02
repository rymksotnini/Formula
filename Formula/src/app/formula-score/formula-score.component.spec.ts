import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaScoreComponent } from './formula-score.component';

describe('FormulaScoreComponent', () => {
  let component: FormulaScoreComponent;
  let fixture: ComponentFixture<FormulaScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
