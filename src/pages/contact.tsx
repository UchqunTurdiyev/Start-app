import { withLayout } from '@/layouts/layout';
import Seo from '@/layouts/seo/seo';
import { ContactPageComponent } from '@/page-component';

function Contact() {
	return (
		<Seo metaTitle='Contact' metaDescription='Contact with sammi'>
			<ContactPageComponent />
		</Seo>
	);
}

export default withLayout(Contact);
