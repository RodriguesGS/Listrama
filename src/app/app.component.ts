import { Component } from '@angular/core';
import { InputComponent } from "./components/input/input.component";
import { TasksComponent } from "./components/tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    InputComponent, 
    TasksComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  tasks: string[] = [];

  onTaskCreated(newTask: string) {
    this.tasks.push(newTask);
  }
}
