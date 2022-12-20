import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../../filter/filter.actions';
import { clean } from '../todo.actions';

import { validFilter } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  currentFilter: validFilter = 'completed';
  filters: validFilter[] = ['all', 'completed', 'pending'];
  pedingTodoCounter: number = 0;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.currentFilter = state.filter
      this.pedingTodoCounter = state.todos.filter(todo => !todo.completed).length;
    })
  }

  /**
   * Changes the current filter which is being applied to the todo state app
   * @param filter type of valid filter
   */
  changeFilter(filter: validFilter) {
    this.store.dispatch(actions.setFilter({ filter }));
  }

  /**
   * It cleans the todo array
   */
  clearCompletedTodos() {
    this.store.dispatch(clean());
  }

}
