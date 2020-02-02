import { Injectable } from '@angular/core';
import {Team} from './model/Team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  team: Team;
  teams: Array<Team> = [];
  racingFinalists: Array<Team> = [];
  teamsToPickFromRandomly: Array<Team> = [];
  chosenTeams: Array<Team> = [];
  id = 0;
  constructor() { }

  addTeam(teamName: string) {
    this.team = new Team();
    this.team.name = teamName;
    this.team.id = this.id;
    this.id = this.id + 1;
    this.teams.push(this.team);
    this.teamsToPickFromRandomly.push(this.team);
    console.log(this.teams);
  }

  getTeamsToPickFromRandomly() {
    return this.teamsToPickFromRandomly;
  }
  deleteFromTeams(team: Team) {
    let index = this.teams.indexOf(team, 0);
    if (index > -1) {
      this.teams.splice(index, 1);
    }
    index = this.teamsToPickFromRandomly.indexOf(team, 0);
    if (index > -1) {
      this.teamsToPickFromRandomly.splice(index, 1);
    }
  }

  setRacingScore(team: Team, score: number) {
    this.teams.find( teamFound => team.id === teamFound.id).racingScore = score;
  }

  setFormulaScore(team: Team, score: number) {
    this.teams.find( teamFound => team.id === teamFound.id).formulaScore = score;
  }
  addToChosenTeams(team: Team) {
    this.chosenTeams.push(team);
  }
  deleteFromChosenTeams(team: Team) {
    const index = this.chosenTeams.indexOf(team, 0);
    if (index > -1) {
      this.chosenTeams.splice(index, 1);
    }
    this.teamsToPickFromRandomly.push(team);
  }

  getFinalists() {
    return this.racingFinalists;
  }
  getTeams() {
    return this.teams;
  }
  getChosenTeam() {
    return this.chosenTeams;
  }

  getChosenTeamWinner () {
    let finalist: Team;
    const maximum = Math.max(this.chosenTeams[0].racingScore, this.chosenTeams[1].racingScore);
    finalist = this.teams.find( teamFound => maximum === teamFound.racingScore);
    return finalist;
  }

  getChosenFormulaTeamWinner () {
    let finalist: Team;
    const maximum = Math.max(this.chosenTeams[0].formulaScore, this.chosenTeams[1].formulaScore);
    finalist = this.teams.find( teamFound => maximum === teamFound.formulaScore);
    return finalist;
  }

  addToFinalists(team: Team) {
    this.racingFinalists.push(team);
  }
  reinitializeChosenTeam() {
    this.chosenTeams = [];
  }

  reinitializeRacingFinalists() {
    this.racingFinalists = [];
  }

  sortTeamsWithFormulaScore() {
    this.teams.sort((team1, team2) => {
          if (team1.formulaScore > team2.formulaScore) {
            return -1;
          } else {
            return 1;
          }
        }
    );
    console.log(this.teams);
  }

  pickRandomly() {
    console.log(this.teamsToPickFromRandomly);
    let rand = (Math.floor(Math.random() * 10)) % this.teamsToPickFromRandomly.length;
    console.log ('rand1' + rand);
    this.chosenTeams.push(this.teamsToPickFromRandomly[rand]);
    this.teamsToPickFromRandomly.splice(rand, 1);
    console.log(this.teamsToPickFromRandomly);
    rand = (Math.floor(Math.random() * 10)) % this.teamsToPickFromRandomly.length;
    console.log ('rand2' + rand);
    this.chosenTeams.push(this.teamsToPickFromRandomly[rand]);
    this.teamsToPickFromRandomly.splice(rand, 1);
    console.log(this.teamsToPickFromRandomly);
  }

  setChosenTeamAsFinalists() {
    this.chosenTeams[0] = this.racingFinalists[0];
    this.chosenTeams[1] = this.racingFinalists[1];
    console.log('reinitialisation');
    console.log(this.getFinalists().length);
  }

  reinitializeRandomPickTeams() {
    for (let i = 0; i < this.teams.length; i++) {
      this.teamsToPickFromRandomly.push(this.teams[i]);
    }
  }
}
