import { withInstructorLayout } from '@/layouts/instructor';
import { GetServerSideProps } from 'next';
import React from 'react';

function InstructorPage() {
	return <div>InstructorPage</div>;
}

export default withInstructorLayout(InstructorPage);

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		redirect: {
			destination: '/instructor/students',
			permanent: false,
		},
	};
};
