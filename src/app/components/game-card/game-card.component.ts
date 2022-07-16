import { Component, Input, OnInit } from '@angular/core';
import { CategoryItem } from 'src/app/models/category-item.model';
import { GameListModel } from 'src/app/models/game-list.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() game!: GameListModel;
  @Input() selectedCategory!: CategoryItem;

  constructor() { }

  ngOnInit(): void {
  }

}
