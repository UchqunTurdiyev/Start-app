import React, { useState } from 'react';
import { AccountRecoveryProps } from './account-recovery.props';
import {
	Button,
	FormControl,
	FormLabel,
	HStack,
	Heading,
	Icon,
	Input,
	InputGroup,
	InputRightElement,
	PinInput,
	PinInputField,
	Progress,
	Stack,
	Text,
	useColorModeValue,
	useToast,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import useShowPassword from '@/hooks/useShowPassword';

export default function AccountRecovery({ onNavigationStateComponent }: AccountRecoveryProps) {
	const [progress, setProgress] = useState<33.33 | 66.66 | 100>(33.33);
	const [step, setStep] = useState<1 | 2 | 3>(1);
	const { t } = useTranslation();
	const { show, toggleShow, toggleShowConfirm, showConfirm } = useShowPassword();
	const toast = useToast();

	const onForm1Submit = () => {
		setStep(2);
		setProgress(66.66);
	};

	const onForm2Submit = () => {
		setStep(3);
		setProgress(100);
	};

	const onForm3Submit = () => {
		onNavigationStateComponent('login');
		toast({
			title: 'Successfully edited ',
			description: 'You can login to account with new password',
			status: 'success',
			position: 'top-right',
			isClosable: true,
		});
	};

	const form1 = (
		<>
			<Heading
				color={useColorModeValue('gray.900', 'gray.200')}
				lineHeight={1.1}
				fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
			>
				{t('account_recovery_title_form1', { ns: 'global' })}
				<Text as={'span'} bgGradient='linear(ro-r, gray.400, facebook.400)' bgClip={'text'}>
					!
				</Text>
			</Heading>
			<Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
				{t('account_recovery_description_form1', { ns: 'global' })}
			</Text>
			<FormControl isRequired>
				<FormLabel>{t('login_input_email_label', { ns: 'global' })}</FormLabel>
				<Input focusBorderColor='facebook.500' type='text' placeholder='example@gmail.com' h={14} />
			</FormControl>
			<Button
				mt={4}
				w={'full'}
				bgGradient='linear(to-r, facebook.400, gray.400)'
				color={'white'}
				_hover={{ bgGradient: 'linear(to-r, facebook.500, gray.500)', boxShadow: 'xl' }}
				h={14}
				onClick={onForm1Submit}
			>
				{t('account_recovery_btn_form1', { ns: 'global' })}
			</Button>
		</>
	);
	const form2 = (
		<>
			<Heading
				color={useColorModeValue('gray.900', 'gray.200')}
				lineHeight={1.1}
				fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
			>
				{t('account_recovery_title_form2', { ns: 'global' })}
				<Text as={'span'} bgGradient='linear(ro-r, gray.400, facebook.400)' bgClip={'text'}>
					!
				</Text>
			</Heading>
			<Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
				{t('account_recovery_description_form2', { ns: 'global' })}
			</Text>
			<HStack justify={'center'}>
				<PinInput otp size={'lg'} colorScheme={'facebook'} focusBorderColor={'facebook.500'}>
					{new Array(6).fill(1).map((_, idx) => (
						<PinInputField key={idx} />
					))}
				</PinInput>
			</HStack>
			<Button
				mt={4}
				w={'full'}
				bgGradient='linear(to-r, facebook.400, gray.400)'
				color={'white'}
				_hover={{ bgGradient: 'linear(to-r, facebook.500, gray.500)', boxShadow: 'xl' }}
				h={14}
				onClick={onForm2Submit}
			>
				{t('account_recovery_btn_form2', { ns: 'global' })}
			</Button>
		</>
	);
	const form3 = (
		<>
			<Heading
				color={useColorModeValue('gray.900', 'gray.200')}
				lineHeight={1.1}
				fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
			>
				{t('account_recovery_title_form3', { ns: 'global' })}
				<Text as={'span'} bgGradient='linear(ro-r, gray.400, facebook.400)' bgClip={'text'}>
					!
				</Text>
			</Heading>
			<Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
				{t('account_recovery_description_form3', { ns: 'global' })}
			</Text>
			<FormControl isRequired>
				<FormLabel>{t('account_recovery_title_form3', { ns: 'global' })}</FormLabel>
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
			<Button
				mt={4}
				w={'full'}
				bgGradient='linear(to-r, facebook.400, gray.400)'
				color={'white'}
				_hover={{ bgGradient: 'linear(to-r, facebook.500, gray.500)', boxShadow: 'xl' }}
				h={14}
				onClick={onForm3Submit}
			>
				{t('account_recovery_btn_form3', { ns: 'global' })}
			</Button>
		</>
	);
	return (
		<>
			<Progress value={progress} colorScheme='facebook' hasStripe isAnimated />
			<Stack spacing={4}>
				{step == 1 && form1} {step == 2 && form2} {step == 3 && form3}
			</Stack>
		</>
	);
}
