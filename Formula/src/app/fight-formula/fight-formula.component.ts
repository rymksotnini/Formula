import { Component, OnInit } from '@angular/core';
import {Team} from "../model/Team";
import {TeamService} from "../team.service";

@Component({
  selector: 'app-fight-formula',
  templateUrl: './fight-formula.component.html',
  styleUrls: ['./fight-formula.component.scss']
})
export class FightFormulaComponent implements OnInit {

  chosenTeams: Array<Team> = [];
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.chosenTeams = this.teamService.getChosenTeam();
  }

}
