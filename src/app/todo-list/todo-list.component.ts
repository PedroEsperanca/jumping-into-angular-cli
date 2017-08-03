import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  newTask: String = '';

  list: Array<any> = [
    { name: 'clean room', done: false },
    { name: 'make pancakes', done: false },
    { name: 'spend 3 hours on reddit', done: true }
  ];

  constructor() { }

  ngOnInit() {
  }

  addTask() {
    this.list.push({
      name: this.newTask,
      done: false
    });

    this.newTask = '';
  }

}
