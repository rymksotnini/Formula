import { Component, OnInit } from '@angular/core';
import {TeamService} from "../team.service";
import {Team} from "../model/Team";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  data: Date = new Date();
  focus;
  chosenTeams: Array<Team> = [];
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    this.chosenTeams = this.teamService.getChosenTeam();
  }
  remove(team: Team) {
    this.teamService.deleteFromChosenTeams(team);
  }

}
