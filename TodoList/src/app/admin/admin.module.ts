import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatDialogModule, MatDialogRef } from "@angular/material";

import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { AuthGuard } from "./auth.guard";
import { TodoItemEditorComponent } from "./todoItemEditor.component";

let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    { path: "main", component: AdminComponent, canActivate: [AuthGuard],
        children: [
            { path: ":mode/:id", component: TodoItemEditorComponent },
            { path: ":mode", component: TodoItemEditorComponent },
            { path: "**", redirectTo: "" }
        ]
    },
    { path: "**", redirectTo: "auth" }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, MatCardModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatDialogModule],
    providers: [
        AuthGuard,
        {
            provide: MatDialogRef,
            useValue: {}
        },
    ],
    declarations: [AuthComponent, AdminComponent, TodoItemEditorComponent],
    entryComponents: [TodoItemEditorComponent]
})
export class AdminModule { }