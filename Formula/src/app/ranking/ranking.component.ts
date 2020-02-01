import { Component, OnInit } from '@angular/core';
import {TeamService} from '../team.service';
import {Team} from '../model/Team';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  teams: Array<Team> = [];
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.sortTeamsWithFormulaScore();
    this.teams = this.teamService.getTeams();
  }

}
