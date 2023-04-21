import React, { Fragment } from 'react';
import SectionTitle from '@/components/section-title/section-title';
import { FinishRightIcon, OnlineCourseIcon, OnlineLearningIcon, OnlineStudentIcon, RightLineIcon } from '@/icons';
import { Flex, Icon, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { howItWorks } from '@/config/constants';
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
	const { t } = useTranslation();

	const backgroundColor = useColorModeValue('gray.200', 'gray.700');
	return (
		<>
			<SectionTitle textAlign={'center'} title={t('how_it_works_title', 'home')} subtitle={t('how_it_works_description')} />

			<SimpleGrid mt={10} columns={5} spacing={10} alignItems={'center '}>
				{howItWorks.map((item, idx) => {
					const odd = idx % 2;

					return (
						<Fragment key={idx}>
							{!odd ? (
								<Stack justify={'center'} align={'center'}>
									<Flex
										w={100}
										h={100}
										justify={'center'}
										align={'center'}
										backgroundColor={backgroundColor}
										borderRadius={'full'}
									>
										<Icon as={item.icon} w={'50px'} h={'50px'} />
									</Flex>
									<Text textAlign={'center'}>{t(item.title, { ns: 'home' })}</Text>
								</Stack>
							) : (
								<Stack justify={'center'}>
									<Icon as={item.icon} w={'142px'} h={'21px'} />
								</Stack>
							)}
						</Fragment>
					);
				})}
			</SimpleGrid>
		</>
	);
};

export default HowItWorks;
