import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  title='dental app';
  constructor(private router: Router) { }
    goto():void {
      this.router.navigate([`./home-page`]);
    
  }

  ngOnInit(): void {
  }

}
