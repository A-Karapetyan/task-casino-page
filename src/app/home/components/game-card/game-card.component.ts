import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { JackpotService } from 'src/app/api/jackpot/jackpot.service';
import { CategoryItem } from 'src/app/models/category-item.model';
import { GameListModel } from 'src/app/models/game-list.model';
import { JackpotListModel } from 'src/app/models/jackpot-list.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit, OnDestroy{
  @Input() game!: GameListModel;
  @Input() selectedCategory!: CategoryItem;

  private subscription: Subscription;

  get hasJackpot() {
    return !!this.game?.jackpot;
  }

  constructor(private jackpotService: JackpotService, private cdr: ChangeDetectorRef) { }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subToJackpotsListChange();
  }

  private subToJackpotsListChange() {
    this.subscription = this.jackpotService.jackpotsList$
      .pipe(
        map((jackpots: JackpotListModel[]) => jackpots?.find(jb => jb.game === this.game?.id))
      ).subscribe(jb => {
        this.game.jackpot = jb?.amount || 0;
        this.cdr.detectChanges();
      });
  }
}
