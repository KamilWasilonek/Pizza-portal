import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactBarComponent } from './components/contact-bar/contact-bar.component';
import { ContactBarItemComponent } from './components/contact-bar/contact-bar-item/contact-bar-item.component';
import { IntroComponent } from './components/intro/intro.component';
import { BannerComponent } from './components/banner/banner.component';
import { ServicesComponent } from './components/services/services.component';
import { ServiceItemComponent } from './components/services/service-item/service-item.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';

@NgModule({
  declarations: [
    ContactBarComponent,
    ContactBarItemComponent,
    IntroComponent,
    BannerComponent,
    ServicesComponent,
    ServiceItemComponent,
    MenuComponent,
    MenuItemComponent
  ],
  imports: [CommonModule],
  exports: [
    ContactBarComponent,
    ContactBarItemComponent,
    IntroComponent,
    BannerComponent,
    ServicesComponent,
    MenuComponent,
    MenuItemComponent
  ]
})
export class SharedModule {}
