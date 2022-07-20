import { Component, Input, OnInit } from '@angular/core';
import { CategoryItem } from 'src/app/models/category-item.model';
import { GameListModel } from 'src/app/models/game-list.model';
import { JackpotListModel } from 'src/app/models/jackpot-list.model';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  @Input() filteredGamesList: GameListModel[] = [];
  @Input() selectedCategory!: CategoryItem;
  @Input() loading: boolean = true;
  @Input() jackpotsList: JackpotListModel[];

  constructor() { }

  ngOnInit(): void {
  }

  getJackpot(game) {
    const jackpot = this.jackpotsList?.find(jackpot => jackpot.game === game?.id);
    return jackpot || null;
  }
}
