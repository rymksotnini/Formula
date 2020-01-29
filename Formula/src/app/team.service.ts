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

  addToChosenTeams(teamName: string) {
    for (let i = 0; i < this.teams.length; i++) {
      if (this.teams[i].name === teamName) {
        this.chosenTeams.push(this.teams[i]);
        break;
      }
    }
  }
  getTeams() {
    return this.teams;
  }
  getChosenTeam() {
    return this.chosenTeams;
  }
}
