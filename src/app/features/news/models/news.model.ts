interface News {
  id?: string;
  mainTitle: string;
  subTitle: string;
  body: string;
  poster?: string;
  created_at?:Date
updated_at?:Date
}

export default News;
