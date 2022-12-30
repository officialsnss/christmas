import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { BannerComponent } from './banner/banner.component';
import { StartgivingchristmasComponent } from './startgivingchristmas/startgivingchristmas.component';
import { LotofloveComponent } from './lotoflove/lotoflove.component';
import { ShareagiftComponent } from './shareagift/shareagift.component';
import { NewgiftComponent } from './newgift/newgift.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { DashoardComponent } from './dashoard/dashoard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BannerComponent,
    StartgivingchristmasComponent,
    LotofloveComponent,
    ShareagiftComponent,
    NewgiftComponent,
    NewsletterComponent,
    LoginComponent,
    SignupComponent,
    DashoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
