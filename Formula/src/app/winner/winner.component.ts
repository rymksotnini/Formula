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
  constructor(private teamService: TeamService, private route: Router) { }

  ngOnInit() {
    this.winner = this.teamService.getChosenTeamWinner();
  }

  next() {
    this.teamService.reinitializeChosenTeam();
    this.route.navigate(['/teams']);
  }
}
