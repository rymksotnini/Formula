import { Component, OnInit } from '@angular/core';
import {TeamService} from "../team.service";
import {Team} from "../model/Team";
import {Router} from "@angular/router";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

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

  randomPick() {
    this.teamService.pickRandomly();
  }

  setChosenTeamAsFinalists() {
    this.teamService.setChosenTeamAsFinalists();
    this.router.navigate(['/fight']);
  }
}
