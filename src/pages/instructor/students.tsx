import { withInstructorLayout } from '@/layouts/instructor';
import { InstructorStudentsPageComponent } from '@/page-component';
import { NextPage } from 'next';
import React from 'react';

const Students: NextPage = () => {
	return <InstructorStudentsPageComponent />;
};

export default withInstructorLayout(Students);
