import { navigation } from '@/config/constants';
import { Box, useColorModeValue, Container, Text, Button, HStack, Icon } from '@chakra-ui/react';
import { log } from 'console';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function Sidebar() {
	const router = useRouter();
	return (
		<Box
			w={'300px'}
			h={'90vh'}
			bg={useColorModeValue('gray.50', 'gray.900')}
			borderRight={'1px'}
			borderRightColor={useColorModeValue('gray.200', 'gray.700')}
		>
			<Container maxW={'container.xl'}>
				{navigation.map(item => (
					<Box key={item.title} mt={'10'}>
						<Text>{item.title}</Text>
						{item.links.map(nav => {
							const active = router.asPath == nav.route;
							return (
								<Link href={`/${nav.route}`}>
									<Button
										colorScheme={'facebook'}
										variant={active ? 'solid' : 'ghost'}
										w={'full'}
										justifyContent={'flex-start'}
										h={14}
										mt={2}
									>
										<HStack gap={2}>
											<Icon as={nav.icon} />
											<Text>{nav.label}</Text>
										</HStack>
									</Button>
								</Link>
							);
						})}
					</Box>
				))}
			</Container>
		</Box>
	);
}

export default Sidebar;
