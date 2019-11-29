import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageRoutingModule } from './about-page-routing.module';
import { AboutPageComponent } from './components/about-page.component';
import { SharedModule } from '@app/@shared/shared.module';

@NgModule({
  declarations: [AboutPageComponent],
  imports: [CommonModule, AboutPageRoutingModule, SharedModule]
})
export class AboutPageModule {}
