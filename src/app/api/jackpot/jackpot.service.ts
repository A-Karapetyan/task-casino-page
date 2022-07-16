import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JackpotListModel } from 'src/app/models/jackpot-list.model';
import { ApiService } from '../../http/base.service';

@Injectable({
  providedIn: 'root',
})
export class JackpotService extends ApiService {

  readonly controller = 'front-end-test/';

  public getJackpots(): Observable<JackpotListModel[]> {
    return this.httpService.get(this.controller + 'jackpots.php');
  }

}
