import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { GameService } from './api/game/game.service';
import { JackpotService } from './api/jackpot/jackpot.service';
import { CategoryItem } from './models/category-item.model';
import { GameListModel } from './models/game-list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  categoriesList: Array<CategoryItem> = [
    {name: 'Top Games', categoryFilterCb: (item: GameListModel) => item.categories?.includes('top'), categories: ['top']},
    {name: 'New Games', categoryFilterCb: (item: GameListModel) => item.categories?.includes('new'), categories: ['new']},
    {name: 'Slots', categoryFilterCb: (item: GameListModel) => item.categories?.includes('slots')},
    {name: 'Jackpots', categoryFilterCb: (item: GameListModel) => item.jackpot},
    {name: 'Live', categoryFilterCb: (item: GameListModel) => item.categories?.includes('live')},
    {name: 'Blackjack', categoryFilterCb: (item: GameListModel) => item.categories?.includes('blackjack')},
    {name: 'Roulette', categoryFilterCb: (item: GameListModel) => item.categories?.includes('roulette')},
    {name: 'Table', categoryFilterCb: (item: GameListModel) => item.categories?.includes('classic')},
    {name: 'Poker', categoryFilterCb: (item: GameListModel) => item.categories?.includes('poker')},
    {name: 'Other', categoryFilterCb: (item: GameListModel) => item.categories?.includes('fun') || item.categories?.includes('virtual') || item.categories?.includes('ball')}
  ];
  selectedCategory: CategoryItem = this.categoriesList[0];
  gamesList: GameListModel[] = [];
  filteredGamesList: GameListModel[] = [];
  loading: boolean = true;
  
  constructor(private gameService: GameService, private jackpotService: JackpotService) { }

  ngOnInit(): void {
    this.getGamesList();
    this.getJackpotsList()
    setInterval(() => this.getJackpotsList(), 2000);
  }

  getJackpotsList(): void {
    this.jackpotService.getJackpots()
    .subscribe(jackpotsList => {
      jackpotsList.forEach(elem => {
        const game = this.gamesList.find(game => game.id === elem.game);
        if (game) {
          game.jackpot = elem.amount;
        }
      });
      this.filterGames();
    });
  }

  categoryChanged(category: CategoryItem): void {
    this.selectedCategory = category;
    console.log(this.selectedCategory)
    this.filterGames();
  }

  private getGamesList(): void {
    this.gameService.getGamesList()
    .subscribe((res) => {
      this.gamesList = res;
      this.filterGames();
      this.loading = false;
    });
  }

  private filterGames(): void {
    this.filteredGamesList = this.gamesList.filter(this.selectedCategory.categoryFilterCb);
  }
}
