import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  template: `
    Favorite Color: <input type="text" [formControl]="newTodoNameControl">
  `
})
export class FavoriteColorComponent {
  newTodoNameControl = new FormControl('');
}