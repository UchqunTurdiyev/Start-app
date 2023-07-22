import { withLayout } from '@/layouts/layout';
import Seo from '@/layouts/seo/seo';
import { BecomeInstructorPageComponent } from '@/page-component';
import { NextPage } from 'next';
import React from 'react';

const BecomeInstructor: NextPage = () => {
	return (
		<Seo metaTitle='Become an instructor'>
			<BecomeInstructorPageComponent />
		</Seo>
	);
};
export default withLayout(BecomeInstructor);
