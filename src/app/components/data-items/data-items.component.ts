import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { Subscription } from 'rxjs';
import { TodoComponent } from '../todo/todo.component';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface Task {
  id: number;
  text: string;
  completed: boolean;
}
@Component({
  selector: 'app-data-items',
  standalone: true,
  imports: [ ],
  templateUrl: './data-items.component.html',
  styleUrl: './data-items.component.scss'
})
export class DataItemsComponent implements OnInit {
  tasks: Task[] = [];
  taskCount = 0;
  private tasksSub!: Subscription
  filter: 'all' | 'active' | 'completed' = 'all'

  constructor(private taskService: TaskService, private todoComponent: TodoComponent) {}

  ngOnInit(): void {
    this.tasksSub = this.taskService.tasks$.subscribe(() => {
      this.updateCount();
    })

    this.updateCount();
  }

  updateCount(): void {
    this.taskCount = this.taskService.countTasks();
  }

  setFilter(filter: 'all' | 'active' | 'completed'): void {
    this.filter = filter;
    this.todoComponent.applyFilter(this.filter);
  }

  clearTasksCompleted(): void {
    this.taskService.clearCompleted();
    this.tasks = this.taskService.filterTasks(this.filter)
  }
}
