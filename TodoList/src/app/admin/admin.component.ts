import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../model/auth.service";
import { TodoItem } from "../model/todoItem.model";
import { TodoItemRepository } from "../model/todoItem.repository";
import { TodoItemEditorComponent } from './todoItemEditor.component';
import { MatDialog, MatDialogConfig } from "@angular/material";

@Component({
    templateUrl: "admin.component.html"
})
export class AdminComponent {
    constructor(private auth: AuthService, private router: Router, private repository: TodoItemRepository, private dialog: MatDialog) { }

    getTodoItems(): TodoItem[] {
        return this.repository.getTodoItems();
    }

    deleteTodoItem(id: number) {
        this.repository.deleteTodoItem(id);
    }

    logout() {
        this.auth.clear();
        this.router.navigateByUrl("/");
    }

    openDialog(todoItemId?: number, todoItemText?: string) {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "350px";
        dialogConfig.data = { id: todoItemId, text: todoItemText };

        const dialogRef = this.dialog.open(TodoItemEditorComponent, dialogConfig);
    }
}