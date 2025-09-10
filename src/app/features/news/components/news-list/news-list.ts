import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NewsService } from '../../services/news-service';
import News from '../../models/news.model';
import PaginatedResponse from '../../../shared/models/paginated-response.model';

@Component({
  selector: 'app-news-list',
  standalone: false,
  templateUrl: './news-list.html',
  styleUrl: './news-list.scss'
})
export class NewsList implements OnInit{

  constructor(private router:Router, private route:ActivatedRoute, private newsService:NewsService){}

 newsData: News[] = [];
  pages: number[] = [1, 2, 3, 4, 5];
  currentPage: number = 1;
  pageSize: number = 5;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
this.newsService.fillData();

// For Pagination
  this.route.queryParams.subscribe((queryParams: Params) => {
      this.currentPage = parseInt(queryParams['page'] || 1);

      this.loadNewsData();
    });

  }// END ngOnInit

loadNewsData():void{

      this.newsService
      .getAllNews(this.currentPage, this.pageSize)
      .then((response: PaginatedResponse<News>) => {
        if (this.currentPage > response.numberOfPages) {
          // this.currentPage = 1;
          // this.loadNewsData();

          this.router.navigate(['news', 'list'], {
            queryParams: { page: 1, pageSize: this.pageSize },
          });
        }
        this.newsData = response.data;
        this.pages = [];

        for (let index = 1; index <= response.numberOfPages; index++) {
          this.pages.push(index);
        }


      });
  }// END loadNewsData

}



