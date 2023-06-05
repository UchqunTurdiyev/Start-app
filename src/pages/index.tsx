import { withLayout } from '@/layouts/layout';
import Seo from '@/layouts/seo/seo';
import { HomePageComponent } from '@/page-component';

const Home = () => {
	return (
		<Seo>
			<HomePageComponent />
		</Seo>
	);
};

export default withLayout(Home);
