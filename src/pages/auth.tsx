import Seo from '@/layouts/seo/seo';
import { AuthPageComponent } from '@/page-component';
import { useTranslation } from 'react-i18next';

const AuthPage = () => {
	const { t } = useTranslation();
	return (
		<Seo metaTitle={`${t('auth_page_title', { ns: 'seo' })}`} metaDescription={`${t('auth_page_description', { ns: 'seo' })}`}>
			<AuthPageComponent />
		</Seo>
	);
};

export default AuthPage;
