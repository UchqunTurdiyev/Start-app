import { withLayout } from '@/layouts/layout';
import Seo from '@/layouts/seo/seo';
import { FaqPageComponent } from '@/page-component';
import { useTranslation } from 'react-i18next';

function FaqPage() {
	const { t } = useTranslation();
	return (
		<Seo metaTitle={`${t('faq_page_title', { ns: 'seo' })}`} metaDescription={`${t('faq_page_description', { ns: 'seo' })}`}>
			{' '}
			<FaqPageComponent />
		</Seo>
	);
}

export default withLayout(FaqPage);
