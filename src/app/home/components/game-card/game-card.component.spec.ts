import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { JackpotService } from 'src/app/api/jackpot/jackpot.service';
import { TestingModule } from '../../testing/testing/testing.module';

import { GameCardComponent } from './game-card.component';

const mockGame = {
  categories: ['new'], id: 'NESTARBURST',
  image: 'some.img',
  name: 'Game Name',
  jackpot: 500};

describe('GameCardComponent', () => {
  let component: GameCardComponent;
  let fixture: ComponentFixture<GameCardComponent>;
  let jackpotService: JackpotService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCardComponent ],
      imports: [TestingModule]
    })
    .compileComponents();

    jackpotService = TestBed.inject(JackpotService);
    fixture = TestBed.createComponent(GameCardComponent);
    component = fixture.componentInstance;
    component.game = mockGame;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create render card', () => {
    const card = fixture.debugElement.query(By.css('.card'));
    expect(card).toBeTruthy();
  });

  it('should create render new label', () => {
    const newLabel = fixture.debugElement.query(By.css('.new-label'));
    expect(newLabel).toBeTruthy();
  });
});
