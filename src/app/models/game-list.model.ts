import { BehaviorSubject } from "rxjs";

export class GameListModel {
    categories: Array<string>;
    id: string;
    image: string;
    name: string;
    jackpot?: number;
}