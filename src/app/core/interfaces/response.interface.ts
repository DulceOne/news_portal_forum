import { IThems } from './theme.interface'
import { IPost } from './post.interface'
import { IForums } from './forums.inteface'


type intersection = IThems[] & IPost[] & IForums[]
export interface IResponse {
    data: intersection,
    page: Number,
    pages: Number,
    collections: Number
}