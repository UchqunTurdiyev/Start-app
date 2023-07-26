import { withInstructorLayout } from '@/layouts/instructor';
import { EditDetailedCoursePageComponent } from '@/page-component';
import { NextPage } from 'next';
import React from 'react';

const EditDetailedCourses: NextPage = () => {
	return <EditDetailedCoursePageComponent />;
};

export default withInstructorLayout(EditDetailedCourses);
