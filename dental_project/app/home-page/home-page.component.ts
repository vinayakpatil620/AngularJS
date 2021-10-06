import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  myDate = Date.now();

  constructor(private router: Router)  { }
  nextpage():void {
    this.router.navigate([`./patient-details`]);
  
  }
  ngOnInit(): void {
  }
}
