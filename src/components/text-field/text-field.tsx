import React from 'react';
import { TextFieldProps } from './text-field.props';
import { FieldHookConfig, useField, ErrorMessage } from 'formik';
import { FormControl, FormLabel, Icon, InputGroup, Input, InputRightElement, FormErrorMessage } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function TextField({
	label,
	placeholder,
	children,
	type,
	disabled,
	...props
}: TextFieldProps & FieldHookConfig<string>) {
	const [field, meta] = useField(props);

	const { t } = useTranslation();

	return (
		<FormControl mt={15} isRequired isInvalid={!!meta.touched && !!meta.error}>
			<FormLabel>{label}</FormLabel>
			<InputGroup>
				<Input focusBorderColor='facebook.500' placeholder={placeholder} type={type} h={14} disabled={disabled} {...field} />
				{children}
			</InputGroup>
			<FormErrorMessage>{t(`${meta.error}`, { ns: 'global' })}</FormErrorMessage>
		</FormControl>
	);
}
