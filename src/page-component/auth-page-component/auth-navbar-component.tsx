import { language, navigation } from '@/config/constants';

import {
	Box,
	Button,
	Container,
	Flex,
	HStack,
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
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';

export default function AuthNavbarComponent() {
	const { colorMode, toggleColorMode } = useColorMode();
	const { t, i18n } = useTranslation();
	const hoverLink = useColorModeValue('gray.600', 'white');

	const onLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};
	return (
		<Box w={'full'} h={'10vh'} pos={'fixed'} top={0} right={0} left={0} zIndex={20}>
			<Container maxW={'container.lg'}>
				<Flex alignItems={'center '} justify={'space-between'} h={'10vh'}>
					<Link href={'/'}>
						{colorMode === 'light' ? (
							<Image
								w={32}
								src={'https://6459153c9655650068ca2cb3--invest-in-school.netlify.app/dark_logo.png'}
								alt='logo Invest'
							/>
						) : (
							<Image
								w={32}
								src={'https://6459153c9655650068ca2cb3--invest-in-school.netlify.app/light_logo.png'}
								alt='logo img'
							/>
						)}
					</Link>
					<HStack gap={5}>
						{navigation[1].links.map(nav => (
							<Link href={nav.route} key={nav.route}>
								<Box
									color={'facebook.300'}
									_hover={{ textDecoration: 'underline', color: hoverLink }}
									display={{ base: 'none', md: 'flex' }}
								>
									{t(nav.label, { ns: 'layout' })}
								</Box>
							</Link>
						))}
						<Menu>
							<MenuButton
								as={Button}
								rightIcon={<TbWorld />}
								textTransform={'capitalize'}
								colorScheme={'facebook'}
								variant={'ghost'}
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
					</HStack>
				</Flex>
			</Container>
		</Box>
	);
}
