import { Component, Input, OnInit } from '@angular/core';
import { CategoryItem } from 'src/app/models/category-item.model';
import { GameListModel } from 'src/app/models/game-list.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() filteredGamesList: GameListModel[] = [];
  @Input() selectedCategory!: CategoryItem;
  @Input() loading: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
