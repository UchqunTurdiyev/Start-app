import { withLayout } from '@/layouts/layout';
import Seo from '@/layouts/seo/seo';
import { PricingPageComponent } from '@/page-component';
import { useTranslation } from 'react-i18next';

function PricingPage() {
	const { t } = useTranslation();
	return (
		<Seo
			metaTitle={`${t('pricing_page_title', { ns: 'seo' })}`}
			metaDescription={`${t('pricing_page_description', { ns: 'seo' })}`}
		>
			<PricingPageComponent />
		</Seo>
	);
}

export default withLayout(PricingPage);
