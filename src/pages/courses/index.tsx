import React from 'react';
import { CoursePageComponent } from '@/page-component';
import { withLayout } from '@/layouts/layout';
import Seo from '@/layouts/seo/seo';

function Courses() {
	return (
		<Seo metaTitle='All Course'>
			<CoursePageComponent />
		</Seo>
	);
}

export default withLayout(Courses);
