import { Avatar, Box, Button, Center, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { formatDistance } from 'date-fns';
import React from 'react';
import ReactStars from 'react-stars';

export default function Reviews() {
	return (
		<>
			<Heading mt={10}>Reviews</Heading>
			{data.map((item, idx) => (
				<Flex key={idx} gap={4} mt={6} borderBottomWidth={'1px'} pb={2}>
					<Avatar bg={useColorModeValue('gray.200', 'gray.600')} display={{ base: 'none', md: 'block' }} size={'md'} />
					<Box>
						<Flex align={'center'} gap={2} mt={1}>
							<Text fontWeight={'bold'}>{item.name}</Text>
							<Text>{formatDistance(new Date('20:20:2021'), new Date())} oldin</Text>
						</Flex>
						<ReactStars edit={false} value={Number(item.rating)} />
						<Text mt={2}>{item.summary}</Text>
					</Box>
				</Flex>
			))}
			<Center mt={5}>
				{data.length >= 5 && (
					<Button size={'sm'} colorScheme={'facebook'} variant={'outline'} fontWeight={'bold'}>
						More...
					</Button>
				)}
			</Center>
		</>
	);
}

const data = [
	{
		name: 'Aziz Rohimov',
		rating: '5',
		summary: 'raxmat',
	},
	{
		name: 'Axmadjon Mustafayev',
		rating: '5',
		summary: 'kurs ajoyib raxmat',
	},

	{
		name: 'Nurillo Mahmudjonov ',
		rating: '5',
		summary: "aka katta raxmat ancha narsa o'rgandim kurdan",
	},
	{
		name: "Aziz faxriddin o'g'li",
		rating: '5',
		summary: 'raxmat',
	},
	{
		name: 'Samar Badriddinov',
		rating: '5',
		summary: 'cool',
	},
];
