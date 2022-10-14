import { Task } from './../model/task';
import { TasksService } from './../service/tasks.service';
import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css'],
})
export class AddListComponent {
  constructor(private TasksService: TasksService) {}

  task: string = '';

  addTask() {
    const Taskk: Task = {
      name: this.task,
      created: new Date(),
    };

    this.TasksService.add(Taskk);
  }
}
