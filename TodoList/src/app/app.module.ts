import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ListModule } from './list/list.module';
import { ListComponent } from './list/list.component';
import { ListFirstGuard } from "./listFirst.guard";
import { RouterModule } from "@angular/router";
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
            BrowserAnimationsModule,
            ListModule,
            MatCardModule, 
            MatCheckboxModule, 
            MatButtonModule,
            RouterModule.forRoot([
              { 
                path: "list", component: ListComponent,
                canActivate: [ListFirstGuard]
              },
              {
                path: "admin",
                loadChildren: "./admin/admin.module#AdminModule",
                canActivate: [ListFirstGuard] 
              },
              { path: "**", redirectTo: "list" }
            ])
  ],
  providers: [ListFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
