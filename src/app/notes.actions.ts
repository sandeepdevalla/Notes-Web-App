import { createAction, props } from '@ngrx/store';

export const storeNote = createAction(
  '[Notes Page] List',
  props<{ 
      title: string; 
      description: string;
      timeStamp: string;
    }>()
);