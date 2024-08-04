import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskSubject = new BehaviorSubject<Task[]>(this.loadTasks());
  tasks$ = this.taskSubject.asObservable();

  addTask(task: Task):void {
    const tasks = this.taskSubject.getValue();
    tasks.push(task);
    this.saveTasks(tasks)
  }

  deleteTask(id: number): void {
    const tasks = this.taskSubject.getValue().filter(t => t.id !== id);
    this.saveTasks(tasks);
  }

  private loadTasks(): Task[] {
    const tasksSaved = localStorage.getItem('tasks');
    return tasksSaved ? JSON.parse(tasksSaved) : [];
  }

  private saveTasks(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.taskSubject.next(tasks);
  }
}
