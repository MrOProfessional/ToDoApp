import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.models';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputIdentifier') inputIdentifier: ElementRef;

  checkBoxCompleted: FormControl;
  inputTodo: FormControl;
  isEditing: boolean = false;

  constructor(private store: Store<AppState>) { }


  /**
   * Starts and sets up initial data for todo list
   */
  ngOnInit(): void {
    this.checkBoxCompleted = new FormControl(this.todo.completed);
    this.inputTodo = new FormControl(this.todo.text, Validators.required);

    this.checkBoxCompleted.valueChanges.subscribe(() => {
      this.store.dispatch(actions.toggleEditing({ id: this.todo.id }))
    });
  }

  /**
   * enable the property editing for css class management
   */
  edit(): void {
    this.isEditing = true;
    this.inputTodo.setValue(this.todo.text);

    setTimeout(() => {
      this.inputIdentifier.nativeElement.select()
    }, 1);
  }

  /**
   * it ends the editing part
   */
  finishEditing(): void {
    this.isEditing = false;
    if (this.inputTodo.invalid) { return; }
    if (this.inputTodo.value === this.todo.text) { return; }

    this.store.dispatch(actions.edit({
      id: this.todo.id,
      text: this.todo.text
    }))
  }

  deleteTodo(): void {
    console.log('todo');
    this.store.dispatch(actions.erase({ id: this.todo.id }));
  };


}