import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.models';
import { create, toggleEditing, edit, toggleAll, clean, erase } from './todo.actions';

export const initialState: Todo[] = [
    new Todo('Save the world'),
    new Todo('Save the world1'),
    new Todo('Save the world2')];

const _todoReducer = createReducer(initialState,
    on(create, (state, { text }) => [...state, new Todo(text)]),
    on(clean, state => state.filter(todo => !todo.completed)),
    on(toggleEditing, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            } else {
                return todo;
            }
        });

    }),
    on(edit, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    text: todo.text
                }
            } else {
                return todo;
            }
        });

    }),
    on(erase, (state, { id }) => {
        return state.filter(todo => todo.id !== id)
    }),
    on(toggleAll, (state, { completed }) => state.map(todo => {
        return {
            ...todo,
            completed: completed
        }
    }))
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
    return _todoReducer(state, action);
}