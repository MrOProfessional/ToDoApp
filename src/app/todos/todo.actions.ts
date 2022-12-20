import { createAction, props } from "@ngrx/store";

export const create = createAction(
    '[TODO] Create a todo item',
    props<{ text: string }>()
)

export const toggleEditing = createAction(
    '[TODO] Toggle todo editing',
    props<{ id: number }>()
)

export const edit = createAction(
    '[TODO] Edit todo',
    props<{ id: number, text: string }>()
)

export const erase = createAction(
    '[TODO] Delete todo',
    props<{ id: number }>()
)

export const clean = createAction(
    '[TODO] Clean todo'
)

export const toggleAll = createAction(
    '[TODO] Toggle all todos',
    props<{ completed: boolean }>()
)