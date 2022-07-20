import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { GameCardComponent } from './components/game-card/game-card.component';
import { HomeComponent } from './components/home/home.component';
import { HomeHeaderComponent } from './components/header/home-header.component';
import { SharedModule } from '../shared/shared.module';
import { GamesListComponent } from './components/games-list/games-list.component';


@NgModule({
  declarations: [HomeComponent, GameCardComponent, HomeHeaderComponent, GamesListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
