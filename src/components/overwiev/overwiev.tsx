import { Box, Flex, Grid, Heading, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { BsCheck } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';

export default function Overwiev() {
	const whatYouLearn = 'AJAX, JavaScript, Fetch, API, JSON, Promise, OOP, ';
	const requirement = 'Basic HTML, CSS, JavaScript, SASS, Adevansed API';
	return (
		<>
			<Heading mt={10}>Overwiev</Heading>
			<Text mt={3}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique nihil ab nam adipisci atque nisi, dolorum expedita
				beatae accusantium libero?
			</Text>
			<Heading mt={10}>What you will learn</Heading>
			<Grid mt={5} gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}>
				{whatYouLearn.split(', ').map((item, idx) => (
					<Flex key={idx} gap={3} alignItems={'center'} my={1}>
						<Icon as={BsCheck} w={6} h={6} borderRadius={'100%'} p={1} />
						<Text>{item}</Text>
					</Flex>
				))}
			</Grid>
			<Heading mt={10}>Required</Heading>
			<Box mt={3}>
				{requirement.split(', ').map((item, idx) => (
					<Flex key={idx} gap={3} alignItems={'center'} my={1}>
						<Icon as={GoPrimitiveDot} w={6} h={6} borderRadius={'100%'} p={1} />
						<Text>{item}</Text>
					</Flex>
				))}
			</Box>
		</>
	);
}
