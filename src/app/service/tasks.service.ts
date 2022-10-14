import { Task } from './../model/task';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  title = 'ListaZadan';

  tasksDone: Array<Task> = [];

  tasksList: Array<Task> = [];

  tasksListObs = new BehaviorSubject<Array<Task>>(this.tasksList);
  tasksDoneObs = new BehaviorSubject<Array<Task>>(this.tasksDone);

  constructor() {
    this.tasksList = [
      { name: 'pranie', created: new Date() },
      { name: 'prasowanie', created: new Date() },
      { name: 'układanie', created: new Date() },
      { name: 'mycie', created: new Date() },
    ];

    this.tasksListObs.next(this.tasksList);
  }

  add(task: Task) {
    this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }

  done(task: Task) {
    this.tasksDone.push(task);
    this.remove(task);
    this.tasksDoneObs.next(this.tasksDone);
  }

  remove(task: Task) {
    this.tasksList = this.tasksList.filter((s) => s != task);
    this.tasksListObs.next(this.tasksList);
  }

  getTaskListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }
  getTaskDoneObs(): Observable<Array<Task>> {
    return this.tasksDoneObs.asObservable();
  }
}
