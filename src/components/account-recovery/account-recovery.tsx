import React, { useState } from 'react';
import { AccountRecoveryProps } from './account-recovery.props';
import {
	Button,
	Center,
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
import { Form, Formik } from 'formik';
import { AuthValidation } from '@/validations/auth.validation';
import TextField from '../text-field/text-field';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import ErrorAlert from '../error-alert/error-alert';

export default function AccountRecovery({ onNavigationStateComponent }: AccountRecoveryProps) {
	const [progress, setProgress] = useState<33.33 | 66.66 | 100>(33.33);
	const [step, setStep] = useState<1 | 2 | 3>(1);
	const { t } = useTranslation();
	const { show, toggleShow, toggleShowConfirm, showConfirm } = useShowPassword();
	const toast = useToast();
	const { sendVerificationCode, verifyVerificationCode } = useActions();
	const { error, isLoading } = useTypedSelector(state => state.user);
	const [email, setEmail] = useState<string>('');

	const onForm1Submit = (formData: { email: string }) => {
		sendVerificationCode({
			email: formData.email,
			isUser: true,
			callback: () => {
				setEmail(formData.email);
				setStep(2);
				setProgress(66.66);
			},
		});
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
			<>{error && <ErrorAlert title={error as string} />}</>
			<Formik onSubmit={onForm1Submit} initialValues={{ email: '' }} validationSchema={AuthValidation.onlyEmail}>
				<Form>
					<TextField
						name='email'
						label={t('login_input_email_label', { ns: 'global' })}
						type='email'
						placeholder={'info@gmail.com'}
					/>
					<Button
						mt={4}
						w={'full'}
						bgGradient='linear(to-r, facebook.400, gray.400)'
						color={'white'}
						_hover={{ bgGradient: 'linear(to-r, facebook.500, gray.500)', boxShadow: 'xl' }}
						h={14}
						isLoading={isLoading}
						loadingText={'Loading...'}
						type={'submit'}
					>
						{t('account_recovery_btn_form1', { ns: 'global' })}
					</Button>
				</Form>
			</Formik>
		</>
	);

	const onForm2Submit = (formData: { otp: string }) => {
		verifyVerificationCode({
			email: email,
			otpVerification: formData.otp,
			callback: () => {
				setStep(3);
				setProgress(100);
			},
		});
	};

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
			<>{error && <ErrorAlert title={error as string} />}</>

			<Formik onSubmit={onForm2Submit} initialValues={{ otp: '' }} validationSchema={AuthValidation.otp}>
				{formik => (
					<Form>
						<Center>
							<PinInput
								onChange={val => formik.setFieldValue('otp', val)}
								otp
								size={'lg'}
								colorScheme={'facebook'}
								focusBorderColor={'facebook.500'}
							>
								{new Array(6).fill(1).map((_, idx) => (
									<PinInputField
										borderColor={formik.errors.otp && formik.touched.otp ? 'red.600' : 'facebook.600'}
										mx={1}
										key={idx}
									/>
								))}
							</PinInput>
						</Center>
						{formik.errors.otp && formik.touched.otp && (
							<Text textAlign={'center'} mt={2} fontSize={'14px'} color={'red.600'}>
								{formik.errors.otp as string}
							</Text>
						)}
						<Button
							mt={4}
							w={'full'}
							bgGradient='linear(to-r, facebook.400, gray.400)'
							color={'white'}
							_hover={{ bgGradient: 'linear(to-r, facebook.500, gray.500)', boxShadow: 'xl' }}
							h={14}
							type={'submit'}
							isLoading={isLoading}
							loadingText={'Loading...'}
						>
							{t('account_recovery_btn_form2', { ns: 'global' })}
						</Button>
					</Form>
				)}
			</Formik>
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
