import React from 'react';
import { TextFieldProps } from './text-field.props';
import { FieldHookConfig, useField, ErrorMessage } from 'formik';
import { FormControl, FormLabel, Icon, InputGroup, Input, InputRightElement, FormErrorMessage } from '@chakra-ui/react';

export default function TextField({
	label,
	placeholder,
	children,
	type,
	disabled,
	...props
}: TextFieldProps & FieldHookConfig<string>) {
	const [field, meta] = useField(props);

	return (
		<FormControl mt={15} isRequired isInvalid={!!meta.touched && !!meta.error}>
			<FormLabel>{label}</FormLabel>
			<InputGroup>
				<Input focusBorderColor='facebook.500' placeholder={placeholder} type={type} h={14} disabled={disabled} {...field} />
				{children}
			</InputGroup>
			<FormErrorMessage>
				<ErrorMessage name={field.name} />
			</FormErrorMessage>
		</FormControl>
	);
}
