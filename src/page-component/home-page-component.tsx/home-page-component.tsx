import { Categories, Hero, HowItWorks, Instruktors, Newsletter, PopularCourse, Sposorship, Testimonals } from '@/components';
import { Stack } from '@chakra-ui/react';
import React from 'react';

function HomePageComponent() {
	return (
		<Stack spacing={10}>
			<Hero />
			<Categories />
			<PopularCourse />
			<HowItWorks />
			<Instruktors />
			<Testimonals />
			<Newsletter />
			<Sposorship />
		</Stack>
	);
}

export default HomePageComponent;
