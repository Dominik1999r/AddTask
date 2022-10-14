import { Task } from './../model/task';
import { TasksService } from './../service/tasks.service';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css'],
})
export class DoneComponent {
  taskList: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTaskListObs().subscribe((dane: Array<Task>) => {
      this.taskList = dane;
    });
  }

  remove(task: Task) {
    this.tasksService.remove(task);
  }

  done(task: Task) {
    task.end = new Date();
    this.tasksService.done(task);
  }

  getColor() {
    return 'red';
  }
  color2() {
    return 'green';
  }
}
