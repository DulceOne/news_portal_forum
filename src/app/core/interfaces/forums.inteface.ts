import { IGames } from './game.interface';

export interface IForums {
    _id: String,
    name: String,
    slug: String,
    parent: IGames
}