import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../task.service';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ MatIconModule, MatButtonModule, CommonModule, FormsModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  newTask = '';

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.newTask.trim()) {
      const task: Task = {
        id: Date.now(),
        text: this.newTask.trim(),
        completed: false
      };

      this.taskService.addTask(task);
      this.newTask = '';
    }
  }
}
