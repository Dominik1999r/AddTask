import { TasksService } from './service/tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TasksService],
})
export class AppComponent {
  constructor(private TasksService: TasksService) {}
}
