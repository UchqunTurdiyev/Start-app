import {
	Box,
	Button,
	Checkbox,
	Flex,
	FormControl,
	FormLabel,
	HStack,
	Heading,
	Icon,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { RegisterProps } from './register.props';
import useShowPassword from '@/hooks/useShowPassword';

export default function Register({ onNavigationStateComponent }: RegisterProps) {
	const { show, toggleShow, toggleShowConfirm, showConfirm } = useShowPassword();
	return (
		<Stack spacing={4}>
			<Heading
				color={useColorModeValue('gray.900', 'gray.200')}
				lineHeight={1.1}
				fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
			>
				Register
				<Text as={'span'} bgGradient='linear(ro-r, gray.400, facebook.400)' bgClip={'text'}>
					!
				</Text>
			</Heading>
			<Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
				We’re looking for amazing engineers just like you! Become a part of our rockstar engineering team and skyrocket your
				career!
			</Text>
			<FormControl isRequired>
				<FormLabel>Email address</FormLabel>
				<Input focusBorderColor='facebook.500' type='text' placeholder='example@gmail.com' h={14} />
			</FormControl>
			<Flex gap={4}>
				<FormControl isRequired>
					<FormLabel>Password</FormLabel>
					<InputGroup>
						<Input focusBorderColor='facebook.500' type={!show ? 'password' : 'text'} placeholder='password' h={14} />
						<InputRightElement pt={4}>
							<Icon fontSize={'xl'} as={!show ? AiOutlineEye : AiOutlineEyeInvisible} cursor={'pointer'} onClick={toggleShow} />
						</InputRightElement>
					</InputGroup>
				</FormControl>
				<FormControl isRequired>
					<FormLabel>Confirm Password</FormLabel>
					<InputGroup>
						<Input focusBorderColor='facebook.500' type={!showConfirm ? 'password' : 'text'} placeholder='****' h={14} />
						<InputRightElement pt={4}>
							<Icon
								fontSize={'xl'}
								as={!showConfirm ? AiOutlineEye : AiOutlineEyeInvisible}
								cursor={'pointer'}
								onClick={toggleShowConfirm}
							/>
						</InputRightElement>
					</InputGroup>
				</FormControl>
			</Flex>
			<HStack>
				<Checkbox colorScheme={'facebook'}>Remember me</Checkbox>
				<Link href={'account-recovery'}>
					<Box as={'a'} color={'teal.500'} _hover={{ textDecoration: 'underline' }}>
						Forgot Password
					</Box>
				</Link>
			</HStack>
			<Button
				mt={4}
				w={'full'}
				bgGradient='linear(to-r, facebook.400, gray.400)'
				color={'white'}
				_hover={{ bgGradient: 'linear(to-r, facebook.500, gray.500)', boxShadow: 'xl' }}
				h={14}
			>
				Submit
			</Button>
			<Text>
				Allready have an account{' '}
				<Box
					onClick={() => onNavigationStateComponent('login')}
					as={'span'}
					color={'teal.500'}
					cursor={'pointer'}
					_hover={{ textDecor: 'underline' }}
				>
					Login
				</Box>
			</Text>
		</Stack>
	);
}
