import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { NotesCreateComponent } from './Components/notes/notes-create/notes-create.component';
import { NotesListComponent } from './Components/notes/notes-list/notes-list.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'create', component: NotesCreateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }