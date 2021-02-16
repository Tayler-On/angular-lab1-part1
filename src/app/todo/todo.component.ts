import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    { completed: false, task: 'fold clothes' },
    { completed: false, task: 'put clothes in dresser' },
    { completed: false, task: 'relax' },
    { completed: true, task: 'try to pet cat' },
    { completed: false, task: 'pet dog' },
    { completed: false, task: 'be awesome' },
  ];
  searchTodo: string = '';

  constructor() {}

  ngOnInit(): void {}

  completed = (todo: Todo): void => {
    todo.completed = true;
  };

  addTask = (form: NgForm, anArrayOfTodos: Todo[]): void => {
    let newTask: Todo = {
      completed: false,
      task: form.form.value.newtask,
    };
    anArrayOfTodos.push(newTask);
  };

  removeTask = (index: number): void => {
    this.todos.splice(index, 1);
  };

  setSearchTerm = (form: NgForm) => {
    console.log(form.form.value.todo);
    this.searchTodo = form.form.value.todo;
  };

  filterTodos = (todo: string): Todo[] => {
    return this.todos.filter((item) => {
      let currentItem = item.task.toLowerCase().trim();
      return currentItem.includes(todo.toLowerCase().trim());
    });
  };
}
