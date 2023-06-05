import { withLayout } from '@/layouts/layout';
import Seo from '@/layouts/seo/seo';
import { FaqPageComponent } from '@/page-component';

function FaqPage() {
	return (
		<Seo metaTitle='Sammi | Faq' metaDescription='Frequently Asked Question'>
			{' '}
			<FaqPageComponent />
		</Seo>
	);
}

export default withLayout(FaqPage);
