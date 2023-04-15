import { DarkLogo, LightLogo } from '@/icons';
import {
	Box,
	Button,
	Flex,
	HStack,
	Icon,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { BsFillMoonFill, BsFillSunFill, BsTranslate } from 'react-icons/bs';
import { BiUserCircle, BiMenuAltLeft } from 'react-icons/bi';
import { MdOutlineContactSupport } from 'react-icons/md';
import { HeaderProps } from './header.props';
import { language } from '@/config/constants';
import { useTranslation } from 'react-i18next';

function Header({ onToggle }: HeaderProps) {
	const { toggleColorMode, colorMode } = useColorMode();
	const { i18n, t } = useTranslation();

	const onLanguage = (lng: string) => {
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
					<Link href={'/'}>{colorMode == 'light' ? <DarkLogo /> : <LightLogo />}</Link>
				</HStack>
				<HStack>
					<IconButton aria-label='support' icon={<MdOutlineContactSupport />} colorScheme={'facebook'} variant={'ghost'} />
					<Menu placement='bottom'>
						<MenuButton as={IconButton} icon={<BsTranslate />} colorScheme={'facebook'} variant={'solid'} />
						<MenuList padding={0} >
							{language.map(item => (
								<MenuItem key={item.lng} onClick={() => onLanguage(item.lng)} icon={<item.icon />} backgroundColor={i18n.resolvedLanguage === item.lng ? 'facebook.500' : ''}>{item.nativeLng}</MenuItem>
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
					<Button rightIcon={<BiUserCircle />} colorScheme={'facebook'} variant={'outline'}>
						 {t('login')}
					</Button>
				</HStack>
			</Flex>
		</Box>
	);
}

export default Header;
