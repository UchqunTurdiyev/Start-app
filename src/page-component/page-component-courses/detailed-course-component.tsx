import { Curreculm, Mentor, Overwiev, Reviews } from '@/components';
import { courses } from '@/config/constants';
import { CourseType } from '@/interfaces/course.interfaces';
import {
	Box,
	Button,
	Card,
	CardBody,
	Divider,
	Flex,
	Heading,
	Icon,
	Image,
	Stack,
	Tab,
	TabList,
	Tabs,
	Text,
	useMediaQuery,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsBarChart } from 'react-icons/bs';
import { FaBook, FaLanguage, FaRibbon, FaStar, FaUserGraduate, FaUserTie } from 'react-icons/fa';
import { GiInfinity } from 'react-icons/gi';
import { GrOverview } from 'react-icons/gr';
import { MdPlayLesson } from 'react-icons/md';
import { TbCertificate } from 'react-icons/tb';
import { TfiAlarmClock, TfiTimer } from 'react-icons/tfi';
import ReactStars from 'react-stars';
import Cookies from 'js-cookie';

export default function DetailedCourseComponent() {
	const [course, setData] = useState<CourseType>();
	const [tabIndex, setTabIndex] = useState(0);
	const { t } = useTranslation();

	const router = useRouter();
	const [media] = useMediaQuery('(min-width: 592px)');

	useEffect(() => {
		const currentCourse = courses.find(c => c.slug === router.query.slug);
		setData(currentCourse);
	}, [router.query]);

	const tabHandler = (idx: number) => {
		setTabIndex(idx);
	};

	return (
		<>
			{/* // Header content */}
			<Card>
				<CardBody pos={'relative'} p={{ base: 2, md: 5 }}>
					<Stack direction={{ base: 'column', md: 'row' }} gap={5}>
						<Box w={{ base: '100%', lg: '60%' }}>
							<Heading mt={5} fontSize={'3xl'}>
								{course?.title}
							</Heading>
							<Text mt={5}>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe reiciendis sapiente dolorum deleniti facere,
								consectetur laboriosam et enim labore totam.
							</Text>
							<Stack mt={5} direction={!media ? 'column' : 'row'} gap={1}>
								<Flex fontSize={'sm'} align={'flex-end'} gap={1}>
									<Text>5.0</Text>
									<ReactStars edit={false} value={5} />
									<Text>(10)</Text>
								</Flex>
								<Flex align={'center'} fontSize={'sm'} gap={1}>
									<Icon as={FaUserGraduate} />
									<Text>100 {t('students', { ns: 'course' })}</Text>
								</Flex>
								<Flex align={'center'} fontSize={'sm'} gap={1}>
									<Icon as={TfiAlarmClock} />
									<Text>
										{t('update_l', { ns: 'course' })} {course && format(new Date(), 'dd MMMM, yyyy')}
									</Text>
								</Flex>
							</Stack>
						</Box>
						<Box w={{ base: '100%', lg: '39%' }} position={{ base: 'relative', lg: 'absolute' }} right={{ base: 0, lg: 2 }}>
							<Card variant={'outline'} boxShadow={'dark-lg'}>
								<CardBody p={{ base: 2, lg: 5 }}>
									<Box pos={'relative'}>
										<Image
											w={'full'}
											h={'250px'}
											src={course?.image}
											alt={course?.title}
											style={{ objectFit: 'cover', borderRadius: 0 }}
										/>
										<Stack mt={5} direction={'row'} align={'flex-end'} justify={'space-between'}>
											<Heading fontSize={'2xl'}>Bepul</Heading>
											<Text textDecoration={'line-through'}>
												{course?.price.toLocaleString('en-US', { currency: 'USD', style: 'currency' })}
											</Text>
										</Stack>
										<Button mt={5} w={'full'} h={14} colorScheme={'facebook'}>
											{t('enroll', { ns: 'course' })}
										</Button>
										<Box mt={3}>
											<Flex justify={'space-between'} align={'center'} py={2} px={2} fontSize={'17px'}>
												<Flex align={'center'} gap={3}>
													<MdPlayLesson />
													<Text fontWeight={'bold'}>{t('lessons', { ns: 'course' })}</Text>
												</Flex>
												<Text>{course?.lessonCount}</Text>
											</Flex>
											<Divider />
											<Flex justify={'space-between'} align={'center'} py={2} px={2} fontSize={'17px'}>
												<Flex align={'center'} gap={3}>
													<TfiTimer />
													<Text fontWeight={'bold'}>{t('total_hour', { ns: 'course' })}</Text>
												</Flex>
												<Text>
													{course?.totalHour} {t('hour', { ns: 'course' })}
												</Text>
											</Flex>
											<Divider />
											<Flex justify={'space-between'} align={'center'} py={2} px={2} fontSize={'17px'}>
												<Flex align={'center'} gap={3}>
													<BsBarChart />
													<Text fontWeight={'bold'}>{t('level', { ns: 'course' })}</Text>
												</Flex>
												<Text>{course?.level}</Text>
											</Flex>
											<Divider />
											<Flex justify={'space-between'} align={'center'} py={2} px={2} fontSize={'17px'}>
												<Flex align={'center'} gap={3}>
													<FaLanguage />
													<Text fontWeight={'bold'}>{t('language', { ns: 'course' })}</Text>
												</Flex>
												<Text>English</Text>
											</Flex>
											<Divider />
											<Flex justify={'space-between'} align={'center'} py={2} px={2} fontSize={'17px'}>
												<Flex align={'center'} gap={3}>
													<TbCertificate />
													<Text fontWeight={'bold'}>{t('sertificate', { ns: 'course' })}</Text>
												</Flex>
												<Text>No</Text>
											</Flex>
											<Divider />
											<Flex justify={'space-between'} align={'center'} py={2} px={2} fontSize={'17px'}>
												<Flex align={'center'} gap={3}>
													<GiInfinity />
													<Text fontWeight={'bold'}>{t('access', { ns: 'course' })}</Text>
												</Flex>
												<Text>Lifetime</Text>
											</Flex>
											<Divider />
										</Box>
									</Box>
								</CardBody>
							</Card>
						</Box>
					</Stack>
				</CardBody>
			</Card>
			{/* // Tabs content */}
			<Tabs
				mt={5}
				mb={'5vh'}
				w={{ base: '100%', lg: '60%' }}
				orientation={'horizontal'}
				onChange={tabHandler}
				defaultValue={tabIndex}
				isFitted
				colorScheme='facebook'
			>
				<TabList>
					{tablist.map(tab => (
						<Tab key={tab.name} fontWeight='bold' textTransform='capitalize' w='100%' justifyContent={'center'}>
							<Icon as={tab.Icon} mr='2' display={{ base: 'none', md: 'block' }} /> {t(tab.name, { ns: 'course' })}
						</Tab>
					))}
				</TabList>
				<Box w={'full'}>
					{tabIndex === 0 && <Overwiev />}
					{tabIndex === 1 && <Curreculm />}
					{tabIndex === 2 && <Reviews />}
					{tabIndex === 3 && <Mentor />}
				</Box>
			</Tabs>
		</>
	);
}

const tablist = [
	{
		name: 'overview',
		Icon: FaRibbon,
	},
	{
		name: 'curriculum',
		Icon: FaBook,
	},
	{
		name: 'review',
		Icon: FaStar,
	},
	{
		name: 'mentor',
		Icon: FaUserTie,
	},
];
