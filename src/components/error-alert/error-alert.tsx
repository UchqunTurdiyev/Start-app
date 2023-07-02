import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';
import React from 'react';
import { ErrorAlertProps } from './error-alert.props';

export default function ErrorAlert({ title }: ErrorAlertProps) {
	return (
		<Alert status='error'>
			<AlertIcon />
			<AlertTitle>{title}</AlertTitle>
		</Alert>
	);
}
