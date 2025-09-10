import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from './components/main-layout/main-layout';
import { AboutUs } from './components/pages/about-us/about-us';
import { ContactUs } from './components/pages/contact-us/contact-us';
import { PhotoAlbum } from './components/pages/photo-album/photo-album';
import { Members } from './components/pages/members/members';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'news',
    // component: MainLayout,

    loadChildren: () =>
      import('./features/news/news-module').then((m) => m.NewsModule),

  },
  {
    path: 'universities',
    component: MainLayout,

    loadChildren: () =>
      import('./features/universities/universities-module').then((m) => m.UniversitiesModule),

  },

  {
    path: '',
    // component: MainLayout,
    children: [
      { path: 'home', component: MainLayout },
      { path: 'about-us', component: AboutUs },
      { path: 'photo-album', component: PhotoAlbum },
      { path: 'members', component: Members },
      { path: 'contact-us', component: ContactUs },
    ],
  },
  // { path: '', component: HomePageComponent },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
