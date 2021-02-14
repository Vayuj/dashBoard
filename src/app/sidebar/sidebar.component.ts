import { Component, OnInit } from '@angular/core';
import {NavLiComp, SideBarMenu} from '../model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  navLiComp:Array<NavLiComp> = [
    {
      span:"Dashboard",
      class:"fa fa-fw fa-tachometer"
    }
  ];
  sideBarMenu:Array<SideBarMenu>=[
    {
      title:"INTERFACE",
      options:[
        {
          title:"Components",
          logo:"fa fa-fw fa-cog",
          isCollapsed:true,
          id1:"collapseTwo",
          id2:"Two",
          subMenus:[
            {
              title:"Custom Components",
              subMenuOptions:[
                {
                  title:"Button",
                  url:"/buttons"
                },
                {
                  title:"Cards",
                  url:"/cards"
                }
              ]
            }
          ]
        },
        {
          title:"Utilities",
          logo:"fa fa-fw fa-wrench",
          isCollapsed:true,
          id1:"collapseUtilities",
          id2:"Utilities",
          subMenus:[
            {
              title:"Custom Utilities",
              subMenuOptions:[
                {
                  title:"Colours",
                  url:"/colors"
                },
                {
                  title:"Borders",
                  url:"/borders"
                },
                {
                  title:"Animations",
                  url:"/animations"
                },
                {
                  title:"Others",
                  url:"/others"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title:"ADDONS",
      options:[
        {
          title:"Pages",
          logo:"fa fa-fw fa-folder",
          isCollapsed:true,
          id1:"collapsePages",
          id2:"Pages",
          subMenus:[
            {
              title:"Login Screen",
              subMenuOptions:[
                {
                  title:"Login",
                  url:"/login"
                },
                {
                  title:"Register",
                  url:"/register"
                },
                {
                  title:"Password",
                  url:"/password"
                }
              ]
            },
            {
              title:"Other Pages",
              subMenuOptions:[
                {
                  title:"404 Page",
                  url:"/error"
                },
                {
                  title:"Blank Page",
                  url:"/blank"
                }
              ]
            }
          ]
         },
         {
          title:"Charts",
          logo:"fa fa-fw fa-table",
          isCollapsed:false,
          link:"/charts",
          subMenus:[]
         },
         {
          title:"Tables",
          logo:"fa fa-fw fa-table",
          isCollapsed:false,
          link:"/tables",
          subMenus:[]
         }
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
