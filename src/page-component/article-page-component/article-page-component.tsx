import { testimonalsCarousel } from '@/config/carousel';
import { calculateEstimatedReadingTime } from '@/helper/time_helper';
import {
	Avatar,
	Box,
	Card,
	CardBody,
	Divider,
	Grid,
	HStack,
	Heading,
	Image,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-multi-carousel';
import { ArticlePageProps } from './article-page.ptops';

export default function ArticlePageComponent({ articles }: ArticlePageProps) {
	const cardBackgroundColor = useColorModeValue('white', 'gray.900');
	const { t } = useTranslation();
	return (
		<>
			<Card my={10}>
				<CardBody>
					<Carousel responsive={testimonalsCarousel}>
						{articles.map(item => (
							<Box
								key={item.id}
								w={'full'}
								h={{ base: '45vh', lg: '60vh' }}
								backgroundImage={`url(${item.image.url})`}
								backgroundPosition={'center'}
								backgroundSize={'cover'}
								backgroundRepeat={'no-repeat'}
								pos={'relative'}
							>
								<Link href={`/articles/${item.slug}`}>
									<Box
										pos={'absolute'}
										top={0}
										left={0}
										right={0}
										bottom={0}
										bg={'rgba(0, 0, 0, .7)'}
										cursor={'pointer'}
									/>
									<Stack
										justify={'center'}
										spacing={3}
										w={{ base: '100%', lg: '70%' }}
										pl={{ base: 2, lg: 10 }}
										pos={'relative'}
										h={'full'}
									>
										<Heading fontSize={{ base: '20px', md: '30px' }} color={'gray.200'}>
											{item.title}
										</Heading>
										<Text fontSize={{ base: '14px', md: '17px' }} color={'gray.400'}>
											{item.excerp}
										</Text>
										<HStack>
											<Avatar src={item.author.avatar.url} />
											<Text color={'white'}>{item.author.name}</Text>
										</HStack>
									</Stack>
								</Link>
							</Box>
						))}
					</Carousel>
				</CardBody>
			</Card>

			<Grid gridTemplateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap={4}>
				{articles.map(el => (
					<Link href={`/articles/${el.slug}`} key={el.id}>
						<Box
							w={'full'}
							bg={cardBackgroundColor}
							boxShadow={'2xl'}
							rounded={'md'}
							p={6}
							cursor={'pointer'}
						>
							<Image
								src={el.image.url}
								alt={el.title}
								h={'300px'}
								w={'full'}
								objectFit={'cover'}
								borderRadius={'lg'}
								mb={5}
							/>
							<Stack>
								<Heading fontSize={'2xl'} fontFamily={'body'}>
									{el.title}
								</Heading>
								<Text color={'gray.500'}>{el.excerp}</Text>
							</Stack>
							<Divider my={5} />
							<Stack mt={6} direction={'row'} spacing={4} align={'center'}>
								<Avatar src={el.author.avatar.url} />
								<Stack direction={'column'} spacing={0} fontSize={'sm'}>
									<Text fontWeight={600}>{el.author.name}</Text>
									<Text color={'gray.500'}>
										{format(new Date(el.createdAt), 'dd MMM, yyy')} -{' '}
										{calculateEstimatedReadingTime(el.description.text)}{' '}
										{t('read_article', { ns: 'layout' })}
									</Text>
								</Stack>
							</Stack>
						</Box>
					</Link>
				))}
			</Grid>
		</>
	);
}
