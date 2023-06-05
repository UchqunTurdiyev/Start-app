import { withLayout } from '@/layouts/layout';
import Seo from '@/layouts/seo/seo';
import { PricingPageComponent } from '@/page-component';

function PricingPage() {
	return (
		<Seo metaTitle='Sammi | Pricing Package' metaDescription='The best package for using  and doing lesson on sammi academik'>
			<PricingPageComponent />
		</Seo>
	);
}

export default withLayout(PricingPage);
