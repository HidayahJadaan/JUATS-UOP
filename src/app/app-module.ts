import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PhotoAlbum } from './components/pages/photo-album/photo-album';
import { Members } from './components/pages/members/members';
import { ContactUs } from './components/pages/contact-us/contact-us';
import { AboutUs } from './components/pages/about-us/about-us';
import { MainLayout } from './components/main-layout/main-layout';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from './features/shared/shared-module';

@NgModule({
  declarations: [
    App,
    PhotoAlbum,
    Members,
    ContactUs,
    AboutUs,
    MainLayout,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    CommonModule,
    SharedModule

  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
