import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LiCompComponent } from './li-comp/li-comp.component';
import { SideBarHeadingComponent } from './side-bar-heading/side-bar-heading.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ContentComponent } from './content/content.component';
import { TopBarIconComponent } from './top-bar-icon/top-bar-icon.component';
import { CardComponent } from './card/card.component';
import { LiDivComComponent } from './li-div-com/li-div-com.component';
import { SideBarMenuComponent } from './side-bar-menu/side-bar-menu.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { ColorsComponent } from './colors/colors.component';
import { BordersComponent } from './borders/borders.component';
import { AnimationsComponent } from './animations/animations.component';
import { OthersComponent } from './others/others.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordComponent } from './password/password.component';
import { ErrorComponent } from './error/error.component';
import { BlankComponent } from './blank/blank.component';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LiCompComponent,
    SideBarHeadingComponent,
    TopBarComponent,
    ContentComponent,
    TopBarIconComponent,
    CardComponent,
    LiDivComComponent,
    SideBarMenuComponent,
    ButtonsComponent,
    HomeComponent,
    CardsComponent,
    ColorsComponent,
    BordersComponent,
    AnimationsComponent,
    OthersComponent,
    LoginComponent,
    RegisterComponent,
    PasswordComponent,
    ErrorComponent,
    BlankComponent,
    ChartsComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
