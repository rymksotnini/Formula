import { Injectable } from '@angular/core';
import {Team} from './model/Team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  team: Team;
  teams: Array<Team> = [];
  chosenTeams: Array<Team> = [];
  id = 0;
  constructor() { }

  addTeam(teamName: string) {
    this.team = new Team();
    this.team.name = teamName;
    this.team.id = this.id;
    this.id = this.id + 1;
    this.teams.push(this.team);
    console.log(this.teams);
  }

  deleteFromTeams(team: Team) {
    const index = this.teams.indexOf(team, 0);
    if (index > -1) {
      this.teams.splice(index, 1);
    }
  }

  setScore(team: Team, score: number) {
    this.teams.find( teamFound => team.id === teamFound.id).score = score;
  }
  addToChosenTeams(teamName: string) {
    for (let i = 0; i < this.teams.length; i++) {
      if (this.teams[i].name === teamName) {
        this.chosenTeams.push(this.teams[i]);
        break;
      }
    }
  }
  deleteFromChosenTeams(team: Team) {
    const index = this.chosenTeams.indexOf(team, 0);
    if (index > -1) {
      this.chosenTeams.splice(index, 1);
    }
  }
  getTeams() {
    return this.teams;
  }
  getChosenTeam() {
    return this.chosenTeams;
  }

  getChosenTeamWinner () {
    const maximum = Math.max(this.chosenTeams[0].score, this.chosenTeams[1].score);
    return this.teams.find( teamFound => maximum === teamFound.score);
  }

  reinitializeChosenTeam() {
    this.chosenTeams = [];
  }

  sortTeams() {
    this.teams.sort((team1, team2) => {
          if (team1.score > team2.score) {
            return -1;
          } else {
            return 1;
          }
       }
    );
    console.log(this.teams);
  }
}
