import { IThems } from './theme.interface'
import { IPost } from './post.interface'
import { IForums } from './forums.inteface'
import { IComment } from './comment.interface'

type intersection = IThems[] & IPost[] & IForums[]  & IComment[]
export interface IResponse {
    data: intersection,
    page: Number,
    pages: Number,
    collections: Number
}