import { withLayout } from '@/layouts/layout';
import Seo from '@/layouts/seo/seo';
import { AboutPageComponent } from '@/page-component';
import { useTranslation } from 'react-i18next';

function AboutPage() {
	const { t } = useTranslation();
	return (
		<Seo metaTitle={`${t('about_page_title', { ns: 'seo' })}`} metaDescription={`${t('about_page_description', { ns: 'seo' })}`}>
			<AboutPageComponent />
		</Seo>
	);
}

export default withLayout(AboutPage);
