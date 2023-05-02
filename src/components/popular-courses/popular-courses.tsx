import React from 'react';
import SectionTitle from '../section-title/section-title';
import Carousel from 'react-multi-carousel';
import { courseCarousel } from '@/config/carousel';
import { useTranslation } from 'react-i18next';
import { courses } from '@/config/constants';
import PopularCourseCard from '@/components/popular-course-card/popular-course-card';

const PopularCourse = () => {
	const { t } = useTranslation();
	return (
		<>
			<SectionTitle
				title={t('popular_courses_title', { ns: 'home' })}
				subtitle={t('popular_courses_description', { ns: 'home' })}
			/>
			<Carousel responsive={courseCarousel} arrows={true} showDots={false} autoPlay={true} autoPlaySpeed={3000} infinite>
				{courses.map(item => (
					<PopularCourseCard item={item} key={item.title} />
				))}
			</Carousel>
		</>
	);
};

export default PopularCourse;
