import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { CompanyComponent } from './company.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent, HeaderComponent, FooterComponent, CompanyComponent
  ]
})
export class AppModule { }
