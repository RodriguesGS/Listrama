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
  filter: 'all' | 'active' | 'completed' = 'all';
  
  constructor(public taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.tasks$.subscribe(() => {
      this.tasks = this.taskService.filterTasks(this.filter);
    });

    this.addExample();
  }

  deleteTask(task: Task):void {
    this.taskService.deleteTask(task.id);
  }

  applyFilter(filter: 'all' | 'active' | 'completed'): void {
    this.filter = filter;
    this.tasks = this.taskService.filterTasks(this.filter)
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
