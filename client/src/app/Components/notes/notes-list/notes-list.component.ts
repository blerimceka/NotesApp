import { Component, OnInit } from '@angular/core';
import { Notes } from 'src/app/Interfaces/notes';
import { AccountService } from 'src/app/Services/account.service';
import { NotesService } from 'src/app/Services/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  userId: any;
  notes: any;


  constructor(private notesService: NotesService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.getNotes();
    
  }

  getCurrentUser() {
    if(this.accountService.currentUser$){
      this.accountService.currentUser$.subscribe(response => {
        this.userId = response.id;
      })
    }
  }

  getNotes() {
    this.notesService.getAll().subscribe(result => {
      console.log(result);
      this.notes = result;
    });
  }

  delete(id) {
    this.notesService.delete(id).subscribe(result => {
      window.location.reload();
    })
  }

}
