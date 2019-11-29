import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/@shared/shared.module';
import { MenuPageRoutingModule } from './menu-page-routing.module';

import { MenuPageComponent } from './components/menu-page.component';

@NgModule({
  declarations: [
    MenuPageComponent
  ],
  imports: [
    CommonModule,
    MenuPageRoutingModule,
    SharedModule
  ]
})
export class MenuPageModule { }
