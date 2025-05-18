import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.scss'
})
export class ControlsComponent {
    @Output() showAll = new EventEmitter<void>();
    @Output() showCompleted = new EventEmitter<void>();
    @Output() removeCompleted = new EventEmitter<void>();

    filterAll() {
      this.showAll.emit();
    }

    filterCompleted() {
      this.showCompleted.emit();
    }

    deleteCompleted() {
      this.removeCompleted.emit();
    }
}
