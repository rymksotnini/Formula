import { Component, OnInit } from '@angular/core';
import {Team} from "../model/Team";
import {TeamService} from "../team.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-formula-teams',
  templateUrl: './formula-teams.component.html',
  styleUrls: ['./formula-teams.component.scss']
})
export class FormulaTeamsComponent implements OnInit {

  data: Date = new Date();
  focus;
  chosenTeams: Array<Team> = [];
  constructor(private teamService: TeamService, private router: Router) { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    if (this.teamService.getFinalists().length === 2) {
      this.chosenTeams = this.teamService.getFinalists();
    } else {
      this.chosenTeams = this.teamService.getChosenTeam();
    }
  }
  remove(team: Team) {
    this.teamService.deleteFromChosenTeams(team);
  }

}
