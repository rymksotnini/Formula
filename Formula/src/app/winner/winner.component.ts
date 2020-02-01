import { Component, OnInit } from '@angular/core';
import {TeamService} from '../team.service';
import {Team} from '../model/Team';
import {Router} from '@angular/router';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.scss']
})
export class WinnerComponent implements OnInit {

  winner: Team;
  finalistLength: Number;
  constructor(private teamService: TeamService, private route: Router) { }

  ngOnInit() {
    this.winner = this.teamService.getChosenTeamWinner();
    this.finalistLength = this.teamService.getFinalists().length;
    console.log(this.finalistLength);
  }

  next() {
    this.teamService.addToFinalists(this.winner);
    this.teamService.reinitializeChosenTeam();
    this.route.navigate(['/teams']);
  }

  end() {
    this.teamService.reinitializeChosenTeam();
    this.teamService.reinitializeRacingFinalists();
    this.teamService.reinitializeRandomPickTeams();
    this.route.navigate(['/register']);
  }
}
