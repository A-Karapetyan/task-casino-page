import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable, timer } from 'rxjs';
import { JackpotListModel } from 'src/app/models/jackpot-list.model';
import { ApiService } from '../../http/base.service';

@Injectable({
  providedIn: 'root',
})
export class JackpotService extends ApiService {

  readonly controller = 'front-end-test/';

  public jackpotsList$: Subject<JackpotListModel[]> = new Subject();

  public checkJackpotsChanges(): void {
    timer(0, 2000)
    .subscribe(() => this.getJackpotsList());
  }

  public getJackpotsList(): void {
    this.getJackpots()
    .subscribe((jackpots) => this.jackpotsList$.next(jackpots));
   }

  private getJackpots(): Observable<JackpotListModel[]> {
    return this.httpService.get(this.controller + 'jackpots.php');
  }

}
