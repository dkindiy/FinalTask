import { Component } from '@angular/core';

@Component({
  selector: 'todo-app',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoList';
}
