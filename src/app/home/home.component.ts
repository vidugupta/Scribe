import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string = 'Internshala';
  amount: number = 1999;
  dateOfBirth = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
