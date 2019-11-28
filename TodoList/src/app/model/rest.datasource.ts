import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TodoItem } from "./todoItem.model";
import { map } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {
    baseUrl: string;
    auth_token: string;

    constructor(private http: HttpClient) {
        // this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
        // this.baseUrl = "https://todolist-c8b99.firebaseio.com/";
        this.baseUrl = "/api/";
    }

    getTodoItems(): Observable<TodoItem[]> {
        return this.http.get<TodoItem[]>(this.baseUrl + "todoItems");
    }

    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.post<any>(this.baseUrl + "login", {
            name: user, password: pass
        }).pipe(map(response => {
            this.auth_token = response.success ? response.token : null;
            return response.success;
        }));
    }

    saveTodoItem(todoItem: TodoItem): Observable<TodoItem> {
        return this.http.post<TodoItem>(this.baseUrl + "todoItems", todoItem, this.getOptions());
    }

    updateTodoItem(todoItem): Observable<TodoItem> {
        return this.http.put<TodoItem>(`${this.baseUrl}todoItems/${todoItem.id}`, todoItem, this.getOptions());
    }

    deleteTodoItem(id: number): Observable<TodoItem> {
        return this.http.delete<TodoItem>(`${this.baseUrl}todoItems/${id}`,
            this.getOptions());
    }

    private getOptions() {
        return {
            headers: new HttpHeaders({
                "Authorization": `Bearer<${this.auth_token}>`
            })
        }
    }
}