import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import(`./@modules/home-page/home-page.module`).then(
        m => m.HomePageModule
      ),
    data: { page: 'isHomePage' }
  },
  {
    path: 'menu',
    loadChildren: () =>
      import(`./@modules/menu-page/menu-page.module`).then(
        m => m.MenuPageModule
      ),
    data: { page: 'isMenuPage' }
  },
  {
    path: 'services',
    loadChildren: () =>
      import(`./@modules/service-page/service-page.module`).then(
        m => m.ServicePageModule
      ),
    data: { page: 'isServicePage' }
  },
  {
    path: 'blog',
    loadChildren: () =>
      import(`./@modules/blog-page/blog-page.module`).then(
        m => m.BlogPageModule
      ),
    data: { page: 'isBlogPage' }
  },
  {
    path: 'about',
    loadChildren: () =>
      import(`./@modules/about-page/about-page.module`).then(
        m => m.AboutPageModule
      ),
    data: { page: 'isAboutPage' }
  },
  {
    path: 'contact',
    loadChildren: () =>
      import(`./@modules/contact-page/contact-page.module`).then(
        m => m.ContactPageModule
      ),
    data: { page: 'isContactPage' }
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
