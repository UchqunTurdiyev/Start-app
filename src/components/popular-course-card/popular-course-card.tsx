import React from 'react';
import { PopularCourseCardProps } from './popular-course.props';
import { Divider, Flex, Heading, HStack, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { CiViewList } from 'react-icons/ci';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { SiGoogleanalytics } from 'react-icons/si';
// @ts-ignore
import { ReactStars } from 'react-stars';

function PopularCourseCard({ item }: PopularCourseCardProps) {
	return (
		<Stack key={item.title} spacing={3} p={3} cursor={'pointer'}>
			<Image src={item.image} alt={item.title} objectFit={'cover'} h={'210px'} w={'full'} borderRadius={'lg'} />
			<HStack>
				<Text color={'#e59819'}>{item.reviewAvarage.toFixed(1)}</Text>
				{/*<ReactStars edit={false} value={item.reviewAvarage} color2={'#e59819'} />*/}

				<Text opacity={'0.8'}>({item.reviewCount})</Text>
			</HStack>
			<Heading fontSize={'xl'}>{item.title}</Heading>
			<HStack>
				<Flex align={'center'} gap={1}>
					<Icon as={CiViewList} />
					<Text>{item.lessonCount} Lesson</Text>
				</Flex>
				<Flex align={'center'} gap={1}>
					<Icon as={AiOutlineClockCircle} />
					<Text>{item.totalHour} Hour</Text>
				</Flex>
				<Flex align={'center'} gap={1}>
					<Icon as={SiGoogleanalytics} />
					<Text fontSize={'16px'}>{item.level}</Text>
				</Flex>
			</HStack>
			<Divider />
			<Flex justify={'space-between'} align={'center'}>
				<HStack align={'center'}>
					<Image src={item.author.avatar} alt={item.author.firstName} w={50} h={50} borderRadius={'full'} />
					<Text>
						{item.author.firstName} {item.author.lastName[0]}.
					</Text>
				</HStack>
				<Text>{item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Text>
			</Flex>
		</Stack>
	);
}

export default PopularCourseCard;
