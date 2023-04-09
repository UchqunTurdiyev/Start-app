import { DarkLogo, LightLogo, UzbIcons, RusIcons, EngIcons } from '@/icons';
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

function Header({ onToggle }: HeaderProps) {
	const { toggleColorMode, colorMode } = useColorMode();
	return (
		<Box
			zIndex={99}
			w={'full'}
			h={'10vh'}
			px={'10'}
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
					<IconButton aria-label='support' icon={<MdOutlineContactSupport />} colorScheme={'fasebook'} variant={'ghost'} />
					<Menu>
						<MenuButton as={IconButton} icon={<BsTranslate />} colorScheme={'facebook'} variant={'solid'} />
						<MenuList>
							<MenuItem icon={<UzbIcons />}>UZB</MenuItem>
							<MenuItem icon={<RusIcons />}>RUS</MenuItem>
							<MenuItem icon={<EngIcons />}>ENG</MenuItem>
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
						LOGIN
					</Button>
				</HStack>
			</Flex>
		</Box>
	);
}

export default Header;
