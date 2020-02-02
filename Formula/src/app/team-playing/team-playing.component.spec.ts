import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPlayingComponent } from './team-playing.component';

describe('TeamPlayingComponent', () => {
  let component: TeamPlayingComponent;
  let fixture: ComponentFixture<TeamPlayingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamPlayingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
