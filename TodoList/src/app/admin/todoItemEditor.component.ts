import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { TodoItem } from "../model/todoItem.model";
import { TodoItemRepository } from "../model/todoItem.repository";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
    id: number;
    text: string;
}

@Component({
    templateUrl: "todoItemEditor.component.html"
})
export class TodoItemEditorComponent {
    editing: boolean = false;
    todoItem: TodoItem = new TodoItem();
    errorMessage: string = "";

    constructor(private repository: TodoItemRepository, 
                private router: Router,
                private dialogRef: MatDialogRef<TodoItemEditorComponent>,
                @Inject(MAT_DIALOG_DATA) public data: DialogData) {

        if (data.id) {
            Object.assign(this.todoItem, data);
            this.editing = true;
        }
        
        if (this.editing) {
            Object.assign(this.todoItem, repository.getTodoItem(this.data.id));
        }
    }

    save(form: NgForm) {
        if (!this.todoItem.text.length) {
            this.errorMessage = "Cannot save an empty task";
            return;
        }
        this.dialogRef.close();
        this.repository.saveTodoItem(this.todoItem);
        this.router.navigateByUrl("/admin/main");
    }

    closeDialog() {
        this.dialogRef.close();
    }
}