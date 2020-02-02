import { Component, OnInit } from '@angular/core';
import {Team} from "../model/Team";
import {TeamService} from "../team.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-formula-winner',
  templateUrl: './formula-winner.component.html',
  styleUrls: ['./formula-winner.component.scss']
})
export class FormulaWinnerComponent implements OnInit {

  winner: Team;
  constructor(private teamService: TeamService, private route: Router) { }

  ngOnInit() {
    this.winner = this.teamService.getChosenFormulaTeamWinner();
  }

  end() {
    this.teamService.reinitializeChosenTeam();
    this.route.navigate(['/register']);
  }

}
