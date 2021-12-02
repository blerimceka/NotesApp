import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  model: any = {}

  constructor(private accountService: AccountService, private router: Router) { }


  ngOnInit(): void {
  }

  login(){
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/'); 
    }, err => {
      console.log(err);
    })
  }

}
