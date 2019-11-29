import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { NavBarComponent } from './@core/components/nav-bar/nav-bar.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FooterComponent } from './@core/components/footer/footer.component';
import { ContactPageComponent } from './@modules/contact-page/components/contact-page.component';
import { BlogPageComponent } from './@modules/blog-page/components/blog-page.component';
import { AboutPageComponent } from './@modules/about-page/components/about-page.component';
import { MenuPageModule } from './@modules/menu-page/menu-page.module';
import { ServicePageModule } from './@modules/service-page/service-page.module';
import { HomePageModule } from './@modules/home-page/home-page.module';
import { ContactPageModule } from './@modules/contact-page/contact-page.module';
import { BlogPageModule } from './@modules/blog-page/blog-page.module';
import { AboutPageModule } from './@modules/about-page/about-page.module';


@NgModule({
  declarations: [AppComponent, NavBarComponent, ErrorPageComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MenuPageModule,
    ServicePageModule,
    HomePageModule,
    ContactPageModule,
    BlogPageModule,
    AboutPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
