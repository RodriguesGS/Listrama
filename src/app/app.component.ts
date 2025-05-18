import { Component } from '@angular/core';
import { InputComponent } from "./components/input/input.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { ControlsComponent } from "./components/controls/controls.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    InputComponent,
    TasksComponent,
    ControlsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  tasks: { title: string, completed: boolean }[] = [];
  filteredTasks: { title: string, completed: boolean }[] = [];

  onTaskCreated(newTask: string) {
    this.tasks.push({ title: newTask, completed: false });
    this.showAll();
  }

  showAll() {
    this.filteredTasks = [...this.tasks];
  }

  showCompleted() {
    this.filteredTasks = this.tasks.filter(task => task.completed);
  }

  deleteCompleted() {
    this.tasks = this.tasks.filter(task => !task.completed);
    this.showAll();
  }
}
