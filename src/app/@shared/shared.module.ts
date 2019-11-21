import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactBarComponent } from './components/contact-bar/contact-bar.component';
import { ContactBarItemComponent } from './components/contact-bar/contact-bar-item/contact-bar-item.component';
import { IntroComponent } from './components/intro/intro.component';

@NgModule({
  declarations: [ContactBarComponent, ContactBarItemComponent, IntroComponent],
  imports: [CommonModule],
  exports: [ContactBarComponent, ContactBarItemComponent, IntroComponent]
})
export class SharedModule {}
