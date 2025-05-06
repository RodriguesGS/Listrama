import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    MatIconModule,
    FormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Output() task = new EventEmitter<string>();
  taskText: string = '';

  addTask() {
    if (this.taskText.trim()) {
      this.task.emit(this.taskText.trim());
      this.taskText = '';
    }
  }
}
