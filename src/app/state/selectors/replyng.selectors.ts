import { ReplyngTo } from './../../models/replynTo';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectUsernameToReply = (state: AppState) => state.replyngTo;

export const selectReplyngTo = createSelector(
      selectUsernameToReply,
    (state: ReplyngTo) => state
);

