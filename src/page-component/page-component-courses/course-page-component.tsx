import React from 'react';
import SectionTitle from '@/components/section-title/section-title';
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Flex,
	Input,
	Radio,
	RadioGroup,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { courses, coursesFilter } from '@/config/constants';
// @ts-ignore
import ReactStars from 'react-stars';
import { FilterItemProps } from './course-component-page.props';
import { AllCoursesCard } from '@/components';
import {useTranslation} from "react-i18next";

function CoursePageComponent() {
	const {t} = useTranslation();

	// @ts-ignore
	return (
		<>
			<SectionTitle title={t('title', {ns: 'course'})} subtitle={t('description', {ns: 'course'})} />
			<Box pos={'relative'}>
				<Input h={14} w={'full'} bg={'white'} color={'gray.900'} placeholder={t('search_input_placeholder', {ns: 'course'}) || ''} _placeholder={{ color: 'gray.500' }} />
				<Button colorScheme={'facebook'} pos={'absolute'} top={2} right={2} zIndex={999}>
					{t('search_input_btn', {ns: 'course'}) || ''}
				</Button>
			</Box>
			<Flex mt={5} gap={5} direction={{base: 'column', lg:'row'}}>
				<Box
					w={{base: '100%', lg: '30%'}}
					h={'fit-content'}
					p={5}
					border={'1px'}
					borderRadius={'lg'}
					borderColor={useColorModeValue('gray.200', 'gray.700')}
				>
					{coursesFilter.map((item, idx) => (
						<FilterItem item={item} idx={idx} key={item.id} />
					))}
				</Box>
				<Box w={{base: '100%', md: '70%'}}>
					{courses.map(item => (
						<AllCoursesCard key={item.title} course={item} />
					))}
				</Box>
			</Flex>
		</>
	);
}

export default CoursePageComponent;

const FilterItem = ({ item, idx }: { item: FilterItemProps; idx: number }) => {
	const {t} = useTranslation();

	const renderFilter = () => (
		<>
			{item.categoryList.map(c => (
				<Radio key={c.id} value={c.id} colorScheme={'facebook'}>
					<Flex>
						{item.id == 'rating' && <ReactStars value={Number(c.id)} edit={false} color2={'#e59819'} />}
						{t(c.name, {ns: 'course'})}
					</Flex>
				</Radio>
			))}
		</>
	);
	return (
		<Accordion allowToggle key={item.id} defaultIndex={idx === 0 ? 0 : idx}>
			<AccordionItem borderTop={'none'}>
				<AccordionButton>
					<Text fontSize={'xl'} flex='1' textAlign='left'>
						{t(item.title, {ns: 'course'})}
					</Text>
					<AccordionIcon />
				</AccordionButton>
				<AccordionPanel pb={4}>
					<RadioGroup>
						<Stack>{renderFilter()}</Stack>
					</RadioGroup>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};
