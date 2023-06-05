import React from 'react';
import { BooksPageComponent } from '@/page-component';
import { withLayout } from '@/layouts/layout';
import Seo from '@/layouts/seo/seo';

function Books() {
	return (
		<Seo metaTitle='Books' metaDescription='Books for programmist'>
			<BooksPageComponent />
		</Seo>
	);
}

export default withLayout(Books);
