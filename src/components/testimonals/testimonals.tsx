import React from 'react';
import SectionTitle from '@/components/section-title/section-title';
import Carousel from 'react-multi-carousel';
import { testimonalsCarousel } from '@/config/carousel';
import { Center, Icon, Text } from '@chakra-ui/react';
import { ImQuotesRight } from 'react-icons/all';

const Testimonals = () => {
	return (
		<>
			{/*eslint-disable-next-line*/}
			<SectionTitle textAlign='center' title={'Testimonials'} subtitle={'What people say about our platform'} />
			{/*<Carousel responsive={testimonalsCarousel} arrows={true} showDots={false} infinite>*/}
			{/*	{data.map((item, idx) => (*/}
			{/*		<Center key={idx} flexDirection={'column'} maxW={'container.sm'} mx={'auto'}>*/}
			{/*			<Icon as={ImQuotesRight} fontSize={100} />*/}
			{/*			<Text mt={5} textAlign={'center'}>*/}
			{/*				{item.description}*/}
			{/*			</Text>*/}
			{/*			<Text fontSize={'xl'} fontWeight={'bold'} mt={3} color={'gray.600'}>*/}
			{/*				{item.name}*/}
			{/*			</Text>*/}
			{/*		</Center>*/}
			{/*	))}*/}
			{/*</Carousel>*/}
		</>
	);
};

export default Testimonals;

const data = [
	{
		name: 'Samar Badriddinov',
		description:
			'It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.',
	},
	{
		name: 'Yusuf Khamdamov',
		description:
			'It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.',
	},
	{
		name: 'Abdulloh Oripov',
		description:
			'It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.',
	},
	{
		name: 'Shoxrux Yusupov',
		description:
			'It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life.',
	},
];
