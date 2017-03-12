import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '../home-page/home-page.component';
import { AboutPageComponent } from '../about-page/about-page.component';
import { ContactPageComponent } from '../contact-page/contact-page.component';
import { WorkPageComponent } from '../work-page/work-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'work', component: WorkPageComponent },
//  { path: 'artist/:id', component: ArtistComponent },
//  { path: 'album/:id', component: AlbumComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
export const RoutingComponents = [ HomePageComponent, AboutPageComponent, ContactPageComponent, WorkPageComponent ];
