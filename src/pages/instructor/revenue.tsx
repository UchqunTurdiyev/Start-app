import { withInstructorLayout } from '@/layouts/instructor';
import { RevenuePageComponent } from '@/page-component';
import { NextPage } from 'next';
import React from 'react';

const Revenue: NextPage = () => {
	return <RevenuePageComponent />;
};

export default withInstructorLayout(Revenue);
