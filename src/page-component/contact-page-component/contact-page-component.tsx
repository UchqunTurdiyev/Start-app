import SectionTitle from '@/components/section-title/section-title';
import {
	Button,
	Card,
	CardBody,
	Flex,
	FormControl,
	FormLabel,
	HStack,
	Heading,
	Input,
	Stack,
	Text,
	Textarea,
} from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

function ContactPageComponent() {
	const { t } = useTranslation();
	return (
		<Flex h={'90vh'} justify={'flex-start'} align={'center'} direction={{ base: 'column', lg: 'row' }} gap={'4'}>
			<SectionTitle
				w={{ base: '100%', lg: '40%' }}
				title='Contact Us'
				subtitle='We’re on a mission to deliver engaging, curated courses at a reasonable price.'
			/>
			<Card w={{ base: '100%', lg: '60%' }}>
				<CardBody>
					<Heading fontSize={'2xl'}>{t('contact_heading', { ns: 'global' })}</Heading>
					<Text fontSize={'lg'} mt={4}>
						{t('contact_text', { ns: 'global' })}
					</Text>
					<Stack spacing={4} mt={5}>
						<FormControl>
							<FormLabel>{t('contact_name', { ns: 'global' })}</FormLabel>
							<Input type='text' placeholder={'Omar'} h={14} />
						</FormControl>
						<FormControl>
							<FormLabel>{t('contact_email', { ns: 'global' })}</FormLabel>
							<Input type='email' placeholder={'example@sammi.ac'} h={14} />
						</FormControl>
						<FormControl>
							<FormLabel>{t('contact_message', { ns: 'global' })}</FormLabel>
							<Textarea placeholder={'body'} height={'150px'} />
						</FormControl>
						<Button w={'full'} h={14} colorScheme={'facebook'}>
							{t('contact_btn', { ns: 'global' })}
						</Button>
					</Stack>
				</CardBody>
			</Card>
		</Flex>
	);
}

export default ContactPageComponent;
