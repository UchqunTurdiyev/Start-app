import { Box, Container } from '@chakra-ui/react';
import { LayoutProps } from './layout.props';
import React, { FunctionComponent, useState } from 'react';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import Footer from './footer/footer';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
	const [toggle, setToggle] = useState<boolean>(false);

	const onToggle = () => setToggle(prev => !prev);
	return (
		<Box maxW={'full'} overflow={'hidden'}>
			<Header onToggle={onToggle} />
			<Sidebar toggle={toggle} />
			<Box mt={'11vh'} pl={{ base: 0, lg: '320px' }} minH={'90vh'} transition={'all .4s ease'}>
				<Container maxW={'container.lg'}>{children}</Container>
			</Box>
			<Footer />
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
