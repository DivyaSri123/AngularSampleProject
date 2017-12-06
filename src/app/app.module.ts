import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Router } from '@angular/router';
// import { router } from './app.router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { SuccessComponent } from '../app/success/success.component';


@NgModule({
  declarations: [
    AppComponent,
    // SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
