import { Component } from "@angular/core";
import { TodoItem } from "../model/todoItem.model";
import { TodoItemRepository } from "../model/todoItem.repository";
import { Router } from "@angular/router";

@Component({
    selector: "list",
    templateUrl: "list.component.html"
})
export class ListComponent {
    constructor(private repository: TodoItemRepository, private router: Router) { }
    
    get todoItems(): TodoItem[] {
        return this.repository.getTodoItems();
    }
}