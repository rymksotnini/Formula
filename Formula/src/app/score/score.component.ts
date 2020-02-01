import { Component, OnInit } from '@angular/core';
import {TeamService} from "../team.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  data: Date = new Date();
  focus;
  constructor(private teamService: TeamService, private router: Router) { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }

  saveScore(score1, score2) {
    console.log(score1);
    this.teamService.setRacingScore(this.teamService.getChosenTeam()[0], + score1);
    this.teamService.setRacingScore(this.teamService.getChosenTeam()[1], + score2);
    console.log(this.teamService.getTeams());
    this.router.navigate(['/winner']);
  }
}
