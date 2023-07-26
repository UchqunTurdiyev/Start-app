import { withInstructorLayout } from '@/layouts/instructor';
import { InstructorDrafCourseComponent } from '@/page-component';
import { NextPage } from 'next';
import React from 'react';

const DraftCourses: NextPage = () => {
	return <InstructorDrafCourseComponent />;
};

export default withInstructorLayout(DraftCourses);
