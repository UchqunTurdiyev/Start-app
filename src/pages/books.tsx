import React from 'react';
import { BooksPageComponent } from '@/page-component';
import { withLayout } from '@/layouts/layout';
import Seo from '@/layouts/seo/seo';
import { useTranslation } from 'react-i18next';

function Books() {
	const { t } = useTranslation();

	return (
		<Seo metaTitle={`${t('books_page_title', { ns: 'seo' })}`} metaDescription={`${t('books_page_description', { ns: 'seo' })}`}>
			<BooksPageComponent />
		</Seo>
	);
}

export default withLayout(Books);
