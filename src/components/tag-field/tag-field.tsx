import { Box, FormLabel } from '@chakra-ui/react';
import React from 'react';
import { TagsInput } from 'react-tag-input-component';
import { TagFieldProps } from './tag-field.props';

const TagField = ({ formik, label, name, placeholder }: TagFieldProps) => {
	return (
		<Box w={'full'}>
			<FormLabel>
				{label}{' '}
				<Box as={'span'} color={'red.300'}>
					*
				</Box>
			</FormLabel>
			<TagsInput
				value={formik.values.name}
				onChange={data => formik.setFieldValue(name, data)}
				name={name}
				placeHolder={placeholder}
			/>
		</Box>
	);
};

export default TagField;