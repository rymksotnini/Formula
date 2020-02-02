import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreFinalFormulaComponent } from './score-final-formula.component';

describe('ScoreFinalFormulaComponent', () => {
  let component: ScoreFinalFormulaComponent;
  let fixture: ComponentFixture<ScoreFinalFormulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreFinalFormulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreFinalFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
