import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SponsorPageComponent } from './sponsor-page/sponsor-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "sponsors", component: SponsorPageComponent },
  { path: "contact", component: ContactPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }

