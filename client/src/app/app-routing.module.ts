import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NotesCreateComponent } from './Components/notes/notes-create/notes-create.component';
import { NotesListComponent } from './Components/notes/notes-list/notes-list.component';
import { RegisterComponent } from './Components/register/register.component';
import { TodosCreateComponent } from './Components/todos/todos-create/todos-create.component';
import { TodosListComponent } from './Components/todos/todos-list/todos-list.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'notes', component: NotesListComponent },
      { path: 'notes/create', component: NotesCreateComponent },
      { path: 'todos', component: TodosListComponent },
      { path: 'todos/create', component: TodosCreateComponent },
    ]

  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }