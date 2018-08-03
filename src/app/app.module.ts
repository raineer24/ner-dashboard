import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from "./core/index";
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
//import { LoginComponent } from './auth/components/login/login.component';
// Routes
import { routes } from "./app.routes";

// adding rx operators
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/finally";
import "rxjs/add/observable/of";
import "rxjs/add/observable/empty";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/takeUntil";

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
