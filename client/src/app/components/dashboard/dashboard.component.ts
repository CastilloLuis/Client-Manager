import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('drawer') drawer;

  constructor() { }

  ngOnInit() {
    this.drawer.toggle();
  }

}
