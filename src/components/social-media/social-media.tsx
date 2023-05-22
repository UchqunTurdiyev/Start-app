import { Box, Button, Center, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

export default function SocialMedia() {
	return (
		<>
			<Box
				pos={'relative'}
				_before={{
					content: '" "',
					position: 'absolute',
					width: '45%',
					top: '50%',
					left: '0',
					transform: 'translateY(-50%)',
					height: '1px',
					bg: 'gray.600',
				}}
				_after={{
					content: '" "',
					position: 'absolute',
					width: '45%',
					height: '1px',
					right: '0',
					top: '50%',
					transform: 'translateY(-50%)',
					bg: 'gray.600',
				}}
				textAlign={'center'}
			>
				OR
			</Box>
			<HStack>
				<Button w={'full'} colorScheme={'gray'} leftIcon={<FaGithub />}>
					<Center>
						<Text>Content with GitHup</Text>
					</Center>
				</Button>

				<Button w={'full'} colorScheme={'red'} variant={'outline'} leftIcon={<FaGoogle />}>
					<Center>
						<Text>Content with Google</Text>
					</Center>
				</Button>
			</HStack>
		</>
	);
}
