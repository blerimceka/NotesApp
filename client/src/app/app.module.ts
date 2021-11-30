import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { NotesListComponent } from './Components/notes/notes-list/notes-list.component';
import { AppRoutingModule } from './app-routing.module';
import { NotesCreateComponent } from './Components/notes/notes-create/notes-create.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Components/home/home.component';
import { TodosListComponent } from './Components/todos/todos-list/todos-list.component';
import { TodosCreateComponent } from './Components/todos/todos-create/todos-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    NotesListComponent,
    NotesCreateComponent,
    HomeComponent,
    TodosListComponent,
    TodosCreateComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
