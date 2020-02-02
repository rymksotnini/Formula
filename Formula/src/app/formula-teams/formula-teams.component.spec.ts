import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaTeamsComponent } from './formula-teams.component';

describe('FormulaTeamsComponent', () => {
  let component: FormulaTeamsComponent;
  let fixture: ComponentFixture<FormulaTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
