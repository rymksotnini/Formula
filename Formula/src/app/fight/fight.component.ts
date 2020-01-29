import { Component, OnInit } from '@angular/core';
import {Team} from "../model/Team";
import {TeamService} from "../team.service";

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.scss']
})
export class FightComponent implements OnInit {

  chosenTeams: Array<Team> = [];
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.chosenTeams = this.teamService.getChosenTeam();
  }

}
