import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './home-page/home-page.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { StyleClassModule } from 'primeng/styleclass';
import { ImageModule } from 'primeng/image';
import { SponsorPageComponent } from './sponsor-page/sponsor-page.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactPageComponent } from './contact-page/contact-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    SponsorPageComponent,
    AboutUsComponent,
    ContactPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    CarouselModule,
    ButtonModule,
    CardModule,
    StyleClassModule,
    ImageModule,
    DialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
