import React from 'react';
import { Box, Button, Card, CardBody, Input, Stack } from '@chakra-ui/react';
import SectionTitle from '@/components/section-title/section-title';

const Newsletter = () => {
	return (
		<Card mt={10}>
			<CardBody minH={'50vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
				{/* eslint-disable-next-line no-mixed-spaces-and-tabs */}

				<Stack spacing={3}>
					<SectionTitle
						textAlign={'center'}
						maxW={'container.sm'}
						title={'Subscribe our Newsletter &'}
						subtitle={'You can subscribe our newsletter and receive every day about global new in IT. You will not any spam'}
					/>
					<Box pos={'relative'}>
						<Input
							h={14}
							w={'full'}
							bg={'white'}
							color={'gray.900'}
							placeholder={'Your email...'}
							_placeholder={{ color: 'gray.500' }}
						/>
						<Button colorScheme={'facebook'} pos={'absolute'} top={2} right={2} zIndex={999}>
							Submit
						</Button>
					</Box>
				</Stack>
			</CardBody>
		</Card>
	);
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default Newsletter;
