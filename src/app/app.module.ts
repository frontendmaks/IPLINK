import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/blocks/banner/banner.component';
import { HeaderComponent } from './components/blocks/header/header.component';
import { FooterComponent } from './components/blocks/footer/footer.component';
import { AboutComponent } from './components/blocks/about/about.component';
import { AdvantagesComponent } from './components/blocks/advantages/advantages.component';
import { PlansComponent } from './components/blocks/plans/plans.component';
import { ConnectComponent } from './components/blocks/connect/connect.component';
import { ContactsComponent } from './components/blocks/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    AdvantagesComponent,
    PlansComponent,
    ConnectComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: LandingComponent}
      // {path: 'about', component: AboutComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
