import { ArticleType } from '@/interfaces/article.interface';

export interface ArticlePageProps {
	articles: ArticleType[];
}

export interface ArticleDetailedProps {
	article: ArticleType;
}
