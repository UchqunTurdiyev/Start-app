import { InstructorEditCourseCard } from '@/components';
import SectionTitle from '@/components/section-title/section-title';
import { courses } from '@/config/constants';
import { Grid } from '@chakra-ui/react';
import React from 'react';

const EditPageCourseComponent = () => {
	return (
		<>
			<SectionTitle title='Edit courses' subtitle='Managing courses and create curriculum for your courses' />
			<Grid gridTemplateColumns={'1fr 1fr'} gap={4}>
				{courses.map(item => (
					<InstructorEditCourseCard key={item.slug} item={item} />
				))}
			</Grid>
		</>
	);
};

export default EditPageCourseComponent;
