import { navigation } from '@/config/constants';
import { DarkLogo, LightLogo } from '@/icons';
import { Box, Container, Flex, HStack, IconButton, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

export default function AuthNavbarComponent() {
	const { colorMode, toggleColorMode } = useColorMode();
	const { t } = useTranslation();
	const hoverLink = useColorModeValue('gray.600', 'white');
	return (
		<Box w={'full'} h={'10vh'} pos={'fixed'} top={0} right={0} left={0} zIndex={20}>
			<Container maxW={'container.lg'}>
				<Flex alignItems={'center '} justify={'space-between'} h={'10vh'}>
					<Link href={'/'}>{colorMode == 'light' ? <DarkLogo /> : <LightLogo />}</Link>
					<HStack gap={5}>
						{navigation[1].links.map(nav => (
							<Link href={nav.route}>
								<Box color={'facebook.300'} _hover={{ textDecoration: 'underline', color: hoverLink }} as='a'>
									{t(nav.label, { ns: 'layout' })}
								</Box>
							</Link>
						))}
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
