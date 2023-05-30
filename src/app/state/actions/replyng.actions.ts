import { createAction, props } from '@ngrx/store';

export const editReplyngTo = createAction(
      '[REPLYNG TO] Actualizar a quien comentaré',
      props<{ username: string }>()
);
