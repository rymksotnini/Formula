import { Component, OnInit } from '@angular/core';
import {TeamService} from '../team.service';
import {Team} from '../model/Team';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  teams: Array<Team> = [];
  constructor(private teamService: TeamService, private router: Router) { }

  ngOnInit() {
    this.teamService.sortTeamsWithFormulaScore();
    this.teams = this.teamService.getTeams();
  }

  round(n: number): number {
    return Math.round(n);
  }

  addFinalistsToChosenTeams() {
    this.teamService.addToChosenTeams(this.teams[0]);
    this.teamService.addToChosenTeams(this.teams[1]);
    this.router.navigate(['/fight-formula']);
  }

}
