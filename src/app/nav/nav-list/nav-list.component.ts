import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { INavItem } from 'src/app/_models/navItem';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {
  @Input() isExpanded: boolean;
  @Output() isExpandedChange = new EventEmitter<boolean>();

  selectedItem = '';
  bNavCss = '';

  navItems: INavItem[] = [
    { title:"Rest", icon:"search", link:"/rest", tooltip:"demo page for rest", isExternal: false},
    { title:"GraphQl", icon:"search", link:"/graphql", tooltip:"demo page for graphql", isExternal: false},
  ]

  constructor() {
    this.getScreenHeight();
   }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.isExpanded = !this.isExpanded;
    this.isExpandedChange.emit(this.isExpanded);
  }

  @HostListener('window:resize', ['$event'])
  getScreenHeight(event?: any) {
    if(window.innerHeight <= 412) {
      this.bNavCss = 'bNavRelative';
    } else {
      this.bNavCss = 'bNavAbsolute';
    }
  }

  goToLink(url: string): void {
  }

}

