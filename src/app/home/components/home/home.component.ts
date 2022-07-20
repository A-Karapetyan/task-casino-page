import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GameService } from 'src/app/api/game/game.service';
import { JackpotService } from 'src/app/api/jackpot/jackpot.service';
import { CategoryItem } from 'src/app/models/category-item.model';
import { GameListModel } from 'src/app/models/game-list.model';
import { JackpotListModel } from 'src/app/models/jackpot-list.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [GameService, JackpotService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  categoriesList: Array<CategoryItem> = [
    {name: 'Top Games', categoryFilterCb: (item: GameListModel) => item.categories?.includes('top'), categories: ['top']},
    {name: 'New Games', categoryFilterCb: (item: GameListModel) => item.categories?.includes('new'), categories: ['new']},
    {name: 'Slots', categoryFilterCb: (item: GameListModel) => item.categories?.includes('slots')},
    {name: 'Jackpots', categoryFilterCb: (item: GameListModel) => !!this.jackpotsList?.some(jackpot => jackpot.game === item.id) },
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
  jackpotsList$: Observable<JackpotListModel[]>;
  jackpotsList: JackpotListModel[];
  loading: boolean = true;

  constructor(private gameService: GameService, private jackpotService: JackpotService, private router: Router, 
    private activatedRoute: ActivatedRoute, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.handleQueryParams();
    this.getGamesList();
    this.jackpotService.checkJackpotsChanges();
  }

  categoryChanged(category: CategoryItem): void {
    this.updateCategoryQueryParams(category.name);
    this.selectedCategory = category;
    this.filterGames();
  }

  private getGamesList(): void {
    this.gameService.getGamesList()
    .subscribe((res) => {
      this.subToJackpotListChanges();
      this.gamesList = res;
      this.filterGames();
      this.loading = false;
    });
  }

  private filterGames(): void {
    this.filteredGamesList = this.gamesList.filter(this.selectedCategory.categoryFilterCb);
  }

  private subToJackpotListChanges() {
    this.jackpotService.jackpotsList$.subscribe(jackpots => {
      this.jackpotsList = jackpots;
      this.cdr.detectChanges();
    });
  }

  private handleQueryParams() {
    const categoryQuery = this.activatedRoute.snapshot.queryParams['category'];
    if (categoryQuery) {
      this.selectedCategory = this.categoriesList.find(category => category.name === categoryQuery);
    } else {
      this.updateCategoryQueryParams(this.selectedCategory.name);
    }
  }

  private updateCategoryQueryParams(value: string) {
    this.router.navigate(
      [], 
      {
        relativeTo: this.activatedRoute,
        queryParams: { category: value }
      });
  }
}
