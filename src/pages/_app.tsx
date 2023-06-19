'use client';
import Header from '@/components/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import MobileHeader from '@/components/mobileHeader';
import _ from 'lodash';
export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			{pageProps.device === 'desktop' ? <Header /> : <MobileHeader />}
			<div
				style={{
					minHeight: '100vh',
					// paddingTop: '70px',
				}}
			>
				<Component {...pageProps} />
			</div>
		</>
	);
}
