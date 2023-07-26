import { withInstructorLayout } from '@/layouts/instructor';
import { InstructorCreateCourseComponent } from '@/page-component';
import { NextPage } from 'next';
import React from 'react';

const CreateCourse: NextPage = () => {
	return <InstructorCreateCourseComponent />;
};

export default withInstructorLayout(CreateCourse);
