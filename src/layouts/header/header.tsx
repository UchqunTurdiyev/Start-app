import { language } from '@/config/constants';
import { DarkLogo, LightLogo } from '@/icons';
import {
	Box,
	Button,
	Flex,
	HStack,
	Icon,
	IconButton,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { BiMenuAltLeft, BiUserCircle } from 'react-icons/bi';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { MdOutlineContactSupport } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { HeaderProps } from './header.props';

function Header({ onToggle }: HeaderProps) {
	const { toggleColorMode, colorMode } = useColorMode();
	const { i18n, t } = useTranslation();
	const router = useRouter();

	const onLanguage = (lng: string) => {
		// replace ozgartirish uchun routerni
		router.replace(router.asPath);
		i18n.changeLanguage(lng);
	};

	return (
		<Box
			zIndex={1001}
			w={'full'}
			h={'10vh'}
			px={{ base: '2', md: '5', xl: '10' }}
			pos={'fixed'}
			top={'0'}
			left={'0'}
			borderBottom={'1px'}
			borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}
		>
			<Flex h={'full'} justify={'space-between'} align={'center'}>
				<HStack>
					<Icon onClick={onToggle} as={BiMenuAltLeft} w={6} h={6} cursor={'pointer'} />
					<Link href={'/'}>
						{colorMode === 'light' ? (
							<Image w={28} src={'https://6459153c9655650068ca2cb3--invest-in-school.netlify.app/dark_logo.png'} alt='logo' />
						) : (
							<Image w={28} src={'https://6459153c9655650068ca2cb3--invest-in-school.netlify.app/light_logo.png'} alt='logo' />
						)}
					</Link>
				</HStack>
				<HStack>
					<IconButton aria-label='support' icon={<MdOutlineContactSupport />} colorScheme={'facebook'} variant={'ghost'} />
					<Menu placement='bottom'>
						<MenuButton
							as={Button}
							rightIcon={<TbWorld />}
							textTransform={'capitalize'}
							colorScheme={'facebook'}
							variant={'outline'}
						>
							{i18n.resolvedLanguage}
						</MenuButton>
						<MenuList padding={0}>
							{language.map(item => (
								<MenuItem
									key={item.lng}
									onClick={() => onLanguage(item.lng)}
									icon={<item.icon />}
									backgroundColor={i18n.resolvedLanguage === item.lng ? 'facebook.500' : ''}
								>
									{item.nativeLng}
								</MenuItem>
							))}
						</MenuList>
					</Menu>
					<IconButton
						aria-label='color-mode'
						onClick={toggleColorMode}
						icon={colorMode == 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
						colorScheme={'facebook'}
						variant={'outline'}
					/>
					<Button rightIcon={<BiUserCircle />} onClick={() => router.push('/auth')} colorScheme={'facebook'} variant={'solid'}>
						{t('login', { ns: 'layout' })}
					</Button>
				</HStack>
			</Flex>
		</Box>
	);
}

export default Header;
