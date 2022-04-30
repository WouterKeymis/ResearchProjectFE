import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-toolbar',
  templateUrl: './nav-toolbar.component.html',
  styleUrls: ['./nav-toolbar.component.scss']
})
export class NavToolbarComponent implements OnInit {
  @Input() navBarOpen: boolean;
  @Output() navBarOpenChange = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
  }

  navBarToggle() {
    this.navBarOpen = !this.navBarOpen;
    this.navBarOpenChange.emit(this.navBarOpen);
  }

}

