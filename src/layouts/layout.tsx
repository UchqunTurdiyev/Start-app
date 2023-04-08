import { Box } from '@chakra-ui/react';
import { LayoutProps } from './layout.props';
import React, { FunctionComponent } from 'react';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<Box maxW={'full'} overflow={'hidden'}>
			<Header />
			<Sidebar />
			<Box>{children}</Box>
		</Box>
	);
};

// hay order component
export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
