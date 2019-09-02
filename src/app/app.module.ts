import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CartComponent } from './pages/cart/cart.component';
import {CartService} from './services/cart.service';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InstallComponent } from './pages/install/install.component';
import { ContactComponent } from './pages/contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryComponent } from './pages/category/category.component';

const appRoutes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'install', component: InstallComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    NotFoundComponent,
    CartComponent,
    InstallComponent,
    ContactComponent,
    CategoryComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
      useHash: true
    }),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
