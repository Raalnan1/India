import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Routes/home/home.component';
import { LinkShareComponent } from './Routes/link-share/link-share.component';
import { VideosComponent } from './Routes/videos/videos.component';
import { HotelComponent } from './Routes/hotel/hotel.component';
import { IndiaComponent } from './Routes/india/india.component';

const routes: Routes = [
  { path: '', component: IndiaComponent }
  , { path: 'Hotel', component: HotelComponent }
  , { path: 'India', component: IndiaComponent }
  , { path: 'LinkShare', component: LinkShareComponent }
  , { path: 'Videos', component: VideosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
