import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Notes } from 'src/app/Interfaces/notes';
import { User } from 'src/app/Interfaces/user';
import { AccountService } from 'src/app/Services/account.service';
import { NotesService } from 'src/app/Services/notes.service';

@Component({
  selector: 'app-notes-create',
  templateUrl: './notes-create.component.html',
  styleUrls: ['./notes-create.component.css']
})
export class NotesCreateComponent implements OnInit {

  notesForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  model: Notes;
  userId;

  constructor(private accountService: AccountService, private notesService: NotesService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    if(this.accountService.currentUser$){
      this.accountService.currentUser$.subscribe(response => {
        this.userId = response.id;
      })
    }
  }

  create() {
    this.model = {
      userId: this.userId,
      title: this.notesForm.value.title,
      description: this.notesForm.value.description
    }
    this.notesService.create(this.model).subscribe(response => {
      console.log(response);
    })
  }

}
