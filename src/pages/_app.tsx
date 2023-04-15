import '../styles/globals.css';
import '@fontsource/roboto';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import 'react-multi-carousel/lib/styles.css';
import { I18nextProvider } from 'react-i18next';
import i18n from 'src/i18n';
import {Client, HydrationProvider} from "react-hydration-provider";
import {useEffect, useState} from "react";

function MyApp({ Component, pageProps }: AppProps) {

	return (
		<HydrationProvider>
			<I18nextProvider i18n={i18n}>
				<ChakraProvider>
					<Client>
						<Component {...pageProps} />
					</Client>
				</ChakraProvider>
			</I18nextProvider>
		</HydrationProvider>
	);
}

export default MyApp;


//hydrationProvider bu bizga servise site rendering erta malumotni korsatmaslik va bag keltrmasligi uchun