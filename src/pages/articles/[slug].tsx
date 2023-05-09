import { ArticleType } from '@/interfaces/article.interface';
import { withLayout } from '@/layouts/layout';
import { ArticleDetailedComponent } from '@/page-component';
import { Articles } from '@/servises/article.service';
import { GetServerSideProps } from 'next';

function ArticleDetailPage({ article }: articleDetailedPageProps) {
	return <ArticleDetailedComponent article={article} />;
}

export default withLayout(ArticleDetailPage);

export const getServerSideProps: GetServerSideProps<articleDetailedPageProps> = async ({
	query,
}) => {
	const article = await Articles.getDetailedArticle(query.slug as string);

	return {
		props: {
			article,
		},
	};
};

interface articleDetailedPageProps extends Record<string, unknown> {
	article: ArticleType;
}
