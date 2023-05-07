import { testimonalsCarousel } from '@/config/carousel';
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
import Carousel from 'react-multi-carousel';
import { ArticlePageProps } from './article-page.ptops';

export default function ArticlePageComponent({ articles }: ArticlePageProps) {
	const cardBackgroundColor = useColorModeValue('white', 'gray.900');
	return (
		<>
			<Card my={10}>
				<CardBody>
					<Carousel responsive={testimonalsCarousel}>
						{articles.map(item => (
							<Box
								key={item.id}
								w={'full'}
								h={'60vh'}
								backgroundImage={`url(${item.image.url})`}
								backgroundPosition={'center'}
								backgroundSize={'cover'}
								backgroundRepeat={'no-repeat'}
								pos={'relative'}
							>
								<Box
									pos={'absolute'}
									top={0}
									left={0}
									right={0}
									bottom={0}
									bg={'rgba(0, 0, 0, .7)'}
								/>
								<Stack justify={'center'} spacing={3} w={'70%'} pl={10} pos={'relative'} h={'full'}>
									<Heading>{item.title}</Heading>
									<Text>{item.excerp}</Text>
									<HStack>
										<Avatar src={item.author.avatar.url} />
										<Text>{item.author.name}</Text>
									</HStack>
								</Stack>
							</Box>
						))}
					</Carousel>
				</CardBody>
			</Card>

			<Grid gridTemplateColumns={'repeat(2, 1fr)'} gap={4}>
				{articles.map(el => (
					<Box
						key={el.id}
						w={'full'}
						bg={cardBackgroundColor}
						boxShadow={'2xl'}
						rounded={'md'}
						p={6}
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
									{format(new Date(el.createdAt), 'dd MMM, yyy')} - 6min read
								</Text>
							</Stack>
						</Stack>
					</Box>
				))}
			</Grid>
		</>
	);
}
