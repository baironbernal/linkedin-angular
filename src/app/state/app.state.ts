import { ActionReducerMap } from '@ngrx/store';
import * as comments from './reducers/comment.reducer';
import * as replyngTo from './reducers/replyngto.reducer';
import { ItemsState } from '../models/itemSstate';
import { ReplyngTo } from '../models/replynTo';

export interface AppState {
   items: ItemsState;
   replyngTo: ReplyngTo
}

export const appReducers: ActionReducerMap<AppState> = {
   items: comments.commentReducer,
   replyngTo: replyngTo.replyngToReducer,
   
}