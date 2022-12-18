import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SponsorPageComponent } from './sponsor-page/sponsor-page.component';
import { TeamPresentationComponent } from './team-presentation/team-presentation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TournamentComponent } from './tournament/tournament.component';
import { ShopComponent } from './shop/shop.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "sponsors", component: SponsorPageComponent },
  { path: "team-presentation", component: TeamPresentationComponent },
  { path: "shop", component: ShopComponent },
  { path: "tournament", component: TournamentComponent },
  { path: "contact", component: ContactPageComponent },
  { path: "**", pathMatch: 'full', component: NotFoundComponent }
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

