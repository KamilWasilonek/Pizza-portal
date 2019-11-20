import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavBarComponent } from './@core/components/nav-bar/nav-bar.component';
import { ContactBarComponent } from './@shared/components/contact-bar/contact-bar.component';
import { ContactBarItemComponent } from './@shared/components/contact-bar/contact-bar-item/contact-bar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactBarComponent,
    ContactBarItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
