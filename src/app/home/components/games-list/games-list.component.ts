import { Component, Input, OnInit } from '@angular/core';
import { CategoryItem } from 'src/app/models/category-item.model';
import { GameListModel } from 'src/app/models/game-list.model';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  @Input() filteredGamesList: GameListModel[] = [];
  @Input() selectedCategory!: CategoryItem;
  @Input() loading: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
