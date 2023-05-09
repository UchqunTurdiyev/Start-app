export interface ArticleType {
	createdAt: string;
	excerp: string;
	id: string;
	image: {
		url: string;
	};
	slug: string;
	title: string;
	author: AuthorType;
	language: string;
	description: {
		text: string;
	};
}

export interface AuthorType {
	name: string;
	avatar: {
		url: string;
	};
}
