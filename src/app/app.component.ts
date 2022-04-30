import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Research-Demo';
  navBarOpen: boolean = true;
  darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  constructor() { }


}
