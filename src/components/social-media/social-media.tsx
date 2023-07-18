import { Box, Button, Center, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { signIn } from 'next-auth/react';

export default function SocialMedia() {
	const { t } = useTranslation();

	const google = () => {
		signIn('google', { callbackUrl: `${process.env.NEXT_PUBLIC_CLIENT_DOMAIN}` });
	};

	const githup = () => {
		signIn('githup', { callbackUrl: `${process.env.NEXT_PUBLIC_CLIENT_DOMAIN}` });
	};
	return (
		<>
			<Box
				pos={'relative'}
				_before={{
					content: '" "',
					position: 'absolute',
					width: '40%',
					top: '50%',
					left: '0',
					transform: 'translateY(-50%)',
					height: '1px',
					bg: 'gray.600',
				}}
				_after={{
					content: '" "',
					position: 'absolute',
					width: '40%',
					height: '1px',
					right: '0',
					top: '50%',
					transform: 'translateY(-50%)',
					bg: 'gray.600',
				}}
				textAlign={'center'}
			>
				{t('or', { ns: 'global' })}
			</Box>
			<HStack>
				<Button onClick={githup} w={'full'} colorScheme={'gray'} leftIcon={<FaGithub />}>
					<Center>
						<Text>GitHup</Text>
					</Center>
				</Button>

				<Button onClick={google} w={'full'} colorScheme={'red'} variant={'outline'} leftIcon={<FaGoogle />}>
					<Center>
						<Text>Google</Text>
					</Center>
				</Button>
			</HStack>
		</>
	);
}
