import React from 'react';
import { PricongProps } from './pricong';
import { Button, Heading, List, ListIcon, ListItem, Stack, useColorModeValue } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Pricing({ title, price, options, checked }: PricongProps) {
	const { t } = useTranslation();
	const colorTextLight = checked ? 'white' : 'facebook.600';
	const bgColorLight = checked ? 'facebook.400' : 'gray.300';

	const colorTextDark = checked ? 'white' : 'facebook.500';
	const bgColorDark = checked ? 'facebook.400' : 'gray.300';

	return (
		<Stack
			p={3}
			py={3}
			justifyContent={{ base: 'flex-start', md: 'space-around' }}
			direction={{ base: 'column', md: 'row' }}
			alignItems={{ md: 'center' }}
		>
			<Heading size={'md'}>{title}</Heading>
			<List spacing={3} textAlign={'start'}>
				{options.map(item => (
					<ListItem key={item.id}>
						<ListIcon as={FaCheckCircle} color={'green.500'} />
						{item.desc}
					</ListItem>
				))}
			</List>
			<Heading size={'xl'}>{price.toLocaleString('en-US', { currency: 'USD', style: 'currency' })}</Heading>
			<Stack>
				<Button
					size={'md'}
					color={useColorModeValue(colorTextLight, colorTextDark)}
					bg={useColorModeValue(bgColorLight, bgColorDark)}
				>
					{t('pricing_btn', { ns: 'global' })}
				</Button>
			</Stack>
		</Stack>
	);
}
