import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//added by me
import {MaterialModule} from './material.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Route} from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home.component';
import { CharComponent } from './components/char.component';
import { ShipComponent } from './components/ship.component';
import { ChardetailComponent } from './components/chardetail.component';

const ROUTES: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'character',
    children: [
      { path: '', component: CharComponent },
      { path: ':id', component: CharComponent }
    ]
  },
  { path: 'spaceship',
  children: [
    { path: '', component: ShipComponent },
    { path: ':id', component: ShipComponent }
  ]},
  { path: 'chardetail/:charId', component: ChardetailComponent },

  { path: "**", redirectTo:'/home', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharComponent,
    ShipComponent,
    ChardetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
