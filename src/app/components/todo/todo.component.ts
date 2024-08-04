import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DataItemsComponent } from "../data-items/data-items.component";
import { CommonModule } from '@angular/common';
import { TaskService } from '../../task.service';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ MatIconModule, DataItemsComponent, CommonModule ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  tasks: Task[] = [];
  
  constructor(public taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.tasks$.subscribe(tasks => this.tasks = tasks);
    this.addExample();
  }

  deleteTask(task: Task):void {
    this.taskService.deleteTask(task.id);
  }

  addExample(): void {
    if (this.tasks.length === 0) {
      const taskExample: Task = {
        id: Date.now(),
        text: 'Example Task',
        completed: false
      }

      this.taskService.addTask(taskExample);
    }
  }
}
