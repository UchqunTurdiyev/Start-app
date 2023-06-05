import { withLayout } from '@/layouts/layout';
import Seo from '@/layouts/seo/seo';
import { ContactPageComponent } from '@/page-component';
import { useTranslation } from 'react-i18next';

function Contact() {
	const { t } = useTranslation();
	return (
		<Seo
			metaTitle={`${t('contact_page_title', { ns: 'seo' })}`}
			metaDescription={`${t('contact_page_description', { ns: 'seo' })}`}
		>
			<ContactPageComponent />
		</Seo>
	);
}

export default withLayout(Contact);
