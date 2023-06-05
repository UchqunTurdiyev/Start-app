import { withLayout } from '@/layouts/layout';
import Seo from '@/layouts/seo/seo';
import { DetailedCourseComponent } from '@/page-component';
import { useRouter } from 'next/router';
import React from 'react';

function DetailedCoursePage() {
	const router = useRouter();
	return (
		<Seo metaTitle={`Course | ${router.query.slug}`}>
			<DetailedCourseComponent />
		</Seo>
	);
}
export default withLayout(DetailedCoursePage);
