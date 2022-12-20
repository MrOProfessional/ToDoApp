import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as actions from '../todo.actions';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  todoInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.todoInput = new FormControl('', Validators.required)
  }

  ngOnInit(): void {

  }

  /**
   * Function to add a todo item 
   * 
   * @example
   * Just type whatever and add a todo item
   * 
   */
  addTodo() {
    if (this.todoInput.invalid) { return; }
    this.store.dispatch(actions.create({ text: this.todoInput.value }));
    this.todoInput.reset();

  }

}
