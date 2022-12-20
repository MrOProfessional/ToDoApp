import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent {

  allTodosChecked: boolean = false;

  constructor(private store: Store<AppState>) {

  }
  toggleAllTodos() {
    this.allTodosChecked = !this.allTodosChecked;
    this.store.dispatch(actions.toggleAll({ completed: this.allTodosChecked }));
  }
}
