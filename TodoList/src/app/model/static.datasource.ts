import { Injectable } from "@angular/core";
import { TodoItem } from "./todoItem.model";
import { Observable, of } from 'rxjs';

@Injectable()
export class StaticDataSource {
    private todoItems: TodoItem[] = [
        new TodoItem(1, "Todo Item #1", false),
        new TodoItem(2, "Todo Item #2", false),
        new TodoItem(3, "Todo Item #3", false),
    ];
    getTodoItems(): Observable<TodoItem[]> {
        return of(this.todoItems);
    }
}   