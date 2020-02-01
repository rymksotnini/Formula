import { Component, OnInit } from '@angular/core';
import {TeamService} from '../team.service';
import {Team} from "../model/Team";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  data: Date = new Date();
  focus;
  teams: Array<Team> = [];
  constructor(private teamService: TeamService) { }
  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    this.teams = this.teamService.getTeams();
  }
  register (teamName: string) {
    console.log(teamName);
    this.teamService.addTeam(teamName);
  }

  remove(team: Team) {
    this.teamService.deleteFromTeams(team);
  }

}
