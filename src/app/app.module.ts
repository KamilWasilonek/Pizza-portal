import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavBarComponent } from './@core/components/nav-bar/nav-bar.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FooterComponent } from './@core/components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, ErrorPageComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
