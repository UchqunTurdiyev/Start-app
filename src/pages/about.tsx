import { withLayout } from '@/layouts/layout';
import Seo from '@/layouts/seo/seo';
import { AboutPageComponent } from '@/page-component';

function AboutPage() {
	return (
		<Seo metaTitle='About Us' metaDescription='About Us platform'>
			<AboutPageComponent />
		</Seo>
	);
}

export default withLayout(AboutPage);
