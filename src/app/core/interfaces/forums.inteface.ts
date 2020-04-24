import { IGames } from './game.interface';

export interface IForums {
    background: String;
    _id: String,
    name: String,
    slug: String,
    parent: IGames
}