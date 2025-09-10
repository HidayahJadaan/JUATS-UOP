import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../shared/services/local-storage-service';
import News from '../models/news.model';
import PaginatedResponse from '../../shared/models/paginated-response.model';


const NEWS_FILLED = 'news-filled';
const NEWS_LOCAL_STORAGE_KEY = 'news-data';


@Injectable({
  providedIn: 'root',
})



export class NewsService {

constructor(private storageService:LocalStorageService){}



fillData(){

  const filledStatus= !!this.storageService.getItemFromLocalStorage(NEWS_FILLED);

  if(!filledStatus){

    const news:News[]=[

  {
    id: "1",
    mainTitle: "New Awareness Campaign Launched in Jordanian Universities",
    subTitle: "JUATS focuses on protecting students from smoking risks",
    body: "The Jordanian Universities Association for Tobacco and Smoking Control (JUATS) announced the launch of a new awareness campaign "
        + "targeting university students. The campaign aims to raise awareness about the health and social risks of smoking, "
        + "and to encourage students to adopt a healthy lifestyle free from tobacco.",
    poster: "assets/images/news1.jpg",
    created_at: new Date("2025-09-01"),
    updated_at: new Date("2025-09-01"),
  },
  {
    id: "2",
    mainTitle: "Workshop Held: Towards Smoke-Free Universities",
    subTitle: "Strong student participation in the event",
    body: "JUATS organized a workshop titled 'Towards Smoke-Free Universities' with the participation of many students and faculty members. "
        + "The workshop discussed policies and procedures that can contribute to reducing smoking inside university campuses.",
    poster: "assets/images/news2.jpg",
    created_at: new Date("2025-08-20"),
    updated_at: new Date("2025-08-21"),
  },
  {
    id: "3",
    mainTitle: "Cooperation Agreement with the Ministry of Health",
    subTitle: "Strengthening joint efforts to fight tobacco",
    body: "JUATS signed a cooperation agreement with the Jordanian Ministry of Health "
        + "to implement joint awareness programs and conduct scientific research on the effects of smoking on youth.",
    poster: "assets/images/news3.jpg",
    created_at: new Date("2025-07-15"),
    updated_at: new Date("2025-07-16"),
  },
  {
    id: "4",
    mainTitle: "Social Media Awareness Campaign Launched",
    subTitle: "Targeting youth with engaging health messages",
    body: "JUATS launched a wide-reaching social media campaign to spread awareness messages about the harms of smoking, "
        + "focusing on addressing youth in a relatable way to increase engagement and influence.",
    poster: "assets/images/news4.jpg",
    created_at: new Date("2025-06-10"),
    updated_at: new Date("2025-06-12"),
  }
,
  {
    id: "5",
    mainTitle: "Social Media Awareness Campaign Launched",
    subTitle: "Targeting youth with engaging health messages",
    body: "JUATS launched a wide-reaching social media campaign to spread awareness messages about the harms of smoking, "
        + "focusing on addressing youth in a relatable way to increase engagement and influence.",
    poster: "assets/images/news4.jpg",
    created_at: new Date("2025-06-10"),
    updated_at: new Date("2025-06-12"),
  }
  ,
  {
    id: "6",
    mainTitle: "Social Media Awareness Campaign Launched",
    subTitle: "Targeting youth with engaging health messages",
    body: "JUATS launched a wide-reaching social media campaign to spread awareness messages about the harms of smoking, "
        + "focusing on addressing youth in a relatable way to increase engagement and influence.",
    poster: "assets/images/news4.jpg",
    created_at: new Date("2025-06-10"),
    updated_at: new Date("2025-06-12"),
  }
  ,
  {
    id: "7",
    mainTitle: "Social Media Awareness Campaign Launched",
    subTitle: "Targeting youth with engaging health messages",
    body: "JUATS launched a wide-reaching social media campaign to spread awareness messages about the harms of smoking, "
        + "focusing on addressing youth in a relatable way to increase engagement and influence.",
    poster: "assets/images/news4.jpg",
    created_at: new Date("2025-06-10"),
    updated_at: new Date("2025-06-12"),
  }
  ,
  {
    id: "8",
    mainTitle: "Social Media Awareness Campaign Launched",
    subTitle: "Targeting youth with engaging health messages",
    body: "JUATS launched a wide-reaching social media campaign to spread awareness messages about the harms of smoking, "
        + "focusing on addressing youth in a relatable way to increase engagement and influence.",
    poster: "assets/images/news4.jpg",
    created_at: new Date("2025-06-10"),
    updated_at: new Date("2025-06-12"),
  }
  ,
  {
    id: "9",
    mainTitle: "Social Media Awareness Campaign Launched",
    subTitle: "Targeting youth with engaging health messages",
    body: "JUATS launched a wide-reaching social media campaign to spread awareness messages about the harms of smoking, "
        + "focusing on addressing youth in a relatable way to increase engagement and influence.",
    poster: "assets/images/news4.jpg",
    created_at: new Date("2025-06-10"),
    updated_at: new Date("2025-06-12"),
  }
  ,
  {
    id: "10",
    mainTitle: "Social Media Awareness Campaign Launched",
    subTitle: "Targeting youth with engaging health messages",
    body: "JUATS launched a wide-reaching social media campaign to spread awareness messages about the harms of smoking, "
        + "focusing on addressing youth in a relatable way to increase engagement and influence.",
    poster: "assets/images/news4.jpg",
    created_at: new Date("2025-06-10"),
    updated_at: new Date("2025-06-12"),
  }

    ];


// Updating Local Starage Data
this.storageService.setItemInLocalStorage(NEWS_LOCAL_STORAGE_KEY, JSON.stringify(news));

this.storageService.setItemInLocalStorage(NEWS_FILLED, JSON.stringify('true'));


  }//END FILLEDSTATUS COndition


}//END FillData()

// ==============================

  getAllNews(page: number, pageSize: number): Promise<PaginatedResponse<News>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users: News[] = JSON.parse(
          this.storageService.getItemFromLocalStorage(
            NEWS_LOCAL_STORAGE_KEY
          ) || ''
        );
        const numberOfPages: number = Math.ceil(users.length / pageSize);
        const totalNumberOfItems: number = 0;
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const items: News[] = users.slice(start, end);

        const response: PaginatedResponse<News> = {
          page,
          numberOfPages,
          totalNumberOfItems,
          data: items,
        };

        resolve(response);
      }, 1500);
    });
  }// END GetAllNews()




}
