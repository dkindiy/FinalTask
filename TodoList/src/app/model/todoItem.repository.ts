import { Injectable } from "@angular/core";
import { TodoItem } from "./todoItem.model";
import { RestDataSource } from './rest.datasource';

@Injectable()
export class TodoItemRepository {
    private todoItems: TodoItem[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getTodoItems().subscribe(data => {
            this.todoItems = data;
        });
    }

    getTodoItems(): TodoItem[] {
        return this.todoItems;
    }

    getTodoItem(id: number): TodoItem {
        return this.todoItems.find(t => t.id == id);
    }

    saveTodoItem(todoItem: TodoItem) {
        if (todoItem.id == null || todoItem.id == 0) {
            this.dataSource.saveTodoItem(todoItem).subscribe(t => this.todoItems.push(t));
        } else {
            this.dataSource.updateTodoItem(todoItem).subscribe(t => {
                this.todoItems.splice(this.todoItems.findIndex(t => t.id == todoItem.id), 1, todoItem);
            });
        }
    }

    deleteTodoItem(id: number) {
        this.dataSource.deleteTodoItem(id).subscribe(t => {
            this.todoItems.splice(this.todoItems.
                findIndex(t => t.id == id), 1);
        })
    }
}