import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetails } from './components/news-details/news-details';
import { NewsList } from './components/news-list/news-list';
import { MainLayout } from '../../components/main-layout/main-layout';

const routes: Routes = [
  {

    path:'',
    // component: MainLayout,
    children:[

 {
    path:'',
    component:NewsList
  },
 {
    path:'list',
    component:NewsList
  },
  {
    path:'details/:id',
    component:NewsDetails
  }

    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
