import { withInstructorLayout } from '@/layouts/instructor';
import { StudentsPageComponent } from '@/page-component';
import { NextPage } from 'next';
import React from 'react';

const Students: NextPage = () => {
	return <StudentsPageComponent />;
};

export default withInstructorLayout(Students);
