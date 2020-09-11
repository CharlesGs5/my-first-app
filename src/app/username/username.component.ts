import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  myUsername = '';

  constructor() { }

  ngOnInit(): void {
  }

  reset(): void {
    this.myUsername = '';
  }
}
