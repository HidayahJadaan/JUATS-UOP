import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing-module';
import { NewsDetails } from './components/news-details/news-details';
import { FormsModule } from '@angular/forms';
import { NewsList } from './components/news-list/news-list';
import { NewsService } from './services/news-service';


@NgModule({
  declarations: [
    NewsList,
    NewsDetails
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    FormsModule
  ],
  providers:[
    {provide:NewsService, useClass:NewsService}
  ]
})
export class NewsModule { }
