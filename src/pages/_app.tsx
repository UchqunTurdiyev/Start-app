import i18n from '@/i18n';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/roboto';
import { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';
import { Client, HydrationProvider } from 'react-hydration-provider';
import { I18nextProvider } from 'react-i18next';
import 'react-multi-carousel/lib/styles.css';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { SessionProvider } from 'next-auth/react';

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	useEffect(() => {
		const handleRouteStart = () => NProgress.start();
		const handleRouteDone = () => NProgress.done();

		Router.events.on('routeChangeStart', handleRouteStart);
		Router.events.on('routeChangeComplete', handleRouteDone);
		Router.events.on('routeChangeError', handleRouteDone);

		return () => {
			Router.events.off('routeChangeStart', handleRouteStart);
			Router.events.off('routeChangeComplete', handleRouteDone);
			Router.events.off('routeChangeError', handleRouteDone);
		};
	}, []);
	return (
		<HydrationProvider>
			<Provider store={store}>
				<SessionProvider session={session}>
					<I18nextProvider i18n={i18n}>
						<ChakraProvider>
							<Client>
								<Component {...pageProps} />
							</Client>
						</ChakraProvider>
					</I18nextProvider>
				</SessionProvider>
			</Provider>
		</HydrationProvider>
	);
}

export default MyApp;

//hydrationProvider bu bizga servise site rendering erta malumotni korsatmaslik va bag keltrmasligi uchun
