import { ArticleType } from '@/interfaces/article.interface';
import { Language } from '@/interfaces/constants.interfaces';
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
	req,
}) => {
	const slug: string = query.slug as string;
	const lng: Language = req.cookies.i18next as Language;
	const article = await Articles.getDetailedArticle(slug);

	if (article.language == lng) {
		return {
			props: {
				article,
			},
		};
	}
	return { redirect: { destination: '/articles', permanent: false } };
};

interface articleDetailedPageProps extends Record<string, unknown> {
	article: ArticleType;
}
