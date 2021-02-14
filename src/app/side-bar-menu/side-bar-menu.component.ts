import { Component, OnInit, Input } from '@angular/core';
import { SideBarMenu } from '../model'

@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styleUrls: ['./side-bar-menu.component.css']
})
export class SideBarMenuComponent implements OnInit {
  @Input() option:Partial<SideBarMenu>={};

  constructor() { }

  ngOnInit(): void {
  }

}
