import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightboxModule } from 'ngx-lightbox';

import { OwlModule } from 'ngx-owl-carousel';

import { ContactBarComponent } from './components/contact-bar/contact-bar.component';
import { ContactBarItemComponent } from './components/contact-bar/contact-bar-item/contact-bar-item.component';
import { IntroComponent } from './components/intro/intro.component';
import { BannerComponent } from './components/banner/banner.component';
import { ServicesComponent } from './components/services/services.component';
import { ServiceItemComponent } from './components/services/service-item/service-item.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { SelectedMenuComponent } from './components/selected-menu/selected-menu.component';
import { SelectedMenuItemsComponent } from './components/selected-menu/selected-menu-items/selected-menu-items.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ButtonOrangeComponent } from './components/elements/button-orange/button-orange.component';
import { ButtonSmallComponent } from './components/elements/button-small/button-small.component';
import { ButtonBigComponent } from './components/elements/button-big/button-big.component';
import { FormsModule } from '@angular/forms';
import { RotatedIconComponent } from './components/rotated-icon/rotated-icon.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { PricingItemComponent } from './components/pricing/pricing-item/pricing-item.component';

@NgModule({
  declarations: [
    ContactBarComponent,
    ContactBarItemComponent,
    IntroComponent,
    BannerComponent,
    ServicesComponent,
    ServiceItemComponent,
    MenuComponent,
    MenuItemComponent,
    SelectedMenuComponent,
    SelectedMenuItemsComponent,
    GalleryComponent,
    ContactComponent,
    ContactFormComponent,
    ButtonOrangeComponent,
    ButtonSmallComponent,
    ButtonBigComponent,
    RotatedIconComponent,
    AchievementsComponent,
    PricingComponent,
    PricingItemComponent
  ],
  imports: [CommonModule, LightboxModule, OwlModule, FormsModule],
  exports: [
    ContactBarComponent,
    ContactBarItemComponent,
    IntroComponent,
    BannerComponent,
    ServicesComponent,
    MenuComponent,
    MenuItemComponent,
    SelectedMenuComponent,
    GalleryComponent,
    ContactComponent,
    ContactFormComponent,
    RotatedIconComponent,
    AchievementsComponent,
    PricingComponent
  ]
})
export class SharedModule {}
