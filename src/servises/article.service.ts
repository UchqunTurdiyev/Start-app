import { ArticleType } from '@/interfaces/article.interface';
import { Language } from '@/interfaces/constants.interfaces';
import { gql, request } from 'graphql-request';

const grapqhlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const Articles = {
	async getArtciles(lng: Language) {
		const query = gql`
			query Articles($lng: Language) {
				articles(where: { language: $lng }) {
					createdAt
					id
					title
					excerp
					slug
					image {
						url
					}
					language
					author {
						name
						avatar {
							url
						}
					}
					description {
						text
					}
				}
			}
		`;

		const result = await request<{ articles: ArticleType[] }>(grapqhlAPI, query, { lng });
		return result.articles;
	},
	async getDetailedArticle(slug: string) {
		const query = gql`
			query DeatiledArticle($slug: String!) {
				article(where: { slug: $slug }) {
					createdAt
					id
					title
					excerp
					slug
					image {
						url
					}
					language
					author {
						name
						avatar {
							url
						}
					}
					description {
						text
						raw
					}
				}
			}
		`;

		const result = await request<{ article: ArticleType }>(grapqhlAPI, query, { slug });
		return result.article;
	},
};
