import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightFormulaComponent } from './fight-formula.component';

describe('FightFormulaComponent', () => {
  let component: FightFormulaComponent;
  let fixture: ComponentFixture<FightFormulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightFormulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
