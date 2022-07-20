import { BehaviorSubject } from "rxjs";

export class GameListModel {
    categories: Array<string>;
    id: string;
    image: string;
    name: string;
    jackpot?: number;
    jackpot$?: BehaviorSubject<number> = new BehaviorSubject(0);

    constructor(game) {
        Object.assign(this, game);
        this.jackpot$.next(this.jackpot);
    }
}