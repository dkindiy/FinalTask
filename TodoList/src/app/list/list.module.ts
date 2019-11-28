import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { ListComponent } from "./list.component";
import { RouterModule } from "@angular/router";
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule, MatCardModule, MatCheckboxModule, MatButtonModule],
    declarations: [ListComponent],
    exports: [ListComponent]
})
export class ListModule { }