import { NgModule } from "@angular/core";
import { TodoItemRepository } from "./todoItem.repository";
import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./auth.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [TodoItemRepository, { provide: StaticDataSource, useClass: RestDataSource },
                RestDataSource, AuthService]
})
export class ModelModule { }