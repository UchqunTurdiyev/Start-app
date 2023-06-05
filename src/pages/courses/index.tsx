import React from 'react';
import { CoursePageComponent } from '@/page-component';
import { withLayout } from '@/layouts/layout';
import Seo from '@/layouts/seo/seo';
import { useTranslation } from 'react-i18next';

function Courses() {
	const { t } = useTranslation();

	return (
		<Seo
			metaTitle={`${t('course_page_title', { ns: 'seo' })}`}
			metaDescription={`${t('course_page_description', { ns: 'seo' })}`}
		>
			<CoursePageComponent />
		</Seo>
	);
}

export default withLayout(Courses);
