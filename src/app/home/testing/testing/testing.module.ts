import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from 'src/app/http/http.service';
import { GameService } from 'src/app/api/game/game.service';
import { JackpotService } from 'src/app/api/jackpot/jackpot.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [HttpService, GameService, JackpotService]
})
export class TestingModule { }
