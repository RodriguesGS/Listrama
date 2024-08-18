import { AfterViewInit, Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { TodoComponent } from "./components/todo/todo.component";
import { BackTopComponent } from "./components/back-top/back-top.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, HeaderComponent, TodoComponent, BackTopComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  isLoading = true;

  ngAfterViewInit(): void {
    this.isLoading = false
  }
}
