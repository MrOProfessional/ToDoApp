import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './filter-pipe.pipe';



@NgModule({
  declarations: [
    TodoAddComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoFooterComponent,
    TodoPageComponent,
    FilterPipePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoPageComponent]
})
export class TodoModule { }
