import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ButtonsComponent } from './buttons/buttons.component'; 
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


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'buttons',
    component:ButtonsComponent
  },
  {
    path:'cards',
    component:CardsComponent
  },
  {
    path:'colors',
    component:ColorsComponent
  },
  {
    path:'borders',
    component:BordersComponent
  },
  {
    path:'animations',
    component:AnimationsComponent
  },
  {
    path:'others',
    component:OthersComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'password',
    component:PasswordComponent
  },
  {
    path:'error',
    component:ErrorComponent
  },
  {
    path:'blank',
    component:BlankComponent
  },
  {
    path:'charts',
    component:ChartsComponent
  },
  {
    path:'tables',
    component:TablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
