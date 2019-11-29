import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPageRoutingModule } from './blog-page-routing.module';
import { BlogPageComponent } from './components/blog-page.component';
import { SharedModule } from '@app/@shared/shared.module';


@NgModule({
  declarations: [BlogPageComponent],
  imports: [
    CommonModule,
    BlogPageRoutingModule,
    SharedModule
  ]
})
export class BlogPageModule { }
