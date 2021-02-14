import { Component, OnInit, Input } from '@angular/core';
import { SubMenus } from '../model';

@Component({
  selector: 'app-li-div-com',
  templateUrl: './li-div-com.component.html',
  styleUrls: ['./li-div-com.component.css']
})
export class LiDivComComponent implements OnInit {
  @Input() subMenu:Partial<SubMenus> = {}  
  constructor() { }

  ngOnInit(): void {
  }

}
