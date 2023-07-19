import { language } from '@/config/constants';
import { DarkLogo, LightLogo } from '@/icons';
import {
	Avatar,
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
import { BiLogOutCircle, BiMenuAltLeft, BiUserCircle } from 'react-icons/bi';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { MdOutlineContactSupport } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { HeaderProps } from './header.props';
import { useAuth } from '@/hooks/useAuth';
import { AiOutlineLogin } from 'react-icons/ai';
import { ImUserTie } from 'react-icons/im';
import { FaUserGraduate } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { IoMdLogOut } from 'react-icons/io';
import { useActions } from '@/hooks/useActions';

function Header({ onToggle }: HeaderProps) {
	const { toggleColorMode, colorMode } = useColorMode();
	const { i18n, t } = useTranslation();
	const router = useRouter();
	const { user } = useAuth();
	const { logout } = useActions();

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
					{user ? (
						<Menu>
							<MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
								<Avatar icon={<FaUserGraduate />} backgroundColor={'facebook.500'} />
							</MenuButton>
							<MenuList p={0} m={0}>
								<MenuItem h={14} onClick={() => router.push('/setting')} fontWeight={'bold'} icon={<FiSettings fontSize={17} />}>
									Settings
								</MenuItem>
								<MenuItem onClick={logout} h={14} fontWeight={'bold'} icon={<IoMdLogOut fontSize={17} />}>
									Logut
								</MenuItem>
							</MenuList>
						</Menu>
					) : (
						<>
							<Button
								display={{ base: 'none', md: 'flex' }}
								rightIcon={<BiUserCircle />}
								onClick={() => router.push('/auth')}
								colorScheme={'facebook'}
								variant={'solid'}
							>
								{t('login', { ns: 'layout' })}
							</Button>
							<IconButton
								display={{ base: 'flex', md: 'none' }}
								aria-label='login'
								onClick={() => router.push('/auth')}
								icon={<AiOutlineLogin />}
								colorScheme={'facebook'}
								variant={'outline'}
							/>
						</>
					)}
				</HStack>
			</Flex>
		</Box>
	);
}

export default Header;
