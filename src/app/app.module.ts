import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PowerPipe } from './pipes/power.pipe';
import { RemoveSpacePipe } from './pipes/remove-space.pipe';
import { PriceBetweenPipe } from './pipes/price-between.pipe';
import { SearchByNamePipe } from './pipes/search-by-name.pipe';
import { SortProductsPipe } from './pipes/sort-products.pipe';
import { LoginComponent } from './components/login/login.component';
import { HelpComponent } from './components/help/help.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { DemoComponent } from './components/demo/demo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DisplayAllProductComponent } from './components/display-all-product/display-all-product.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    PowerPipe,
    RemoveSpacePipe,
    PriceBetweenPipe,
    SearchByNamePipe,
    SortProductsPipe,
    LoginComponent,
    HelpComponent,
    ContactComponent,
    HomeComponent,
    DemoComponent,
    PageNotFoundComponent,
    AddProductComponent,
    DisplayAllProductComponent,
    ReactiveComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
