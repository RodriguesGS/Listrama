import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-edit-tasks',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './edit-tasks.component.html',
  styleUrl: './edit-tasks.component.scss'
})
export class EditTasksComponent {
  taskCopy: Task;

  constructor(
    public dialogRef: MatDialogRef<EditTasksComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.taskCopy = {...data.task}; 
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.taskCopy);
  }
}
