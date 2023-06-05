import { withLayout } from '@/layouts/layout';
import Seo from '@/layouts/seo/seo';
import { HomePageComponent } from '@/page-component';

const Home = () => {
	return (
		<Seo metaTitle='Sammi | Pricing Package' metaDescription='The best package for using  and doing lesson on sammi academik'>
			<HomePageComponent />
		</Seo>
	);
};

export default withLayout(Home);
