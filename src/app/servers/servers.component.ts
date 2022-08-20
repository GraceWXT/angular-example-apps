import { Component, OnInit } from '@angular/core';

@Component({
  // By tag name:
  selector: 'app-servers',
  // By attribute:
  // selector: '[app-servers]',
  // By class:
  // selector: '.app-servers',
  // templateUrl: './servers.component.html',
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
