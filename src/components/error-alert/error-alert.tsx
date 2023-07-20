import { Alert, AlertDescription, AlertIcon, AlertTitle, Icon } from '@chakra-ui/react';
import React from 'react';
import { ErrorAlertProps } from './error-alert.props';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

export default function ErrorAlert({ title, clearHandler }: ErrorAlertProps) {
	const { t } = useTranslation();
	return (
		<Alert status='error' pos={'relative'}>
			<AlertIcon />
			<AlertTitle>{t(title, { ns: 'global' })}</AlertTitle>
			<Icon onClick={clearHandler} pos={'absolute'} right={2} top={2} as={AiFillCloseCircle} cursor={'pointer'} w={5} h={5} />
		</Alert>
	);
}
