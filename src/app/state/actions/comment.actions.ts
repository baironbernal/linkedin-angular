import { createAction, props } from '@ngrx/store';
import { Comment } from '../../models/comment';

export const load = createAction(
      '[COMMENT] Cargar comentarios',
);

export const loadedItems = createAction(
      '[COMMENT] Cargados comentarios',
      props<{ comments: Comment[] }>()
);

export const create = createAction(
      '[COMMENT] Crear comentario',
      props<{ comment: Comment }>()
);

export const createInputReply = createAction(
      '[COMMENT] Crear  input de respuesta a comentario',
      props<{ username: string, commentId: number }>()
);

export const reply = createAction(
      '[REPLY] Crear respuesta a comentario',
      props<{ content: string, commentId: number }>()
);

export const plusOrLess = createAction(
      '[COMMENT] Sumar puntaje de comentario',
      props<{ commentId: number, operation: number }>()
);
