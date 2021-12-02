import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  goToNotes() {
    this.router.navigateByUrl('/notes');
    console.log(this.accountService.currentUser$)
  }

  goToTodos() {
      this.router.navigateByUrl('/todos');
  }

}
