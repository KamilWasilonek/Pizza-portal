import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightboxModule } from 'ngx-lightbox';

import { ContactBarComponent } from './sections/contact-bar/contact-bar.component';
import { IntroComponent } from './sections/intro/intro.component';
import { ServicesComponent } from './sections/services/services.component';
import { ServiceItemComponent } from './sections/services/service-item/service-item.component';
import { MenuComponent } from './sections/menu/menu.component';
import { MenuItemComponent } from './sections/menu/menu-item/menu-item.component';
import { SelectedMenuComponent } from './sections/selected-menu/selected-menu.component';
import { SelectedMenuItemsComponent } from './sections/selected-menu/selected-menu-items/selected-menu-items.component';
import { GalleryComponent } from './sections/gallery/gallery.component';
import { ContactComponent } from './sections/contact/contact.component';
import { ContactFormComponent } from './elements/contact-form/contact-form.component';
import { ButtonOrangeComponent } from './elements/buttons/button-orange/button-orange.component';
import { ButtonSmallComponent } from './elements/buttons/button-small/button-small.component';
import { ButtonBigComponent } from './elements/buttons/button-big/button-big.component';
import { FormsModule } from '@angular/forms';
import { RotatedIconComponent } from './elements/rotated-icon/rotated-icon.component';
import { AchievementsComponent } from './sections/achievements/achievements.component';
import { PricingComponent } from './sections/pricing/pricing.component';
import { PricingItemComponent } from './sections/pricing/pricing-item/pricing-item.component';
import { SectionInfoComponent } from './sections/section-info/section-info.component';

@NgModule({
  declarations: [
    ContactBarComponent,
    IntroComponent,
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
    PricingItemComponent,
    SectionInfoComponent,
  ],
  imports: [CommonModule, LightboxModule, FormsModule],
  exports: [
    ContactBarComponent,
    IntroComponent,
    ServicesComponent,
    MenuComponent,
    MenuItemComponent,
    SelectedMenuComponent,
    GalleryComponent,
    ContactComponent,
    ContactFormComponent,
    RotatedIconComponent,
    AchievementsComponent,
    PricingComponent,
    SectionInfoComponent,
  ],
})
export class SharedModule {}
