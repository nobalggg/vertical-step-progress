import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { MainComponent } from "./main/main.component";
import { TableComponent } from "./table/table.component";
import { TDformComponent } from "./tdform/tdform.component";
import { FormsModule } from "@angular/forms";
import { from } from "rxjs";
import { StepProgressComponent } from './step-progress/step-progress.component';

@NgModule({
  declarations: [AppComponent, MainComponent, TableComponent, TDformComponent, StepProgressComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
