import { Component, OnInit } from '@angular/core';
import {TeamService} from '../team.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-formula-score',
  templateUrl: './formula-score.component.html',
  styleUrls: ['./formula-score.component.scss']
})
export class FormulaScoreComponent implements OnInit {

  data: Date = new Date();
  focus;
  constructor(private teamService: TeamService, private router: Router) { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }

  saveScore(score: string) {
    this.teamService.setFormulaScore(this.teamService.getChosenTeam()[0], + score);
    this.teamService.reinitializeChosenTeam();
    this.router.navigate(['/formula-teams']);
  }
}
