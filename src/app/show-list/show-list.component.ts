import { Task } from './../model/task';
import { TasksService } from './../service/tasks.service';
import { Component, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css'],
})
export class ShowListComponent implements OnInit {
  tasksDone: Array<Task> = [];
  tasksList: Array<Task> = [];

  constructor(private TasksService: TasksService) {
    this.TasksService.getTaskDoneObs().subscribe((tasks: Array<Task>) => {
      this.tasksDone = tasks;

      this.TasksService.getTaskListObs().subscribe((dane) => {
        this.tasksList = dane;
      });
    });
  }

  ngOnInit(): void {}
}
