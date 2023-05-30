import { Comment } from './comment';

export interface ItemsState {
    comments: ReadonlyArray<Comment>;
}