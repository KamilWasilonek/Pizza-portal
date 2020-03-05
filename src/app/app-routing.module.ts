import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import(`./@modules/home-page/home-page.module`).then(m => m.HomePageModule),
  },
  {
    path: 'menu',
    loadChildren: () => import(`./@modules/menu-page/menu-page.module`).then(m => m.MenuPageModule),
  },
  {
    path: 'services',
    loadChildren: () =>
      import(`./@modules/service-page/service-page.module`).then(m => m.ServicePageModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import(`./@modules/about-page/about-page.module`).then(m => m.AboutPageModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import(`./@modules/contact-page/contact-page.module`).then(m => m.ContactPageModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
