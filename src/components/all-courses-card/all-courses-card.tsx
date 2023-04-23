import React from 'react';
import { Box, Button, Divider, Flex, Heading, HStack, Icon, Image, Stack, Text } from '@chakra-ui/react';
import ReactStars from 'react-stars';
import { CiViewList } from 'react-icons/ci';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { SiGoogleanalytics } from 'react-icons/si';
import { BsMinecartLoaded } from 'react-icons/all';
import { AllCoursesCardProps } from './all-courses-card.props';

function AllCoursesCard({ course }: AllCoursesCardProps) {
	return (
		<>
			<HStack py={4}>
				<Flex gap={4} w={'100%'} direction={{base: 'column', md: 'row'}}>
					<Image src={course.image} alt={course.title} w={{base: '100%', md: '250px'}} h={{base: '300px', md: '250px'}} borderRadius={'lg'} objectFit={'cover'} />
					<Stack>
						<HStack>
							<Text color={'#e59819'}>{course.reviewAvarage.toFixed(1)}</Text>
							<ReactStars edit={false} value={course.reviewAvarage} color2={'#e59819'} />
							<Text opacity={'0.8'}>({course.reviewCount})</Text>
						</HStack>
						<Heading fontSize={'xl'}>{course.title}</Heading>
						<Text>
							Яман пойтахти Сано шаҳридаги мактаблардан бирида Рамазон ойи тугашига бир неча кун қолганида садақалар тарқатилган
							жойда оммавий тиқилинч юзага келди. Ҳусийларга кўра,{' '}
						</Text>
						{/*<Flex align={'center'} gap={2} direction={{base: 'column', lg: 'row'}}>*/}
						{/*	<HStack align={'center'}>*/}
						{/*		<Image src={course.author.avatar} alt={course.author.firstName} w={50} h={50} borderRadius={'full'} />*/}
						{/*		<Text>*/}
						{/*			{course.author.firstName} {course.author.lastName[0]}.*/}
						{/*		</Text>*/}
						{/*	</HStack>*/}
						{/*	<Icon as={CiViewList} />*/}
						{/*	<Text>{course.lessonCount} Lesson</Text>*/}
                        {/*     <HStack align={'center'} gap={1}>*/}
						{/*			 <Icon as={AiOutlineClockCircle} />*/}
						{/*			 <Text>{course.totalHour} Hour</Text>*/}
						{/*		 </HStack>*/}
						{/*		 <Flex align={'center'} gap={1}>*/}
						{/*			 <Icon as={SiGoogleanalytics} />*/}
						{/*			 <Text fontSize={'16px'}>{course.level}</Text>*/}
						{/*		 </Flex>*/}
						{/*</Flex>*/}
						{/*<Divider />*/}
						<Flex align={'center'} justify={'space-between'}>
							<Text fontSize={'xl'} fontWeight={'bold'}>
								{course.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
							</Text>
							<Flex gap={4}>
								<Button rightIcon={<BsMinecartLoaded />} colorScheme={'facebook'}>
									Add to card
								</Button>
								<Button colorScheme={'facebook'} variant={'outline'}>
									Detail
								</Button>
							</Flex>
						</Flex>
					</Stack>
				</Flex>
				</HStack>
			{/*<Divider />*/}
		</>
	);
}

export default AllCoursesCard;
