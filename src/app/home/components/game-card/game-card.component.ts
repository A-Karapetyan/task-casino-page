import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { JackpotService } from 'src/app/api/jackpot/jackpot.service';
import { CategoryItem } from 'src/app/models/category-item.model';
import { GameListModel } from 'src/app/models/game-list.model';
import { JackpotListModel } from 'src/app/models/jackpot-list.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit {
  @Input() game!: GameListModel;
  @Input() selectedCategory!: CategoryItem;

  jackpot$: Observable<JackpotListModel>;

  constructor(private jackpotService: JackpotService) { }

  ngOnInit(): void {
    this.subToJackpotsListChange();
  }

  private subToJackpotsListChange() {
    this.jackpot$ = this.jackpotService.jackpotsList$
      .pipe(
        map((jackpots: JackpotListModel[]) => jackpots?.find(jb => jb.game === this.game?.id))
      );
  }
}
