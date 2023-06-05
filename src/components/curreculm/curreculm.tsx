import { getLessonTime } from '@/helper/time_helper';
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Flex,
	Heading,
	Icon,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillPlayCircle } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';

export default function Curreculm() {
	const { t } = useTranslation();
	return (
		<>
			<Heading mt={10}>{t('curriculum', { ns: 'course' })}</Heading>
			<Flex align={'center'} gap={2} mt={3}>
				{data.length} {t('modules', { ns: 'course' })} <Icon as={GoPrimitiveDot} />
				{data.map(c => c.lessons.length).reduce((a, b) => +a + +b, 0)} {t('lessons', { ns: 'course' })}
			</Flex>
			<Accordion defaultIndex={[0]} allowToggle mr={2}>
				{data.map(el => (
					<AccordionItem key={el.title} border={'1px solid facebook.500'} borderRadius={'8px'} mt={5}>
						<AccordionButton
							h={'60px'}
							background={useColorModeValue('facebook.500', 'facebook.200')}
							color={useColorModeValue('white', 'black')}
							borderRadius={'lg'}
							_hover={{
								background: 'facebook.400',
							}}
							fontWeight={'bold'}
						>
							<Box flex={1} textAlign={'left'}>
								<AccordionIcon />
								{el.title}
							</Box>
							<Flex flex={0}>
								<Text fontSize={'sm'}>{el.lessons.length}ta&nbsp;Dars</Text>
							</Flex>
						</AccordionButton>
						<AccordionPanel pb={4}>
							{el.lessons.map(lesson => (
								<Flex key={lesson.name} justify={'space-between'} align={'center'} p={2}>
									<Flex align={'center'} gap={2} w={'80%'}>
										<Icon as={AiFillPlayCircle} color={'gray.600'} w={7} h={7} />
										<Text>{lesson.name}</Text>
									</Flex>
									<Text fontSize={'sm'}>{getLessonTime(lesson.hour, lesson.minutes, lesson.seconds)}</Text>
								</Flex>
							))}
						</AccordionPanel>
					</AccordionItem>
				))}
			</Accordion>
		</>
	);
}

const data = [
	{
		title: '1-Modul. Kursga kirish',
		lessons: [
			{
				name: '#1. Samarali kursni tugatish',
				hour: 0,
				minutes: 8,
				seconds: 59,
			},
			{
				name: '#2. Kod muharirini sozlash. VSCode',
				hour: 0,
				minutes: 12,
				seconds: 23,
			},
			{
				name: '#3. JSHint bilan ishlash',
				hour: 0,
				minutes: 13,
				seconds: 16,
			},
		],
	},
	{
		title: '2-Modul. javaScript asoslari',
		lessons: [
			{
				name: '#4. JavaScript nima',
				hour: 0,
				minutes: 18,
				seconds: 23,
			},
			{
				name: "#5. O'zgaruvchilar",
				hour: 0,
				minutes: 22,
				seconds: 20,
			},
			{
				name: "#6. Qat'iy rejim",
				hour: 0,
				minutes: 5,
				seconds: 25,
			},
		],
	},
	{
		title: '3-Modul. javaScript loyiha',
		lessons: [
			{
				name: '#35. Classlist',
				hour: 0,
				minutes: 11,
				seconds: 44,
			},
			{
				name: '#36. Delegatsiya',
				hour: 0,
				minutes: 11,
				seconds: 39,
			},
			{
				name: '#37. Loyiha, Tab',
				hour: 0,
				minutes: 18,
				seconds: 4,
			},
		],
	},
];
