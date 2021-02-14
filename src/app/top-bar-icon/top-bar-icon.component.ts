import { Component, OnInit, Input } from '@angular/core';
import { Icon } from '../model'
 
@Component({
  selector: 'app-top-bar-icon',
  templateUrl: './top-bar-icon.component.html',
  styleUrls: ['./top-bar-icon.component.css']
})
export class TopBarIconComponent implements OnInit {
  @Input() iconInfo:Partial<Icon> = {}
  constructor() { }

  ngOnInit(): void {
  }

}
