import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './Components/product-add/product-add.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { NavComponent } from './Components/nav/nav.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductListComponent,
    NavComponent,
    PageNotFoundComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // es para que funcion [(ngModel) = "..."]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
