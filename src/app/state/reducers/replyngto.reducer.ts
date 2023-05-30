import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/replyng.actions';
import { ReplyngTo } from '../../models/replynTo';


export const initialState: ReplyngTo = { username: ""};

const _replyngToReducer = createReducer(
  initialState,
  on(actions.editReplyngTo, (state, { username }) => { 
      return {...state, username: username}
   }),
);

export function replyngToReducer (state: any, action: any) {
      return _replyngToReducer(state, action)
}