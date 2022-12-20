import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from '../models/todo.models';
import { AppState } from '../../app.reducer';
import { validFilter } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  currentFilter: validFilter;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    // this.store.select('todos').subscribe((data) => this.todos = data);
    this.store.subscribe( ({ todos, filter }) => {
      this.currentFilter = filter;
      this.todos = todos;
    })
  }
}
