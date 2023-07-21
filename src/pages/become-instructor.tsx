import { withLayout } from '@/layouts/layout';
import { BecomeInstructorPageComponent } from '@/page-component';
import { NextPage } from 'next';
import React from 'react';

const BecomeInstructor: NextPage = () => {
	return <BecomeInstructorPageComponent />;
};
export default withLayout(BecomeInstructor);
