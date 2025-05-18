import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ MatIconModule ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input() tasks: { title: string, completed: boolean }[] = [];

  deleteTask(i: number) {
    this.tasks.splice(i, 1)
  }

  toggleCompleted(i: number) {
    this.tasks[i].completed = !this.tasks[i].completed;
  }
}
