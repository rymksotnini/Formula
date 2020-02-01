import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import {RegisterComponent} from './register/register.component';
import {TeamsComponent} from './teams/teams.component';
import {FightComponent} from './fight/fight.component';
import {ScoreComponent} from './score/score.component';
import {WinnerComponent} from './winner/winner.component';
import {RankingComponent} from './ranking/ranking.component';

const routes: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'index',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'examples/login',       component: LoginComponent },
    { path: 'examples/profile',     component: ProfileComponent },
    {path: 'register', component: RegisterComponent},
    {path: 'teams', component: TeamsComponent},
    {path: 'fight', component: FightComponent},
    {path: 'score', component: ScoreComponent},
    {path: 'winner', component: WinnerComponent},
    {path: 'ranking', component: RankingComponent}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
