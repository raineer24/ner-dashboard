import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from "./core/index";
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
//import { LoginComponent } from './auth/components/login/login.component';
// Routes
import { routes } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CoreModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
