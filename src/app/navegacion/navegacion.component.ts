import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ViewportScroller } from '@angular/common';

import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  home: HomeComponent;
  @Output() public sidenavToggle = new EventEmitter();

  constructor( private viewportScroller: ViewportScroller) { 
  }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  
  

}
