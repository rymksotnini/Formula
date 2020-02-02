import { Component, OnInit } from '@angular/core';
import {Team} from "../model/Team";
import {TeamService} from "../team.service";

@Component({
  selector: 'app-team-playing',
  templateUrl: './team-playing.component.html',
  styleUrls: ['./team-playing.component.scss']
})
export class TeamPlayingComponent implements OnInit {

  chosenTeams: Array<Team> = [];
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.chosenTeams = this.teamService.getChosenTeam();
  }

}
