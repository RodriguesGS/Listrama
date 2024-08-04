import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DataItemsComponent } from "../data-items/data-items.component";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [MatIconModule, DataItemsComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

}
