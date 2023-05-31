import { withLayout } from '@/layouts/layout';
import { DetailedCourseComponent } from '@/page-component';
import React from 'react';

function DetailedCoursePage() {
	return <DetailedCourseComponent />;
}
export default withLayout(DetailedCoursePage);
