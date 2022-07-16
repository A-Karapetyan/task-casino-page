import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../http/base.service';
import { GameListModel } from '../../models/game-list.model';

@Injectable({
  providedIn: 'root',
})
export class GameService extends ApiService {

  readonly controller = 'front-end-test/';

  public getGamesList(): Observable<GameListModel[]> {
    return this.httpService.get(this.controller + 'games.php');
  }

}
