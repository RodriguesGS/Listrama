import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from "./components/input/input.component";
import { TasksComponent } from "./components/tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'listrama';
}
