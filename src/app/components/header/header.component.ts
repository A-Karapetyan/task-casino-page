import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryItem } from 'src/app/models/category-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() categoryChanged: EventEmitter<CategoryItem> = new EventEmitter();

  @Input() categoriesList: Array<CategoryItem> = [];
  @Input() selectedCategory: CategoryItem = this.categoriesList[0];

  constructor() { }

  ngOnInit(): void {
  }

  changeCategory(category: CategoryItem) {
    this.categoryChanged.emit(category);
  }

}
