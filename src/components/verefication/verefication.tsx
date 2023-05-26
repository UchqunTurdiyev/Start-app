import { Button, HStack, Heading, PinInput, PinInputField, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Verefication() {
	const { t } = useTranslation();
	return (
		<Stack>
			<Heading
				color={useColorModeValue('gray.900', 'gray.200')}
				lineHeight={1.1}
				fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
			>
				{t('verification_title', { ns: 'global' })}
				<Text as={'span'} bgGradient='linear(ro-r, gray.400, facebook.400)' bgClip={'text'}>
					!
				</Text>
			</Heading>
			<Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
				{t('verification_description', { ns: 'global' })}
			</Text>
			<HStack justify={'center'}>
				<PinInput otp size={'lg'} colorScheme={'facebook'} focusBorderColor={'facebook.500'}>
					{new Array(6).fill(1).map((_, idx) => (
						<PinInputField key={idx} />
					))}
				</PinInput>
			</HStack>
			<Button
				mt={6}
				w={'full'}
				bgGradient='linear(to-r, facebook.400, gray.400)'
				color={'white'}
				_hover={{ bgGradient: 'linear(to-r, facebook.500, gray.500)', boxShadow: 'xl' }}
				h={14}
			>
				{t('verification_btn', { ns: 'global' })}
			</Button>
		</Stack>
	);
}
