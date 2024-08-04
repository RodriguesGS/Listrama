import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { Subscription } from 'rxjs';

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
  taskCount = 0;
  private tasksSub!: Subscription
  tasks: Task[] = [];
  filter: 'all' | 'active' | 'completed' = 'all'

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasksSub = this.taskService.tasks$.subscribe(() => {
      this.updateCount();
    })

    this.updateCount();
  }

  updateCount(): void {
    this.taskCount = this.taskService.countTasks();
  }

  toggleCompletion(id: number): void {
    this.taskService.toggleTaskCompleted(id);
  }
}
