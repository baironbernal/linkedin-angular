
import { createSelector } from '@ngrx/store'; //TODO <----
import { ItemsState } from 'src/app/models/itemSstate';

import { AppState } from '../app.state';

//TODO: Es el selector que tiene relacion con la propiedad "items"

export const selectCommentsFeature = (state: AppState) => state.items;//TODO: PADRE

export const selectListItems = createSelector(
    selectCommentsFeature,
    (state: ItemsState) => state.comments //TODO: HIJO
);

