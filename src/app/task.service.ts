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

  toggleTaskCompleted(id: number): void {
    const tasks = this.taskSubject.getValue().map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }

      return task;
    });

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

  countTasks(): number {
    const tasks = this.taskSubject.getValue().filter(task => !task.completed);
    return tasks.length
  }

  completedTasks(): Task[] {
    return this.taskSubject.getValue().filter(task => task.completed);
  }

  getAllTasks(): Task[] {
    return this.taskSubject.getValue();
  }
}
