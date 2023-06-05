import Seo from '@/layouts/seo/seo';
import { AuthPageComponent } from '@/page-component';

const AuthPage = () => {
	return (
		<Seo metaTitle='Auth' metaDescription='Login or create your account for using sammi platform'>
			<AuthPageComponent />
		</Seo>
	);
};

export default AuthPage;
