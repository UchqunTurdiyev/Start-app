import React, { useState } from 'react';
import AuthNavbarComponent from './auth-navbar-component';
import {
	Avatar,
	AvatarGroup,
	Box,
	Container,
	Flex,
	Heading,
	Icon,
	IconProps,
	SimpleGrid,
	Stack,
	Text,
	useBreakpointValue,
	useColorModeValue,
} from '@chakra-ui/react';
import { avatars } from '@/config/constants';
import { AccountRecovery, Login, Register, SocialMedia, Verefication } from '@/components';

import { useTranslation } from 'react-i18next';
import { useActions } from '@/hooks/useActions';

export default function AuthPageComponent() {
	const [state, setState] = useState<'login' | 'register' | 'verification' | 'account-recovery'>('login');
	const { t } = useTranslation();
	const { clearError } = useActions();

	const breakpointValue = useBreakpointValue({ base: 'md', md: 'lg' });

	const onNavigationStateComponent = (component: 'login' | 'register' | 'verification' | 'account-recovery') => {
		setState(component);
		clearError();
	};

	const renderStateComponent = () => {
		switch (state) {
			case 'login':
				return <Login onNavigationStateComponent={onNavigationStateComponent} />;
			case 'register':
				return <Register onNavigationStateComponent={onNavigationStateComponent} />;
			case 'verification':
				return <Verefication />;
			case 'account-recovery':
				return <AccountRecovery onNavigationStateComponent={onNavigationStateComponent} />;
		}
	};

	return (
		<div>
			<AuthNavbarComponent />
			<Box pos={'relative'} mt={5}>
				<Container
					as={SimpleGrid}
					maxW={'7xl'}
					columns={{ base: 1, md: 2 }}
					spacing={{ base: 10, lg: 32 }}
					py={{ base: 10, sm: 20, lg: 32 }}
				>
					<Stack spacing={{ base: 10, md: 20 }}>
						<Heading lineHeight={1.1} fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
							{t('auth_page_title_1', { ns: 'global' })} <Text as={'span'}>&</Text>
							{t('auth_page_title_2', { ns: 'global' })}
						</Heading>
						<Stack direction={'row'} spacing={4} align={'center'}>
							<AvatarGroup>
								{avatars.map(avatar => (
									<Avatar
										key={avatar.name}
										name={avatar.name}
										src={avatar.url}
										size={breakpointValue}
										position={'relative'}
										zIndex={2}
										_before={{
											content: '""',
											width: 'full',
											height: 'full',
											rounded: 'full',
											transform: 'scale(1.125)',
											bgGradient: 'linear(to-bl, gray.400,facebook.400)',
											position: 'absolute',
											zIndex: -1,
											top: 0,
											left: 0,
										}}
									/>
								))}
							</AvatarGroup>
							<Text fontSize={{ base: '4xl', md: '6xl' }}>+</Text>
							<Flex
								align={'center'}
								justify={'center'}
								fontSize={{ base: 'sm', md: 'lg' }}
								bg={'gray.800'}
								color={'white'}
								rounded={'full'}
								minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
								minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
								position={'relative'}
								_before={{
									content: '""',
									width: 'full',
									height: 'full',
									rounded: 'full',
									transform: 'scale(1.125)',
									bgGradient: 'linear(to-bl, gray.400,facebook.400)',
									position: 'absolute',
									zIndex: -1,
									top: 0,
									left: 0,
								}}
							>
								{t('auth_page_you', { ns: 'global' })}
							</Flex>
						</Stack>
					</Stack>
					<Stack
						bg={useColorModeValue('gray.50', 'gray.900')}
						rounded={'xl'}
						p={{ base: 4, sm: 6, md: 8 }}
						spacing={{ base: 8 }}
						maxW={{ lg: 'lg  ' }}
					>
						{renderStateComponent()}
						<SocialMedia />
					</Stack>
				</Container>
				<Blur pos={'absolute'} top={'11vh'} left={'-10'} style={{ filter: 'blur(70px)' }} />
			</Box>
		</div>
	);
}

const Blur = (props: IconProps) => {
	return (
		<Icon
			width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
			zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
			height='560px'
			viewBox='0 0 528 560'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<circle cx='71' cy='61' r='111' fill='#F56565' />
			<circle cx='244' cy='106' r='139' fill='#ED64A6' />
			<circle cy='291' r='139' fill='#ED64A6' />
			<circle cx='80.5' cy='189.5' r='101.5' fill='#ED8936' />
			<circle cx='196.5' cy='317.5' r='101.5' fill='#ECC94B' />
			<circle cx='70.5' cy='458.5' r='101.5' fill='#48BB78' />
			<circle cx='426.5' cy='-0.5' r='101.5' fill='#4299E1' />
		</Icon>
	);
};
