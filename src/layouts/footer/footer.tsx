import { Box, Flex, IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';
import { format } from 'date-fns';

const Footer = () => {
	return (
		<Box
			pl={{ base: 0, lg: '320px' }}
			mt={10}
			w={'full'}
			borderTop={'1px'}
			borderTopColor={useColorModeValue('gray.200', 'gray.700')}
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}
			h={'10vh'}
		>
			<Flex justify={'space-between'} align={'center'} h={'full'}>
				<Text>&#169; {format(new Date(), 'yyyy')} Uchqun All Right Reserved.</Text>
				<Flex gap={3} mr={10}>
					<IconButton icon={<FaTelegram />} colorScheme={'facebook'} variant={'outline'} aria-label={'telegram'} />
					<IconButton icon={<FaInstagram />} colorScheme={'facebook'} variant={'outline'} aria-label={'instagram'} />
					<IconButton icon={<FaYoutube />} colorScheme={'facebook'} variant={'outline'} aria-label={'youtube'} />
				</Flex>
			</Flex>
		</Box>
	);
};

export default Footer;
