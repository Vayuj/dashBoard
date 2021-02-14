import { Component, OnInit, Input } from '@angular/core';
import {SideBarHeading} from '../model'

@Component({
  selector: 'app-side-bar-heading',
  templateUrl: './side-bar-heading.component.html',
  styleUrls: ['./side-bar-heading.component.css']
})
export class SideBarHeadingComponent implements OnInit {
  @Input() sideBar:Partial<SideBarHeading> = {}
  constructor() { }

  ngOnInit(): void {
  }

}
