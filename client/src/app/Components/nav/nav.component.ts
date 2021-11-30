import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Interfaces/user';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  logout(){
    this.accountService.logout();
  }

}
