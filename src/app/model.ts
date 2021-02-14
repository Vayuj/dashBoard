export interface NavLiComp {
    span:string;
    class:string;
}

export interface SideBarHeading{
    heading:string;
}

export interface Icon{
    class:string;
    span:string;
} 

interface Value{
    isEnabled:boolean;
    key:string;
}

export interface Card{
    color:string;
    title:string;
    time:Value;
    currency:Value;
    num:String;
    bar:boolean;
    logo:string;
}

interface SubMenuOptions{
    title:string;
    url:string;
}

export interface SubMenus{
    title:string;
    subMenuOptions?:Array<SubMenuOptions>;
}

export interface Option{
    title:string;
    subMenus?:Array<SubMenus>;
    logo:string;
    isCollapsed:boolean;
    id1?:string;
    id2?:string;
    link?:string;
}

export interface SideBarMenu{
    title:string;
    options:Array<Option>;
}