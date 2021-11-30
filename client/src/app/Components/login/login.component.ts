import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  model: any = {}

  constructor(private accountService: AccountService) { }


  ngOnInit(): void {
  }

  login(){
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    }, err => {
      console.log(err);
    })
  }

}
