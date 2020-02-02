import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamListComponent } from './team-list/team-list.component';
import { FightComponent } from './fight/fight.component';
import {Ng2FittextModule} from 'ng2-fittext';
import { ScoreComponent } from './score/score.component';
import { WinnerComponent } from './winner/winner.component';
import { RankingComponent } from './ranking/ranking.component';
import { FormulaTeamsComponent } from './formula-teams/formula-teams.component';
import { TeamPlayingComponent } from './team-playing/team-playing.component';
import { FormulaScoreComponent } from './formula-score/formula-score.component';
import { FightFormulaComponent } from './fight-formula/fight-formula.component';
import { ScoreFinalFormulaComponent } from './score-final-formula/score-final-formula.component';
import { FormulaWinnerComponent } from './formula-winner/formula-winner.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        RegisterComponent,
        TeamsComponent,
        TeamListComponent,
        FightComponent,
        ScoreComponent,
        WinnerComponent,
        RankingComponent,
        FormulaTeamsComponent,
        TeamPlayingComponent,
        FormulaScoreComponent,
        FightFormulaComponent,
        ScoreFinalFormulaComponent,
        FormulaWinnerComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        Ng2FittextModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
