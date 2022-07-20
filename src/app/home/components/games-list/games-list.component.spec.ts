import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { GamesListComponent } from './games-list.component';

describe('GamesListComponent', () => {
  let component: GamesListComponent;
  let fixture: ComponentFixture<GamesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.loading = false;
    component.filteredGamesList = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show empty list', () => {
    const empty = fixture.debugElement.query(By.css('.empty-list'));
    expect(empty).toBeTruthy();
  });

  it('should show loader', () => {
    component.loading = true;
    const spinner = fixture.debugElement.query(By.css('.loader'));
    expect(spinner).toBeTruthy();
  });
});
